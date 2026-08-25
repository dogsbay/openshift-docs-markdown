{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret from source code basic authentication {id="builds-source-secret-basic-auth_{{ context }}"}

Basic authentication requires either a combination of `--username` and `--password`, or a token to authenticate against the software configuration management (SCM) server.

**Prerequisites**

*   User name and password to access the private repository.

**Procedure**

1.  Create the secret first before using the `--username` and `--password` to access the private repository:
    ```terminal
    $ oc create secret generic <secret_name> \
        --from-literal=username=<user_name> \
        --from-literal=password=<password> \
        --type=kubernetes.io/basic-auth
    ```
1.  Create a basic authentication secret with a token:
    ```terminal
    $ oc create secret generic <secret_name> \
        --from-literal=password=<token> \
        --type=kubernetes.io/basic-auth
    ```