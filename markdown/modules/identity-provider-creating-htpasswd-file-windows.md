{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an htpasswd file using Windows {id="identity-provider-creating-htpasswd-file-windows_{{ context }}"}

Create a flat `htpasswd` file on Windows with the `htpasswd.exe` utility to store usernames and hashed passwords for your cluster. The file enables the `htpasswd` identity provider to authenticate users in {{ product_title }} from locally stored credentials. {._abstract}

**Prerequisites**

*   You have access to the `htpasswd.exe` utility. On Windows, this utility is included in the `\bin` subdirectory of many Apache httpd distributions.

**Procedure**

1.  Create or update your `htpasswd` file with a username and hashed password by running the following command:
    ```terminal
    $ htpasswd.exe -c -B -b <\path\to\users.htpasswd> <username> <password>
    ```

    The command generates a hashed version of the password.

    For example:
    ```terminal
    $ htpasswd.exe -c -B -b users.htpasswd <username> <password>
    ```
    ```terminal title="Example output"
    Adding password for user user1
    ```
1.  Continue to add or update credentials to the file by running the following command:
    ```terminal
    $ htpasswd.exe -b <\path\to\users.htpasswd> <username> <password>
    ```