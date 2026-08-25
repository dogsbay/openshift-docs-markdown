---
title: Configuring the registry for vSphere
---

# Configuring the registry for vSphere {#configuring-registry-storage-vsphere}

Configure image registry storage for vSphere clusters after installation. Because vSphere installations do not automatically provision storage, you must change the registry management state from `Removed` to `Managed` and configure persistent storage or use {{ rh_storage_first }} before the registry can store container images.

## Additional resources {#configuring-registry-storage-vsphere-addtl-resources}

- [Configuring the registry for vSphere](/registry/configuring_registry_storage/configuring-registry-storage-vsphere#registry-configuring-storage-vsphere_configuring-registry-storage-vsphere)
- [Recommended configurable storage technology](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
- [Configuring Image Registry to use {{ rh_storage }}](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/managing_and_allocating_storage_resources/index#configuring-image-registry-to-use-openshift-data-foundation_rhodf)
