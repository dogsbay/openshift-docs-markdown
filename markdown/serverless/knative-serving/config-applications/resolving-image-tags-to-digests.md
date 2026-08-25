{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Resolving image tags to digests {id="resolving-image-tags-to-digests"}
{%- set context = "resolving-image-tags-to-digests" %}

If the Knative Serving controller has access to the container registry, Knative Serving resolves image tags to a digest when you create a revision of a service. This is known as _tag-to-digest resolution_, and helps to provide consistency for deployments.

{% leveloffset +1 %}{% include "./modules/serverless-tag-to-digest-resolution.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/knative-serving-controller-custom-certs-secrets.md" %}{% endleveloffset %}