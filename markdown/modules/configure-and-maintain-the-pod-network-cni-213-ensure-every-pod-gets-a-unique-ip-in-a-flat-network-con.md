{%- set _mod_docs_content_type = "CONCEPT" %}
# Ensure every pod gets a unique IP in a flat network {id="configure-and-maintain-the-pod-network-cni-213-ensure-every-pod-gets-a-unique-ip-in-a-flat-network-con_{{ context }}"}

In the default OVN-Kubernetes flat network, every pod in the cluster receives an address from the cluster network CIDR that is unique cluster-wide, so pods can reach each other directly without network address translation.