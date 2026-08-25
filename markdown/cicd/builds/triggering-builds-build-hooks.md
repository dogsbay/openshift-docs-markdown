---
title: Triggering and modifying builds
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Triggering and modifying builds {id="triggering-builds-build-hooks"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "triggering-builds-build-hooks" %}

The following sections outline how to trigger builds and modify builds using build hooks.

{% leveloffset +1 %}{% include "./modules/builds-triggers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-webhook-triggers.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/unauthenticated-users-system-webhook.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/preventing-cluster-webhook-failure.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/recover-unstable-cluster-webhooks.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster role bindings for unauthenticated groups](/authentication/using-rbac#unauthenticated-users-cluster-role-bindings-concept_using-rbac)

{% if not openshift_rosa_hcp %}
*   [Webhook admission plugins](/architecture/admission-plug-ins#admission-webhooks-about_admission-plug-ins)

{% endif %}

{% leveloffset +3 %}{% include "./modules/builds-using-github-webhooks.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-using-gitlab-webhooks.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-using-bitbucket-webhooks.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-using-generic-webhooks.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-displaying-webhook-urls.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-using-image-change-triggers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-identifying-image-change-triggers.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-configuration-change-triggers.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/builds-setting-triggers-manually.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/builds-build-hooks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-configuring-post-commit-build-hooks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/builds-using-cli-post-commit-build-hooks.md" %}{% endleveloffset %}