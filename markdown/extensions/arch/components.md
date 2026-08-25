---
title: "{{ olmv1 }} components overview"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# {{ olmv1 }} components overview {id="olm-components"}
{%- set context = "olm-components" %}

{{ olmv1_first }} uses two key microservice components, Operator Controller and Catalogd, to unpack content and manage extensions on your cluster. {._abstract}


Operator Controller
:   Extends Kubernetes with an API to install and manage Operators and extensions using metadata from Catalogd.

Catalogd
:   Unpacks file-based catalog (FBC) content and hosts metadata so users can discover installable extensions.

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Operator Controller](/extensions/arch/operator-controller#operator-controller)
*   [Catalogd](/extensions/arch/catalogd#catalogd)