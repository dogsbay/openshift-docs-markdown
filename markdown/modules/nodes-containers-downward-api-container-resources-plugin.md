{%- set _mod_docs_content_type = "PROCEDURE" %}
# Consuming container resources using a volume plugin {id="nodes-containers-downward-api-container-resources-plugin_{{ context }}"}

When creating pods, you can use the Downward API to inject information about
computing resource requests and limits by using a volume plugin to describe the desired resources that correspond to the
`spec.resources` field. {._abstract}


:::note

If the resource limits are not included in the container configuration, the
Downward API defaults to the node’s CPU and memory allocatable values.

:::


**Procedure**

1.  Create a new pod spec that contains the resources you want to inject:
    1.  Create a `pod.yaml` file similar to the following:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: dapi-env-test-pod
        spec:
          containers:
            - name: client-container
              image: gcr.io/google_containers/busybox:1.24
              command: ["sh", "-c", "while true; do echo; if [[ -e /etc/cpu_limit ]]; then cat /etc/cpu_limit; fi; if [[ -e /etc/cpu_request ]]; then cat /etc/cpu_request; fi; if [[ -e /etc/mem_limit ]]; then cat /etc/mem_limit; fi; if [[ -e /etc/mem_request ]]; then cat /etc/mem_request; fi; sleep 5; done"]
              resources:
                requests:
                  memory: "32Mi"
                  cpu: "125m"
                limits:
                  memory: "64Mi"
                  cpu: "250m"
              volumeMounts:
                - name: podinfo
                  mountPath: /etc
                  readOnly: false
          volumes:
            - name: podinfo
              downwardAPI:
                items:
                  - path: "cpu_limit"
                    resourceFieldRef:
                      containerName: client-container
                      resource: limits.cpu
                  - path: "cpu_request"
                    resourceFieldRef:
                      containerName: client-container
                      resource: requests.cpu
                  - path: "mem_limit"
                    resourceFieldRef:
                      containerName: client-container
                      resource: limits.memory
                  - path: "mem_request"
                    resourceFieldRef:
                      containerName: client-container
                      resource: requests.memory
        # ...
        ```
    1.  Create the pod from the `*_volume-pod.yaml_*` file by using the following command:
        ```terminal
        $ oc create -f volume-pod.yaml
        ```