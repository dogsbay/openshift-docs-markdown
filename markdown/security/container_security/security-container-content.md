---
title: Securing container content
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Securing container content {id="security-container-content"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "security-container-content" %}

To ensure the security of the content inside your containers you need to start with trusted base images, such as Red Hat Universal Base Images, and add trusted software. To check the ongoing security of your container images, there are both Red Hat and third-party tools for scanning images.

{% leveloffset +1 %}{% include "./modules/security-container-content-inside.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-container-content-universal.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-container-content-scanning.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-container-content-external-scanning.md" %}{% endleveloffset %}

**Additional resources**

*   [Image stream objects](/openshift_images/index#overview-of-images)