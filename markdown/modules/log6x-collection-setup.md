{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up log collection {id="log6x-collection-setup_{{ context }}"}

This release of Cluster Logging requires administrators to explicitly grant log collection permissions to the service account associated with **ClusterLogForwarder**. This was not required in previous releases for the legacy logging scenario consisting of a **ClusterLogging** and, optionally, a **ClusterLogForwarder.logging.openshift.io** resource.

The {{ clo }} provides `collect-audit-logs`, `collect-application-logs`, and `collect-infrastructure-logs` cluster roles, which enable the collector to collect audit logs, application logs, and infrastructure logs respectively.

Setup log collection by binding the required cluster roles to your service account.

## Legacy service accounts {id="_legacy_service_accounts"}
To use the existing legacy service account `logcollector`, create the following **ClusterRoleBinding**:

```terminal
$ oc adm policy add-cluster-role-to-user collect-application-logs system:serviceaccount:openshift-logging:logcollector
```

```terminal
$ oc adm policy add-cluster-role-to-user collect-infrastructure-logs system:serviceaccount:openshift-logging:logcollector
```

Additionally, create the following **ClusterRoleBinding** if collecting audit logs:

```terminal
$ oc adm policy add-cluster-role-to-user collect-audit-logs system:serviceaccount:openshift-logging:logcollector
```

## Creating service accounts {id="_creating_service_accounts"}

**Prerequisites**

*   The {{ clo }} is installed in the `openshift-logging` namespace.
*   You have administrator permissions.

**Procedure**

1.  Create a service account for the collector. If you want to write logs to storage that requires a token for authentication, you must include a token in the service account.
1.  Bind the appropriate cluster roles to the service account:
    ```terminal title="Example binding command"
    $ oc adm policy add-cluster-role-to-user <cluster_role_name> system:serviceaccount:<namespace_name>:<service_account_name>
    ```

### Cluster Role Binding for your Service Account {id="_cluster_role_binding_for_your_service_account"}
The role_binding.yaml file binds the ClusterLogging operator’s ClusterRole to a specific ServiceAccount, allowing it to manage Kubernetes resources cluster-wide.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: manager-rolebinding
roleRef:                                           (1)
  apiGroup: rbac.authorization.k8s.io              (2)
  kind: ClusterRole                                (3)
  name: cluster-logging-operator                   (4)
subjects:                                          (5)
  - kind: ServiceAccount                           (6)
    name: cluster-logging-operator                 (7)
    namespace: openshift-logging                   (8)
```
1.  roleRef: References the ClusterRole to which the binding applies.
1.  apiGroup: Indicates the RBAC API group, specifying that the ClusterRole is part of Kubernetes' RBAC system.
1.  kind: Specifies that the referenced role is a ClusterRole, which applies cluster-wide.
1.  name: The name of the ClusterRole being bound to the ServiceAccount, here cluster-logging-operator.
1.  subjects: Defines the entities (users or service accounts) that are being granted the permissions from the ClusterRole.
1.  kind: Specifies that the subject is a ServiceAccount.
1.  Name: The name of the ServiceAccount being granted the permissions.
1.  namespace: Indicates the namespace where the ServiceAccount is located.

### Writing application logs {id="_writing_application_logs"}
The write-application-logs-clusterrole.yaml file defines a ClusterRole that grants permissions to write application logs to the Loki logging application.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-logging-write-application-logs
rules:                                              (1)
  - apiGroups:                                      (2)
      - loki.grafana.com                            (3)
    resources:                                      (4)
      - application                                 (5)
    resourceNames:                                  (6)
      - logs                                        (7)
    verbs:                                          (8)
      - create                                      (9)
```
1.  rules: Specifies the permissions granted by this ClusterRole.
1.  apiGroups: Refers to the API group loki.grafana.com, which relates to the Loki logging system.
1.  loki.grafana.com: The API group for managing Loki-related resources.
1.  resources: The resource type that the ClusterRole grants permission to interact with.
1.  application: Refers to the application resources within the Loki logging system.
1.  resourceNames: Specifies the names of resources that this role can manage.
1.  logs: Refers to the log resources that can be created.
1.  verbs: The actions allowed on the resources.
1.  create: Grants permission to create new logs in the Loki system.

### Writing audit logs {id="_writing_audit_logs"}
The write-audit-logs-clusterrole.yaml file defines a ClusterRole that grants permissions to create audit logs in the Loki logging system.
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-logging-write-audit-logs
rules:                                              (1)
  - apiGroups:                                      (2)
      - loki.grafana.com                            (3)
    resources:                                      (4)
      - audit                                       (5)
    resourceNames:                                  (6)
      - logs                                        (7)
    verbs:                                          (8)
      - create                                      (9)
```
1.  rules: Defines the permissions granted by this ClusterRole.
1.  apiGroups: Specifies the API group loki.grafana.com.
1.  loki.grafana.com: The API group responsible for Loki logging resources.
1.  resources: Refers to the resource type this role manages, in this case, audit.
1.  audit: Specifies that the role manages audit logs within Loki.
1.  resourceNames: Defines the specific resources that the role can access.
1.  logs: Refers to the logs that can be managed under this role.
1.  verbs: The actions allowed on the resources.
1.  create: Grants permission to create new audit logs.

### Writing infrastructure logs {id="_writing_infrastructure_logs"}
The write-infrastructure-logs-clusterrole.yaml file defines a ClusterRole that grants permission to create infrastructure logs in the Loki logging system.

```yaml title="Sample YAML"
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-logging-write-infrastructure-logs
rules:                                              (1)
  - apiGroups:                                      (2)
      - loki.grafana.com                            (3)
    resources:                                      (4)
      - infrastructure                              (5)
    resourceNames:                                  (6)
      - logs                                        (7)
    verbs:                                          (8)
      - create                                      (9)
```
1.  rules: Specifies the permissions this ClusterRole grants.
1.  apiGroups: Specifies the API group for Loki-related resources.
1.  loki.grafana.com: The API group managing the Loki logging system.
1.  resources: Defines the resource type that this role can interact with.
1.  infrastructure: Refers to infrastructure-related resources that this role manages.
1.  resourceNames: Specifies the names of resources this role can manage.
1.  logs: Refers to the log resources related to infrastructure.
1.  verbs: The actions permitted by this role.
1.  create: Grants permission to create infrastructure logs in the Loki system.

### ClusterLogForwarder editor role {id="_clusterlogforwarder_editor_role"}
The clusterlogforwarder-editor-role.yaml file defines a ClusterRole that allows users to manage ClusterLogForwarders in OpenShift.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: clusterlogforwarder-editor-role
rules:                                              (1)
  - apiGroups:                                      (2)
      - observability.openshift.io                  (3)
    resources:                                      (4)
      - clusterlogforwarders                        (5)
    verbs:                                          (6)
      - create                                      (7)
      - delete                                      (8)
      - get                                         (9)
      - list                                        (10)
      - patch                                       (11)
      - update                                      (12)
      - watch                                       (13)
```
1.  rules: Specifies the permissions this ClusterRole grants.
1.  apiGroups: Refers to the OpenShift-specific API group
1.  obervability.openshift.io: The API group for managing observability resources, like logging.
1.  resources: Specifies the resources this role can manage.
1.  clusterlogforwarders: Refers to the log forwarding resources in OpenShift.
1.  verbs: Specifies the actions allowed on the ClusterLogForwarders.
1.  create: Grants permission to create new ClusterLogForwarders.
1.  delete: Grants permission to delete existing ClusterLogForwarders.
1.  get: Grants permission to retrieve information about specific ClusterLogForwarders.
1.  list: Allows listing all ClusterLogForwarders.
1.  patch: Grants permission to partially modify ClusterLogForwarders.
1.  update: Grants permission to update existing ClusterLogForwarders.
1.  watch: Grants permission to monitor changes to ClusterLogForwarders.