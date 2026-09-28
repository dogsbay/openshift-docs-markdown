---
title: Set up the environment for DPF
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Set up the environment for DPF {id="dpf-environment-setup"}
{%- set context = "dpf-environment-setup" -%}
{%- set dpf_version = "26.4.1" %}

Before installing the NVIDIA DPF Operator, you must set up the management cluster, configure worker nodes, and install and configure the required Operators. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-dpf-management-cluster-setup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-worker-machineconfig.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-creating-dpf-namespace.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-dpf-installing-required-operators.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dpf-installing-mce-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dpf-installing-cert-manager-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dpf-installing-metallb-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dpf-installing-gitops-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-dpf-installing-maintenance-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [DPF Operator prerequisites](https://networking-docs.nvidia.com/dpf/26.4.1/host-network-configuration-prerequisites)

{% leveloffset +1 %}{% include "./modules/nw-dpf-configuring-required-operators.md" %}{% endleveloffset %}