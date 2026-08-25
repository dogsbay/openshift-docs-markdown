{%- set _mod_docs_content_type = "PROCEDURE" %}
# Finding the memory request and limit from within a pod {id="nodes-cluster-resource-configure-request-limit_{{ context }}"}

You can configure your container to use the Downward API to dynamically discover its memory request and limit from within a pod. This allows your applications to better manage these resources without needing to use the API server.   {._abstract}

**Procedure**

*   Configure the pod to add the `MEMORY_REQUEST` and `MEMORY_LIMIT` stanzas:
    1.  Create a YAML file similar to the following:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: test
        spec:
          securityContext:
            runAsNonRoot: false
            seccompProfile:
              type: RuntimeDefault
          containers:
          - name: test
            image: fedora:latest
            command:
            - sleep
            - "3600"
            env:
            - name: MEMORY_REQUEST
              valueFrom:
                resourceFieldRef:
                  containerName: test
                  resource: requests.memory
            - name: MEMORY_LIMIT
              valueFrom:
                resourceFieldRef:
                  containerName: test
                  resource: limits.memory
            resources:
              requests:
                memory: 384Mi
              limits:
                memory: 512Mi
            securityContext:
              allowPrivilegeEscalation: false
              capabilities:
                drop: [ALL]
        ```

        where:

        `spec.consinters.env.name.MEMORY_REQUEST`
        :   This stanza discovers the application memory request value.


        `spec.consinters.env.name.MEMORY_LIMIT`
        :   This stanza discovers the application memory limit value.
    1.  Create the pod by running the following command:
        ```terminal
        $ oc create -f <file_name>.yaml
        ```

**Verification**

1.  Access the pod using a remote shell:
    ```terminal
    $ oc rsh test
    ```
1.  Check that the requested values were applied:
    ```terminal
    $ env | grep MEMORY | sort
    ```
    ```terminal title="Example output"
    MEMORY_LIMIT=536870912
    MEMORY_REQUEST=402653184
    ```


    :::note

    The memory limit value can also be read from inside the container by the
    `/sys/fs/cgroup/memory/memory.limit_in_bytes` file.
    
    :::