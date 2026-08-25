{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an htpasswd identity provider with the CLI {id="rosa-config-htpasswd-idp-cli_{{ context }}"}

You can create an htpasswd identity provider (IDP) with the {{ rosa_cli_first }} tool. {._abstract}

**Prerequisites**

*   You have installed and configured the latest version of the {{ rosa_cli }}.

**Procedure**

*   Run the following command to create an htpasswd IDP by passing the usernames and passwords in the command-line interface:
    ```terminal
    $ rosa create idp --type=htpasswd -c  <cluster_name> --users='user1:password1,user2:password2,user3:password3'
    ```

    :::note

    The `--users` string value must be a comma-separated list of `username:password,` within quotes such as `"user1:password"` to create a user account with a name of `user1` and a password of `password`. The quotes prevent your password from disrupting the Bash commands.

    Passwords must include uppercase letters, lowercase letters, and numbers or symbols, specifically, ASCII-standard characters only. The password must be at least 14 characters.
    
    :::