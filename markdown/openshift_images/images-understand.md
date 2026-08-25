{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding containers, images, and image streams {id="understanding-images"}
{%- set context = "images-understand" %}

Containers, images, and image streams are core concepts in {{ product_title }} that you must understand when creating and managing containerized software. {._abstract}

The following sections provide an overview of the concepts of containers, images, and image streams.

{% leveloffset +1 %}{% include "./modules/images-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/containers-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-image-registry-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-container-repository-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-tag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-id.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-use.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-tag.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-trigger.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}

## Additional resources {id="additional-resources_images-understand" ._additional-resources}

*   [Managing image streams](/openshift_images/image-streams-manage#managing-image-streams)
{% endif %}