---
title: Understanding secrets management in OpenShift Container Platform
---

# Understanding secrets management in OpenShift Container Platform {#understanding-secrets-management}

Secret management tools can be used to automate the lifecycle of sensitive data, such as passwords, private files, and certificates, by providing a centralized system to control and monitor access. This approach enhances security by limiting the uncontrolled spread of secrets and enables automation for the entire secret lifecycle, including updates, expiration, and removal.

OpenShift Container Platform uses a flexible Operator and plugin design to decouple your workloads from external secret managers, ensuring you are not locked into a single vendor. In this model, the Operator acts as an intermediary, while a vendor-specific plugin manages communication between the cluster and the external storage. This allows applications to access secrets without needing to know the details of where or how they are stored.

**Additional resources**

- [Secrets Store Container Storage Interface Driver Operator](/storage/container_storage_interface/persistent-storage-csi-secrets-store#persistent-storage-csi-secrets-store)
- [{{ external_secrets_operator }}](/security/external_secrets_operator/index#external-secrets-operator-about)
- [{{ cert_manager_operator }}](/security/cert_manager_operator/index#cert-manager-operator-about)
