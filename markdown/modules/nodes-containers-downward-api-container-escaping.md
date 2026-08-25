{%- set _mod_docs_content_type = "PROCEDURE" %}
# Escaping environment variable references {id="nodes-containers-downward-api-container-escaping_{{ context }}"}

When creating a pod, you can escape an environment variable reference by using
a double dollar sign. The value will then be set to a single dollar sign version
of the provided value. {._abstract}

**Procedure**

1.  Create a pod that references an existing environment variable:
    1.  Create a `pod.yaml` file similar to the following:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: dapi-env-test-pod
        spec:
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
          containers:
            - name: env-test-container
              image: gcr.io/google_containers/busybox
              command: [ "/bin/sh", "-c", "env" ]
              env:
                - name: MY_NEW_ENV
                  value: $$(SOME_OTHER_ENV)
              securityContext:
                allowPrivilegeEscalation: false
                capabilities:
                  drop: [ALL]
          restartPolicy: Never
        # ...
        ```
    1.  Create the pod from the `**_pod.yaml_**` file by using the following command:
        ```terminal
        $ oc create -f pod.yaml
        ```

**Verification**

*   Check the container’s logs for the `MY_NEW_ENV` value by using the following command:
    ```terminal
    $ oc logs -p dapi-env-test-pod
    ```