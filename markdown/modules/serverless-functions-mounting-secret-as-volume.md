{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mounting a secret as a volume {id="serverless-functions-mounting-secret-as-volume_{{ context }}"}

You can mount a secret as a volume. Once a secret is mounted, you can access it from the function as a regular file. This enables you to store on the cluster data needed by the function, for example, a list of URIs that need to be accessed by the function.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function.

**Procedure**

1.  Open the `func.yaml` file for your function.
1.  For each secret you want to mount as a volume, add the following YAML to the `volumes` section:
    ```yaml
    name: test
    namespace: ""
    runtime: go
    ...
    volumes:
    - secret: mysecret
      path: /workspace/secret
    ```
    *   Substitute `mysecret` with the name of the target secret.
    *   Substitute `/workspace/secret` with the path where you want to mount the secret.

        For example, to mount the `addresses` secret, use the following YAML:
        ```yaml
        name: test
        namespace: ""
        runtime: go
        ...
        volumes:
        - configMap: addresses
          path: /workspace/secret-addresses
        ```
1.  Save the configuration.