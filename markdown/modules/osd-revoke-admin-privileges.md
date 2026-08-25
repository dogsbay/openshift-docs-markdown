{%- set _mod_docs_content_type = "PROCEDURE" %}
# Revoke administrator privileges from a user {id="osd-revoke-admin-privileges_{{ context }}"}

After you have granted `dedicated-admin` privileges to a user, you can revoke those privileges when they are no longer needed. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.
*   You have configured a GitHub identity provider for your cluster and added an identity provider user.
*   You granted `dedicated-admin` privileges to a user.

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Click the **Access control** tab.
1.  In the **Cluster Roles and Access** tab, click {{ kebab }} next to a user and click **Delete**.

**Verification**

*   After revoking the privileges, the user is no longer listed as part of the `dedicated-admins` group under **Access control** > **Cluster Roles and Access** on the {{ cluster_manager }} page for your cluster.