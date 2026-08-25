{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a SSH-based authentication secret with a `.gitconfig` file {id="builds-source-secret-combinations-ssh-gitconfig_{{ context }}"}

You can combine the different methods for creating source clone secrets for your specific needs, such as a SSH-based authentication secret with a `.gitconfig` file.

**Prerequisites**

*   SSH authentication
*   A `.gitconfig` file

**Procedure**

*   To create a SSH-based authentication secret with a `.gitconfig` file, enter the following command:
    ```terminal
    $ oc create secret generic <secret_name> \
        --from-file=ssh-privatekey=<path/to/ssh/private/key> \
        --from-file=<path/to/.gitconfig> \
        --type=kubernetes.io/ssh-auth
    ```