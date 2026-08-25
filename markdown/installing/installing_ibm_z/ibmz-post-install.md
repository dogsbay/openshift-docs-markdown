---
title: "Configuring additional devices in an {{ ibm_z_title }} or {{ ibm_linuxone_title }} environment"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring additional devices in an {{ ibm_z_title }} or {{ ibm_linuxone_title }} environment {id="post-install-configure-additional-devices-ibm-z"}
{%- set context = "post-install-configure-additional-devices-ibm-z" %}

After installing {{ product_title }}, you can configure additional devices for your cluster in an {{ ibm_z_name }} or {{ ibm_linuxone_name }} environment, which is installed with z/VM. 

The following devices can be configured:

*   Fibre Channel Protocol (FCP) host
*   FCP LUN
*   DASD
*   qeth

You can configure devices by adding udev rules by using the Machine Config Operator (MCO) or you can configure devices manually.


:::note

The procedures described here apply only to z/VM installations. If you have installed your cluster with {{ op_system_base }} KVM on {{ ibm_z_name }} or {{ ibm_linuxone_name }} infrastructure, no additional configuration is needed inside the KVM guest after the devices were added to the KVM guests. However, both in z/VM and {{ op_system_base }} KVM environments the next steps to configure the Local Storage Operator and Kubernetes NMState Operator need to be applied.

:::


**Additional resources**

*   [Machine configuration overview](/machine_configuration/index#machine-config-overview)

{% leveloffset +1 %}{% include "./modules/ibm-z-configure-devices-mco.md" %}{% endleveloffset %}

**Additional resources**

*   [Install and configure the Local Storage Operator](/storage/persistent_storage_local/persistent-storage-local#persistent-storage-using-local-volume)
*   [Observing and updating the node network state and configuration](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#k8s-nmstate-updating-node-network-config)

{% leveloffset +1 %}{% include "./modules/ibm-z-configure-devices-manually.md" %}{% endleveloffset %}

**Additional resources**

*   [chzdev - Configure {{ ibm_z_name }} devices ({{ ibm_name }} Documentation)](https://www.ibm.com/docs/en/linux-on-systems?topic=commands-chzdev)
*   [Persistent device configuration ({{ ibm_name }} Documentation)](https://www.ibm.com/docs/en/linux-on-systems?topic=linuxonibm/com.ibm.linux.z.ludd/ludd_c_perscfg.html)

{% leveloffset +1 %}{% include "./modules/ibm-z-roce-network-cards.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ibm-z-enable-multipathing-fcp-luns.md" %}{% endleveloffset %}

**Additional resources**

*   [Install and configure the Local Storage Operator](/storage/persistent_storage_local/persistent-storage-local#persistent-storage-using-local-volume)
*   [Observing and updating the node network state and configuration](/networking/k8s_nmstate/k8s-nmstate-updating-node-network-config#k8s-nmstate-updating-node-network-config)