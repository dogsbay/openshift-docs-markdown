---
title: Installation configuration parameters for bare metal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installation configuration parameters for bare metal {id="installation-config-parameters-bare-metal"}
{%- set context = "installation-config-parameters-bare-metal" -%}
{%- set platform = "bare metal" %}

Before you deploy an {{ product_title }} cluster, you provide a customized `install-config.yaml` installation configuration file that describes the details for your environment. {._abstract}

{% leveloffset +1 %}{% include "./modules/installation-configuration-parameters.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [OVN-Kubernetes IPv6 and dual-stack limitations](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#nw-ovn-kubernetes-limitations_about-ovn-kubernetes)