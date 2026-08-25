{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticate the {{ rosa_cli }} with a single sign-on authorization code {id="rosa-login-sso-auth-code_{{ context }}"}

You can log in to your account with the {{ rosa_cli }} by using a Red&#160;Hat single sign-on authorization code. {._abstract}

**Prerequisites**

*   You have a web browser available on your system.
*   You have {{ rosa_cli }} version 1.2.36 or later installed.

**Procedure**

*   To log in to the {{ rosa_cli_first }} with a Red&#160;Hat single sign-on authorization code, run the following command:
    ```terminal title="Syntax"
    $ rosa login --use-auth-code
    ```

    Running this command redirects you to the Red&#160;Hat single sign-on login. Log in with your Red&#160;Hat login or email.

    **Optional arguments inherited from parent commands+**

    | Option | Definition |
    | --- | --- |
    | --help | Shows help for this command. |
    | --debug | Enables debug mode. |

**Verification**

To switch accounts, log out from [https://sso.redhat.com](https://sso.redhat.com) and run the `rosa logout` command in your terminal before attempting to log in again.