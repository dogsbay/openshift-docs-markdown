---
title: AMD GPU Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# AMD GPU Operator {id="amd-gpu-operator"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "amd-gpu-operator" %}

AMD Instinct GPU accelerators combined with the AMD GPU Operator within your {{ product_title }} cluster lets you seamlessly harness computing capabilities for machine learning, Generative AI, and GPU-accelerated applications. 

This documentation provides the information you need to enable, configure, and test the AMD GPU Operator. For more information, see [AMD Instinct™ Accelerators](https://www.amd.com/en/products/accelerators/instinct.html).

{%- set FeatureName = "AMD GPU Operator" %}

{% leveloffset +1 %}{% include "./modules/amd-about-amd-gpu-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/amd-installing-gpu-operator.md" %}{% endleveloffset %}

**Next steps**

1.  Install the [Node Feature Discovery Operator](/hardware_enablement/psap-node-feature-discovery-operator#installing-the-node-feature-discovery-operator_node-feature-discovery-operator).
1.  Install the [Kernel Module Management Operator](/hardware_enablement/kmm-kernel-module-management#kmm-install_kernel-module-management-operator).
1.  Install and configure the [AMD GPU Operator](https://instinct.docs.amd.com/projects/gpu-operator/en/main/installation/openshift-olm.html#install-amd-gpu-operator).

{% leveloffset +1 %}{% include "./modules/amd-testing-the-amd-gpu-operator.md" %}{% endleveloffset %}