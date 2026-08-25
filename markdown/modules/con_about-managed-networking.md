{%- set _mod_docs_content_type = "CONCEPT" %}
# About networking for managed clusters {id="con_about-managed-networking_{{ context }}"}

To optimize network traffic management and security across hybrid clusters, configure {{ openshift_networking }}. {._abstract}

The {{ openshift_networking }} ecosystem of networking capabilities integrates ingress, egress, load balancing, high-performance throughput, security, and inter- and intra-cluster traffic management. The {{ openshift_networking }} ecosystem also provides role-based observability tools to reduce its natural complexities.

The following list details some of the most commonly used {{ openshift_networking }} features available on your cluster:

*   Cluster Network Operator for network plugin management.

{% if openshift_rosa_hcp %}
*   Primary cluster network provided by OVN-Kubernetes, the default Container Network Interface (CNI) plugin.
{% endif %}

{% if not openshift_rosa_hcp %}
*   Primary cluster network provided by either of the following Container Network Interface (CNI) plugins:
    *   OVN-Kubernetes network plugin, which is the default CNI plugin.
    *   {{ OCP_short }} SDN network plugin, which was deprecated in {{ OCP_short }} 4.16 and removed in {{ OCP_short }} 4.17.
{% endif %}

{% if openshift_rosa or openshift_dedicated %}

:::important

Before upgrading {{ product_title }} clusters that are configured with the OpenShift SDN network plugin to version 4.17, you must migrate to the OVN-Kubernetes network plugin. For more information, see _Migrating from the OpenShift SDN network plugin to the OVN-Kubernetes network plugin_.

:::

{% endif %}