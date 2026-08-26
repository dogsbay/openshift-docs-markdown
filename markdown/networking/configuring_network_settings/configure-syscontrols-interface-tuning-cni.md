---
title: Configuring system controls and interface attributes using the tuning plugin
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring system controls and interface attributes using the tuning plugin {id="configure-syscontrols-interface-tuning-cni"}
{%- set context = "configure-syscontrols-interface-tuning-cni" %}

To modify kernel parameters and interface attributes at runtime in {{ product_title }}, you can use the tuning Container Network Interface (CNI) meta plugin. The plugin operates in a chain with a main CNI plugin and allows you to change sysctls and interface attributes such as promiscuous mode, all-multicast mode, MTU, and MAC address. {._abstract}

![CNI plugin](/images/264_OpenShift_CNI_plugin_chain_0722.png)

{% leveloffset +1 %}{% include "./modules/nw-cfg-tuning-interface-cni.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-cfg-config-all-multi-cni.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_nodes-setting-interface-level-network-sysctls_{{ context }}" ._additional-resources}

*   [Using sysctls in containers](/nodes/containers/nodes-containers-sysctls#nodes-containers-sysctls)
*   [SR-IOV network node configuration object](/networking/hardware_networks/configuring-sriov-device#nw-sriov-networknodepolicy-object_configuring-sriov-device)
*   [Configuring interface-level network sysctl settings and all-multicast mode for SR-IOV networks](/networking/hardware_networks/configuring-interface-sysctl-sriov-device#configuring-interface-level-sysctl-settings-sriov-device)