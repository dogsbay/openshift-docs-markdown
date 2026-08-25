{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting your cluster {id="deleting-cluster_{{ context }}"}

You can delete your {{ product_title }} cluster in {{ cluster_manager_first }}. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.

**Procedure**

1.  From {{ cluster_manager_url }}, select the cluster you want to delete.
1.  Select **Delete cluster** from the **Actions** drop-down menu.
1.  Type the name of the cluster highlighted in bold, then click **Delete**. Cluster deletion occurs automatically.


    :::note

    If you delete a cluster that was installed into a {{ gcp_short }} Shared VPC, inform the VPC owner of the host project to remove the IAM policy roles granted to the service account that was referenced during cluster creation.
    
    :::