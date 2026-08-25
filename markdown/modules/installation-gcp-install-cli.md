{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing and configuring CLI tools for {{ gcp_short }} {id="installation-gcp-install-cli_{{ context }}"}

To install {{ product_title }} on {{ gcp_first }} using user-provisioned
infrastructure, you must install and configure the CLI tools for {{ gcp_short }}.

**Prerequisites**

*   You created a project to host your cluster.
*   You created a service account and granted it the required permissions.

**Procedure**

1.  Install the following binaries in `$PATH`:
    *   `gcloud`
    *   `gsutil`

    See [Install the latest Cloud SDK version](https://cloud.google.com/sdk/docs/#install_the_latest_cloud_tools_version_cloudsdk_current_version)
    in the {{ gcp_short }} documentation.
1.  Authenticate using the `gcloud` tool with your configured service account.

    See [Authorizing with a service account](https://cloud.google.com/sdk/docs/authorizing#authorizing_with_a_service_account) in the {{ gcp_short }} documentation.