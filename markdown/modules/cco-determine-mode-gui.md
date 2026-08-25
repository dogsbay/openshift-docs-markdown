{%- set _mod_docs_content_type = "PROCEDURE" -%}

{% if context == "preparing-manual-creds-update" %}
{%- set update = true -%}
{% endif %}
{% if context == "about-cloud-credential-operator" %}
{%- set about_cco = true -%}
{% endif %}

# Determining the Cloud Credential Operator mode by using the web console {id="cco-determine-mode-gui_{{ context }}"}

You can determine what mode the Cloud Credential Operator (CCO) is configured to use by using the web console. {._abstract}

Before you perform upgrades or troubleshoot, ensure you understand your cluster’s credential management configuration.


:::note

Only Amazon Web Services (AWS), global Microsoft Azure, and {{ gcp_first }} clusters support multiple CCO modes.

:::


**Prerequisites**

*   You have access to an {{ product_title }} account with cluster administrator permissions.

**Procedure**

1.  Log in to the {{ product_title }} web console as a user with the `cluster-admin` role.
1.  Navigate to **Administration** → **Cluster Settings**.
1.  On the **Cluster Settings** page, select the **Configuration** tab.
1.  Under **Configuration resource**, select **CloudCredential**.
1.  On the **CloudCredential details** page, select the **YAML** tab.
1.  In the YAML block, check the value of `spec.credentialsMode`. The following values are possible, though not all are supported on all platforms:
    *   `''`: The CCO is operating in the default mode. In this configuration, the CCO operates in mint or passthrough mode, depending on the credentials provided during installation.
    *   `Mint`: The CCO is operating in mint mode.
    *   `Passthrough`: The CCO is operating in passthrough mode.
    *   `Manual`: The CCO is operating in manual mode.

    :::important

    To determine the specific configuration of an AWS, {{ gcp_short }}, or global Microsoft Azure cluster that has a `spec.credentialsMode` of `''`, `Mint`, or `Manual`, you must investigate further.

    AWS and {{ gcp_short }} clusters support using mint mode with the root secret deleted.
{%- if update %}
    If the cluster is specifically configured to use mint mode or uses mint mode by default, you must determine if the root secret is present on the cluster before updating.
{%- endif %}

    An AWS, {{ gcp_short }}, or global Microsoft Azure cluster that uses manual mode might be configured to create and manage cloud credentials from outside of the cluster with AWS STS, {{ gcp_short }} Workload Identity, or {{ entra_first }}. You can determine whether your cluster uses this strategy by examining the cluster `Authentication` object.
    
    :::


{% if about_cco %}
1.  AWS or {{ gcp_short }} clusters that use the default (`''`) only: To determine whether the cluster is operating in mint or passthrough mode, inspect the annotations on the cluster root secret:
    1.  Navigate to **Workloads** → **Secrets** and look for the root secret for your cloud provider.

        :::note

        Ensure that the **Project** dropdown is set to **All Projects**.
        
        :::

        | Platform | Secret name |
        | --- | --- |
        | AWS | `aws-creds` |
        | {{ gcp_short }} | `gcp-credentials` |
    1.  To view the CCO mode that the cluster is using, click `1 annotation` under **Annotations**, and check the value field. The following values are possible:
        *   `Mint`: The CCO is operating in mint mode.
        *   `Passthrough`: The CCO is operating in passthrough mode.

        If your cluster uses mint mode, you can also determine whether the cluster is operating without the root secret.
{% endif %}
1.  AWS or {{ gcp_short }} clusters that use mint mode only: To determine whether the cluster is operating without the root secret, navigate to **Workloads** → **Secrets** and look for the root secret for your cloud provider.

    :::note

    Ensure that the **Project** dropdown is set to **All Projects**.
    
    :::

    | Platform | Secret name |
    | --- | --- |
    | AWS | `aws-creds` |
    | {{ gcp_short }} | `gcp-credentials` |

    *   If you see one of these values, your cluster is using mint or passthrough mode with the root secret present.
    *   If you do not see these values, your cluster is using the CCO in mint mode with the root secret removed.
1.  AWS, {{ gcp_short }}, or global Microsoft Azure clusters that use manual mode only: To determine whether the cluster is configured to create and manage cloud credentials from outside of the cluster, you must check the cluster `Authentication` object YAML values.
    1.  Navigate to **Administration** → **Cluster Settings**.
    1.  On the **Cluster Settings** page, select the **Configuration** tab.
    1.  Under **Configuration resource**, select **Authentication**.
    1.  On the **Authentication details** page, select the **YAML** tab.
    1.  In the YAML block, check the value of the `.spec.serviceAccountIssuer` parameter.
        *   A value that contains a URL that is associated with your cloud provider indicates that the CCO is using manual mode with short-term credentials for components. These clusters are configured using the `ccoctl` utility to create and manage cloud credentials from outside of the cluster.
        *   An empty value (`''`) indicates that the cluster is using the CCO in manual mode but was not configured using the `ccoctl` utility.

{% if context == "preparing-manual-creds-update" %}
{%- set update = "" -%}
{% endif %}
{% if context == "about-cloud-credential-operator" %}
{%- set about_cco = "" -%}
{% endif %}