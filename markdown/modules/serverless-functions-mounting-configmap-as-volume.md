{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mounting a config map as a volume {id="serverless-functions-mounting-configmap-as-volume_{{ context }}"}

You can mount a config map as a volume. Once a config map is mounted, you can access it from the function as a regular file. This enables you to store on the cluster data needed by the function, for example, a list of URIs that need to be accessed by the function.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function.

**Procedure**

1.  Open the `func.yaml` file for your function.
1.  For each config map you want to mount as a volume, add the following YAML to the `volumes` section:
    ```yaml
    name: test
    namespace: ""
    runtime: go
    ...
    volumes:
    - configMap: myconfigmap
      path: /workspace/configmap
    ```
    *   Substitute `myconfigmap` with the name of the target config map.
    *   Substitute `/workspace/configmap` with the path where you want to mount the config map.

        For example, to mount the `addresses` config map, use the following YAML:
        ```yaml
        name: test
        namespace: ""
        runtime: go
        ...
        volumes:
        - configMap: addresses
          path: /workspace/configmap-addresses
        ```
1.  Save the configuration.