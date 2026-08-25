---
title: Syncing LDAP groups
---

# Syncing LDAP groups {#ldap-syncing}

Sync LDAP groups with OpenShift Container Platform so you can manage user membership and permissions using groups stored in your LDAP directory.

As an administrator,

you can use groups to manage users, change their permissions, and enhance collaboration. Your organization may have already created user groups and stored them in an LDAP server. OpenShift Container Platform can sync those LDAP records with internal OpenShift Container Platform records, enabling you to manage your groups in one place. OpenShift Container Platform currently supports group sync with LDAP servers using three common schemas for defining group membership: RFC 2307, Active Directory, and augmented Active Directory.

For more information on configuring LDAP, see "Configuring an LDAP identity provider".

> [!NOTE]
> You must have `cluster-admin` privileges to sync groups.

**Additional resources**

- [Configuring an LDAP identity provider](/openshift-docs-markdown/authentication/identity_providers/configuring-ldap-identity-provider#configuring-ldap-identity-provider)
- [Creating cron jobs](/openshift-docs-markdown/nodes/jobs/nodes-nodes-jobs#nodes-nodes-jobs-creating-cron_nodes-nodes-jobs)

**Additional resources**

- [LDAP nested membership sync](#ldap-syncing-nesting-about_ldap-syncing-groups)
- [Configuring an LDAP identity provider](/openshift-docs-markdown/authentication/identity_providers/configuring-ldap-identity-provider#configuring-ldap-identity-provider)
