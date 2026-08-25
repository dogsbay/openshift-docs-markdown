---
title: Configuring a GitLab identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring a GitLab identity provider {id="configuring-gitlab-identity-provider"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-gitlab-identity-provider" %}

Configure the `gitlab` identity provider using [GitLab.com](https://gitlab.com/) or any other GitLab instance as an identity provider.

{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-gitlab-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-gitlab-CR.md" %}{% endleveloffset %}

**Additional resources**

*   See [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider) for information on parameters, such as `mappingMethod`, that are common to all identity providers.

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}