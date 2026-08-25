---
title: Triggering updates on image stream changes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Triggering updates on image stream changes {id="triggering-updates-on-imagestream-changes"}

{%- set context = "triggering-updates-on-imagestream-changes" %}

When image stream tags update in {{ product_title }}, the platform automatically rolls out new images to deployments and builds that reference those tags. You configure this automatic triggering behavior differently depending on the type of resource that uses the image stream. {._abstract}

## Resources {id="openshift-resources"}

{{ product_title }} `DeploymentConfig` and `BuildConfig` resources can be automatically triggered by changes to image stream tags. When triggered, these resources use the new image value referenced by the updated image stream tag.

{% leveloffset +1 %}{% include "./modules/images-triggering-updates-imagestream-changes-kubernetes-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/images-triggering-updates-imagestream-changes-kubernetes-cli.md" %}{% endleveloffset %}