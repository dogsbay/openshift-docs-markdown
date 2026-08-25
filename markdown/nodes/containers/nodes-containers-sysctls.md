---
title: Using sysctls in containers
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-containers-using" %}
# Using sysctls in containers {id="nodes-containers-sysctls"}
{% include "./_attributes/common-attributes.md" %}

You can configure namespaced sysctls to manage kernel parameters for specific pods or network interfaces. By enabling safe or unsafe namespaced sysctls, you can fine-tune your environment’s performance and networking behavior at the pod level.

Only sysctls that are namespaced can be set independently on pods. If a sysctl is not namespaced, it is known as a _node-level_ sysctl. You must use another method of setting the sysctl, such as by using the Node Tuning Operator. To set node-level sysctls, see "Using the Node Tuning Operator".

Network sysctls are a special category of sysctl. Network sysctls include:

*   System-wide sysctls, for example `net.ipv4.ip_local_port_range`, that are valid for all networking. You can set these independently for each pod on a node.
*   Interface-specific sysctls, for example `net.ipv4.conf.IFNAME.accept_local`, that only apply to a specific additional network interface for a given pod. You can set these independently for each additional network configuration. You set these by using a configuration in the `tuning-cni` after the network interfaces are created.


:::important

If the `net.ipv4.ip_local_port_range` safe sysctl parameter value and the default node port service range overlap, the OVN Kubernetes plugin might experience connection failures. For more information about this parameter, see the _System-wide safe sysctls_ table in the "Safe and unsafe sysctls" section.

:::


Only those sysctls considered _safe_ are enabled by default. A cluster administrator can manually enable _unsafe_ sysctls on the node to be available to the user.

**Additional resources**

*   [Configuring the node port service range](/networking/configuring_network_settings/configuring-node-port-service-range#configuring-node-port-service-range)

{% leveloffset +1 %}{% include "./modules/nodes-containers-sysctls-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-namespaced-nodelevel-sysctls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-safe-sysctls-list.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Configuring ingress cluster traffic using a NodePort](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#configuring-ingress-cluster-traffic-nodeport)

{% leveloffset +1 %}{% include "./modules/update-network-sysctl-allowlist.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-start-pod-safe-sysctls.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-sysctls-setting.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-containers-sysctls-unsafe.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_nodes-containers-sysctls"}

*   [Linux networking documentation](https://docs.kernel.org/networking/ip-sysctl.html)
*   [Configuring system controls by using the tuning CNI](/networking/configuring_network_settings/configure-syscontrols-interface-tuning-cni#nw-configuring-tuning-cni_configure-syscontrols-interface-tuning-cni)
*   [Using the Node Tuning Operator](/scalability_and_performance/using-node-tuning-operator#using-node-tuning-operator)
*   [Kernel.org documentation](https://www.kernel.org/doc/Documentation/sysctl/)