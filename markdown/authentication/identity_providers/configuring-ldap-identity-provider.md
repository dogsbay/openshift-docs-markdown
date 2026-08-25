---
title: Configuring an LDAP identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring an LDAP identity provider {id="configuring-ldap-identity-provider"}
{%- set context = "configuring-ldap-identity-provider" %}

Configure an LDAP identity provider so users can log in to {{ product_title }} with usernames and passwords validated against your LDAPv3 directory. {._abstract}

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-about-ldap.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +1 %}{% include "./modules/identity-provider-ldap-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-ldap-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

{% endif %}