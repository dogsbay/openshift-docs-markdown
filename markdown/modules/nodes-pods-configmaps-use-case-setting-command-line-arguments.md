{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting command-line arguments for container commands with config maps {id="nodes-pods-configmaps-use-case-setting-command-line-arguments_{{ context }}"}

You can use config maps to set the value of the commands or arguments in a container by using the Kubernetes substitution syntax `$(VAR_NAME)`. {._abstract}

As an example, consider the following config map:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: special-config
  namespace: default
data:
  special.how: very
  special.type: charm
```

**Procedure**

*   To inject values into a command in a container, you must consume the keys you want to use as environment variables. Then you can refer to them in a container’s command using the `$(VAR_NAME)` syntax.
    ```yaml title="Sample pod specification configured to inject specific environment variables"
    apiVersion: v1
    kind: Pod
    metadata:
      name: dapi-test-pod
    spec:
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: test-container
          image: gcr.io/google_containers/busybox
          command: [ "/bin/sh", "-c", "echo $(SPECIAL_LEVEL_KEY) $(SPECIAL_TYPE_KEY)" ]
          env:
            - name: SPECIAL_LEVEL_KEY
              valueFrom:
                configMapKeyRef:
                  name: special-config
                  key: special.how
            - name: SPECIAL_TYPE_KEY
              valueFrom:
                configMapKeyRef:
                  name: special-config
                  key: special.type
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
      restartPolicy: Never
    ```

    where:

    `spec.containers.command`
    :   Specifies values to inject into a command in a container by using the keys you want to use as environment variables.

    When this pod is run, the output from the echo command run in the test-container container is as follows:
    ```
    very charm
    ```