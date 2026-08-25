---
title: Configuring Service Mesh for production
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring Service Mesh for production {id="ossm-production"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ossm-architecture" %}

When you are ready to move from a basic installation to production, you must configure your control plane, tracing, and security certificates to meet production requirements.

**Prerequisites**

*   Install and configure {{ SMProductName }}.
*   Test your configuration in a staging environment.

{% leveloffset +1 %}{% include "./modules/ossm-smcp-prod.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_ossm-production"}

*   For more information about tuning {{ SMProductShortName }} for performance, see [Performance and scalability](/service_mesh/v2x/ossm-performance-scalability#ossm-performance-scalability).