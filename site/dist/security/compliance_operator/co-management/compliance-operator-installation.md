---
title: Installing the Compliance Operator
---

# Installing the Compliance Operator {#compliance-operator-installation}

Before you can use the Compliance Operator, you must ensure it is deployed in the cluster.

> [!IMPORTANT]
> All cluster nodes must have the same release version in order for this Operator to function properly. As an example, for nodes running {{ op_system }}, all nodes must have the same {{ op_system }} version.

> [!IMPORTANT]
> The Compliance Operator might report incorrect results on managed platforms, such as OpenShift Dedicated, Red Hat OpenShift Service on AWS Classic, and Microsoft Azure Red Hat OpenShift. For more information, see the Knowledgebase article on Compliance Operator reports on Managed Services.

> [!IMPORTANT]
> Before deploying the Compliance Operator, you are required to define persistent storage in your cluster to store the raw results output. For more information, see "Persistent storage overview" and "Managing the default storage class".

> [!IMPORTANT]
> If the `restricted` Security Context Constraints (SCC) have been modified to contain the `system:authenticated` group or has added `requiredDropCapabilities`, the Compliance Operator might not function properly due to permissions issues. You can create a custom SCC for the Compliance Operator scanner pod service account. For more information, see Additional resources.

## Additional resources {#additional-resources_compliance-operator-installation}

- [Compliance Operator reports incorrect results on Managed Services](https://access.redhat.com/solutions/6983418)
- [Persistent storage overview](/storage/understanding-persistent-storage#persistent-storage-overview_understanding-persistent-storage)
- [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
- [Creating a custom SCC for the Compliance Operator](/security/compliance_operator/co-scans/compliance-operator-advanced#compliance-custom-scc_compliance-advanced)
- [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
