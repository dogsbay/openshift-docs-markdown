---
title: Mounting OCI images and artifacts into a pod
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-node-selectors" %}
{% include "./_attributes/common-attributes.md" %}
# Mounting OCI images and artifacts into a pod {id="nodes-pods-image-volume"}

You can mount an Open Container Initiative (OCI)-compliant container image or artifact directly into a pod, making the OCI object accessible to the containers without the need to include them in the base image, which allows you to host the data in OCI-compliant registries. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-pods-image-volume-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-image-volume-adding.md" %}{% endleveloffset %}