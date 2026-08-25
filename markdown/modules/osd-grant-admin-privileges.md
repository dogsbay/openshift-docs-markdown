{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting administrator privileges to a user {id="osd-grant-admin-privileges_{{ context }}"}

After you have configured an identity provider for your cluster and added a user to the identity provider, you can grant `dedicated-admin` cluster privileges to the user. {._abstract}

**Prerequisites**

*   You logged in to {{ cluster_manager_url }}.
*   You created an {{ product_title }} cluster.
*   You configured an identity provider for your cluster.

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Click the **Access control** tab.
1.  In the **Cluster Roles and Access** tab, click **Add user**.
1.  Enter the user ID of an identity provider user.
1.  Click **Add user** to grant `dedicated-admin` cluster privileges to the user.

**Verification**

*   After granting the privileges, the user is listed as part of the `dedicated-admins` group under **Access control** -> **Cluster Roles and Access** on the {{ cluster_manager }} page for your cluster.