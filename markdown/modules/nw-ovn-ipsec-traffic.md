{%- set _mod_docs_content_type = "CONCEPT" %}
# Types of network traffic flows encrypted by pod-to-pod IPsec {id="nw-ovn-ipsec-traffic_{{ context }}"}

When pod-to-pod IPsec is enabled in {{ product_title }}, OVN-Kubernetes encrypts only selected traffic flows between pods on different nodes and from host-network pods. Other flows, such as traffic on the same node, remain unencrypted. {._abstract}

The following network traffic flows between pods are encrypted when pod-to-pod IPsec is enabled:

*   Traffic between pods on different nodes on the cluster network
*   Traffic from a pod on the host network to a pod on the cluster network

The following traffic flows are not encrypted when pod-to-pod IPsec is enabled:
* Traffic between pods on the same node on the cluster network
* Traffic between pods on the host network
* Traffic from a pod on the cluster network to a pod on the host network

The encrypted and unencrypted flows are illustrated in the following diagram:

![IPsec encrypted and unencrypted traffic flows](/_assets/images/nw-ipsec-encryption.png)