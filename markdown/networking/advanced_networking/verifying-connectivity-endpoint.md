---
title: Verifying connectivity to an endpoint
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Verifying connectivity to an endpoint {id="verifying-connectivity-endpoint"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "verifying-connectivity-endpoint" %}

The Cluster Network Operator (CNO) runs a controller, the connectivity check controller, that performs a connection health check between resources within your cluster.
By reviewing the results of the health checks, you can diagnose connection problems or eliminate network connectivity as the cause of an issue that you are investigating.

{% leveloffset +1 %}{% include "./modules/nw-pod-network-connectivity-checks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-pod-network-connectivity-implementation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-pod-network-connectivity-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-pod-network-connectivity-check-object.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-pod-network-connectivity-verify.md" %}{% endleveloffset %}