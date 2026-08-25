{%- set _mod_docs_content_type = "CONCEPT" %}
# About virtual routing and forwarding {id="cnf-about-virtual-routing-and-forwarding_{{ context }}"}

You can use virtual routing and forwarding (VRF) to provide multi-tenancy functionality. For example, where each tenant has its own unique routing tables and requires different default gateways. {._abstract}

VRF reduces the number of permissions needed by cloud-native network function (CNF), and provides increased visibility of the network topology of secondary networks. VRF devices combined with IP address rules provide the ability to create virtual routing and forwarding domains.

Processes can bind a socket to the VRF device. Packets through the binded socket use the routing table associated with the VRF device. An important feature of VRF is that it impacts only OSI model layer 3 traffic and above so L2 tools, such as LLDP, are not affected. This allows higher priority IP address rules such as policy-based routing to take precedence over the VRF device rules directing specific traffic.