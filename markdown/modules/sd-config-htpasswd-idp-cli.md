{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an htpasswd identity provider with the CLI {id="sd-config-htpasswd-idp-cli_{{ context }}"}

You can create an htpasswd identity provider (IDP) with the {{ cluster_manager }} CLI (`ocm`) tool. {._abstract}

**Prerequisites**

*   You have installed and configured the latest version of the {{ cluster_manager }} CLI (`ocm`).

**Procedure**

*   Run the following command to create an htpasswd IDP by passing the usernames and passwords in the command-line interface:
    ```terminal
    $ ocm create idp --type htpasswd --cluster <cluster_name> --name <idp_name> --username <user_name> --password '<password>'
    ```

    :::note

    You must include the password within quotes such as ’password'` to prevent your password from disrupting the Bash commands.

    Passwords must include uppercase letters, lowercase letters, and numbers or symbols, specifically, ASCII-standard characters only. The password must be at least 14 characters.
    
    :::