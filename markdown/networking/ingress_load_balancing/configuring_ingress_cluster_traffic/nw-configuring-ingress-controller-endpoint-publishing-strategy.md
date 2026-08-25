---
title: Configuring the Ingress Controller endpoint publishing strategy
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring the Ingress Controller endpoint publishing strategy {id="nw-configuring-ingress-controller-endpoint-publishing-strategy"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nw-configuring-ingress-controller-endpoint-publishing-strategy" %}

To expose Ingress Controller endpoints to external systems and enable load balancer integrations in {{ product_title }}, configure the `endpointPublishingStrategy` parameter.


:::important

On {{ rh_openstack_first }}, the `LoadBalancerService` endpoint publishing strategy is supported only if a cloud provider is configured to create health monitors. For {{ rh_openstack }} 16.2, this strategy is possible only if you use the Amphora Octavia provider.

For more information, see the "Setting {{ rh_openstack }} Cloud Controller Manager options" section of the {{ rh_openstack }} installation documentation.

:::


{% leveloffset +1 %}{% include "./modules/nw-ingress-controller-endpoint-publishing-strategies.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingresscontroller-change-internal.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingresscontroller-change-external.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ingress-controller-nodeportservice-projects.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Ingress Controller configuration parameters](/networking/networking_operators/ingress-operator#nw-ingress-controller-configuration-parameters_configuring-ingress)
*   [Setting {{ rh_openstack }} Cloud Controller Manager options](/installing/installing_openstack/installing-openstack-installer-custom#installation-osp-setting-cloud-provider-options_installing-openstack-installer-custom)
*   [User-provisioned DNS requirements](/installing/installing_platform_agnostic/installing-platform-agnostic#installation-dns-user-infra_installing-platform-agnostic)