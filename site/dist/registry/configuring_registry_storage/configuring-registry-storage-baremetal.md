---
title: Configuring the registry for bare metal
---

# Configuring the registry for bare metal {#configuring-registry-storage-baremetal}

Configure image registry storage for bare-metal clusters after installation. Because bare-metal installations do not automatically provision storage, you must change the registry management state from `Removed` to `Managed` and configure persistent storage or use {{ rh_storage_first }} before the registry can store container images.

## Additional resources {#configuring-registry-storage-baremetal-addtl-resources}

- [Recommended configurable storage technology](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
- [Configuring Image Registry to use {{ rh_storage }}](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/managing_and_allocating_storage_resources/index#configuring-image-registry-to-use-openshift-data-foundation_rhodf)
