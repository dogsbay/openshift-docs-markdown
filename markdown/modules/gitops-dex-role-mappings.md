{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mapping users to specific roles {id="gitops-dex-role-mappings_{{ context }}"}

Argo CD cannot map users to specific roles if they have a direct `ClusterRoleBinding` role. You can manually change the role as `role:admin` on SSO through OpenShift.

**Procedure**

1.  Create a group named `cluster-admins`.
    ```terminal
    $ oc adm groups new cluster-admins
    ```
1.  Add the user to the group.
    ```terminal
    $ oc adm groups add-users cluster-admins USER
    ```
1.  Apply the `cluster-admin` `ClusterRole` to the group:
    ```terminal
    $ oc adm policy add-cluster-role-to-group cluster-admin cluster-admins
    ```