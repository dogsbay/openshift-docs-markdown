{%- set _mod_docs_content_type = "CONCEPT" %}
# Control traffic on secondary networks {id="control-traffic-on-secondary-networks-con_{{ context }}"}

As a cluster administrator, you can use the `MultiNetworkPolicy` API to create network policies that manage traffic for pods attached to secondary networks. These policies can allow or deny traffic based on specific ports, IP addresses and ranges, or pod labels.