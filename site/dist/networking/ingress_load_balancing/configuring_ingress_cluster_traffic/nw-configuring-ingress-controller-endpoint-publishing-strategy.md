---
title: Configuring the Ingress Controller endpoint publishing strategy
---

# Configuring the Ingress Controller endpoint publishing strategy {#nw-configuring-ingress-controller-endpoint-publishing-strategy}

To expose Ingress Controller endpoints to external systems and enable load balancer integrations in OpenShift Container Platform, configure the `endpointPublishingStrategy` parameter.

> [!IMPORTANT]
> On {{ rh_openstack_first }}, the `LoadBalancerService` endpoint publishing strategy is supported only if a cloud provider is configured to create health monitors. For {{ rh_openstack }} 16.2, this strategy is possible only if you use the Amphora Octavia provider.
>
> For more information, see the "Setting {{ rh_openstack }} Cloud Controller Manager options" section of the {{ rh_openstack }} installation documentation.

## Additional resources {#_additional_resources}

- [Ingress Controller configuration parameters](/networking/networking_operators/ingress-operator#nw-ingress-controller-configuration-parameters_configuring-ingress)
- [Setting {{ rh_openstack }} Cloud Controller Manager options](/installing/installing_openstack/installing-openstack-installer-custom#installation-osp-setting-cloud-provider-options_installing-openstack-installer-custom)
- [User-provisioned DNS requirements](/installing/installing_platform_agnostic/installing-platform-agnostic#installation-dns-user-infra_installing-platform-agnostic)
