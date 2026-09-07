{%- if context == "configuring-github-identity-provider" %}
{%- set no_username_password_login = true -%}
{% endif %}
{% if context == "configuring-google-identity-provider" %}
{%- set no_username_password_login = true -%}
{%- endif %}
{%- if context == "configuring-oidc-identity-provider" %}
{%- set no_username_password_login = true -%}
{%- set oidc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding an identity provider to your cluster {id="add-identity-provider_{{ context }}"}

Apply the identity provider custom resource (CR) to your cluster after you define it. With this configuration, you can authenticate with the configured identity provider. {._abstract}

**Prerequisites**

*   You have access to a {{ product_title }} cluster.
*   You have created the CR for your identity providers.
*   You are logged in as an administrator.

**Procedure**

1.  Apply the defined CR by running the following command:
    ```terminal
    $ oc apply -f </path/to/CR>
    ```

    :::note

    If a CR does not exist, `oc apply` creates a new CR and might trigger the following warning: `Warning: oc apply should be used on resources created by either oc create --save-config or oc apply`. In this case you can safely ignore this warning.
    
    :::


{% if not no_username_password_login %}
1.  Log in to the cluster as a user from your identity provider, entering the password when prompted.
    ```terminal
    $ oc login -u <username>
    ```
{% endif %}

{% if no_username_password_login %}
1.  Obtain a token from the OAuth server.

    As long as the `kubeadmin` user has been removed, the `oc login` command provides instructions on how to access a web page where you can retrieve the token.

    You can also access this page from the web console by navigating to **(?) Help** → **Command Line Tools** → **Copy Login Command**.
1.  Log in to the cluster by running the following command, passing in the token to authenticate:
    ```terminal
    $ oc login --token=<token>
    ```
{% if oidc %}

    :::note

    If your OpenID Connect identity provider supports the resource owner password credentials (ROPC) grant flow, you can log in with a username and password. You might need to take steps to enable the ROPC grant flow for your identity provider.
    
    :::

1.  After the OIDC identity provider is configured in {{ product_title }}, log in by running the following command. The command prompts you for your username and password:
    ```terminal
    $ oc login -u <identity_provider_username> --server=<api_server_url_and_port>
    ```

    If your OpenID Connect identity provider supports the resource owner password credentials (ROPC) grant flow, you might need to take steps to enable the ROPC grant flow for your identity provider.
{% endif %}

{% if not oidc %}
This identity provider does not support logging in with a username and password.
{% endif %}

{% endif %}

1.  Confirm that the user logged in successfully and that the username displays by running the following command:
    ```terminal
    $ oc whoami
    ```

{%- if context == "configuring-google-identity-provider" %}
{%- set no_username_password_login = "" -%}
{% endif %}
{% if context == "configuring-oidc-identity-provider" %}
{%- set no_username_password_login = "" -%}
{%- set oidc = "" -%}
{% endif %}
{% if context == "configuring-github-identity-provider" %}
{%- set no_username_password_login = "" -%}
{% endif %}