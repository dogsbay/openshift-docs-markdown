{%- set _mod_docs_content_type = "CONCEPT" %}
# Securing ingress traffic {id="security-network-ingress_{{ context }}"}

There are many security implications related to how you configure access to your Kubernetes services from outside of your {{ product_title }} cluster.
 
In addition to exposing HTTP and HTTPS routes, ingress routing allows you to set up `NodePort` or `LoadBalancer` ingress types. NodePort exposes an application’s service API object from each cluster worker. LoadBalancer lets you assign an external load balancer to an associated service API object in your {{ product_title }} cluster.