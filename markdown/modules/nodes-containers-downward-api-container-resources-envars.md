{%- set _mod_docs_content_type = "PROCEDURE" %}
# Consuming container resources using environment variables {id="nodes-containers-downward-api-container-resources-envars_{{ context }}"}

When creating pods, you can use the Downward API to inject information about
computing resource requests and limits by using environment variables that
correspond to the contents of the `resources` field in the `**spec.container**`
field. {._abstract}


:::note

If the resource limits are not included in the container configuration, the
downward API defaults to the node’s CPU and memory allocatable values.

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
            - name: test-container
              image: gcr.io/google_containers/busybox:1.24
              command: [ "/bin/sh", "-c", "env" ]
              resources:
                requests:
                  memory: "32Mi"
                  cpu: "125m"
                limits:
                  memory: "64Mi"
                  cpu: "250m"
              env:
                - name: MY_CPU_REQUEST
                  valueFrom:
                    resourceFieldRef:
                      resource: requests.cpu
                - name: MY_CPU_LIMIT
                  valueFrom:
                    resourceFieldRef:
                      resource: limits.cpu
                - name: MY_MEM_REQUEST
                  valueFrom:
                    resourceFieldRef:
                      resource: requests.memory
                - name: MY_MEM_LIMIT
                  valueFrom:
                    resourceFieldRef:
                      resource: limits.memory
        # ...
        ```
    1.  Create the pod from the `pod.yaml` file by using the following command:
        ```terminal
        $ oc create -f pod.yaml
        ```