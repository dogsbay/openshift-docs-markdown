---
title: Zero Trust Workload Identity Manager overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Zero Trust Workload Identity Manager overview {id="zero-trust-manager-overview"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-overview" %}

The {{ zero_trust_full }} is an {{ product_title }} Operator that manages the lifecycle of SPIFFE Runtime Environment (SPIRE) components. It enables workload identity management based on the Secure Production Identity Framework for Everyone (SPIFFE) standard, providing cryptographically verifiable identities (SVIDs) to workloads running in {{ product_title }} clusters.

The following are  components of the {{ zero_trust_full }} architecture:

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-about-spiffe.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-about-spire.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-about-agent.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-about-attestation.md" %}{% endleveloffset %}