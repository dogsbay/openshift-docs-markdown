{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the {{ gcp_short }} project that hosts your shared VPC network {id="installation-gcp-user-infra-config-host-project-vpc_{{ context }}"}

If you use a shared Virtual Private Cloud (VPC) to host your {{ product_title }} cluster in {{ gcp_first }}, you must configure the project that hosts it.


:::note

If you already have a project that hosts the shared VPC network, review this section to ensure that the project meets all of the requirements to install an {{ product_title }} cluster.

:::


**Procedure**

1.  Create a project to host the shared VPC for your {{ product_title }} cluster. See
[Creating and Managing Projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects) in the {{ gcp_short }} documentation.
1.  Create a service account in the project that hosts your shared VPC. See
[Creating a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating_a_service_account)
in the {{ gcp_short }} documentation.
1.  Grant the service account the appropriate permissions. You can either
grant the individual permissions that follow or assign the `Owner` role to it.
See [Granting roles to a service account for specific resources](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource).

    :::note

    While making the service account an owner of the project is the easiest way to gain the required permissions, it means that service account has complete control over the project. You must determine if the risk that comes from offering that power is acceptable.

    The service account for the project that hosts the shared VPC network requires the following roles:

    *   Compute Network User
    *   Compute Security Admin
    *   Cloud Infrastructure Manager Admin
    *   DNS Administrator
    *   Security Admin
    *   Network Management Admin
    
    :::