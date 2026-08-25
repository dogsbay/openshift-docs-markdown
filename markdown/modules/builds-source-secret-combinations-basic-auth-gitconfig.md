{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a basic authentication secret with a Git configuration file {id="builds-source-secret-combinations-basic-auth-gitconfig_{{ context }}"}

You can combine the different methods for creating source clone secrets for your specific needs, such as a secret that combines a basic authentication and a `.gitconfig` file.

**Prerequisites**

*   Basic authentication credentials
*   A `.gitconfig` file

**Procedure**

*   To create a basic authentication secret with a `.gitconfig` file, enter the following command:
    ```terminal
    $ oc create secret generic <secret_name> \
        --from-literal=username=<user_name> \
        --from-literal=password=<password> \
        --from-file=</path/to/.gitconfig> \
        --type=kubernetes.io/basic-auth
    ```