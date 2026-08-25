{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring an identity provider {id="config-idp_{{ context }}"}

After you have installed {{ product_title }}, you must configure your cluster to use an identity provider. You can then add members to your identity provider to grant them access to your cluster. {._abstract}

You can configure different identity provider types for your {{ product_title }} cluster. Supported types include GitHub, GitHub Enterprise, GitLab, Google, LDAP, OpenID Connect, and htpasswd identity providers.


:::important

The htpasswd identity provider option is included only to enable the creation of a single, static administration user. htpasswd is not supported as a general-use identity provider for {{ product_title }}.

:::


The following procedure configures a GitHub identity provider as an example.


:::warning

Configuring GitHub authentication allows users to log in to {{ product_title }} with their GitHub credentials. To prevent anyone with any GitHub user ID from logging in to your {{ product_title }} cluster, you must restrict access to only those in specific GitHub organizations or teams.

:::


**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.
*   You have a GitHub user account.
*   You created a GitHub organization in your GitHub account. For more information, see [Creating a new organization from scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) in the GitHub documentation.
*   If you are restricting user access to a GitHub team, you have created a team within your GitHub organization. For more information, see [Creating a team](https://docs.github.com/en/organizations/organizing-members-into-teams/creating-a-team) in the GitHub documentation.

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Select **Access control** → **Identity providers**.
1.  Select the **GitHub** identity provider type from the **Add identity provider** drop-down menu.
1.  Enter a unique name for the identity provider. The name cannot be changed later.
1.  Register an OAuth application in your GitHub organization by following the steps in the [GitHub documentation](https://docs.github.com/en/developers/apps/creating-an-oauth-app).

    :::note

    You must register the OAuth app under your GitHub organization. If you register an OAuth application that is not owned by the organization that contains your cluster users or teams, then user authentication to the cluster will not succeed.
    
    :::

    *   For the homepage URL in your GitHub OAuth app configuration, specify the `https://oauth-openshift.apps.<cluster_name>.<cluster_domain>` portion of the **OAuth callback URL** that is automatically generated in the **Add a GitHub identity provider** page on {{ cluster_manager }}.

        The following is an example of a homepage URL for a GitHub identity provider:
        ```
        https://oauth-openshift.apps.openshift-cluster.example.com
        ```
    *   For the authorization callback URL in your GitHub OAuth app configuration, specify the full **OAuth callback URL** that is automatically generated in the **Add a GitHub identity provider** page on {{ cluster_manager }}. The full URL has the following syntax:
        ```
        https://oauth-openshift.apps.<cluster_name>.<cluster_domain>/oauth2callback/<idp_provider_name>
        ```
1.  Return to the **Edit identity provider: GitHub** dialog in {{ cluster_manager_url }} and select **Claim** from the **Mapping method** drop-down menu.
1.  Enter the **Client ID** and **Client secret** for your GitHub OAuth application. The GitHub page for your OAuth app provides the ID and secret.
1.  Optional: Enter a **hostname**.

    :::note

    A hostname must be entered when using a hosted instance of GitHub Enterprise.
    
    :::

1.  Optional: You can specify a certificate authority (CA) file to validate server certificates for a configured GitHub Enterprise URL. Click **Browse** to locate and attach a **CA file** to the identity provider.
1.  Select **Use organizations** or **Use teams** to restrict access to a GitHub organization or a GitHub team within an organization.
1.  Enter the name of the organization or team you want to restrict access to. Click **Add more** to specify multiple organizations or teams.

    :::note

    Specified organizations must own an OAuth app that was registered by using the preceding steps. If you specify a team, it must exist within an organization that owns an OAuth app that was registered by using the preceding steps.
    
    :::

1.  Click **Add** to apply the identity provider configuration.

    :::note

    It might take approximately two minutes for the identity provider configuration to become active.
    
    :::


**Verification**

*   After the configuration becomes active, the identity provider is listed under **Access control** → **Identity providers** on the {{ cluster_manager_url }} page for your cluster.