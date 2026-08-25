{%- set _mod_docs_content_type = "ASSEMBLY" %}
# kn source commands {id="kn-source"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "kn-source" %}

You can use the following commands to list, create, and manage Knative event sources.

{% leveloffset +1 %}{% include "./modules/serverless-list-source-types-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/specifying-sink-flag-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kn-containersource.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/apiserversource-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-pingsource-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kafka-source-kn.md" %}{% endleveloffset %}