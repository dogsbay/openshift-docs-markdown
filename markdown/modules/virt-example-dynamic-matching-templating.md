{%- set _mod_docs_content_type = "CONCEPT" %}
# Example policy configurations that use dynamic matching and templating {id="virt-example-dynamic-matching-templating_{{ context }}"}

The following example configuration snippets show node network policies that use dynamic matching and templating. {._abstract}

{% if openshift_enterprise %}
{%- set FeatureName = "Applying node network configuration policies that use dynamic matching and templating" %}
{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

{% endif %}