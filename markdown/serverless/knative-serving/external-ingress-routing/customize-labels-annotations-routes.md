{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Customizing labels and annotations {id="customize-labels-annotations-routes"}
{%- set context = "customize-labels-annotations-routes" %}

{{ product_title }} routes support the use of custom labels and annotations, which you can configure by modifying the `metadata` spec of a Knative service. Custom labels and annotations are propagated from the service to the Knative route, then to the Knative ingress, and finally to the {{ product_title }} route.

{% leveloffset +1 %}{% include "./modules/serverless-customize-labels-annotations-routes.md" %}{% endleveloffset %}