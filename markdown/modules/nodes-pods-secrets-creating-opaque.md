{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an opaque secret {id="nodes-pods-secrets-creating-opaque_{{ context }}"}

As an administrator, you can create an opaque secret, which allows you to store unstructured `key:value` pairs that can contain arbitrary values. {._abstract}

**Procedure**

1.  Create a `Secret` object in a YAML file.

    For example:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: mysecret
    type: Opaque
    data:
      username: <username>
      password: <password>
    ```

    where:

    `type`
    :   Specifies an opaque secret.

1.  Use the following command to create a `Secret` object:
    ```terminal
    $ oc create -f <filename>.yaml
    ```
1.  To use the secret in a pod:
    1.  Update the pod’s service account to reference the secret, as shown in the "Understanding how to create secrets" section.
    1.  Create the pod, which consumes the secret as an environment variable or as a file (using a `secret` volume), as shown in the "Understanding how to create secrets" section.