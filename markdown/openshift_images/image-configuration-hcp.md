{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "image-configuration-hcp" %}
# Image configuration resources {id="image-configuration-hcp"}

You can configure image registries to manage how {{ product_title }} pulls and uses container images in your cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/images-configuration-parameters-hcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-configuration-image-registry-settings-hcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-editing-image-registry-settings-hcp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-updating-platform-allowlist-hcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-registry-mirroring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-registry-mirroring-create.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-registry-mirroring-edit.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-registry-mirroring-list.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-registry-mirroring-delete.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}
*   [About IAM resources](/rosa_architecture/rosa-sts-about-iam-resources#rosa-hcp-about-iam-resources)