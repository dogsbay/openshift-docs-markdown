{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuration using secrets {id="cloud-experts-deploying-configmaps-secrets-env-var-secrets_{{ context }}"}

Kubernetes `Secret` objects allow you to store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. Putting this information in a secret is safer and more flexible than putting it in plain text into a pod definition or a container image. {._abstract}

**Procedure**

*   In the OSToy app, in the left menu, click **Secrets**, displaying the contents of the secrets available to the OSToy application. The code snippet shows an example of a secret configuration:

    **Example output:**
    ```text
    USERNAME=my_user
    PASSWORD=VVNFUk5BTUU9bXlfdXNlcgpQQVNTV09SRD1AT3RCbCVYQXAhIzYzMlk1RndDQE1UUWsKU01UUD1sb2NhbGhvc3QKU01UUF9QT1JUPTI1
    SMTP=localhost
    SMTP_PORT=25
    ```