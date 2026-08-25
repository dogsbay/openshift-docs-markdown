---
title: Creating images
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating images {id="creating-images"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "create-images" %}

You can create your own container images based on pre-built base images. This process includes following best practices for writing images, defining metadata, testing images, and using a custom builder workflow with Source-to-Image (S2I).
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
After you create an image, you can push it to the {{ product_registry }}.
{% endif %}

{% leveloffset +1 %}{% include "./modules/images-create-guidelines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-create-guide-general.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-create-guide-openshift.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-create-metadata.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-create-s2i.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-create-s2i-build.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-create-s2i-scripts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-test-s2i.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_create-images"}

*   [S2I README](https://github.com/openshift/source-to-image/blob/master/README.md#installation)