{%- set _mod_docs_content_type = "PROCEDURE" %}

# Granting user access to extension resources by using custom role bindings {id="olmv1-granting-user-access-binding_{{ context }}"}

As a cluster administrator, you can manually create and configure role-based access control (RBAC) policies to grant user access to extension resources by using custom role bindings. {._abstract}

**Prerequisites**

*   A cluster extension has been installed on your cluster.
*   You have a list of API groups and resource names, as described in "Finding API groups and resources exposed by a cluster extension".

**Procedure**

1.  If the installed cluster extension does not provide default cluster roles, manually create one or more roles:
    1.  Consider the use cases for the set of roles described in "Common default cluster roles for users".

        For example, create one or more of the following `ClusterRole` object definitions, replacing `<cluster_extension_api_group>` and `<cluster_extension_custom_resource>` with the actual API group and resource names provided by the installed cluster extension:
        ```yaml title="Example view-custom-resource.yaml file"
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: view-custom-resource
        rules:
        - apiGroups:
          - <cluster_extension_api_group>
          resources:
          - <cluster_extension_custom_resources>
          verbs:
          - get
          - list
          - watch
        ```
        ```yaml title="Example edit-custom-resource.yaml file"
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: edit-custom-resource
        rules:
        - apiGroups:
          - <cluster_extension_api_group>
          resources:
          - <cluster_extension_custom_resources>
          verbs:
          - get
          - list
          - watch
          - create
          - update
          - patch
          - delete 
        ```
        ```yaml title="Example admin-custom-resource.yaml file"
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: admin-custom-resource
        rules:
        - apiGroups:
          - <cluster_extension_api_group>
          resources:
          - <cluster_extension_custom_resources>
          verbs:
          - '*'
        ```

        Setting a wildcard (`*`) in  the `rules.verbs` field allows all actions on the specified resources.
    1.  Create the cluster roles by running the following command for any YAML files you created:
        ```terminal
        $ oc create -f <filename>.yaml
        ```
1.  Associate a cluster role to specific users or groups to grant them the necessary permissions for the resource by binding the cluster roles to individual user or group names:
    1.  Create an object definition for either a _cluster role binding_ to grant access across all namespaces or a _role binding_ to grant access within a specific namespace:
        *   The following example cluster role bindings grant read-only `view` access to the custom resource across all namespaces:
            ```yaml title="Example ClusterRoleBinding object for a user"
            apiVersion: rbac.authorization.k8s.io/v1
            kind: ClusterRoleBinding
            metadata:
              name: view-custom-resource-binding
            subjects:
            - kind: User
              name: <user_name>
            roleRef:
              kind: ClusterRole
              name: view-custom-resource
              apiGroup: rbac.authorization.k8s.io
            ```
            ```yaml title="Example ClusterRoleBinding object for a user"
            apiVersion: rbac.authorization.k8s.io/v1
            kind: ClusterRoleBinding
            metadata:
              name: view-custom-resource-binding
            subjects:
            - kind: Group
              name: <group_name>
            roleRef:
              kind: ClusterRole
              name: view-custom-resource
              apiGroup: rbac.authorization.k8s.io
            ```

        *   The following role binding restricts `edit` permissions to a specific namespace:
            ```yaml title="Example RoleBinding object for a user"
            apiVersion: rbac.authorization.k8s.io/v1
            kind: RoleBinding
            metadata:
              name: edit-custom-resource-edit-binding
              namespace: <namespace>
            subjects:
            - kind: User
              name: <username>
            roleRef:
              kind: Role
              name: custom-resource-edit
              apiGroup: rbac.authorization.k8s.io
            ```
    1.  Save your object definition to a YAML file.
    1.  Create the object by running the following command:
        ```terminal
        $ oc create -f <filename>.yaml
        ```