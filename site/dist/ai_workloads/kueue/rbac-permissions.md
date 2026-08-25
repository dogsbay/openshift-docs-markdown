---
title: Configuring role-based permissions
---

# Configuring role-based permissions {#rbac-permissions}

You can configure role-based access control (RBAC) for your Red Hat build of Kueue deployment to control which users can create specific Red Hat build of Kueue objects.

## Cluster roles {#authentication-clusterroles}

The Red Hat build of Kueue Operator deploys `kueue-batch-admin-role` and `kueue-batch-user-role` cluster roles by default.

kueue-batch-admin-role
:   This cluster role includes the permissions to manage cluster queues, local queues, workloads, and resource flavors.

kueue-batch-user-role
:   This cluster role includes the permissions to manage jobs and to view local queues and workloads.

## Configuring permissions for batch administrators {#configure-rbac-batch-admins_rbac-permissions}

You can configure permissions for batch administrators by binding the `kueue-batch-admin-role` cluster role to a user or group of users.

**Prerequisites**

- The Red Hat build of Kueue Operator is installed on your cluster.
- You have cluster administrator permissions.
- You have installed the OpenShift CLI (`oc`).

**Procedure**

1. Create a `ClusterRoleBinding` object as a YAML file:

   ```yaml {title="Example ClusterRoleBinding object"}
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
2. Apply the `ClusterRoleBinding` object:

   ```terminal
   $ oc apply -f <filename>.yaml
   ```

**Verification**

- You can verify that the `ClusterRoleBinding` object was applied correctly by running the following command and verifying that the output contains the correct information for the `kueue-batch-admin-role` cluster role:

  ```yaml
  $ oc describe clusterrolebinding.rbac
  ```

  ```terminal {title="Example output"}
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

## Configuring permissions for users {#configure-rbac-batch-users_rbac-permissions}

You can configure permissions for Red Hat build of Kueue users by binding the `kueue-batch-user-role` cluster role to a user or group of users.

**Prerequisites**

- The Red Hat build of Kueue Operator is installed on your cluster.
- You have cluster administrator permissions.
- You have installed the OpenShift CLI (`oc`).

**Procedure**

1. Create a `RoleBinding` object as a YAML file:

   ```yaml {title="Example ClusterRoleBinding object"}
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
2. Apply the `RoleBinding` object:

   ```terminal
   $ oc apply -f <filename>.yaml
   ```

**Verification**

- You can verify that the `RoleBinding` object was applied correctly by running the following command and verifying that the output contains the correct information for the `kueue-batch-user-role` cluster role:

  ```yaml
  $ oc describe rolebinding.rbac
  ```

  ```terminal {title="Example output"}
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

## Additional resources {#_additional_resources}

- [Using RBAC to define and apply permissions](/openshift-docs-markdown/authentication/using-rbac#using-rbac)
- [Glossary of common terms for OpenShift Container Platform authentication and authorization](/openshift-docs-markdown/authentication/index#openshift-auth-common-terms_overview-of-authentication-authorization)
