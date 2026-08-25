{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring SSO for Argo CD using Dex {id="configuring-sso-for-argo-cd-using-dex"}
{%- set context = "configuring-sso-for-argo-cd-using-dex" %}

After the {{ gitops_title }} Operator is installed, Argo CD automatically creates a user with `admin` permissions. To manage multiple users, cluster administrators can use Argo CD to configure Single Sign-On (SSO).


:::important

The `spec.dex` parameter in the ArgoCD CR is deprecated. In a future release of {{ gitops_title }} v1.10.0, configuring Dex using the `spec.dex` parameter in the ArgoCD CR is planned to be removed. Consider using the `.spec.sso` parameter instead.

:::


{% leveloffset +1 %}{% include "./modules/gitops-creating-a-new-client-in-dex.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/gitops-dex-role-mappings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-disable-dex.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-disable-dex-using-spec-sso.md" %}{% endleveloffset %}