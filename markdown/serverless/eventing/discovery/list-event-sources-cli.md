{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Listing event sources from the command line {id="list-event-sources-cli"}
{%- set context = "list-event-sources-cli" %}

Using the Knative (`kn`) CLI provides a streamlined and intuitive user interface to view existing event sources on your cluster.

{% leveloffset +1 %}{% include "./modules/serverless-list-source-cli.md" %}{% endleveloffset %}