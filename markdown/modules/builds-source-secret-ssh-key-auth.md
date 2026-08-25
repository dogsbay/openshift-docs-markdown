{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret from source code SSH key authentication {id="builds-source-secret-ssh-key-auth_{{ context }}"}

SSH key based authentication requires a private SSH key.

The repository keys are usually located in the `$HOME/.ssh/` directory, and are named `id_dsa.pub`, `id_ecdsa.pub`, `id_ed25519.pub`, or `id_rsa.pub` by default.

**Procedure**

1.  Generate SSH key credentials:
    ```terminal
    $ ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

    :::note

    Creating a passphrase for the SSH key  prevents {{ product_title }} from building. When prompted for a passphrase, leave it blank.
    
    :::


    Two files are created: the public key and a corresponding private key (one of `id_dsa`, `id_ecdsa`, `id_ed25519`, or `id_rsa`). With both of these in place, consult your source control management (SCM) system’s manual on how to upload
    the public key. The private key is used to access your private repository.
1.  Before using the SSH key to access the private repository, create the secret:
    ```terminal
    $ oc create secret generic <secret_name> \
        --from-file=ssh-privatekey=<path/to/ssh/private/key> \
        --from-file=<path/to/known_hosts> \ (1)
        --type=kubernetes.io/ssh-auth
    ```
    1.  Optional: Adding this field enables strict server host key check.

    :::warning

    Skipping the `known_hosts` file while creating the secret makes the build vulnerable to a potential man-in-the-middle (MITM) attack.
    
    :::


    :::note

    Ensure that the `known_hosts` file includes an entry for the host of your source code.
    
    :::