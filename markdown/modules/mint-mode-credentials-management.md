{%- set _mod_docs_content_type = "CONCEPT" %}
# About mint mode credentials management {id="mint-mode-credentials-management_{{ context }}"}

When using the Cloud Credential Operator (CCO) in mint mode, you should be familiar with how the CCO uses provider credentials. {._abstract}

For clusters that use the CCO in mint mode, the administrator-level credential is stored in the `kube-system` namespace. 
The CCO uses the `admin` credential to process the `CredentialsRequest` objects in the cluster and create users for components with limited permissions.

With mint mode, each cluster component has only the specific permissions it requires.
Cloud credential reconciliation is automatic and continuous so that components can perform actions that require additional credentials or permissions.

For example, a minor version cluster update (such as updating from {{ product_title }} {{ ocp_nminus1 }} to {{ product_version }}) might include an updated `CredentialsRequest` resource for a cluster component.
The CCO, operating in mint mode, uses the `admin` credential to process the `CredentialsRequest` resource and create users with limited permissions to satisfy the updated authentication requirements.


:::note

By default, mint mode requires storing the `admin` credential in the cluster `kube-system` namespace. If this approach does not meet the security requirements of your organization, you can remove the credential after installing the cluster. For more information, see "Removing cloud provider credentials".

:::