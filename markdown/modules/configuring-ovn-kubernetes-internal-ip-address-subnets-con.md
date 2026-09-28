{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure OVN-Kubernetes internal IP address subnets {id="configuring-ovn-kubernetes-internal-ip-address-subnets-con_{{ context }}"}

OVN-Kubernetes reserves internal join and transit subnets for traffic between cluster components. As a cluster administrator, you can change these ranges so that they do not conflict with address space used elsewhere in your network.