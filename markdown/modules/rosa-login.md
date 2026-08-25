{%- set _mod_docs_content_type = "CONCEPT" %}
# About logging in to the {{ rosa_cli }} {id="rosa-login_{{ context }}"}

You can log in to the {{ rosa_cli_first }} with Red&#160;Hat single sign-on or with an offline authentication token. Red&#160;Hat recommends using the {{ rosa_cli }} with Red&#160;Hat single sign-on, instead of using an offline authentication token. {._abstract}

An offline authentication token is long-lived, stored on your operating system, and cannot be revoked. These factors increase overall security risks and the likelihood of unauthorized access to your account.

Alternatively, authenticating with the Red&#160;Hat single sign-on method automatically sends your `rosa` instance a refresh token that is valid for 10 hours. This unique, temporary authorization code enhances security and reduces the risk of unauthorized access.


:::important

The method of authenticating using Red&#160;Hat single sign-on does not break any existing automations that rely on offline tokens. Red&#160;Hat recommends using services accounts for automation purposes. If you still need to use offline tokens for automation or other purposes, you can download the {{ cluster_manager_url_pull }}.

:::


## Authentication methods {id="_authentication_methods"}

You can use one of the following methods to authenticate:

*   **Single sign-on authorization code**: Use this method if your system has a web browser. Single sign-on authorization is supported with {{ rosa_cli }} version 1.2.36 or later.
*   **Single sign-on device code**: Use this method if you are working with containers, remote hosts, or other environments without a web browser. Single sign-on authorization is supported with {{ rosa_cli }} version 1.2.36 or later.
*   **Offline token**: Use this method if you need to use an offline token for automation or other purposes. Red&#160;Hat recommends using service accounts for automation purposes instead.