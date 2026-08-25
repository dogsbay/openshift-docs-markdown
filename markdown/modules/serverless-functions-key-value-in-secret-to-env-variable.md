{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting environment variable from a key value defined in a secret {id="serverless-functions-key-value-in-secret-to-env-variable_{{ context }}"}

You can set an environment variable from a key value defined as a secret. A value previously stored in a secret can then be accessed as an environment variable by the function at runtime. This can be useful for getting access to a value stored in a secret, such as the ID of a user.

**Prerequisites**

*   The {{ ServerlessOperatorName }} and Knative Serving are installed on the cluster.
*   You have installed the Knative (`kn`) CLI.
*   You have created a function.

**Procedure**

1.  Open the `func.yaml` file for your function.
1.  For each value from a secret key-value pair that you want to assign to an environment variable, add the following YAML to the `envs` section:
    ```yaml
    name: test
    namespace: ""
    runtime: go
    ...
    envs:
    - name: EXAMPLE
      value: '{{ secret:mysecret:key }}'
    ```
    *   Substitute `EXAMPLE` with the name of the environment variable.
    *   Substitute `mysecret` with the name of the target secret.
    *   Substitute `key` with the key mapped to the target value.

        For example, to access the user ID that is stored in `userdetailssecret`, use the following YAML:
        ```yaml
        name: test
        namespace: ""
        runtime: go
        ...
        envs:
        - value: '{{ configMap:userdetailssecret:userid }}'
        ```
1.  Save the configuration.