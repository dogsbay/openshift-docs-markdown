{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rotate the Vault encryption key {id="kms-rotating-encryption-key_{{ context }}"}

You can rotate your Vault Transit encryption key to generate a new key version while maintaining access to data encrypted with earlier versions. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to your Vault instance with permissions to rotate keys.
*   {{ KMS }} encryption is enabled and functioning.

**Procedure**

1.  Rotate the Vault encryption key by entering the following command:
    ```terminal
    $ vault write -f transit/keys/kms-key/rotate
    ```

    Vault creates a new key version while maintaining earlier versions for decryption. The API server automatically uses the correct key version for each secret.
1.  Verify the new key version by entering the following command:
    ```terminal
    $ vault read transit/keys/kms-key
    ```

    The `latest_version` field shows the current key version number.

**Verification**

*   Verify that existing secrets remain accessible by entering the following command:
    ```terminal
    $ oc get secret -A
    ```

All secrets should be readable without errors.


:::note

Existing encrypted secrets do not need re-encryption. Vault maintains all key versions and automatically uses the appropriate version for decryption.

:::


**Additional resources**
{._additional-resources}

*   [Vault Transit: Rotate Key](https://developer.hashicorp.com/vault/api-docs/secret/transit#rotate-key)
*   [Vault Transit: Rewrap Data](https://developer.hashicorp.com/vault/api-docs/secret/transit#rewrap-data)
*   [Vault Transit: Key Rotation](https://developer.hashicorp.com/vault/docs/secrets/transit#key-rotation)