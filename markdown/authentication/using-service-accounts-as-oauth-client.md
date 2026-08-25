---
title: Using a service account as an OAuth client
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using a service account as an OAuth client {id="using-service-accounts-as-oauth-client"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "using-service-accounts-as-oauth-client" %}

To authenticate users when restricting access to a specific namespace, you can configure a service account as a constrained OAuth client by using static or dynamic redirect URI annotations.

{% leveloffset +1 %}{% include "./modules/service-accounts-as-oauth-clients.md" %}{% endleveloffset %}