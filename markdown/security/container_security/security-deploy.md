---
title: Deploying containers
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying containers {id="security-deploy"}
{%- set context = "security-deploy" %}

You can use a variety of techniques to make sure that the containers you deploy hold the latest production-quality content and that they have not been tampered with, such as setting up build triggers and using signatures. {._abstract}

{% leveloffset +1 %}{% include "./modules/security-deploy-trigger.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-deploy-image-sources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-deploy-signature.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-deploy-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-deploy-continuous.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Input secrets and config maps](/cicd/builds/creating-build-inputs#builds-input-secrets-configmaps_creating-build-inputs)