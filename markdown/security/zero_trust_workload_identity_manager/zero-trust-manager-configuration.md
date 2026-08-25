---
title: Deploying Zero Trust Workload Identity Manager operands
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Deploying Zero Trust Workload Identity Manager operands {id="zero-trust-manager-configuration_{{ context }}"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-configuration" %}

Deploy the {{ zero_trust_full }} operands by creating their custom resources in a specific order. Adhering to the sequence ensures the successful installation of components, such as the Security Production Identity Framework for Everyone (SPIRE) Server, SPIRE Agent, and Secure Production Identity Framework For Everyone (SPIFFE) CSI driver.

You must deploy the operands in the following sequence to ensure successful installation:

*   `ZeroTrustWorkloadIdentityManager` CR
*   SPIRE Server
*   SPIRE Agent
*   SPIFFE CSI driver
*   SPIRE OIDC discovery provider

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-ztwim-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spire-server-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spire-agent-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-spiffe-csidriver-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-oidc-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-verify-operands.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-manually-delete-scc.md" %}{% endleveloffset %}