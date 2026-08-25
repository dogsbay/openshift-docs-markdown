---
title: Prerequisites for installing a cluster on {{ ibm_cloud_bm }}
---

# Prerequisites for installing a cluster on {{ ibm_cloud_bm }} {#install-ibm-cloud-prerequisites}

You can use installer-provisioned installation to install OpenShift Container Platform on {{ ibm_cloud_bm }} nodes. Review the prerequisites and requirements before you begin an installer-provisioned installation on {{ ibm_cloud_name }} nodes.

> [!IMPORTANT]
> Red Hat supports Intelligent Platform Management Interface (IPMI) and PXE on the provisioning network only. Red Hat has not tested Red Fish, virtual media, or other complementary technologies such as Secure Boot on {{ ibm_cloud_name }} deployments. You must configure a provisioning network.

Installer-provisioned installation of OpenShift Container Platform requires:

- One node with {{ op_system_first }} 8.x installed, for running the provisioner
- Three control plane nodes
- One routable network
- One provisioning network

## Additional resources {#additional-resources_install-ibm-cloud}

- [{{ ibm_cloud_name }} dashboard](https://cloud.ibm.com)
- [Installing the standalone {{ ibm_cloud_name }} CLI](https://cloud.ibm.com/docs/cli?topic=cli-install-ibmcloud-cli)
