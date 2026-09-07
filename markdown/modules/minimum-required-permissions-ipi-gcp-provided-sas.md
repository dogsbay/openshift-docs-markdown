{%- set _mod_docs_content_type = "REFERENCE" %}
# Required {{ gcp_short }} permissions for user-provided service accounts {id="minimum-required-permissions-ipi-gcp-provided-sas_{{ context }}"}

If your organization’s security policies prevent the installation program from creating service accounts, you can provide your own service accounts with the required roles for the control plane and compute nodes. {._abstract}

By default, the installation program creates a service account for the control plane and compute nodes.
The service account that the installation program uses requires the roles and permissions that are listed in the _Creating a service account in {{ gcp_short }}_ section, and the `resourcemanager.projects.getIamPolicy` and `resourcemanager.projects.setIamPolicy` permissions.
These permissions should be applied to the service account in the host project.
If this approach does not meet the security requirements of your organization, you can provide a service account email address for the control plane or compute nodes in the `install-config.yaml` file.
For more information, see the _Installation configuration parameters for {{ gcp_short }}_ page.
If you provide a service account for control plane nodes during an installation into a shared VPC, you must grant that service account the `roles/compute.networkUser` role in the host project.
If you want the installation program to automatically create firewall rules when you supply the control plane service account, you must grant that service account the `roles/compute.networkAdmin` and `roles/compute.securityAdmin` roles in the host project.
If you only supply the `roles/compute.networkUser` role, you must create the firewall rules manually.


:::important

The following roles are required for user-provided service accounts for control plane and compute nodes.

:::


The following roles are required for user-provided service accounts for control plane nodes:

*   `roles/compute.instanceAdmin`
*   `roles/compute.networkAdmin`
*   `roles/compute.securityAdmin`
*   `roles/storage.admin`

The following roles are required for user-provided service accounts for compute nodes:

*   `roles/compute.viewer`
*   `roles/storage.admin`
*   `roles/artifactregistry.reader`