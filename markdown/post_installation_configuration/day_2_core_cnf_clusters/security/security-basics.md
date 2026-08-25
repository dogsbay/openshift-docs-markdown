---
title: Security basics
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Security basics {id="security-basics"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "security-basics" %}

Security is a critical component of {{ product_title }} deployments, particularly when running cloud-native applications.

You can enhance security for high-bandwidth network deployments by following key security considerations. By implementing these standards and best practices, you can strengthen security in most use cases.

{% leveloffset +1 %}{% include "./modules/security-rbac-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Using RBAC to define and apply permissions](/authentication/using-rbac#authorization-overview_using-rbac)

{% leveloffset +1 %}{% include "./modules/security-sec-accounts-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding and creating service accounts](/authentication/understanding-and-creating-service-accounts#understanding-and-creating-service-accounts)

{% leveloffset +1 %}{% include "./modules/security-identity-prov-config.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding identity provider configuration](/authentication/understanding-identity-provider#understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/security-replacing-kubeadmin-user.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring an htpasswd identity provider](/authentication/identity_providers/configuring-htpasswd-identity-provider#identity-provider-htpasswd-about_configuring-htpasswd-identity-provider)

{% leveloffset +1 %}{% include "./modules/security-sec-considerations-telco.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-pod-sec-in-kub-and-ocp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-lifecycle-mgmnt.md" %}{% endleveloffset %}

**Additional resources**

*   [Upgrading an OpenShift cluster](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-welcome#update-welcome)