{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a service account in {{ gcp_short }} {id="installation-gcp-service-account_{{ context }}"}

{{ product_title }} requires a {{ gcp_first }} service account that provides authentication and authorization to access data in the Google APIs. If you do not have an existing IAM service account that contains the required roles in your project, you must create one. {._abstract}


:::note

To reduce the scope of permissions granted to the main service account in your Google Cloud project while still being able to use the {{ gcp_short }} Container Storage Interface (CSI) Driver Operator, you can transfer the control of permissions from the project-wide service account to the control plane and compute node service accounts instead, thus reducing the scope of the permission. For more information, see Section _Reducing permissions while using the {{ gcp_short }} CSI Driver Operator_.

:::


**Prerequisites**

*   You created a project to host your cluster.

**Procedure**

1.  Create a service account in the project that you use to host your
{{ product_title }} cluster. See
[Creating a service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating_a_service_account)
in the {{ gcp_short }} documentation.
1.  Grant the service account the appropriate permissions. You can either
grant the individual permissions that follow or assign the `Owner` role to it.
See [Granting roles to a service account for specific resources](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource).

    :::note

    While making the service account an owner of the project is the easiest way to gain the required permissions, it means that service account has complete control over the project. You must determine if the risk that comes from offering that power is acceptable.
    
    :::

1.  You can create the service account key in JSON format, or attach the service account to a {{ gcp_short }} virtual machine.
See [Creating service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys) and [Creating and enabling service accounts for instances](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances) in the {{ gcp_short }} documentation.

    :::note

    If you use a virtual machine with an attached service account to create your cluster, you must set `credentialsMode: Manual` in the `install-config.yaml` file before installation.
    
    :::