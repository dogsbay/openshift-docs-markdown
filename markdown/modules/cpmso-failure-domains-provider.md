{%- set _mod_docs_content_type = "REFERENCE" %}
# Failure domain platform support and configuration {id="cpmso-failure-domains-provider_{{ context }}"}

Review failure domain support for your cloud provider to determine how to configure high availability for your control plane. {._abstract}

**Failure domain support matrix**

| Cloud provider | Support for failure domains | Provider nomenclature |
| :-- | :-: | :-: |
| Amazon Web Services (AWS) | X | [Availability Zone (AZ)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) |
| {{ gcp_first }} | X | [zone](https://cloud.google.com/compute/docs/regions-zones) |
| Microsoft Azure | X | [Azure availability zone](https://learn.microsoft.com/en-us/azure/azure-web-pubsub/concept-availability-zones) |
| Nutanix | X | [failure domain](https://portal.nutanix.com/page/documents/solutions/details?targetId=RA-2147-Nutanix-for-Enterprise-Edge:failure-domain-considerations.html) |
| {{ rh_openstack_first }} | X | [OpenStack Nova availability zones](https://docs.openstack.org/nova/2023.2/admin/availability-zones.html) and [OpenStack Cinder availability zones](https://docs.openstack.org/cinder/2023.2/admin/availability-zone-type.html) |
| VMware vSphere | X | failure domain mapped to a vSphere Zone ^[1]^ |
1.  For more information, see "Regions and zones for a VMware vCenter".

The failure domain configuration in the control plane machine set custom resource (CR) is platform-specific. For more information about failure domain parameters in the CR, see the sample failure domain configuration for your provider.