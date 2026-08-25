{%- set _mod_docs_content_type = "PROCEDURE" -%}

{% if context == "preparing-manual-creds-update" %}
{%- set update = true -%}
{% endif %}
{% if context == "about-cloud-credential-operator" %}
{%- set about_cco = true -%}
{% endif %}

# Determining the Cloud Credential Operator mode by using the CLI {id="cco-determine-mode-cli_{{ context }}"}

You can determine what mode the Cloud Credential Operator (CCO) is configured to use by using the CLI. {._abstract}

Before you perform upgrades or troubleshoot, ensure you understand your cluster’s credential management configuration.


:::note

Only Amazon Web Services (AWS), global Microsoft Azure, and {{ gcp_first }} clusters support multiple CCO modes.

:::


**Prerequisites**

*   You have access to an {{ product_title }} account with cluster administrator permissions.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Log in to `oc` on the cluster as a user with the `cluster-admin` role.
1.  To determine the mode that the CCO is configured to use, enter the following command:
    ```terminal
    $ oc get cloudcredentials cluster \
      -o=jsonpath={.spec.credentialsMode}
    ```

    The following output values are possible, though not all are supported on all platforms:
    *   ’'`: The CCO is operating in the default mode. In this configuration, the CCO operates in mint or passthrough mode, depending on the credentials provided during installation.
    *   `Mint`: The CCO is operating in mint mode.
    *   `Passthrough`: The CCO is operating in passthrough mode.
    *   `Manual`: The CCO is operating in manual mode.

    :::important

    To determine the specific configuration of an AWS, {{ gcp_short }}, or global Microsoft Azure cluster that has a `spec.credentialsMode` of ’'`, `Mint`, or `Manual`, you must investigate further.

    AWS and {{ gcp_short }} clusters support using mint mode with the root secret deleted.
{%- if update %}
    If the cluster is specifically configured to use mint mode or uses mint mode by default, you must determine if the root secret is present on the cluster before updating.
{% endif %}

    An AWS, {{ gcp_short }}, or global Microsoft Azure cluster that uses manual mode might be configured to create and manage cloud credentials from outside of the cluster with AWS STS, {{ gcp_short }} Workload Identity, or {{ entra_first }}. You can determine whether your cluster uses this strategy by examining the cluster `Authentication` object.
    
    :::


{% if about_cco %}
1.  AWS or {{ gcp_short }} clusters that use the default (’'`) only: To determine whether the cluster is operating in mint or passthrough mode, run the following command:
    ```terminal
    $ oc get secret <secret_name> \
      -n kube-system \
      -o jsonpath \
      --template '{ .metadata.annotations }'
    ```

    where `<secret_name>` is `aws-creds` for AWS or `gcp-credentials` for {{ gcp_short }}.

    This command displays the value of the `.metadata.annotations` parameter in the cluster root secret object. The following output values are possible:
    *   `Mint`: The CCO is operating in mint mode.
    *   `Passthrough`: The CCO is operating in passthrough mode.

    If your cluster uses mint mode, you can also determine whether the cluster is operating without the root secret.
{% endif %}
1.  AWS or {{ gcp_short }} clusters that use mint mode only: To determine whether the cluster is operating without the root secret, run the following command:
    ```terminal
    $ oc get secret <secret_name> \
      -n=kube-system
    ```

    where `<secret_name>` is `aws-creds` for AWS or `gcp-credentials` for {{ gcp_short }}.

    If the root secret is present, the output of this command returns information about the secret. An error indicates that the root secret is not present on the cluster.
1.  AWS, {{ gcp_short }}, or global Microsoft Azure clusters that use manual mode only: To determine whether the cluster is configured to create and manage cloud credentials from outside of the cluster, run the following command:
    ```terminal
    $ oc get authentication cluster \
      -o jsonpath \
      --template='{ .spec.serviceAccountIssuer }'
    ```

    This command displays the value of the `.spec.serviceAccountIssuer` parameter in the cluster `Authentication` object.
    *   An output of a URL that is associated with your cloud provider indicates that the CCO is using manual mode with short-term credentials for components. These clusters are configured using the `ccoctl` utility to create and manage cloud credentials from outside of the cluster.
    *   An empty output indicates that the cluster is using the CCO in manual mode but was not configured using the `ccoctl` utility.

{% if context == "preparing-manual-creds-update" %}
{%- set update = false -%}
{% endif %}
{% if context == "about-cloud-credential-operator" %}
{%- set about_cco = false -%}
{% endif %}