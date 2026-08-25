---
title: Allocating GPUs to pods by using DRA
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-allocate-dra" %}
# Allocating GPUs to pods by using DRA {id="nodes-pods-allocate-dra"}
{% include "./_attributes/common-attributes.md" %}

You can use {{ attribute_based_full }} to enable fine-tuned control over graphics processing unit (GPU) resource allocation in {{ product_title }}, allowing pods to request GPUs based on specific device attributes, including product name, GPU memory capacity, compute capability, vendor name and driver version. Having access to these attributes, which are exposed by a third-party Dynamic Resource Allocation (DRA) driver, allows {{ product_title }} to schedule a pod on a node that has the specific devices that the workload needs. 

This workflow provides significant improvement in the device allocation workflow when compared to device plugins, which require per-container device requests, do not support device sharing, and do not support expression-based device filtering.

{% leveloffset +1 %}{% include "./modules/nodes-pods-allocate-dra-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-allocate-dra-configure-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-allocate-dra-configure.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)