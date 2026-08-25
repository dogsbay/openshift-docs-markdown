{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the secret {id="identity-provider-creating-secret_{{ context }}"}

Create a `Secret` object in the `openshift-config` namespace to store the client secret and related credentials for the identity provider configuration. {._abstract}

**Procedure**

1.  Create a `Secret` object containing the client secret by running the following command:
    ```terminal
    $ oc create secret generic <secret_name> --from-literal=clientSecret=<secret> -n openshift-config
    ```
1.  Optional: Apply the following YAML to create the secret:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: <secret_name>
      namespace: openshift-config
    type: Opaque
    data:
      clientSecret: <base64_encoded_client_secret>
    ```
1.  Create a `Secret` object from a file by running the following command:
    ```terminal
    $ oc create secret generic <secret_name> --from-file=<path_to_file> -n openshift-config
    ```