{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuration using secrets {id="learning-deploying-configmaps-secrets-envvar-secrets_{{ context }}"}

To securely store and manage sensitive information like passwords and SSH keys, use Kubernetes `Secret` objects. Configuring a secret is safer and more flexible than embedding plain text directly into your pod definitions or container images. {._abstract}

**Procedure**

*   In the OSToy application, in the left menu, click **Secrets**, displaying the contents of the secrets available to the OSToy application. The code snippet shows an example of a secret configuration:

    **For example**:
    ```text
    USERNAME=my_user
    PASSWORD=VVNFUk5BTUU9bXlfdXNlcgpQQVNTV09SRD1AT3RCbCVYQXAhIzYzMlk1RndDQE1UUWsKU01UUD1sb2NhbGhvc3QKU01UUF9QT1JUPTI1
    SMTP=localhost
    SMTP_PORT=25
    ```