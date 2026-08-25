{%- set _mod_docs_content_type = "PROCEDURE" %}
# Grant additional permissions to individual groups {id="cloud-experts-entra-id-idp--additional-individual-groups_{{ context }}"}

When group claims are enabled, the cluster OAuth provider automatically creates or updates group memberships by using the group ID, but does not create `RoleBindings` or `ClusterRoleBindings`. You must create those bindings to grant group-based permissions. {._abstract}

To grant an automatically generated group access to the `cluster-admin` role, you must create a `ClusterRoleBinding` to the group ID.

**Procedure**

*   Create the `ClusterRoleBinding` by running the following command:
    ```terminal
    $ oc create clusterrolebinding cluster-admin-group --clusterrole=cluster-admin --group=<GROUP_ID>
    ```
    where:


    `<GROUP_ID>`
    :   Specifies the Entra ID group ID that you want to have cluster admin permissions.

    Now, any user in the specified group automatically receives `cluster-admin` access.