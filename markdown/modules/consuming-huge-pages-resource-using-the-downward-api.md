{%- set file_name = "hugepages-volume-pod.yaml" -%}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Consuming huge pages resources using the Downward API {id="consuming-huge-pages-resource-using-the-downward-api_{{ context }}"}

To inject information about the huge pages resources consumed by a container, use the Downward API. {._abstract}

You can inject the resource allocation as environment variables, a volume plugin, or both. Applications that you develop and run in the container can determine the resources that are available by reading the environment variables or files in the specified volumes.

**Procedure**

1.  Create a `{{ file_name }}`{minja} file that is similar to the following example:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      generateName: hugepages-volume-
      labels:
        app: hugepages-example
    spec:
      containers:
      - securityContext:
          capabilities:
            add: [ "IPC_LOCK" ]
        image: rhel7:latest
        command:
        - sleep
        - inf
        name: example
        volumeMounts:
        - mountPath: /dev/hugepages
          name: hugepage
        - mountPath: /etc/podinfo
          name: podinfo
        resources:
          limits:
            hugepages-1Gi: 2Gi
            memory: "1Gi"
            cpu: "1"
          requests:
            hugepages-1Gi: 2Gi
        env:
        - name: REQUESTS_HUGEPAGES_1GI
          valueFrom:
            resourceFieldRef:
              containerName: example
              resource: requests.hugepages-1Gi
      volumes:
      - name: hugepage
        emptyDir:
          medium: HugePages
      - name: podinfo
        downwardAPI:
          items:
            - path: "hugepages_1G_request"
              resourceFieldRef:
                containerName: example
                resource: requests.hugepages-1Gi
                divisor: 1Gi
    ```

    where:

    `spec.containers.securityContext.env.name`
    :   Specifies what resource to read and use from `requests.hugepages-1Gi` and expose the value as the `REQUESTS_HUGEPAGES_1GI` environment variable.

    `spec.volumes.name.items.path`
    :   Specifies what resource to read and use from `requests.hugepages-1Gi` and expose the value as the file `/etc/podinfo/hugepages_1G_request`.

1.  Create the pod from the `{{ file_name }}`{minja} file by entering the following command:
    ```terminal {minja}
    $ oc create -f {{ file_name }}
    ```

**Verification**

1.  Check the value of the `REQUESTS_HUGEPAGES_1GI` environment variable:
    ```terminal
    $ oc exec -it $(oc get pods -l app=hugepages-example -o jsonpath='{.items[0].metadata.name}') \
         -- env | grep REQUESTS_HUGEPAGES_1GI
    ```
    ```terminal title="Example output"
    REQUESTS_HUGEPAGES_1GI=2147483648
    ```
1.  Check the value of the `/etc/podinfo/hugepages_1G_request` file:
    ```terminal
    $ oc exec -it $(oc get pods -l app=hugepages-example -o jsonpath='{.items[0].metadata.name}') \
         -- cat /etc/podinfo/hugepages_1G_request
    ```
    ```terminal title="Example output"
    2
    ```

{%- set file_name = "" -%}