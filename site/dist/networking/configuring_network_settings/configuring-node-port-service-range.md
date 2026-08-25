---
title: Configuring the node port service range
---

# Configuring the node port service range {#configuring-node-port-service-range}

To meet your cluster node port requirements in OpenShift Container Platform, you can configure the node port service range during installation or expand it after installation. You can expand the default range of `30000-32768` on either side while preserving this default range within your new configuration.

> [!IMPORTANT]
> Red Hat has not performed testing outside the default port range of `30000-32768`. For ranges outside the default port range, ensure that you test to verify the expanding node port range does not impact your cluster. In particular, ensure that there is:
>
> - No overlap with any ports already in use by host processes
> - No overlap with any ports already in use by pods that are configured with host networking
>
> If you expanded the range and a port allocation issue occurs, create a new cluster and set the required range for it.
>
> If you expand the node port range and {{ oc_first }} stops working because of a port conflict with the OpenShift Container Platform API server, you must create a new cluster.

## Additional resources {#configuring-node-port-service-range-additional-resources}

- [Configuring ingress cluster traffic using a NodePort](/openshift-docs-markdown/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#configuring-ingress-cluster-traffic-nodeport)
- [Network: config.openshift.io v1](/openshift-docs-markdown/rest_api/config_apis/network-config-openshift-io-v1#network-config-openshift-io-v1)
- [Service: core v1](/openshift-docs-markdown/rest_api/network_apis/service-v1#service-v1)
- [Safe and unsafe sysctls](/openshift-docs-markdown/nodes/containers/nodes-containers-sysctls#safe_and_unsafe_sysctls_nodes-containers-sysctls)
