---
title: Managing image streams
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Managing image streams {id="managing-image-streams"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "image-streams-managing" %}

To create and update container images and track version changes in {{ product_title }}, you can use image streams and tags. Add, update, remove, and import image stream tags to manage your container images.

{% leveloffset +1 %}{% include "./modules/images-imagestream-use.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-using-imagestream-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-using-imagestream-tags.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-using-imagestream-change-triggers.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/images-imagestream-mapping.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/working-with-image-streams.md" %}{% endleveloffset %}

{% include "./snippets/default-projects.md" %}

{% leveloffset +2 %}{% include "./modules/images-getting-info-about-imagestreams.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-imagestream-adding-tags.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-imagestream-external-image-tags.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-imagestream-update-tag.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-imagestream-remove-tag.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-remove-tag_{{ context }}"}

*   [Removing deprecated image stream tags from the Cluster Samples Operator](/openshift_images/configuring-samples-operator#images-samples-operator-deprecated-image-stream_configuring-samples-operator)

{% leveloffset +2 %}{% include "./modules/images-imagestream-import.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-imagestream-import-images-image-streams.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-imagestream-import-images-private-registry.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-imagestream-import-import-mode.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/images-imagestream-periodic-import-list.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/images-imagestream-ssl-import-list.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-imagestream-specify-architecture.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/importmode-configuration-fields.md" %}{% endleveloffset %}