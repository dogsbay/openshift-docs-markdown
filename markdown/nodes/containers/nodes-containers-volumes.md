---
title: Using volumes to persist container data
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-containers-volumes" %}
{% include "./_attributes/common-attributes.md" %}
# Using volumes to persist container data {id="nodes-containers-volumes"}

You can use _volumes_ to persist the data used by the containers in a pod. A volume is directory, accessible to the containers in a pod, where data is stored for the life of the pod. {._abstract}

Files in a container are ephemeral. As such, when a container crashes or stops, the data is lost.

{% leveloffset +1 %}{% include "./modules/nodes-containers-volumes-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-volumes-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-volumes-listing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-volumes-adding.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-volumes-updating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-volumes-removing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-volumes-subpath.md" %}{% endleveloffset %}