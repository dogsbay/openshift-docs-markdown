---
title: About BGP routing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About BGP routing {id="about-bgp-routing"}
{%- set context = "about-bgp-routing" %}

To integrate BGP with MetalLB and FRR-K8s in {{ product_title }}, you can review how FRR-K8s resources model cluster routing. Migrate `FRRConfiguration` custom resources from `metallb-system` to `openshift-frr-k8s` when admins or third parties created them outside the MetalLB Operator. {._abstract}


:::important

If you are using the MetalLB Operator and there are existing `FRRConfiguration` CRs in the `metallb-system` namespace created by cluster administrators or third-party cluster components other than the MetalLB Operator, you must ensure that they are copied to the `openshift-frr-k8s` namespace or that those third-party cluster components use the new namespace. For more information, see "Migrating FRR-K8s resources".

:::


{% leveloffset +1 %}{% include "./modules/nw-bgp-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-frr-k8s-configuration-crd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-no-overlay-overview.md" %}{% endleveloffset %}

{% if openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/nw-bgp-virtualization-aws.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-preparing-aws-bgp-peering.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-installing-bgp-cco.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-configuring-aws-peer-aws-route-server.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-bgp-external-network-access.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

{% if openshift_rosa_hcp %}
*   [Creating a machine pool](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/cluster_administration/managing-compute-nodes-using-machine-pools#creating_a_machine_pool_rosa-managing-worker-nodes)
{% endif %}
{% if not openshift_rosa_hcp %}
*   [About user-defined networks](/networking/multiple_networks/primary_networks/about-user-defined-networks#about-user-defined-networks)
*   [`FRRouting` User Guide: BGP](https://docs.frrouting.org/en/latest/bgp.html)
*   [Migrating FRR-K8s resources](/networking/advanced_networking/bgp_routing/migrating-frr-k8s-resources#migrating-frr-k8s-resources)
*   [Improve east-west performance by routing pods on the underlay with BGP](/networking/advanced_networking/bgp_routing/no-overlay-mode-bgp-routing#no-overlay-mode-bgp-routing)
{% endif %}