{%- set _mod_docs_content_type = "CONCEPT" %}
# Ingress sharding in {{ product_title }} {id="nw-ingress-sharding-concept_{{ context }}"}

To optimise routing performance in {{ product_title }}, create shards so that you can load balance incoming traffic across multiple Ingress Controllers.  {._abstract}

In {{ product_title }}, an Ingress Controller can serve all routes, or it can serve a subset of routes. By default, the Ingress Controller serves any route created in any namespace of the cluster. You can add additional Ingress Controllers to your cluster to optimize routing by creating shards, which are subsets of routes based on selected characteristics. To mark a route as a member of a shard, use labels in the route or namespace `metadata` field. The Ingress Controller uses _selectors_, also known as a _selection expression_, to select a subset of routes from the entire pool of routes to serve.

You can also use Ingress sharding when you want to isolate traffic so that the traffic can route to a specific Ingress Controller.

By default, each route uses the default domain of the cluster. However, routes can be configured to use the domain of the router instead.