{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure a GitLab identity provider {id="config-gitlab-idp_{{ context }}"}

Configure a GitLab identity provider to use `gitlab.com` or any other GitLab instance so that users can log in to your cluster with their GitLab credentials. {._abstract}

**Prerequisites**

*   If you use GitLab version 7.7.0 to 11.0, you connect using the [OAuth integration](https://docs.gitlab.com/ee/integration/oauth_provider.html). If you use GitLab version 11.1 or later, you can use [OpenID Connect](https://docs.gitlab.com/ee/integration/openid_connect_provider.html) (OIDC) to connect instead of OAuth.

**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster that you need to configure identity providers for.
1.  Click the **Access control** tab.
1.  Click **Add identity provider**.

    :::note

    You can also click the **Add OAuth configuration** link in the warning message displayed after cluster creation to configure your identity providers.
    
    :::

1.  Select **GitLab** from the drop-down menu.
1.  Enter a unique name for the identity provider. This name cannot be changed later.
    *   An **OAuth callback URL** is automatically generated in the provided field. Provide this URL to GitLab.
{% if not openshift_rosa_hcp %}
        ```
        https://oauth-openshift.apps.<cluster_name>.<cluster_domain>/oauth2callback/<idp_provider_name>
        ```
{% endif %}
{% if openshift_rosa_hcp %}
        ```
        https://oauth.<cluster_name>.<cluster_domain>/oauth2callback/<idp_provider_name>
        ```
{% endif %}

        For example:
        ```
        https://oauth-openshift.apps.openshift-cluster.example.com/oauth2callback/gitlab
        ```
1.  [Add a new application in GitLab](https://docs.gitlab.com/ee/integration/oauth_provider.html).
1.  Return to {{ product_title }} and select a mapping method from the drop-down menu. **Claim** is recommended in most cases.
1.  Enter the **Client ID** and **Client secret** provided by GitLab.
1.  Enter the **URL** of your GitLab provider.
1.  Optional: You can use a certificate authority (CA) file to validate server certificates for the configured GitLab URL. Click **Browse** to locate and attach a **CA file** to the identity provider.
1.  Click **Confirm**.

**Verification**

*   The configured identity provider is now visible on the **Access control** tab of the **Cluster List** page.