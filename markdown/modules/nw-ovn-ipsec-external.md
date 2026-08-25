{%- set _mod_docs_content_type = "CONCEPT" %}
# IPsec encryption for external traffic {id="nw-ovn-ipsec-external_{{ context }}"}

{{ product_title }} supports the use of IPsec to encrypt traffic destined for external hosts, ensuring confidentiality and integrity of data in transit. This feature relies on X.509 certificates that you must supply. {._abstract}

## Supported platforms {id="supported-platforms_{{ context }}"}

This feature is supported on the following platforms:

*   Bare metal
*   {{ gcp_first }}
*   {{ rh_openstack_first }}
*   {{ vmw_full }}


:::important

If you have {{ op_system_base_full }} compute nodes, these do not support IPsec encryption for external traffic.

:::


If your cluster uses {{ hcp }} for Red Hat {{ product_title }}, configuring IPsec for encrypting traffic to external hosts is not supported.

## Limitations {id="ipsec-external-limitations_{{ context }}"}

Ensure that the following prohibitions are observed:

*   IPv6 configuration is not currently supported by the NMState Operator when configuring IPsec for external traffic.
*   Certificate common names (CN) in the provided certificate bundle must not begin with the `ovs_` prefix, because this naming can conflict with pod-to-pod IPsec CN names in the Network Security Services (NSS) database of each node.