---
title: Control plane resiliency and recovery
---

# Control plane resiliency and recovery {#cpmso-resiliency}

You can use the control plane machine set to improve the resiliency of the control plane for your OpenShift Container Platform cluster.

## High availability and fault tolerance with failure domains {#cpmso-failure-domains_cpmso-resiliency}

When possible, the control plane machine set spreads the control plane machines across multiple failure domains. This configuration provides high availability and fault tolerance within the control plane. This strategy can help protect the control plane when issues arise within the infrastructure provider.

**Additional resources**

- [Sample {{ aws_full }} failure domain configuration](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-aws#cpmso-yaml-failure-domain-aws_cpmso-config-options-aws)
- [Sample {{ gcp_full }} failure domain configuration](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-gcp#cpmso-yaml-failure-domain-gcp_cpmso-config-options-gcp)
- [Sample {{ azure_full }} failure domain configuration](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-azure#cpmso-yaml-failure-domain-azure_cpmso-config-options-azure)
- [Adding failure domains to an existing Nutanix cluster](/installing/installing_nutanix/nutanix-failure-domains#nutanix-failure-domains-adding-to-existing-cluster_nutanix-failure-domains)
- [Sample {{ rh_openstack_first }} failure domain configuration](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-openstack#cpmso-yaml-failure-domain-openstack_cpmso-config-options-openstack)
- [Sample {{ vmw_full }} failure domain configuration](/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-vsphere#cpmso-yaml-failure-domain-vsphere_cpmso-config-options-vsphere)
- [Regions and zones for a VMware vCenter](/installing/installing_vsphere/post-install-vsphere-zones-regions-configuration#post-install-vsphere-zones-regions-configuration)

**Additional resources**

- [Deploying machine health checks](/machine_management/deploying-machine-health-checks#deploying-machine-health-checks)

**Additional resources**

- [Lifecycle hooks for the machine deletion phase](/machine_management/deleting-machine#machine-lifecycle-hook-deletion_deleting-machine)
