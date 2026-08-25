{%- set _mod_docs_content_type = "CONCEPT" %}
# RoCE network cards {id="ibm-z-roce-network-cards_{{ context }}"}

You can configure RoCE (RDMA over Converged Ethernet) interfaces with the Kubernetes NMState Operator when RoCE network cards are available on a node. For example, the cards are available if they are attached in a z/VM environment or passed through in a {{ op_system_base }} KVM environment.