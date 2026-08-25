{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a basic authentication secret {id="nodes-pods-secrets-creating-basic_{{ context }}"}

As an administrator, you can create a basic authentication secret, which you can use to store the credentials needed for basic authentication.  {._abstract}

When using this secret type, the `data` parameter of the `Secret` object must contain the following keys encoded in the base64 format:

*   `username`: the user name for authentication
*   `password`: the password or token for authentication


:::note

You can use the `stringData` parameter to use clear text content.

:::


**Procedure**

1.  Create a `Secret` object in a YAML file:
    ```yaml title="Example secret object"
    apiVersion: v1
    kind: Secret
    metadata:
      name: secret-basic-auth
    type: kubernetes.io/basic-auth
    data:
    stringData:
      username: admin
      password: <password>
    ```

    where:

    `type`
    :   Specifies a basic authentication secret.

    `stringData`
    :   Specifies the basic authentication values to use.

1.  Use the following command to create the `Secret` object:
    ```terminal
    $ oc create -f <filename>.yaml
    ```
1.  To use the secret in a pod:
    1.  Update the pod’s service account to reference the secret, as shown in the "Understanding how to create secrets" section.
    1.  Create the pod, which consumes the secret as an environment variable or as a file (using a `secret` volume), as shown in the "Understanding how to create secrets" section.