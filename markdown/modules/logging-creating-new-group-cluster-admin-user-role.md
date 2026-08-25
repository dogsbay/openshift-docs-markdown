{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a new group for the cluster-admin user role {id="logging-creating-new-group-cluster-admin-user-role_{{ context }}"}

{% include "./snippets/logging-clusteradmin-access-logs-snip.md" %}

Use the following procedure to create a new group for users with `cluster-admin` permissions.

**Procedure**

1.  Enter the following command to create a new group:
    ```terminal
    $ oc adm groups new cluster-admin
    ```
1.  Enter the following command to add the desired user to the `cluster-admin` group:
    ```terminal
    $ oc adm groups add-users cluster-admin <username>
    ```
1.  Enter the following command to add `cluster-admin` user role to the group:
    ```terminal
    $ oc adm policy add-cluster-role-to-group cluster-admin cluster-admin
    ```