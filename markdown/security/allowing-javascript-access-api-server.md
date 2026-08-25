---
title: Allowing JavaScript-based access to the API server from additional hosts
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Allowing JavaScript-based access to the API server from additional hosts {id="allowing-javascript-based-access-api-server"}
{%- set context = "auth-allowed-origins" %}

By default, the cluster restricts API server requests to the web console for security. Because the default configuration only permits the web console, you must update the API Server configuration of the cluster to approve additional hostnames for API and OAuth access. {._abstract}

{% leveloffset +1 %}{% include "./modules/auth-allowing-javascript-access-api-server.md" %}{% endleveloffset %}