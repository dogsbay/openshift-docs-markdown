---
title: Configuring the node port service range
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the node port service range {id="configuring-node-port-service-range"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "configuring-node-port-service-range" %}

To meet your cluster node port requirements in {{ product_title }}, you can configure the node port service range during installation or expand it after installation. You can expand the default range of `30000-32768` on either side while preserving this default range within your new configuration.


:::important

Red&#160;Hat has not performed testing outside the default port range of `30000-32768`. For ranges outside the default port range, ensure that you test to verify the expanding node port range does not impact your cluster. In particular, ensure that there is:

*   No overlap with any ports already in use by host processes
*   No overlap with any ports already in use by pods that are configured with host networking

If you expanded the range and a port allocation issue occurs, create a new cluster and set the required range for it.

If you expand the node port range and {{ oc_first }} stops working because of a port conflict with the {{ product_title }} API server, you must create a new cluster.

:::


{% leveloffset +1 %}{% include "./modules/nw-nodeport-service-range-edit.md" %}{% endleveloffset %}

## Additional resources {id="configuring-node-port-service-range-additional-resources"}

*   [Configuring ingress cluster traffic using a NodePort](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#configuring-ingress-cluster-traffic-nodeport)
*   [Network: config.openshift.io v1](/rest_api/config_apis/network-config-openshift-io-v1#network-config-openshift-io-v1)
*   [Service: core v1](/rest_api/network_apis/service-v1#service-v1)
*   [Safe and unsafe sysctls](/nodes/containers/nodes-containers-sysctls#safe_and_unsafe_sysctls_nodes-containers-sysctls)