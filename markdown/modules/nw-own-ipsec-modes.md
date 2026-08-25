{%- set _mod_docs_content_type = "CONCEPT" %}
# Modes of operation {id="nw-ovn-ipsec-modes_{{ context }}"}

You can configure IPsec on {{ product_title }} clusters in `Disabled`, `External`, or `Full` pod-to-pod and external encryption modes. Each mode determines which traffic OVN-Kubernetes encrypts by default. {._abstract}

The following table describes the different modes of operation:

**IPsec modes of operation**

| Mode | Description | Default |
| --- | --- | --- |
| `Disabled` | No traffic is encrypted. This is the cluster default. | Yes |
| `Full` | Pod-to-pod traffic is encrypted as described in "Types of network traffic flows encrypted by pod-to-pod IPsec". Traffic to external nodes may be encrypted after you complete the required configuration steps for IPsec. | No |
| `External` | Traffic to external nodes may be encrypted after you complete the required configuration steps for IPsec. | No |