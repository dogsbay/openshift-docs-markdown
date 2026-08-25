{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an htpasswd file using Windows {id="identity-provider-creating-htpasswd-file-windows_{{ context }}"}

To use the htpasswd identity provider, you must generate a flat file that
contains the user names and passwords for your cluster by using
[`htpasswd`](http://httpd.apache.org/docs/2.4/programs/htpasswd.html).

**Prerequisites**

*   Have access to `htpasswd.exe`. This file is included in the `\bin`
directory of many Apache httpd distributions.

**Procedure**

1.  Create or update your flat file with a user name and hashed password:
    ```terminal
    > htpasswd.exe -c -B -b <\path\to\users.htpasswd> <username> <password>
    ```

    The command generates a hashed version of the password.

    For example:
    ```terminal
    > htpasswd.exe -c -B -b users.htpasswd <username> <password>
    ```
    ```terminal title="Example output"
    Adding password for user user1
    ```
1.  Continue to add or update credentials to the file:
    ```terminal
    > htpasswd.exe -b <\path\to\users.htpasswd> <username> <password>
    ```