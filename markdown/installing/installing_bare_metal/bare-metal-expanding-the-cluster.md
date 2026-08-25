---
title: Expanding the cluster
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Expanding the cluster {id="bare-metal-expanding-the-cluster"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "bare-metal-expanding" %}

You can expand a bare-metal cluster by adding worker nodes after initial deployment to increase capacity and maintain high availability.


:::note

Expanding the cluster using Redfish Virtual Media involves meeting minimum firmware requirements. See **Firmware requirements for installing with virtual media** in the **Prerequisites** section for additional details when expanding the cluster using Redfish Virtual Media.

:::


{% leveloffset +1 %}{% include "./modules/ipi-install-preparing-the-bare-metal-node.md" %}{% endleveloffset %}

**Additional resources**

*   [Optional: Configuring host network interfaces in the install-config.yaml file](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#configuring-host-network-interfaces-in-the-install-config-yaml-file_ipi-install-installation-workflow)
*   [Automatically scaling machines to the number of available bare-metal hosts](/scalability_and_performance/managing-bare-metal-hosts#automatically-scaling-machines-to-available-bare-metal-hosts_managing-bare-metal-hosts)

{% leveloffset +1 %}{% include "./modules/ipi-install-replacing-a-bare-metal-control-plane-node.md" %}{% endleveloffset %}

**Additional resources**

*   [Replacing an unhealthy etcd member](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#replacing-the-unhealthy-etcd-member)
*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backing-up-etcd-data_backup-etcd)
*   [Configuration using the Bare Metal Operator](/installing/installing_bare_metal/bare-metal-postinstallation-configuration#bmo-config-using-bare-metal-operator_bare-metal-postinstallation-configuration)
*   [BMC addressing](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#bmc-addressing_ipi-install-installation-workflow)

{% leveloffset +1 %}{% include "./modules/ipi-install-preparing-to-deploy-with-virtual-media-on-the-baremetal-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-diagnosing-duplicate-mac-address.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ipi-install-provisioning-the-bare-metal-node.md" %}{% endleveloffset %}