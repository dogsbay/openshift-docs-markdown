{%- set _mod_docs_content_type = "CONCEPT" %}
# Short-term credential configuration for a {{ gcp_short }} cluster {id="installing-gcp-with-short-term-creds_{{ context }}"}

To install an {{ product_title }} cluster that is configured to use {{ gcp_short }} Workload Identity, you must configure the Cloud Credential Operator (CCO) utility and create the required {{ gcp_short }} resources for your cluster. {._abstract}

Cluster Operators use the credentials created by the CCO. The installation program does not use these credentials.

{% if context == "installing-gcp-shared-vpc" %}

:::important

When installing a cluster on a shared Virtual Private Cloud (VPC) by using short-lived credentials, you must grant the `compute.subnetworks.use` permission in the host project to Day 2 Operator service accounts.

After using the `ccoctl` utility to generate the {{ gcp_short }} credentials, manually grant this permission to the {{ cluster_capi_operator }} and Machine API Operator service accounts.

:::

{% endif %}