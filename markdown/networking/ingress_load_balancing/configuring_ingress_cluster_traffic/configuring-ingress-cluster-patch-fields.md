---
title: Patching existing ingress objects
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Patching existing ingress objects {id="configuring-ingress-cluster-patch-fields"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-ingress-cluster-patch-fields" %}

You can update or modify the following fields of existing `Ingress` objects without recreating the objects or disrupting services to these objects:

*   Specifications
*   Host
*   Path
*   Backend services
*   SSL/TLS settings
*   Annotations

{% leveloffset +1 %}{% include "./modules/nw-patch-fields-example.md" %}{% endleveloffset %}