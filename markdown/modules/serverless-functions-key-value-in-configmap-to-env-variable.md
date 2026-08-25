{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting environment variable from a key value defined in a config map {id="serverless-functions-key-value-in-configmap-to-env-variable_{{ context }}"}

You can set an environment variable from a key value defined as a config map. A value previously stored in a config map can then be accessed as an environment variable by the function at runtime. This can be useful for getting access to a value stored in a config map, such as the ID of a user.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function.

**Procedure**

1.  Open the `func.yaml` file for your function.
1.  For each value from a config map key-value pair that you want to assign to an environment variable, add the following YAML to the `envs` section:
    ```yaml
    name: test
    namespace: ""
    runtime: go
    ...
    envs:
    - name: EXAMPLE
      value: '{{ configMap:myconfigmap:key }}'
    ```
    *   Substitute `EXAMPLE` with the name of the environment variable.
    *   Substitute `myconfigmap` with the name of the target config map.
    *   Substitute `key` with the key mapped to the target value.

        For example, to access the user ID that is stored in `userdetailsmap`, use the following YAML:
        ```yaml
        name: test
        namespace: ""
        runtime: go
        ...
        envs:
        - value: '{{ configMap:userdetailsmap:userid }}'
        ```
1.  Save the configuration.