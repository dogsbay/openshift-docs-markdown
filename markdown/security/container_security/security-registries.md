---
title: Using container registries securely
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using container registries securely {id="security-registries"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "security-registries" %}

You can use container registries to store container images, making the images accessible to others either publicly or privately.

By using a registry, you can include multiple versions of an image, optionally limit access to images based on different authentication methods, or make them publicly available.

There are public container registries, such as Quay.io and Docker Hub where many people and organizations share their images. The Red Hat Registry offers supported Red Hat and partner images, while the Red Hat Ecosystem Catalog offers detailed descriptions and health checks for those images. To manage your own registry, you could purchase a container registry such as {{ quay }}.

From a security standpoint, some registries provide special features to check and improve the health of your containers. For example, {{ quay }} offers container vulnerability scanning with Clair security scanner, build triggers to automatically rebuild images when source code changes in GitHub and other locations, and the ability to use role-based access control (RBAC) to secure access to images.

{% leveloffset +1 %}{% include "./modules/security-registries-where.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-registries-immutable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-registries-ecosystem.md" %}{% endleveloffset %}

**Additional resources**

*   [Red Hat Product Security Center](https://access.redhat.com/security/)
*   [Red Hat Security Advisories](https://access.redhat.com/security/security-updates/#/security-advisories)

{% leveloffset +1 %}{% include "./modules/security-registries-openshift.md" %}{% endleveloffset %}

**Additional resources**

*   [Integrated {{ product_registry }}](/registry/index#registry-overview)

{% leveloffset +1 %}{% include "./modules/security-registries-quay.md" %}{% endleveloffset %}