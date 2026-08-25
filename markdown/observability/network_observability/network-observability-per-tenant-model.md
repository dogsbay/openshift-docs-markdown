---
title: Network observability per-tenant model
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Network observability per-tenant model {id="network-observability-per-tenant-model_{{ context }}"}
{%- set context = "network-observability-per-tenant-configuration" %}

Use the `FlowCollectorSlice` resource to delegate network traffic analysis management to project administrators while maintaining global cluster governance. {._abstract}

{% leveloffset +1 %}{% include "./modules/network-observability-per-tenant-hierarchical-governance-and-tenant-autonomy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-per-tenant-flowcollector-slice-granular-flow-collection.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-per-tenant-flowcollector-slice-enable.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/network-observability-per-tenant-flowcollector-slice-disable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-per-tenant-flowcollector-slice-configure-project-administrator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/network-observability-per-tenant-flowcollector-slice-api-reference.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-per-tenand-configuration_{{ context }}" ._additional-resources}

*   [FlowCollector API reference](/observability/network_observability/flowcollector-api#network-observability-flowcollector-api-specifications_network_observability)