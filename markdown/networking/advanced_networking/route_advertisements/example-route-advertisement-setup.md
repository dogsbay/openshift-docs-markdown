---
title: Example route advertisements setup
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Example route advertisements setup {id="example-route-advertisements-setup"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "example-route-advertisements-setup" %}

To learn how to implement a route reflection setup on bare-metal infrastructure, you can follow this sample configuration. This example demonstrates how to enable the necessary feature gates and configure objects to advertise pod and egress IP routes.

As a cluster administrator, you can configure the following example route advertisements setup for your cluster. This configuration is intended as a sample that demonstrates how to configure route advertisements.

{% leveloffset +1 %}{% include "./modules/nw-routeadvertisements-setup.md" %}{% endleveloffset %}