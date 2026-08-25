{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Listing event sources and event source types {id="serverless-listing-event-sources"}
{%- set context = "serverless-listing-event-sources" %}

It is possible to view a list of all event sources or event source types that exist or are available for use on your {{ product_title }} cluster. You can use the Knative (`kn`) CLI or the **Developer** perspective in the {{ product_title }} web console to list available event sources or event source types.