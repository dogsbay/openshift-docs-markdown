{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring SSO for Argo CD using Keycloak {id="configuring-sso-for-argo-cd-using-keycloak"}
{%- set context = "configuring-sso-for-argo-cd-using-keycloak" %}

After the {{ gitops_title }} Operator is installed, Argo CD automatically creates a user with `admin` permissions. To manage multiple users, cluster administrators can use Argo CD to configure Single Sign-On (SSO).

**Prerequisites**

*   Red Hat SSO is installed on the cluster.
*   {{ gitops_title }} Operator is installed on the cluster.
*   Argo CD is installed on the cluster.

{% leveloffset +1 %}{% include "./modules/gitops-creating-a-new-client-using-keycloak.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-logging-into-keycloak.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-uninstall-keycloak.md" %}{% endleveloffset %}