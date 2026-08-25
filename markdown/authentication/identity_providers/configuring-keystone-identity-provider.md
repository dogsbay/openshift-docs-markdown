---
title: Configuring a Keystone identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a Keystone identity provider {id="configuring-keystone-identity-provider"}
{%- set context = "configuring-keystone-identity-provider" %}

Configure a Keystone identity provider to connect {{ product_title }} to an OpenStack Keystone v3 server so that users can sign in with Keystone credentials. {._abstract}

{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-keystone-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-secret-tls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-keystone-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-keystone_{{ context }}" ._additional-resources}

*   [Keystone](http://docs.openstack.org/developer/keystone/)