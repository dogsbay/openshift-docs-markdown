{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring user level access {id="configuring-user-level-access_{{ context }}"}

To manage and modify the user level access, configure the RBAC section in Argo CD custom resource. {._abstract}

**Procedure**

*   Edit the `argocd` Custom Resource:
    ```terminal
    $ oc edit argocd [argocd-instance-name] -n [namespace]
    ```
    ```yaml title="Output"
    metadata
    ...
    ...
      rbac:
        policy: 'g, rbacsystem:cluster-admins, role:admin'
        scopes: '[groups]'
    ```
*   Add the `policy` configuration to the `rbac` section and add the `name`, `email` and the `role` of the user:
    ```yaml
    metadata
    ...
    ...
    rbac:
        policy: <name>, <email>, role:<admin>
        scopes: '[groups]'
    ```


    :::note

    Currently, RHSSO cannot read the group information of {{ gitops_title }} users. Therefore, configure the RBAC at the user level.
    
    :::