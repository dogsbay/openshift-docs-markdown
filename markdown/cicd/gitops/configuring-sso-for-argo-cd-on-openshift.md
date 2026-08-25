{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring SSO for Argo CD on OpenShift {id="configuring-sso-for-argo-cd-on-openshift"}
{%- set context = "configuring-sso-for-argo-cd-on-openshift" %}

After the {{ gitops_title }} Operator is installed, Argo CD automatically creates a user with `admin` permissions. To manage multiple users, Argo CD allows cluster administrators to configure SSO.

**Prerequisites**

*   Red Hat SSO is installed on the cluster.

{% leveloffset +1 %}{% include "./modules/gitops-creating-a-new-client-in-keycloak.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-configuring-the-groups-claim.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-configuring-argo-cd-oidc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-keycloak-identity-brokering-with-openshift-oauthclient.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-registering-an-additional-oauth-client.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-configuring-groups-and-argocd-rbac.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/gitops-in-built-permissions.md" %}{% endleveloffset %}