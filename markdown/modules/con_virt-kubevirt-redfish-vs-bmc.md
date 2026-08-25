{%- set _mod_docs_content_type = "CONCEPT" %}
# How KubeVirt Redfish differs from physical BMC Redfish {id="con_virt-kubevirt-redfish-vs-bmc_{{ context }}"}

Redfish is commonly used with physical baseboard management controllers (BMCs) for bare metal deployments, where it manages hardware power state, boot configuration, and provisioning. {._abstract}

KubeVirt Redfish is different in some of the following ways:

*   It targets VMs managed by {{ VirtProductName }}, not physical servers.
*   It runs as a service on your cluster, not on hardware BMCs.
*   You can use it for virtualized control plane deployments where physical BMC Redfish supports bare metal deployments.

The two are complementary and can be used together in environments with mixed physical and virtual nodes.