{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Sizing requirements for GitOps Operator {id="about-sizing-requirements-gitops"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "about-sizing-requirements-gitops" %}

The sizing requirements page displays the sizing requirements for installing {{ gitops_title }} on {{ product_title }}. It also provides the sizing details for the default ArgoCD instance that is instantiated by the GitOps Operator. {._abstract}

{% leveloffset +1 %}{% include "./modules/sizing-requirements-for-gitops.md" %}{% endleveloffset %}