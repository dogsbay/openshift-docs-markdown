{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring resource quota or requests {id="configuring-resource-quota"}
{%- set context = "configuring-resource-quota" %}

With the Argo CD Custom Resource, you can create, update, and delete resource requests and limits for Argo CD workloads. {._abstract}

{% leveloffset +1 %}{% include "./modules/configure-workloads.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/patch-argocd-instance.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/remove-resource-requirements.md" %}{% endleveloffset %}