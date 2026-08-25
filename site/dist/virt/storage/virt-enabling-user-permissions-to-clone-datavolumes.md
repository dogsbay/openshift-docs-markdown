---
title: Enabling user permissions to clone data volumes across namespaces
---

# Enabling user permissions to clone data volumes across namespaces {#virt-enabling-user-permissions-to-clone-datavolumes}

By default, users cannot clone resources between namespaces. To enable cloning, a user with the `cluster-admin` role must create and bind a cluster role that grants the required permissions.

To enable a user to clone a virtual machine to another namespace, a user with the `cluster-admin` role must create a new cluster role. Bind this cluster role to a user to enable them to clone virtual machines to the destination namespace.
