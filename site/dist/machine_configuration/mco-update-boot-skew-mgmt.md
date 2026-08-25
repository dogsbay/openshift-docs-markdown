---
title: Boot image skew enforcement
---

# Boot image skew enforcement {#mco-update-boot-skew-mgmt}

You can use boot image skew enforcement to help ensure that the boot images in a cluster are up-to-date with the OpenShift Container Platform and {{ op_system }} version being used in the cluster. Using an older boot image could cause issues when scaling new nodes. If the images are older than a predetermined version, the MCO disables cluster upgrades until it deems the boot images to be compliant.

> [!NOTE]
> Boot image skew enforcement is not supported for {{ sno }} clusters.

## Additional resources {#additional-resources_mco-update-boot-skew-mgmt}

- [Boot image management](/openshift-docs-markdown/machine_configuration/mco-update-boot-images#mco-update-boot-images)
- [Manually updating the boot image](/openshift-docs-markdown/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)
