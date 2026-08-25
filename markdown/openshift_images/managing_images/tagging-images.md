---
title: Tagging images
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Tagging images {id="tagging-images"}

{%- set context = "tagging-images" %}

Image tags identify specific versions of container images in image streams. You can use image tags to organize images and control which versions your builds and deployments use. {._abstract}

{% leveloffset +1 %}{% include "./modules/images-tag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-tagging-conventions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-add-tags-to-imagestreams.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-remove-tag-imagestream.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-referencing-images-imagestreams.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-reference-types.md" %}{% endleveloffset %}