{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a basic authentication secret with a CA certificate {id="builds-source-secret-combinations-basic-auth-ca_{{ context }}"}

You can combine the different methods for creating source clone secrets for your specific needs, such as a secret that combines a basic authentication and certificate authority (CA) certificate.

**Prerequisites**

*   Basic authentication credentials
*   CA certificate

**Procedure**

*   To create a basic authentication secret with a CA certificate, enter the following command:
    ```terminal
    $ oc create secret generic <secret_name> \
        --from-literal=username=<user_name> \
        --from-literal=password=<password> \
        --from-file=ca-cert=</path/to/file> \
        --type=kubernetes.io/basic-auth
    ```