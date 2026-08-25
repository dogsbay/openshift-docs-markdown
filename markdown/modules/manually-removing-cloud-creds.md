{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing cloud provider credentials {id="manually-removing-cloud-creds_{{ context }}"}

You can remove administrator-level cloud provider credentials from a cluster that uses the Cloud Credential Operator in mint mode to reduce the risk of credential exposure after installation. {._abstract}

For clusters that use the Cloud Credential Operator (CCO) in mint mode, the administrator-level credential is stored in the `kube-system` namespace. 
The CCO uses the `admin` credential to process the `CredentialsRequest` objects in the cluster and create users for components with limited permissions.

After installing an {{ product_title }} cluster with the CCO in mint mode, you can remove the administrator-level credential secret from the `kube-system` namespace in the cluster. 
The CCO only requires the administrator-level credential during changes that require reconciling new or modified `CredentialsRequest` custom resources, such as minor cluster version updates.


:::note

Before performing a minor version cluster update (for example, updating from {{ product_title }} {{ ocp_nminus1 }} to {{ product_version }}), you must reinstate the credential secret with the administrator-level credential. 
If the credential is not present, the update might be blocked.

:::


**Prerequisites**

*   Your cluster is installed on a platform that supports removing cloud credentials from the CCO. 
Supported platforms are AWS and {{ gcp_short }}.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Workloads** -> **Secrets**.
1.  In the table on the **Secrets** page, find the root secret for your cloud provider.
    | Platform | Secret name |
    | --- | --- |
    | AWS | `aws-creds` |
    | {{ gcp_short }} | `gcp-credentials` |
1.  Click the Options menu {{ kebab }} in the same row as the secret and select **Delete Secret**.