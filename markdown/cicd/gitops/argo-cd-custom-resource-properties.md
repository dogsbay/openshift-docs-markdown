{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Argo CD Operator {id="argo-cd-custom-resource-properties"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "argo-cd-custom-resource-properties" %}

The `ArgoCD` custom resource is a Kubernetes Custom Resource (CRD) that describes the desired state for a given Argo CD cluster that allows you to configure the components which make up an Argo CD cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/argo-cd-command-line.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/gitops-argo-cd-properties.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/gitops-repo-server-properties.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/gitops-argo-cd-notification.md" %}{% endleveloffset %}