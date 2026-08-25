{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticate the {{ rosa_cli }} with an offline token {id="rosa-login-offline-token_{{ context }}"}

Log in to your Red&#160;Hat account, saving the credentials to the `rosa` configuration file. {._abstract}


:::note

To use offline tokens for automation purposes, you can download the {{ cluster_manager_url_pull }}.
To use service accounts for automation purposes, see the [Service Accounts](https://console.redhat.com/iam/service-accounts) page.

:::



:::important

Red&#160;Hat recommends using service accounts for automation purposes.

:::


**Procedure**

*   To log in to {{ rosa_cli_first }} with a Red&#160;Hat offline token, run the following command:
    ```terminal title="Syntax"
    $ rosa login [arguments]
    ```

    **Arguments**

    | Option | Definition |
    | --- | --- |
    | --client-id | The OpenID client identifier (string). Default: `cloud-services` |
    | --client-secret | The OpenID client secret (string). |
    | --insecure | Enables insecure communication with the server. This disables verification of TLS certificates and host names. |
    | --scope | The OpenID scope (string). If this option is used, it replaces the default scopes. This can be repeated multiple times to specify multiple scopes. Default: `openid` |
    | --token | Accesses or refreshes the token (string). |
    | --token-url | The OpenID token URL (string). Default: `https://sso.redhat.com/auth/realms/redhat-external/protocol/openid-connect/token` |

    **Optional arguments inherited from parent commands**

    | Option | Definition |
    | --- | --- |
    | --help | Shows help for this command. |
    | --debug | Enables debug mode. |
    | --profile | Specifies an AWS profile (string) from your credentials file. |