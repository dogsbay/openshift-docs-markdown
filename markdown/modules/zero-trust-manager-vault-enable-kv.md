{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the key-value secrets engine and store a test secret {id="zero-trust-manager-vault-enable-kv_{{ context }}"}

Enable the key-value secrets engine to create a secure, centralized location for managing credentials. You can also store a test secret to verify that the engine is working. {._abstract}

**Prerequisites**

*   Make sure that Vault is initialized and unsealed.

**Procedure**

1.  Open another shell session in the `Vault` pod by running the following command:
    ```terminal
    $ oc rsh -n vault statefulset/vault
    ```
1.  Export your root token again within this new session and log in by running the following command:
    ```terminal
    $ export ROOT_TOKEN=<Your-Root-Token>
    ```
    ```terminal
    $ vault login "${ROOT_TOKEN}"
    ```
1.  Enable the KV secrets engine at the `secret/` path and create a test secret by running the following commands:
    ```terminal
    $ export NAME=ztwim
    ```
    ```terminal
    $ vault secrets enable -path=secret kv
    ```
    ```terminal
    $ vault kv put secret/$NAME version=v0.1.0
    ```

**Verification**

*   To verify that the secret is stored correctly, run the following command:
    ```terminal
    $ vault kv get secret/$NAME
    ```