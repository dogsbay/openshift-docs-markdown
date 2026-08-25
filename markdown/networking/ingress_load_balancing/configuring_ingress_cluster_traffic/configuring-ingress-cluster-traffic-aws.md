---
title: Configuring ingress cluster traffic on AWS
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring ingress cluster traffic on AWS {id="configuring-ingress-cluster-traffic-aws"}
{%- set context = "configuring-ingress-cluster-traffic-aws" %}

{{ product_title }} provides methods for communicating from outside the cluster with services running in the cluster. This method uses load balancers on {{ aws_first }}, specifically a Network Load Balancer (NLB) or a Classic Load Balancer (CLB). Both types of load balancers can forward the IP address of the client to the node, but a CLB requires proxy protocol support, which {{ product_title }} automatically enables. {._abstract}

There are two ways to switch an Ingress Controller from using a CLB to using an NLB. Use only one of these approaches for a given Ingress Controller; do not combine them.

1.  Force replace the Ingress Controller that is currently using a CLB. This deletes the `IngressController` object and an outage occurs while the new DNS records propagate and the NLB is being provisioned.
1.  Edit the existing `IngressController` to set `spec.endpointPublishingStrategy.loadBalancer.providerParameters.aws.type` to `NLB`. Starting in {{ product_title }} 4.22, the cloud controller does not reprovision the load balancer automatically. The `IngressController` displays a `Progressing` condition stating that you must delete the router `Service` in the `openshift-ingress` namespace so that a new load balancer can be created. That interruption can change the load balancer hostname and IP addresses. Complete the subnets update procedure to read the `Progressing` condition and delete the router `Service`.

You can configure these load balancers on a new or existing {{ aws_short }} cluster.

{% leveloffset +1 %}{% include "./modules/nw-configuring-elb-timeouts-aws-classic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configuring-route-timeouts.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configuring-clb-timeouts.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-configuring-ingress-cluster-traffic-aws-networking-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-aws-ingress-nlb-dual-stack.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-aws-switching-clb-with-nlb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-aws-switching-nlb-with-clb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-aws-replacing-clb-with-nlb.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-aws-nlb-existing-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-aws-nlb-new-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-setting-select-subnet-loadbalancerservice.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-setting-update-subnet-loadbalancerservice.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-aws-static-eip-nlb-configuration.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_configuring-ingress-cluster-traffic-aws" ._additional-resources}

*   [Converting to a dual-stack cluster network](/networking/ovn_kubernetes_network_provider/converting-to-dual-stack#nw-dual-stack-convert_converting-to-dual-stack)
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
*   [Creating the installation configuration file](/installing/installing_aws/ipi/installing-aws-customizations#installation-initializing_installing-aws-customizations)
*   [Infrastructure cluster configuration API](/rest_api/config_apis/infrastructure-config-openshift-io-v1#infrastructure-config-openshift-io-v1)
*   [Installing a cluster on AWS with network customizations](/installing/installing_aws/ipi/installing-aws-customizations#installing-aws-customizations)
*   [Network Load Balancer support on AWS](https://kubernetes.io/docs/concepts/services-networking/service/#aws-nlb-support)
*   [Configure proxy protocol support for your Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html)