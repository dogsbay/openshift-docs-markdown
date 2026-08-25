{%- set _mod_docs_content_type = "PROCEDURE" %}

# Signing using cosign {id="chains-signing-secrets-cosign_{{ context }}"}

You can use the `cosign` signing scheme with {{ tekton_chains }} using the `cosign` tool.

**Prerequisites**

*   You installed the [cosign](https://docs.sigstore.dev/cosign/installation/) tool.

**Procedure**

1.  Generate the `cosign.key` and `cosign.pub` key pairs by running the following command:
    ```terminal
    $ cosign generate-key-pair k8s://openshift-pipelines/signing-secrets
    ```

    Cosign prompts you for a password and then creates a Kubernetes secret.
1.  Store the encrypted `cosign.key` private key and the `cosign.password` decryption password in the `signing-secrets` Kubernetes secret. Ensure that the private key is stored as an encrypted PEM file of the `ENCRYPTED COSIGN PRIVATE KEY` type.