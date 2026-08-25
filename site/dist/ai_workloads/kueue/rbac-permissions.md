---
title: Configuring role-based permissions
---

# Configuring role-based permissions {#rbac-permissions}

You can configure role-based access control (RBAC) for your {{ kueue_name }} deployment to control which users can create specific {{ kueue_name }} objects.

## Cluster roles {#authentication-clusterroles}

The {{ kueue_name }} Operator deploys `kueue-batch-admin-role` and `kueue-batch-user-role` cluster roles by default.

kueue-batch-admin-role
:   This cluster role includes the permissions to manage cluster queues, local queues, workloads, and resource flavors.

kueue-batch-user-role
:   This cluster role includes the permissions to manage jobs and to view local queues and workloads.

## Additional resources {#_additional_resources}

- [Using RBAC to define and apply permissions](/authentication/using-rbac#using-rbac)
- [Glossary of common terms for OpenShift Container Platform authentication and authorization](/authentication/index#openshift-auth-common-terms_overview-of-authentication-authorization)
