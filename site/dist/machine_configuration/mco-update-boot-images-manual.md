---
title: Manually updating the boot image
---

# Manually updating the boot image {#mco-update-boot-images-manual}

For OpenShift Container Platform platforms that do not support automatic boot image updating or for clusters configured with the boot image management feature disabled, you can manually update the boot image used by the compute nodes in your cluster. By updating the boot image, you can ensure that newly scaled up nodes are able to successfully use the latest {{ op_system_first }} version and join the cluster.

> [!NOTE]
> Red Hat does not support manually updating the boot image in control plane nodes.

## Additional resources {#additional-resources_mco-update-boot-images-manual}

- [Boot image management](/machine_configuration/mco-update-boot-images#mco-update-boot-images)
- [Updating the boot image skew enforcement version](/machine_configuration/mco-update-boot-skew-mgmt#mco-update-boot-skew-mgmt)
- [Manually updating the boot image](/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)
- [Obtaining the installation program](/installing/installing_aws/ipi/ipi-aws-preparing-to-install#installation-obtaining-installer_ipi-aws-preparing-to-install)
- [Adding compute machines to bare metal](/machine_management/user_infra/adding-bare-metal-compute-user-infra#adding-bare-metal-compute-user-infra)
- [Configuring an AWS account](/installing/installing_aws/installing-aws-account#installing-aws-account)
- [Creating additional worker machines in {{ gcp_short }}](/installing/installing_gcp/installing-restricted-networks-gcp#installation-creating-gcp-worker_installing-restricted-networks-gcp)
- [Requirements for encrypting virtual machines](/installing/installing_vsphere/upi/upi-vsphere-installation-reqs#installation-vsphere-encrypted-vms_upi-vsphere-installation-reqs)
- [Adding compute machines to clusters with user-provisioned infrastructure manually](/machine_management/user_infra/adding-compute-user-infra-general#adding-compute-user-infra-general)
