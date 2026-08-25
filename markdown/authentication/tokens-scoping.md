---
title: Scoping tokens
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Scoping tokens {id="tokens-scoping"}
{%- set context = "configuring-internal-oauth" %}

You can create scoped tokens to delegate specific permissions to users or service accounts, and configure cluster role bindings for unauthenticated users when required. {._abstract}

{% leveloffset +1 %}{% include "./modules/tokens-scoping-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/unauthenticated-users-cluster-role-binding.md" %}{% endleveloffset %}