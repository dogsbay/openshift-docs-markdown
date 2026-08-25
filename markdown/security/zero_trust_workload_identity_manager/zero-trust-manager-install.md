---
title: "Installing the {{ zero_trust_full }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing the {{ zero_trust_full }} {id="zero-trust-manager-install"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "zero-trust-manager-install" %}

Install {{ zero_trust_full }} to help ensure secure communication between your workloads. You can install the {{ zero_trust_full }} by using either the web console or CLI.

If you install the Operator into a custom namespace (for example, `my-custom-namespace`), all managed operand resources are deployed within that same namespace. All secrets and ConfigMaps referenced by the Custom Resources (CRs) must also exist in that custom namespace.


:::important

The Operator installation is not supported in the `openshift-*` namespaces and the `default` namespace.

:::


{% leveloffset +1 %}{% include "./modules/zero-trust-manager-install-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/zero-trust-manager-install-cli.md" %}{% endleveloffset %}