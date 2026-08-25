{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring permissions for batch administrators {id="configure-rbac-batch-admins_{{ context }}"}

You can configure permissions for batch administrators by binding the `kueue-batch-admin-role` cluster role to a user or group of users. {._abstract}

**Prerequisites**

{% include "./snippets/prereqs-snippet-yaml-admin.md" %}

**Procedure**

1.  Create a `ClusterRoleBinding` object as a YAML file:
    ```yaml title="Example ClusterRoleBinding object"
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: kueue-admins
    subjects:
    - kind: User
      name: admin@example.com
      apiGroup: rbac.authorization.k8s.io
    roleRef:
      kind: ClusterRole
      name: kueue-batch-admin-role
      apiGroup: rbac.authorization.k8s.io
    ```

    where:

    `metadata.name`
    :   Specifies the name of the `ClusterRoleBinding` object.

    `subjects`
    :   Specifies the user or group of users you want to provide user permissions for.

    `roleRef`
    :   Specifies the `kueue-batch-admin-role` cluster role.

1.  Apply the `ClusterRoleBinding` object:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```

**Verification**

*   You can verify that the `ClusterRoleBinding` object was applied correctly by running the following command and verifying that the output contains the correct information for the `kueue-batch-admin-role` cluster role:
    ```yaml
    $ oc describe clusterrolebinding.rbac
    ```
    ```terminal title="Example output"
    ...
    Name:         kueue-batch-admin-role
    Labels:       app.kubernetes.io/name=kueue
    Annotations:  <none>
    Role:
      Kind:  ClusterRole
      Name:  kueue-batch-admin-role
    Subjects:
      Kind            Name                      Namespace
      ----            ----                      ---------
      User            admin@example.com         admin-namespace
    ...
    ```