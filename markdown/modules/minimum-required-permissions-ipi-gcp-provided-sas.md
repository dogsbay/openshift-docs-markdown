{%- set _mod_docs_content_type = "PROCEDURE" %}
# Required {{ gcp_short }} permissions for user-provided service accounts {id="minimum-required-permissions-ipi-gcp-provided-sas_{{ context }}"}

When you are installing a cluster, the compute and control plane nodes require their own service accounts.
By default, the installation program creates a service account for the control plane and compute nodes.
The service account that the installation program uses requires the roles and permissions that are listed in the _Creating a service account in {{ gcp_short }}_ section, as well as the `resourcemanager.projects.getIamPolicy` and `resourcemanager.projects.setIamPolicy` permissions.
These permissions should be applied to the service account in the host project.
If this approach does not meet the security requirements of your organization, you can provide a service account email address for the control plane or compute nodes in the `install-config.yaml` file.
For more information, see the _Installation configuration parameters for {{ gcp_short }}_ page.
If you provide a service account for control plane nodes during an installation into a shared VPC, you must grant that service account the `roles/compute.networkUser` role in the host project.
If you want the installation program to automatically create firewall rules when you supply the control plane service account, you must grant that service account the `roles/compute.networkAdmin` and `roles/compute.securityAdmin` roles in the host project.
If you only supply the `roles/compute.networkUser` role, you must create the firewall rules manually.


:::important

The following roles are required for user-provided service accounts for control plane and compute nodes respectively.

:::


<details>
<summary>Required roles	for control plane nodes</summary>

*   `roles/compute.instanceAdmin`
*   `roles/compute.networkAdmin`
*   `roles/compute.securityAdmin`
*   `roles/storage.admin`
</details>

<details>
<summary>Required roles for compute nodes</summary>

*   `roles/compute.viewer`
*   `roles/storage.admin`
*   `roles/artifactregistry.reader`
</details>