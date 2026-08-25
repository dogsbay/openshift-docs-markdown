{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Docker configuration secret {id="nodes-pods-secrets-creating-docker_{{ context }}"}

As an administrator, you can create a Docker configuration secret, which allows you to store the credentials for accessing a container image registry. {._abstract}

*   `kubernetes.io/dockercfg`. Use this secret type to store your local Docker configuration file. The `data` parameter of the `secret` object must contain the contents of a `.dockercfg` file encoded in the base64 format.
*   `kubernetes.io/dockerconfigjson`. Use this secret type to store your local Docker configuration JSON file. The `data` parameter of the `secret` object must contain the contents of a `.docker/config.json` file encoded in the base64 format.

**Procedure**

1.  Create a `Secret` object in a YAML file.
    ```yaml title="Example Docker configuration secret object"
    apiVersion: v1
    kind: Secret
    metadata:
      name: secret-docker-cfg
      namespace: my-project
    type: kubernetes.io/dockerconfig
    data:
      .dockerconfig:bm5ubm5ubm5ubm5ubm5ubm5ubm5ubmdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cgYXV0aCBrZXlzCg==
    ```

    where:

    `type`
    :   Specifies that the secret is using a Docker configuration file.

    `data`
    :   Specifies the output of a base64-encoded Docker configuration file.
    ```yaml title="Example Docker configuration JSON secret object"
    apiVersion: v1
    kind: Secret
    metadata:
      name: secret-docker-json
      namespace: my-project
    type: kubernetes.io/dockerconfig
    data:
      .dockerconfigjson:bm5ubm5ubm5ubm5ubm5ubm5ubm5ubmdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cgYXV0aCBrZXlzCg==
    ```

    where:

    `type`
    :   Specifies that the secret is using a Docker configuration file.

    `data`
    :   Specifies the output of a base64-encoded Docker configuration file.
1.  Use the following command to create the `Secret` object
    ```terminal
    $ oc create -f <filename>.yaml
    ```
1.  To use the secret in a pod:
    1.  Update the pod’s service account to reference the secret, as shown in the "Understanding how to create secrets" section.
    1.  Create the pod, which consumes the secret as an environment variable or as a file (using a `secret` volume), as shown in the "Understanding how to create secrets" section.