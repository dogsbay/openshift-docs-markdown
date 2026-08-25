---
title: Dynamic provisioning
---

# Dynamic provisioning {#dynamic-provisioning}

In dynamic provisioning, instead of a manually creating a pool of persistent volumes (PVs), an administrator creates a storage class. Using the storage class, OpenShift Container Platform automatically triggers the storage backend to create a brand-new volume of the exact size and type requested, creates the PV object, and then the PV binds to the persistent volume claim (PVC).

**Additional resources**

- [AWS documentation](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)
