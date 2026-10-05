{%- set _mod_docs_content_type = "PROCEDURE" %}
# Delete your cluster {id="deleting-cluster_{{ context }}"}

You can delete your {{ product_title }} cluster in {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.

**Procedure**

1.  From {{ cluster_manager_url }}, select the cluster you want to delete.
1.  Select **Delete cluster** from the **Actions** drop-down menu.
1.  Type the name of the cluster highlighted in bold, then click **Delete**. Cluster deletion occurs automatically.

    :::note

    If you delete a cluster that was installed into a {{ gcp_short }} Shared VPC, inform the VPC owner of the host project to complete the following cleanup steps:

    *   Remove the IAM policy roles or custom roles granted to the service accounts that were referenced during cluster creation.
    *   If firewall rules were pre-created on the host project for reduced permissions, delete the firewall rules associated with the cluster.
    
    :::