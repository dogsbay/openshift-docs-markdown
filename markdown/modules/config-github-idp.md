{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure a GitHub identity provider {id="config-github-idp_{{ context }}"}

Configure a GitHub identity provider to validate user names and passwords against the GitHub or GitHub Enterprise OAuth authentication server and access your {{ product_title }} cluster. OAuth facilitates a token exchange flow between {{ product_title }} and GitHub or GitHub Enterprise. {._abstract}


:::warning

Configuring GitHub authentication allows users to log in to {{ product_title }} with their GitHub credentials. To prevent anyone with any GitHub user ID from logging in to your {{ product_title }} cluster, you must restrict access to only those in specific GitHub organizations or teams.

:::


**Prerequisites**

*   The OAuth application is created directly within the GitHub [organization settings](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/managing-organization-settings) by the GitHub organization administrator.
*   [GitHub organizations or teams](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams) are set up in your GitHub account.

**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster that you need to configure identity providers for.
1.  Click the **Access control** tab.
1.  Click **Add identity provider**.

    :::note

    You can also click the **Add OAuth configuration** link in the warning message displayed after cluster creation to configure your identity providers.
    
    :::

1.  Select **GitHub** from the drop-down menu.
1.  Enter a unique name for the identity provider. This name cannot be changed later.
    *   An **OAuth callback URL** is automatically generated in the provided field. Use this URL to register the GitHub application.
        ```
        https://oauth-openshift.apps.<cluster_name>.<cluster_domain>/oauth2callback/<idp_provider_name>
        ```

        For example:
{% if not openshift_rosa_hcp %}
        ```
        https://oauth-openshift.apps.openshift-cluster.example.com/oauth2callback/github
        ```
{% endif %}
{% if openshift_rosa_hcp %}
        ```
        https://oauth.<cluster_name>.<cluster_domain>/oauth2callback/<idp_provider_name>
        ```
{% endif %}
1.  [Register an application on GitHub](https://docs.github.com/en/developers/apps/creating-an-oauth-app).
1.  Return to {{ product_title }} and select a mapping method from the drop-down menu. **Claim** is recommended in most cases.
1.  Enter the **Client ID** and **Client secret** provided by GitHub.
1.  Enter a **hostname**. A hostname must be entered when using a hosted instance of GitHub Enterprise.
1.  Optional: You can use a certificate authority (CA) file to validate server certificates for the configured GitHub Enterprise URL. Click **Browse** to locate and attach a **CA file** to the identity provider.
1.  Select **Use organizations** or **Use teams** to restrict access to a particular GitHub organization or a GitHub team.
1.  Enter the name of the organization or team you want to restrict access to. Click **Add more** to specify multiple organizations or teams that users can be a member of.
1.  Click **Confirm**.

**Verification**

*   The configured identity provider is now visible on the **Access control** tab of the **Cluster List** page.