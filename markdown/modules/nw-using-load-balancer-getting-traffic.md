{%- set _mod_docs_content_type = "CONCEPT" %}
# Using a load balancer to get traffic into the cluster {id="nw-using-load-balancer-getting-traffic_{{ context }}"}

If you do not need a specific external IP address, you can configure a load balancer service to allow external access to an {{ product_title }} cluster. {._abstract}

A load balancer service allocates a unique IP. The load balancer has a single edge router IP, which can be a virtual IP (VIP), but is still a single machine for initial load balancing.


:::note

A pool gets configured at the infrastructure level and not the cluster administrator level.

:::