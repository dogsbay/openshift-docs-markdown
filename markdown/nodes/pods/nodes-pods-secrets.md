---
title: Providing sensitive data to pods by using secrets
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-pods-secrets" %}
{% include "./_attributes/common-attributes.md" %}
# Providing sensitive data to pods by using secrets {id="nodes-pods-secrets"}

As an administrator, you can use `Secret` objects to provide sensitive information, such as passwords and user names, to applications without exposing that information in plain text that developers could see. {._abstract}

{% leveloffset +1 %}{% include "./modules/nodes-pods-secrets-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/service-account-auto-secret-removed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-secrets-creating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-secrets-creating-opaque.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-secrets-creating-sa.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-secrets-creating-basic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-secrets-creating-ssh.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-secrets-creating-docker.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-secrets-creating-web-console-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-secrets-updating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-application-secrets-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-secrets-certificates-about.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nodes-pods-secrets-certificates-creating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-pods-secrets-troubleshooting.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Understanding how to create secrets](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-creating_nodes-pods-secrets)

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Configuring bound service account tokens using volume projection](/authentication/bound-service-account-tokens#bound-sa-tokens-configuring_bound-service-account-tokens)
*   [Understanding and creating service accounts](/authentication/understanding-and-creating-service-accounts#understanding-and-creating-service-accounts)
{% endif %}
*   [Identifiers and Names in Kubernetes (Kubernetes documentation)](https://github.com/kubernetes/kubernetes/blob/v1.0.0/docs/design/identifiers.md)
*   [Long-lived service account API tokens in {{ product_title }} (Red Hat Knowledgebase article)](https://access.redhat.com/articles/7058801)