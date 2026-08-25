{%- set _mod_docs_content_type = "REFERENCE" %}
# About authentication in {{ product_title }} {id="authentication-overview_{{ context }}"}

To control access to an {{ product_title }} cluster,
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
a cluster administrator
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
an administrator with the `dedicated-admin` role
{%- endif %}
can configure [user authentication](/authentication/understanding-authentication#understanding-authentication) and ensure only approved users access the cluster. {._abstract}

To interact with an {{ product_title }} cluster, users must first authenticate to the {{ product_title }} API in some way. You can authenticate by providing an [OAuth access token or an X.509 client certificate](/authentication/understanding-authentication#rbac-api-authentication_understanding-authentication) in your requests to the {{ product_title }} API.


:::note

If you do not present a valid access token or certificate, your request is unauthenticated and you receive an HTTP 401 error.

:::


{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
An administrator can configure authentication by configuring an identity provider. You can define any [supported identity provider in {{ product_title }}](/authentication/sd-configuring-identity-providers#understanding-idp_sd-configuring-identity-providers) and add it to your cluster.
{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
An administrator can configure authentication through the following tasks:

*   Configuring an identity provider: You can define any [supported identity provider in {{ product_title }}](/authentication/understanding-identity-provider#supported-identity-providers_understanding-identity-provider) and add it to your cluster.
*   [Configuring the internal OAuth server](/authentication/configuring-internal-oauth#configuring-internal-oauth): The {{ product_title }} control plane includes a built-in OAuth server that determines the user’s identity from the configured identity provider and creates an access token. You can configure the token duration and inactivity timeout, and customize the internal OAuth server URL.

    :::note

    Users can [view and manage OAuth tokens owned by them](/authentication/managing-oauth-access-tokens#managing-oauth-access-tokens).
    
    :::

*   Registering an OAuth client: {{ product_title }} includes several [default OAuth clients](/authentication/configuring-oauth-clients#oauth-default-clients_configuring-oauth-clients). You can [register and configure additional OAuth clients](/authentication/configuring-oauth-clients#oauth-register-additional-client_configuring-oauth-clients).

    :::note

    When users send a request for an OAuth token, they must specify either a default or custom OAuth client that receives and uses the token.
    
    :::

*   Managing cloud provider credentials using the [Cloud Credentials Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator): Cluster components use cloud provider credentials to get permissions required to perform cluster-related tasks.
*   Impersonating a system admin user: You can grant cluster administrator permissions to a user by [impersonating a system admin user](/authentication/impersonating-system-admin#impersonating-system-admin).
{% endif %}