{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoking administrator access using {{ cluster_manager }} console {id="rosa-delete-users_{{ context }}"}

You can revoke the `dedicated-admin` or `cluster-admin` access of users through {{ cluster_manager }} console. Users will be able to access the cluster without administrator privileges. {._abstract}

**Prerequisites**

*   You have added an Identity Provider (IDP) to your cluster.
*   You have the IDP user name for the user whose privileges you are revoking.
*   You are logged in to {{ cluster_manager }} console using an {{ cluster_manager }} account that you used to create the cluster, the organization administrator user, or the super administrator user.

**Procedure**

1.  On the **Cluster List** tab of {{ cluster_manager }}, select the name of your cluster to view the cluster details.
1.  Select **Access control** > **Cluster Roles and Access**.
1.  For the user that you want to remove, click the Options menu {{ kebab }} to the right of the user and group combination and click **Delete**.