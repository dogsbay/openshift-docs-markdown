---
title: Configuring a GitLab identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a GitLab identity provider {id="configuring-gitlab-identity-provider"}
{%- set context = "configuring-gitlab-identity-provider" %}

Configure the `gitlab` identity provider so users can log in to {{ product_title }} with GitLab account credentials through OAuth. {._abstract}

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-gitlab-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [OAuth integration](https://docs.gitlab.com/ce/integration/oauth_provider.html)
*   [OpenID Connect](https://docs.gitlab.com/ce/integration/openid_connect_provider.html)

{% leveloffset +1 %}{% include "./modules/identity-provider-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-gitlab-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [GitLab.com](https://gitlab.com/)