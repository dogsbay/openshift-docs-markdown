{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticate the {{ rosa_cli }} with a single sign-on device code {id="rosa-login-sso-device-code_{{ context }}"}

If you are working with containers, remote hosts, and other environments without a web browser, you can use a Red&#160;Hat single sign-on device code for secure authentication. To do this, you must use a second device that has a web browser to approve the login. {._abstract}

**Prerequisites**

*   You have {{ rosa_cli_first }} version 1.2.36 or later installed.
*   You have access to a second device with a web browser.

**Procedure**

*   To log in to the {{ rosa_cli }} with a Red&#160;Hat single sign-on device code, run the following command:
    ```terminal
    $ rosa login --use-device-code
    ```

    Running this command redirects you to the Red&#160;Hat SSO login and provides a login code.

    **Optional arguments inherited from parent commands**

    | Option | Definition |
    | --- | --- |
    | --help | Shows help for this command. |
    | --debug | Enables debug mode. |

**Verification**

To switch accounts, log out from [https://sso.redhat.com](https://sso.redhat.com) and run the `rosa logout` command in your terminal before attempting to log in again.