{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manage {{ product_title }} administrators {id="managing-dedicated-administrators_{{ context }}"}

You can manage administrator roles by using the `cluster-admin` or `dedicated-admin` group on the cluster. Existing members of this group can edit membership through {{ cluster_manager_url }}. {._abstract}

**Procedure**

1.  Navigate to the **Cluster Details** page and select the **Access Control** tab.
1.  Select the **Cluster Roles and Access** tab and click **Add user**.
1.  Enter the user name and select your group.
1.  Click **Add user**.

    :::note

    Adding a user to the `cluster-admin` group can take several minutes to complete.
    
    :::

1.  Optional: To remove a {{ product_title }} administrator, click the Options menu {{ kebab }} to the right of the user and group combination and click **Delete**.