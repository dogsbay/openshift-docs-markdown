{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a cluster admin {id="creating-cluster-admin_{{ context }}"}

To grant a user full administrative access to the cluster, you can bind the `cluster-admin` cluster role to that user. {._abstract}

The `cluster-admin` role is required to perform administrator level tasks on the {{ product_title }} cluster, such as modifying
cluster resources.

**Prerequisites**

*   You must have created a user to define as the cluster admin.

**Procedure**

*   Define the user as a cluster admin:
    ```terminal
    $ oc adm policy add-cluster-role-to-user cluster-admin <user>
    ```