{%- set _mod_docs_content_type = "CONCEPT" %}
# Benefits of secondary networks for pods for telecommunications operators {id="cnf-benefits-secondary-networks-telco-ops_{{ context }}"}

You can connect network functions to different customers' infrastructure by using the same IP address with the Container Network Interface (CNI) virtual routing and forwarding (VRF) plugin. Using the CNI VRF plugin keeps different customers isolated. {._abstract}

In telecommunications use cases, each CNF can potentially be connected to many different networks sharing the same address space. These secondary networks can potentially conflict with the cluster’s main network CIDR.

With the CNI VRF plugin, IP addresses are overlapped with the {{ product_title }} IP address space. The CNI VRF plugin also reduces the number of permissions needed by CNF and increases the visibility of the network topologies of secondary networks.