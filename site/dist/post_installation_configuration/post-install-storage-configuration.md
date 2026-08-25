---
title: Postinstallation storage configuration
---

# Postinstallation storage configuration {#post-install-storage-configuration}

You can configure persistent storage after installation by using dynamic or static provisioning to retain application data beyond the lifetime of individual containers.

After installing OpenShift Container Platform, you can further expand and customize your cluster to your requirements, including storage configuration.

By default, containers operate by using the ephemeral storage or transient local storage. The ephemeral storage has a lifetime limitation. To store the data for a long time, you must configure persistent storage. You can configure storage by using one of the following methods:

Dynamic provisioning
:   You can dynamically provision storage on-demand by defining and creating storage classes that control different levels of storage, including storage access.

Static provisioning
:   You can use Kubernetes persistent volumes to make existing storage available to a cluster. Static provisioning can support various device configurations and mount options.

## Additional resources {#additional-resources_post-install-storage-configuration}

- [Dynamic provisioning](/openshift-docs-markdown/storage/dynamic-provisioning#dynamic-provisioning)
- [{{ rh_storage_first }} documentation](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation)
- [Red Hat OpenShift Data Foundation Supportability and Interoperability Guide](https://access.redhat.com/articles/4731161)
- [Red Hat Gluster Storage installation guide](https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/installation_guide/)
- [Red Hat Gluster Storage administration guide](https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/administration_guide/)
- [Container-Native Storage for OpenShift Container Platform](https://access.redhat.com/documentation/en-us/red_hat_gluster_storage/3.3/html/container-native_storage_for_openshift_container_platform/)
