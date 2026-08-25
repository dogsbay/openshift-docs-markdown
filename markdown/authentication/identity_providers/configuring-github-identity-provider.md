---
title: Configuring a GitHub or GitHub Enterprise identity provider
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a GitHub or GitHub Enterprise identity provider {id="configuring-github-identity-provider"}
{%- set context = "configuring-github-identity-provider" %}

Configure the `github` identity provider so users can log in to {{ product_title }} with GitHub or GitHub Enterprise accounts through OAuth. Use this integration when you want cluster users to authenticate with existing GitHub credentials instead of managing separate cluster passwords. {._abstract}

You can use the GitHub integration to connect to either GitHub or GitHub Enterprise. For GitHub Enterprise integrations, you must provide the `hostname` of your instance and can optionally provide a `ca` certificate bundle to use in requests to the server.


:::note

The following steps apply to both GitHub and GitHub Enterprise unless noted.

:::


{% if openshift_origin or openshift_enterprise or openshift_webscale %}
{% leveloffset +1 %}{% include "./modules/identity-provider-overview.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/identity-provider-github-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-registering-github.md" %}{% endleveloffset %}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
{% leveloffset +1 %}{% include "./modules/identity-provider-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-config-map.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/identity-provider-github-CR.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Identity provider parameters](/authentication/understanding-identity-provider#identity-provider-parameters_understanding-identity-provider)

{% leveloffset +1 %}{% include "./modules/identity-provider-add.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [GitHub authentication (GitHub documentation)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)

{% endif %}