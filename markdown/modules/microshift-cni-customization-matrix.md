{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ microshift_short }} networking configuration matrix {id="microshift-nw-customization-matrix_{{ context }}"}

The following table summarizes the status of networking features and capabilities that are either present as defaults, supported for configuration, or not available with the {{ microshift_short }} service: {._abstract}

**{{ microshift_short }} networking features and capabilities overview**

| Network capability | Availability | Configuration supported |
| --- | --- | --- |
| Advertise address | Yes | Yes |
| Kubernetes network policy | Yes | Yes |
| Kubernetes network policy logs | Not available | N/A |
| Load balancing | Yes | Yes |
| Multicast DNS | Yes | Yes |
| Network proxies | Yes | CRI-O |
| Network performance | Yes | MTU configuration |
| Egress IPs | Not available | N/A |
| Egress firewall | Not available | N/A |
| Egress router | Not available | N/A |
| Firewall | No | Yes |
| Hardware offloading | Not available | N/A |
| Hybrid networking | Not available | N/A |
| IPsec encryption for intra-cluster communication | Not available | N/A |
| IPv6 | Supported | N/A |
| Ingress router | Yes | Yes |
| Multiple networks plugin | Yes | Yes |


Additional details about networking capabilities

:   *   `Advertise address`: If unset, the default value is set to the next immediate subnet after the service network. For example, when the service network is `10.43.0.0/16`, the `advertiseAddress` is set to `10.44.0.0/32`.
    *   `Multicast DNS`: You can use the multicast DNS protocol (mDNS) to allow name resolution and service discovery within a Local Area Network (LAN) using multicast exposed on the `5353/UDP` port.
    *   `Network proxies`: There is no built-in transparent proxying of egress traffic in {{ microshift_short }}. Egress must be manually configured.
    *   `Firewall`: Setting up the firewalld service is supported by {{ op_system_ostree }}.
    *   `IPv6`: Is supported in both single-stack and dual-stack networks with the OVN-Kubernetes network plugin. You can also use IPv6 by connecting to other networks with the {{ microshift_short }} Multus CNI plugin.
    *   `Ingress router`: Configure by using the {{ microshift_short }} `config.yaml` file.