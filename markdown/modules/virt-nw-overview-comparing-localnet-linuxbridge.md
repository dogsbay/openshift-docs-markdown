{%- set _mod_docs_content_type = "REFERENCE" %}
# Linux bridge CNI and OVN-Kubernetes localnet comparison {id="virt-nw-overview-comparing-localnet-linuxbridge_{{ context }}"}

The following table compares the features available when you use the Linux bridge CNI with the OVN-Kubernetes localnet topology. {._abstract}

**Linux bridge CNI compared to an OVN-Kubernetes localnet topology**

| Feature | Available on Linux bridge CNI | Available on OVN-Kubernetes localnet |
| --- | --- | --- |
| Layer 2 access to the underlay native network | Only on secondary network interface controllers (NICs) | Yes |
| Layer 2 access to underlay VLANs | Yes | Yes |
| Layer 2 trunk access | Yes | No |
| Network policies | No | Yes |
| MAC spoof filtering | Yes | Yes (Always on) |