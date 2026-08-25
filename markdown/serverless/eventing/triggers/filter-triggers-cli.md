{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Filtering triggers from the command line {id="filter-triggers-cli"}
{%- set context = "filter-triggers-cli" %}

Using the Knative (`kn`) CLI to filter events by using triggers provides a streamlined and intuitive user interface. You can use the `kn trigger create` command, along with the appropriate flags, to filter events by using triggers.

{% leveloffset +1 %}{% include "./modules/kn-trigger-filtering.md" %}{% endleveloffset %}