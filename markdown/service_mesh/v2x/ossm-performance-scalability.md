---
title: Performance and scalability
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Performance and scalability {id="ossm-performance-scalability"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "performance-scalability" %}

The default `ServiceMeshControlPlane` settings are not intended for production use; they are designed to install successfully on a default {{ product_title }} installation, which is a resource-limited environment. After you have verified a successful SMCP installation, you should modify the settings defined within the SMCP to suit your environment.

{% leveloffset +1 %}{% include "./modules/ossm-recommended-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ossm-load-test-results.md" %}{% endleveloffset %}