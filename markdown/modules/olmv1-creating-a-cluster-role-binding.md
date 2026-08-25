{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a cluster role binding for an extension {id="olmv1-creating-a-cluster-rol-binding_{{ context }}"}

After you have created a service account and cluster role, you must bind the cluster role to the service account with a cluster role binding manifest. {._abstract}

**Prerequisites**

*   Access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have created and applied the following resources for the extension you want to install:
    *   Namespace
    *   Service account
    *   Cluster role

**Procedure**

1.  Create a cluster role binding to bind the cluster role to the service account, similar to the following example:
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: <extension>-installer-binding
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: <extension>-installer-clusterrole
    subjects:
    - kind: ServiceAccount
      name: <extension>-installer
      namespace: <namespace>
    ```
    ```yaml title="Example pipelines-cluster-role-binding.yaml file"
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: pipelines-installer-binding
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: pipelines-installer-clusterrole
    subjects:
    - kind: ServiceAccount
      name: pipelines-installer
      namespace: pipelines
    ```
1.  Apply the cluster role binding by running the following command:
    ```terminal
    $ oc apply -f pipelines-cluster-role-binding.yaml
    ```