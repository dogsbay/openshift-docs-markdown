{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring permissions for users {id="configure-rbac-batch-users_{{ context }}"}

You can configure permissions for {{ kueue_name }} users by binding the `kueue-batch-user-role` cluster role to a user or group of users. {._abstract}

**Prerequisites**

{% include "./snippets/prereqs-snippet-yaml-admin.md" %}

**Procedure**

1.  Create a `RoleBinding` object as a YAML file:
    ```yaml title="Example ClusterRoleBinding object"
    apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      name: kueue-users
      namespace: user-namespace
    subjects:
    - kind: Group
      name: team-a@example.com
      apiGroup: rbac.authorization.k8s.io
    roleRef:
      kind: ClusterRole
      name: kueue-batch-user-role
      apiGroup: rbac.authorization.k8s.io

    ```

    where:

    `metadata.name`
    :   Specifies the name of the `RoleBinding` object.

    `metadata.namespace`
    :   Specifies the namespace the `RoleBinding` object applies to.

    `subjects`
    :   Specifies the user or group of users you want to provide user permissions for.

    `roleRef`
    :   Specifies the `kueue-batch-user-role` cluster role.

1.  Apply the `RoleBinding` object:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

*   You can verify that the `RoleBinding` object was applied correctly by running the following command and verifying that the output contains the correct information for the `kueue-batch-user-role` cluster role:
    ```yaml
    $ oc describe rolebinding.rbac
    ```
    ```terminal title="Example output"
    ...
    Name:         kueue-users
    Labels:       app.kubernetes.io/name=kueue
    Annotations:  <none>
    Role:
      Kind:  ClusterRole
      Name:  kueue-batch-user-role
    Subjects:
      Kind            Name                      Namespace
      ----            ----                      ---------
      Group           team-a@example.com        user-namespace
    ...
    ```