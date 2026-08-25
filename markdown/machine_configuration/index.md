---
title: Machine configuration overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "machine-config-overview" %}
{% include "./_attributes/common-attributes.md" %}
# Machine configuration overview {id="machine-config-index"}

You can make changes to the operating systems on {{ product_title }} nodes by creating `MachineConfig` objects, which are managed by the Machine Config Operator. For example, you can use the Machine Config Operator (MCO) and machine configs to manage systemd, CRI-O and kubelet, the kernel, Network Manager, and other system features. {._abstract}

Tasks in this section describe how to use features of the Machine Config Operator to configure operating system features on {{ product_title }} nodes.


:::important

NetworkManager stores new network configurations to `/etc/NetworkManager/system-connections/` in a key file format.

Previously, NetworkManager stored new network configurations to `/etc/sysconfig/network-scripts/` in the `ifcfg` format. Starting with RHEL 9.0, RHEL stores new network configurations at `/etc/NetworkManager/system-connections/` in a key file format. The connections configurations stored to `/etc/sysconfig/network-scripts/` in the old format still work uninterrupted. Modifications in existing profiles continue updating the older files.

:::


{% leveloffset +1 %}{% include "./modules/understanding-machine-config-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-config-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/architecture-machine-config-pools.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-config-node-drain.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-config-drift-detection.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/checking-mco-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/checking-mco-node-status.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/checking-mco-node-status-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/checking-mco-status-certs.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [MCCDrainError (Red&#160;Hat runbook)](https://github.com/openshift/runbooks/blob/master/alerts/machine-config-operator/MachineConfigControllerDrainError.md)
*   [Ignition Configuration Specification v3.5.0 (Ignition documentation)](https://coreos.github.io/ignition/configuration-v3_5/)
*   [How to skip validation of failing / stuck MachineConfig in OCP 4? (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/solutions/5414371)
*   [Using system-wide cryptographic policies ({{ op_system_base_full }} documentation)](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/security_hardening/index#using-the-system-wide-cryptographic-policies_security-hardening)
*   [Protecting systems against intrusive USB devices ({{ op_system_base_full }} documentation)](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/security_hardening/index#protecting-systems-against-intrusive-usb-devices_security-hardening)
*   [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
*   [About the Machine Config Operator](/machine_configuration/index#about-machine-config-operator_machine-config-overview)
*   [Using node disruption policies to minimize disruption from machine config changes](/machine_configuration/machine-config-node-disruption#machine-configs-configure)
*   [Disabling the Machine Config Operator from automatically rebooting](/support/troubleshooting/troubleshooting-operator-issues#troubleshooting-disabling-autoreboot-mco_troubleshooting-operator-issues)
*   [About on-cluster image mode](/machine_configuration/mco-coreos-layering#coreos-layering-configuring-on_mco-coreos-layering)
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
*   [Machine Config Operator certificates](/security/certificate_types_descriptions/machine-config-operator-certificates#cert-types-machine-config-operator-certificates)