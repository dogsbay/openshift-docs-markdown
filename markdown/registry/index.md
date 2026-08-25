---
title: "{{ product_registry }} overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ product_registry }} overview {id="registry-overview"}
{%- set context = "registry-overview" %}

{{ product_title }} can build images from your source code, deploy them, and manage their lifecycle. {{ product_title }} provides an internal, integrated container image registry that can be deployed in your {{ product_title }} environment to locally manage images. The overview section includes {{ product_registry }} reference information and links for registries commonly used with {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/registry-common-terms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-integrated-openshift-registry.md" %}{% endleveloffset %}

**Additional resources**

*   [Image Registry Operator in {{ product_title }}](/registry/configuring-registry-operator#configuring-registry-operator)

{% leveloffset +1 %}{% include "./modules/pruning-images.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-third-party-registries.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/registry-quay-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Quay.io](https://quay.io)
*   [{{ quay }} product documentation](https://access.redhat.com/documentation/en-us/red_hat_quay/)

{% leveloffset +1 %}{% include "./modules/registry-authentication-enabled-registry-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Registry service accounts](https://access.redhat.com/terms-based-registry/)