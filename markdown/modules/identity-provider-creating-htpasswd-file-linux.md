{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an htpasswd file using Linux {id="identity-provider-creating-htpasswd-file-linux_{{ context }}"}

Create a flat `htpasswd` file on {{ op_system_base_full }} with the `htpasswd` utility to store usernames and hashed passwords for your cluster. The file enables the `htpasswd` identity provider to authenticate users in {{ product_title }} from locally stored credentials. {._abstract}

**Prerequisites**

*   You have access to the `htpasswd` utility. On {{ op_system_base_full }}, this is available by installing the `httpd-tools` package.

**Procedure**

1.  Create or update your `htpasswd` file with a username and hashed password by running the following command:
    ```terminal
    $ htpasswd -c -B -b </path/to/users.htpasswd> <username> <password>
    ```

    The command generates a hashed version of the password.

    For example:
    ```terminal
    $ htpasswd -c -B -b users.htpasswd <username> <password>
    ```
    ```terminal title="Example output"
    Adding password for user user1
    ```
1.  Continue to add or update credentials to the file by running the following command:
    ```terminal
    $ htpasswd -B -b </path/to/users.htpasswd> <user_name> <password>
    ```