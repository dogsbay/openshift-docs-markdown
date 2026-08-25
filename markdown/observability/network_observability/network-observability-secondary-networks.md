---
title: Secondary networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Secondary networks {id="network-observability-secondary-networks"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "network-observability-secondary-networks" %}

You can configure the Network Observability Operator to collect and enrich network flow data from secondary networks, such as `SR-IOV` and `OVN-Kubernetes`.

## Prerequisites {id="network-observability-secondary-network-prerequisites_{{ context }}"}
*   Access to an {{ product_title }} cluster with an additional network interface, such as a secondary interface or an L2 network.

{% leveloffset +1 %}{% include "./modules/network-observability-SRIOV-configuration.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#cnf-creating-an-additional-sriov-network-with-vrf-plug-in_configuring-sriov-device)

{% leveloffset +1 %}{% include "./modules/network-observability-virtualization-configuration.md" %}{% endleveloffset %}