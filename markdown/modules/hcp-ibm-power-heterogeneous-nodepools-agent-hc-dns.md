{%- set _mod_docs_content_type = "CONCEPT" %}
# DNS configuration for hosted control planes {id="hcp-ibm-power-heterogeneous-nodepools-agent-hc-dns_{{ context }}"}

A Domain Name Service (DNS) configuration for hosted control planes means that external clients can reach ingress controllers, so that the clients can route traffic to internal components. Configuring this setting ensures that traffic gets routed to either a `ppc64le` or an `x86_64` compute node. {._abstract}

You can point an `*.apps.<cluster_name>` record to either of the compute nodes that hosts the ingress application. Or, if you can set up a load balancer on top of the compute nodes, point the record to this load balancer. When you are creating a heterogeneous node pool, make sure the compute nodes can reach each other or keep them in the same network.