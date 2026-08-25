{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an identity provider {id="rosa-getting-started-configure-an-idp_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

You can configure different identity provider types for your {{ product_title }}  cluster. Supported types include GitHub, GitHub Enterprise, GitLab, Google, LDAP, OpenID Connect and htpasswd identity providers. {._abstract}


:::important

The htpasswd identity provider option is included only to enable the creation of a single, static administration user. htpasswd is not supported as a general-use identity provider for {{ product_title }}.

:::


The following procedure configures a GitHub identity provider as an example.

{% if getting_started %}

**Prerequisites**

*   You have an AWS account.
*   You installed and configured the latest {{ rosa_cli }}, `rosa`, on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
*   You have a GitHub user account.
{% endif %}

**Procedure**

1.  Go to [github.com](https://github.com) and log in to your GitHub account.
1.  If you do not have an existing GitHub organization to use for identity provisioning for your {{ product_title }} cluster, create one. Follow the steps in the [GitHub documentation](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
1.  Configure a GitHub identity provider for your cluster that is restricted to the members of your GitHub organization.
    1.  Configure an identity provider using the interactive mode, replacing `<cluster_name>` with the name of your cluster:
        ```terminal
        $ rosa create idp --cluster=<cluster_name> --interactive
        ```

        The following example output prompts you to enter information about your GitHub organization, replacing `<github_org_name>` with the name of your GitHub organization:
        ```terminal title="Example output"
        I: Interactive mode enabled.
        Any optional fields can be left empty and a default will be selected.
        ? Type of identity provider: github
        ? Identity provider name: github-1
        ? Restrict to members of: organizations
        ? GitHub organizations: <github_org_name>
        ? To use GitHub as an identity provider, you must first register the application:
          - Open the following URL:
            https://github.com/organizations/<github_org_name>/settings/applications/new?oauth_application%5Bcallback_url%5D=https%3A%2F%2Foauth-openshift.apps.<cluster_name>/<random_string>.p1.openshiftapps.com%2Foauth2callback%2Fgithub-1&oauth_application%5Bname%5D=<cluster_name>&oauth_application%5Burl%5D=https%3A%2F%2Fconsole-openshift-console.apps.<cluster_name>/<random_string>.p1.openshiftapps.com
          - Click on 'Register application'
        ...
        ```
    1.  Follow the URL in the output and select **Register application** to register a new OAuth application in your GitHub organization. By registering the application, you enable the OAuth server that is built into {{ product_title }} to authenticate members of your GitHub organization into your cluster.

        :::note

        The fields in the **Register a new OAuth application** GitHub form are automatically filled with the required values through the URL defined by the {{ rosa_cli }}.
        
        :::

    1.  Use the information from your GitHub OAuth application page to populate the remaining `rosa create idp` interactive prompts, replacing `<github_client_id>` with the client ID for your GitHub OAuth application and `<github_client_secret>` with a client secret for your GitHub OAuth application. Specify `claim` as the mapping method:
        ```terminal title="Continued example output"
        ...
        ? Client ID: <github_client_id>
        ? Client Secret: [? for help] <github_client_secret>
        ? GitHub Enterprise Hostname (optional):
        ? Mapping method: claim
        I: Configuring IDP for cluster '<cluster_name>'
        I: Identity Provider 'github-1' has been created.
           It will take up to 1 minute for this configuration to be enabled.
           To add cluster administrators, see 'rosa grant user --help'.
           To login into the console, open https://console-openshift-console.apps.<cluster_name>.<random_string>.p1.openshiftapps.com and click on github-1.
        ```

        :::note

        It might take approximately two minutes for the identity provider configuration to become active. If you have configured a `cluster-admin` user, you can watch the OAuth pods redeploy with the updated configuration by running `oc get pods -n openshift-authentication --watch`.
        
        :::


**Verification**

*   Verify that the identity provider has been configured:
    ```terminal
    $ rosa list idps --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    NAME        TYPE      AUTH URL
    github-1    GitHub    https://oauth-openshift.apps.<cluster_name>.<random_string>.p1.openshiftapps.com/oauth2callback/github-1
    ```

**Additional resources**
{._additional-resources}

*   [Understanding identity provider configuration](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/authentication_and_authorization/understanding-identity-provider)
*   [GitHub OAuth apps documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps)
*   [Configuring identity providers for STS](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html/install_rosa_classic_clusters/rosa-sts-config-identity-providers)

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}