---
title: Image pull policy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Image pull policy {id="image-pull-policy"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "image-pull-policy" %}

To manage image updates and optimize pod startup performance in {{ product_title }}, you can configure the `imagePullPolicy` parameter in your container specifications. This setting controls when container images are pulled from registries.

{% leveloffset +1 %}{% include "./modules/images-image-pull-policy-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-image-pull-policy-default-behavior.md" %}{% endleveloffset %}