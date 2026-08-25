---
title: CIDR range definitions
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# CIDR range definitions {id="cidr-range-definitions"}
{% include "./_attributes/common-attributes.md" %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% endif %}
{%- set context = "cidr-range-definitions" %}

If your cluster uses OVN-Kubernetes, you must specify non-overlapping ranges for Classless Inter-Domain Routing (CIDR) subnet ranges.


:::important

For {{ product_title }} 4.17 and later versions, clusters use `169.254.0.0/17` for IPv4 and `fd69::/112` for IPv6 as the default masquerade subnet. You must avoid these ranges. For upgraded clusters, there is no change to the default masquerade subnet.

:::



:::tip

You can use the [Red Hat OpenShift Network Calculator](https://access.redhat.com/labs/ocpnc/) to decide your networking needs before setting CIDR range during cluster creation. 

You must have a Red Hat account to use the calculator.

:::


The following subnet types are mandatory for a cluster that uses OVN-Kubernetes:

*   Join: Uses a join switch to connect gateway routers to distributed routers. A join switch reduces the number of IP addresses for a distributed router. For a cluster that uses the OVN-Kubernetes plugin, an IP address from a dedicated subnet is assigned to any logical port that attaches to the join switch.
*   Masquerade: Prevents collisions for identical source and destination IP addresses that are sent from a node as hairpin traffic to the same node after a load balancer makes a routing decision.
*   Transit: A transit switch is a type of distributed switch that spans across all nodes in the cluster. A transit switch routes traffic between different zones. For a cluster that uses the OVN-Kubernetes plugin, an IP address from a dedicated subnet is assigned to any logical port that attaches to the transit switch.


:::note

You can change the join, masquerade, and transit CIDR ranges for your cluster as a postinstallation task.

:::


{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
When specifying subnet CIDR ranges, ensure that the subnet CIDR range is within the defined Machine CIDR. You must verify that the subnet CIDR ranges allow for enough IP addresses for all intended workloads depending on which platform the cluster is hosted.
{% endif %}

OVN-Kubernetes, the default network provider in {{ product_title }} 4.14 and later versions, internally uses the following IP address subnet ranges:

*   `V4JoinSubnet`: `100.64.0.0/16`
*   `V6JoinSubnet`: `fd98::/64`
*   `V4TransitSwitchSubnet`: `100.88.0.0/16`
*   `V6TransitSwitchSubnet`: `fd97::/64`
*   `defaultV4MasqueradeSubnet`: `169.254.0.0/17`
*   `defaultV6MasqueradeSubnet`: `fd69::/112`


:::important

The earlier list includes join, transit, and masquerade IPv4 and IPv6 address subnets. If your cluster uses OVN-Kubernetes, do not include any of these IP address subnet ranges in any other CIDR definitions in your cluster or infrastructure.

:::


{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**

*   [Configuring OVN-Kubernetes internal IP address subnets](/networking/ovn_kubernetes_network_provider/configure-ovn-kubernetes-subnets#configure-ovn-kubernetes-subnets)
{% endif %}

{% leveloffset +1 %}{% include "./modules/machine-cidr-description.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

**Additional resources**

*   [Cluster Network Operator configuration](/networking/networking_operators/cluster-network-operator#nw-operator-cr_cluster-network-operator)
{% endif %}

{% leveloffset +1 %}{% include "./modules/service-cidr-description.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pod-cidr-description.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
**Additional resources**

*   [Cluster Network Operator configuration](/networking/networking_operators/cluster-network-operator#nw-operator-cr_cluster-network-operator)
*   [Configuring the cluster network range](/networking/configuring_network_settings/configuring-cluster-network-range#configuring-cluster-network-range)
{% endif %}

{% leveloffset +1 %}{% include "./modules/host-prefix-description.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
{% leveloffset +1 %}{% include "./modules/hcp-cidr-ranges.md" %}{% endleveloffset %}
{% endif %}