---
title: Adjust pod resource levels without pod disruption
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-adjust-resources-in-place" %}
{% include "./_attributes/common-attributes.md" %}
# Adjust pod resource levels without pod disruption {id="nodes-pods-adjust-resources-in-place"}

You can change the CPU or memory resource requests and limits assigned to a container without re-creating or restarting the pod by using _in-place pod resizing_. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-pods-adjust-resources-in-place-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-adjust-resources-in-place-configuring.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [Understanding resource requests and limits](/nodes/pods/nodes-pods-using#nodes-pods-understanding-requests-limits_nodes-pods-using-ssy)