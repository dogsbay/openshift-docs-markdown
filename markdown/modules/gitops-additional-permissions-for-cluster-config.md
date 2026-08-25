{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding permissions for cluster configuration {id="gitops-additional-permissions-for-cluster-config_{{ context }}"}

You can grant permissions for an Argo CD instance to manage cluster configuration. Create a cluster role with additional permissions and then create a new cluster role binding to associate the cluster role with a service account.

**Procedure**

1.  Log in to the {{ product_title }} web console as an admin.
1.  In the web console, select ***User Management*** -> ***Roles*** -> ***Create Role***. Use the following `ClusterRole` YAML template to add rules to specify the additional permissions.
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: secrets-cluster-role
    rules:
    - apiGroups: [""]
      resources: ["secrets"]
      verbs: ["*"]
    ```
1.  Click ***Create*** to add the cluster role.
1.  Now create the cluster role binding. In the web console, select ***User Management*** -> ***Role Bindings*** -> ***Create Binding***.
1.  Select ***All Projects*** from the ***Project*** drop-down.
1.  Click ***Create binding***.
1.  Select ***Binding type*** as ***Cluster-wide role binding (ClusterRoleBinding)***.
1.  Enter a unique value for the ***RoleBinding name***.
1.  Select the newly created cluster role or an existing cluster role from the drop down list.
1.  Select the ***Subject*** as ***ServiceAccount*** and the provide the ***Subject namespace*** and ***name***.
    1.  ***Subject namespace***: `openshift-gitops`
    1.  ***Subject name***: `openshift-gitops-argocd-application-controller`
1.  Click ***Create***. The YAML file for the `ClusterRoleBinding` object is as follows:
    ```yaml
    kind: ClusterRoleBinding
    apiVersion: rbac.authorization.k8s.io/v1
    metadata:
      name: cluster-role-binding
    subjects:
      - kind: ServiceAccount
        name: openshift-gitops-argocd-application-controller
        namespace: openshift-gitops
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: ClusterRole
      name: admin
    ```