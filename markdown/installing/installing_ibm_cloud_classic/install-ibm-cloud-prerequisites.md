---
title: "Prerequisites for installing a cluster on {{ ibm_cloud_bm }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Prerequisites for installing a cluster on {{ ibm_cloud_bm }} {id="install-ibm-cloud-prerequisites"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "install-ibm-cloud" %}

You can use installer-provisioned installation to install {{ product_title }} on {{ ibm_cloud_bm }} nodes. Review the prerequisites and requirements before you begin an installer-provisioned installation on {{ ibm_cloud_name }} nodes.


:::important

Red Hat supports Intelligent Platform Management Interface (IPMI) and PXE on the provisioning network only. Red Hat has not tested Red Fish, virtual media, or other complementary technologies such as Secure Boot on {{ ibm_cloud_name }} deployments. You must configure a provisioning network.

:::


Installer-provisioned installation of {{ product_title }} requires:

*   One node with {{ op_system_first }} 8.x installed, for running the provisioner
*   Three control plane nodes
*   One routable network
*   One provisioning network

{% leveloffset +1 %}{% include "./modules/install-ibm-cloud-classic-setting-up-ibm-cloud-infrastructure.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [{{ ibm_cloud_name }} dashboard](https://cloud.ibm.com)
*   [Installing the standalone {{ ibm_cloud_name }} CLI](https://cloud.ibm.com/docs/cli?topic=cli-install-ibmcloud-cli)