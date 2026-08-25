{%- set _mod_docs_content_type = "CONCEPT" %}
# Egress IP address architectural design and implementation {id="nw-egress-ips-about_{{ context }}"}

By using the {{ product_title }} egress IP address functionality, you can ensure that the traffic from one or more pods in one or more namespaces has a consistent source IP address for services outside the cluster network. {._abstract}

For example, you might have a pod that periodically queries a database that is hosted on a server outside of your cluster. To enforce access requirements for the server, a packet filtering device is configured to allow traffic only from specific IP addresses.

To ensure that you can reliably allow access to the server from only that specific pod, you can configure a specific egress IP address for the pod that makes the requests to the server.

An egress IP address assigned to a namespace is different from an egress router, which is used to send traffic to specific destinations.

{% if not openshift_rosa %}
In some cluster configurations,
{% endif %}
{% if openshift_rosa %}
In {{ hcp_title }} clusters,
{%- endif %}
application pods and ingress router pods run on the same node. If you configure an egress IP address for an application project in this scenario, the IP address is not used when you send a request to a route from the application project.

{% if not openshift_rosa %}

:::important

Egress IP addresses must not be configured in any Linux network configuration files, such as `ifcfg-eth0`.

:::

{% endif %}


:::important

The assignment of egress IP addresses to control plane nodes with the EgressIP feature is
{%- if openshift_rosa %}
not supported.
{% endif %}
{% if not openshift_rosa %}
not supported on a cluster provisioned on {{ aws_first }}. For more information, see "BZ#2039656".
{%- endif %}

:::


The following examples illustrate the annotation from nodes on several public cloud providers. The annotations are indented for readability.

```yaml title="Example cloud.network.openshift.io/egress-ipconfig annotation on AWS"
cloud.network.openshift.io/egress-ipconfig: [
  {
    "interface":"eni-078d267045138e436",
    "ifaddr":{"ipv4":"10.0.128.0/18"},
    "capacity":{"ipv4":14,"ipv6":15}
  }
]
```

The following sections describe the IP address capacity for supported public cloud environments for use in your capacity calculation.

{% if not openshift_rosa %}

{{ aws_first }} IP address capacity limits
{% endif %}
{% if openshift_rosa %}

{{ aws_first }} IP address capacity limits
{% endif %}

:   On {{ aws_short }}, constraints on IP address assignments depend on the instance type configured. For more information, see "IP addresses per network interface per instance type".

{% if not openshift_rosa %}

{{ gcp_first }} IP address capacity limits

:   On {{ gcp_short }}, the networking model implements additional node IP addresses through IP address aliasing, rather than IP address assignments. However, IP address capacity maps directly to IP aliasing capacity.

The following capacity limits exist for IP aliasing assignment:

*   Per node, the maximum number of IP aliases, both IPv4 and IPv6, is 100.
*   Per VPC, the maximum number of IP aliases is unspecified, but {{ product_title }} scalability testing reveals the maximum to be approximately 15,000.

For more information, see "Per instance" quotas and "Alias IP ranges overview".


{{ azure_full }} IP address capacity limits

:   On {{ azure_short }}, the following capacity limits exist for IP address assignment:

    *   Per NIC, the maximum number of assignable IP addresses, for both IPv4 and IPv6, is 256.
    *   Per virtual network, the maximum number of assigned IP addresses cannot exceed 65,536.

For more information, see "Networking limits".
{% endif %}