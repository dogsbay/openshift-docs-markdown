{%- set _mod_docs_content_type = "REFERENCE" %}
# Comparing Linux bridge CNI and OVN-Kubernetes localnet topology {id="virt-nw-overview-comparing-localnet-linuxbridge_{{ context }}"}

A comparison of features available when using the Linux bridge CNI compared to the localnet topology for an OVN-Kubernetes plugin. {._abstract}

**Linux bridge CNI compared to an OVN-Kubernetes localnet topology**

| Feature | Available on Linux bridge CNI | Available on OVN-Kubernetes localnet |
| --- | --- | --- |
| Layer 2 access to the underlay native network | Only on secondary network interface controllers (NICs) | Yes |
| Layer 2 access to underlay VLANs | Yes | Yes |
| Layer 2 trunk access | Yes | No |
| Network policies | No | Yes |
| MAC spoof filtering | Yes | Yes (Always on) |