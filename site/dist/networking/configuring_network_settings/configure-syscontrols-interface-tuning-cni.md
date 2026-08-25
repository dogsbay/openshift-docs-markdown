---
title: Configuring system controls and interface attributes using the tuning plugin
---

# Configuring system controls and interface attributes using the tuning plugin {#configure-syscontrols-interface-tuning-cni}

To modify kernel parameters and interface attributes at runtime in OpenShift Container Platform, you can use the tuning Container Network Interface (CNI) meta plugin. The plugin operates in a chain with a main CNI plugin and allows you to change sysctls and interface attributes such as promiscuous mode, all-multicast mode, MTU, and MAC address.

![CNI plugin](/_assets/images/264_OpenShift_CNI_plugin_chain_0722.png)

## Additional resources {#additional-resources_nodes-setting-interface-level-network-sysctls_configure-syscontrols-interface-tuning-cni}

- [Using sysctls in containers](/nodes/containers/nodes-containers-sysctls#nodes-containers-sysctls)
- [SR-IOV network node configuration object](/networking/hardware_networks/configuring-sriov-device#nw-sriov-networknodepolicy-object_configuring-sriov-device)
- [Configuring interface-level network sysctl settings and all-multicast mode for SR-IOV networks](/networking/hardware_networks/configuring-interface-sysctl-sriov-device#configuring-interface-level-sysctl-settings-sriov-device)
