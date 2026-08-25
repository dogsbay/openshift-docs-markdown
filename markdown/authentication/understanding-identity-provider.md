---
title: Understanding identity provider configuration
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding identity provider configuration {id="understanding-identity-provider"}
{%- set context = "understanding-identity-provider" %}

As an administrator, you can configure OAuth to specify an identity provider
after you install your cluster. Developers and administrators obtain OAuth access tokens to authenticate themselves to the API. {._abstract}

The {{ product_title }} master includes a built-in OAuth server.

{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/supported-identity-providers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/authentication-remove-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-default-CR.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-provisioning-user-lookup-mapping.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [How to create user, identity and map user and identity in LDAP authentication for `mappingMethod` as `lookup` inside the OAuth manifest](https://access.redhat.com/solutions/6006921)
*   [How to create user, identity and map user and identity in OIDC authentication for `mappingMethod` as `lookup`](https://access.redhat.com/solutions/7072510)