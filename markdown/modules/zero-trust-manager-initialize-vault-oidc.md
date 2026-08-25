{%- set _mod_docs_content_type = "PROCEDURE" %}

# Initializing and unsealing Vault {id="zero-trust-manager-initialize-vault-oidc_{{ context }}"}

To prepare a newly installed Vault server for operation, initialize and unseal it. This process loads the primary encryption key into memory so that Vault can decrypt data and protect other encryption keys. {._abstract}

The steps to initialize a Vault server are:

1.  Initialize and unseal Vault
1.  Enable the key-value (KV) secrets engine and store a test secret
1.  Configure JSON Web Token (JWT) authentication with SPIRE
1.  Deploy a demonstration application
1.  Authenticate and retrieve the secret

**Prerequisites**

*   Ensure that Vault is running.
*   Ensure that Vault is not initialized. You can only initialize a Vault server once.

**Procedure**

1.  Open a remote shell into the `vault` pod by running the following command:
    ```terminal
    $ oc rsh -n vault statefulset/vault
    ```
1.  Initialize Vault to get your unseal key and root token by running the following command:
    ```terminal
    $ vault operator init -key-shares=1 -key-threshold=1 -format=json
    ```
1.  Export the unseal key and root token you received from the earlier command by running the following commands:
    ```terminal
    $ export UNSEAL_KEY=<Your-Unseal-Key>
    ```
    ```terminal
    $ export ROOT_TOKEN=<Your-Root-Token>
    ```
1.  Unseal Vault using your unseal key by running the following command:
    ```terminal
    $ vault operator unseal -format=json $UNSEAL_KEY
    ```
1.  Exit the pod by entering `exit`.

**Verification**

*   To verify that the Vault pod is ready, run the following command:
    ```terminal
    $ oc get pod -n vault
    ```
    ```terminal title="Example output"
    NAME        READY        STATUS      RESTARTS     AGE
    vault-0     1/1          Running     0            65d
    ```