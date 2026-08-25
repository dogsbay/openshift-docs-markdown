---
title: Quorum restoration
---

# Quorum restoration {#dr-quorum-restoration}

You can restore etcd quorum on your OpenShift Container Platform cluster by running the `quorum-restore.sh` script on a recovery host when quorum loss leaves the API read-only. After quorum is restored, the API returns to read/write mode.

## Additional resources {#additional-resources_dr-quorum-restoration}

- [Installing a user-provisioned cluster on bare metal](/openshift-docs-markdown/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
- [Replacing a bare-metal control plane node](/openshift-docs-markdown/installing/installing_bare_metal/bare-metal-expanding-the-cluster#replacing-a-bare-metal-control-plane-node_bare-metal-expanding)
