{%- set _mod_docs_content_type = "REFERENCE" %}
# Prerequisites {id="configuring-hardware-offloading-prerequisites_{{ context }}"}

Before you configure hardware offloading, ensure that the following conditions are met. {._abstract}

*   Your cluster has at least one bare-metal machine with a network interface controller that is supported for hardware offloading.
*   You installed the SR-IOV Network Operator.
*   Your cluster uses the OVN-Kubernetes network plugin.
*   In your OVN-Kubernetes network plugin configuration, the `gatewayConfig.routingViaHost` field is set to `false`.