---
title: Using the SPIFFE Helper container image
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using the SPIFFE Helper container image {id="zero-trust-manager-spiffe-helper"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-spiffe-helper" %}

SPIFFE Helper writes Transport Layer Security (TLS) certificates to disk for applications that cannot use the SPIFFE Workload API. Use it to eliminate manual certificate management and reduce the risk of expired certificates.

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spiffe-helper-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spiffe-helper-modes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spiffe-helper-credential-types.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-deploy-spiffe-helper.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spiffe-helper-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spiffe-helper-troubleshooting.md" %}{% endleveloffset %}