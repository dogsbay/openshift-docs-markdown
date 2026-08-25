{%- set _mod_docs_content_type = "PROCEDURE" %}
# Access a cluster through the web console {id="rosa-getting-started-access-cluster-web-console_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

After creating a cluster administrator or adding a user to your identity provider, you can log in to your {{ product_title }} cluster through the web console. {._abstract}

{% if getting_started %}

**Prerequisites**

*   You have an AWS account.
*   You installed and configured the latest {{ rosa_cli }}, `rosa`, on your workstation.
*   You logged in to your Red&#160;Hat account using the {{ rosa_cli }}.
*   You created a {{ product_title }} cluster.
*   You have created a cluster administrator user or added your user account to the configured identity provider.
{% endif %}

**Procedure**

1.  Obtain the console URL for your cluster:
    ```terminal
    $ rosa describe cluster -c <cluster_name> | grep Console
    ```
    ```terminal title="Example output"
    Console URL:                https://console-openshift-console.apps.example-cluster.wxyz.p1.openshiftapps.com
    ```
1.  Go to the console URL in the output of the preceding step and log in.
    *   If you created a `cluster-admin` user, log in by using the provided credentials.
    *   If you configured an identity provider for your cluster, select the identity provider name in the **Log in with...** dialog and complete any authorization requests from your provider.

**Verification**

*   Verify that you can access the {{ product_title }} web console and view cluster resources.

**Additional resources**
{._additional-resources}

*   [Accessing the web console](https://docs.openshift.com/container-platform/latest/web_console/web-console.html)
*   [Understanding identity provider configuration](https://docs.openshift.com/container-platform/latest/authentication/understanding-identity-provider.html)

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}