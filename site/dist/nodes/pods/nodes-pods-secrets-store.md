---
title: Providing sensitive data to pods by using an external secrets store
---

# Providing sensitive data to pods by using an external secrets store {#nodes-pods-secrets-store}

As an alternative to using `secret` objects to provide sensitive information, such as passwords and user names, to applications, you can use an external secret management system to store the information. You can then use the {{ secrets_store_operator }} to access the information and mount the secret content as a pod volume. Using an external secret store protects information that you do not want developers to have and can be more secure than `secret` objects.

 **Additional resources**

- [CSI inline ephemeral volumes](/storage/container_storage_interface/ephemeral-storage-csi-inline#ephemeral-storage-csi-inline)
- [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
- [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)

{% include "./modules/mounting-secrets-external-secrets-store.md" %}

## Additional resources {#additional-resources_nodes-pods-secrets-store}

- [Configuring the Cloud Credential Operator utility](/installing/installing_aws/ipi/installing-aws-customizations#cco-ccoctl-configuring_installing-aws-customizations)
- [Installing Helm](/applications/working_with_helm_charts/installing-helm#installing-helm)
- [Red Hat third-party support policy](https://access.redhat.com/third-party-software-support)
