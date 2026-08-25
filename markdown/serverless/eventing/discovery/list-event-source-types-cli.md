{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Listing event source types from the command line {id="list-event-source-types-cli"}
{%- set context = "list-event-source-types-cli" %}

Using the Knative (`kn`) CLI provides a streamlined and intuitive user interface to view available event source types on your cluster.

{% leveloffset +1 %}{% include "./modules/serverless-list-source-types-kn.md" %}{% endleveloffset %}