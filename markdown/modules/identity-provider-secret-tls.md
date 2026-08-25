{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the secret {id="identity-provider-creating-secret-tls_{{ context }}"}

You can create a TLS `Secret` object in the `openshift-config` namespace by using the `oc` CLI or by applying a YAML file to store client certificates and keys that identity providers require for secure communication. {._abstract}

**Procedure**

1.  Create a `Secret` object that contains the key and certificate by running the following command:
    ```terminal
    $ oc create secret tls <secret_name> --key=key.pem --cert=cert.pem -n openshift-config
    ```
1.  Optional: Apply the following YAML to create the secret:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: <secret_name>
      namespace: openshift-config
    type: kubernetes.io/tls
    data:
      tls.crt: <base64_encoded_cert>
      tls.key: <base64_encoded_key>
    ```