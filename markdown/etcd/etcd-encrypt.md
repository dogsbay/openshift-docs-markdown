---
title: Enabling etcd encryption
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "etcd-encrypt" %}
{% include "./_attributes/common-attributes.md" %}
# Enabling etcd encryption {id="etcd-encrypt"}

Encrypt and decrypt etcd data in {{ product_title }} to protect sensitive cluster resources such as secrets, config maps, and OAuth tokens. {._abstract}

{% leveloffset +1 %}{% include "./modules/about-etcd-encryption.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/etcd-encryption-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/enabling-etcd-encryption.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disabling-etcd-encryption.md" %}{% endleveloffset %}