---
title: Machine Config Operator certificates
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Machine Config Operator certificates {id="cert-types-machine-config-operator-certificates"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "cert-types-machine-config-operator-certificates" %}

Understand Machine Config Operator (MCO) certificates used to secure node connections to the Machine Config Server (MCS) during cluster provisioning, including their lifecycle, rotation, and support boundaries.

{% leveloffset +1 %}{% include "./modules/machine-config-operator-certificates-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-config-operator-certificates-reference.md" %}{% endleveloffset %}

**Additional resources**

*   [About the Machine Config Operator](/machine_configuration/index#about-machine-config-operator_machine-config-overview)
*   [About the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
*   [Regenerating CA certificates for the Machine Config Server](https://access.redhat.com/articles/regenerating_cluster_certificates#regenerating-ca-certificates-for-the-machine-config-server-5)