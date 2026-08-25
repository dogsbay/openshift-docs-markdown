---
title: VMware vSphere CSI Driver Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# VMware vSphere CSI Driver Operator {id="persistent-storage-vsphere"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "persistent-storage-csi-vsphere" %}

You can provision and manage vSphere storage in {{ product_title }} by using the vSphere Container Storage Interface (CSI) Driver Operator and driver, which provide dynamic volume provisioning and eliminate the need to pre-provision storage.

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-overview.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring CSI volumes](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi)
*   [Managing the default storage class](/storage/container_storage_interface/persistent-storage-csi-sc-manage#persistent-storage-csi-sc-manage)
*   [Overview of available file systems](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_file_systems/overview-of-available-file-systems_managing-file-systems)
*   [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-limitations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-stor-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-rwx.md" %}{% endleveloffset %}

**Additional resources**

*   [vSAN File Service](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vsan.doc/GUID-82565B82-C911-42F7-85B1-E9EF973EE90C.html)

{% leveloffset +1 %}{% include "./modules/vmware-csi-driver-reqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Removing a third-party vSphere CSI Driver Operator](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-install-issues_persistent-storage-csi-vsphere)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-install-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-encryption.md" %}{% endleveloffset %}

**Additional resources**

*   [Requirements for encrypting virtual machines](/installing/installing_vsphere/upi/upi-vsphere-installation-reqs#installation-vsphere-encrypted-vms_upi-vsphere-installation-reqs)
*   [During installation: Step 7 of Installing RHCOS and starting the {{ product_title }} bootstrap process](/installing/installing_vsphere/upi/installing-vsphere#installation-vsphere-machines_installing-vsphere)
*   [Enabling encryption on a vSphere cluster](/installing/installing_vsphere/vsphere-post-installation-encryption#vsphere-post-installation-encryption)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-encryption-datastore-url.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-encryption-tag-based.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-multi-vcenter-support-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-multi-vcenter-support-procedure-install.md" %}{% endleveloffset %}

<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [Installation configuration parameters for vSphere](/installing/installing_vsphere/installation-config-parameters-vsphere#installation-config-parameters-vsphere)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-top-aware-overview.md" %}{% endleveloffset %}

<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [Guidelines and Best Practices for Deployment with Topology](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/container-storage-plugin/3-0/getting-started-with-vmware-vsphere-container-storage-plug-in-3-0/vsphere-container-storage-plug-in-deployment/deploying-vsphere-container-storage-plug-in-with-topology.html#GUID-162E7582-723B-4A0F-A937-3ACE82EAFD31-en)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-top-aware-during-install.md" %}{% endleveloffset %}

<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [Configuring regions and zones for a VMware vCenter](/installing/installing_vsphere/ipi/installing-vsphere-installer-provisioned-customizations#configuring-vsphere-regions-zones_installing-vsphere-installer-provisioned-customizations)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-top-aware-post-install.md" %}{% endleveloffset %}

<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [Specifying multiple regions and zones for your cluster on vSphere](/installing/installing_vsphere/post-install-vsphere-zones-regions-configuration#specifying-regions-zones-infrastructure-vsphere_post-install-vsphere-zones-regions-configuration)
*   [VMware vSphere tag documentation](https://docs.vmware.com/en/VMware-vSphere/8.0/vsphere-vcenter-esxi-management/GUID-16422FF7-235B-4A44-92E2-532F6AED0923.html?hWord=N4IghgNiBcIC5gOYgL5A)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-top-aware-infra-top.md" %}{% endleveloffset %}

<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [VMware vSphere tag documentation](https://docs.vmware.com/en/VMware-vSphere/8.0/vsphere-vcenter-esxi-management/GUID-16422FF7-235B-4A44-92E2-532F6AED0923.html?hWord=N4IghgNiBcIC5gOYgL5A)

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-top-aware-results.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-change-max-snapshot.md" %}{% endleveloffset %}

<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [Best practices for using VMware snapshots in the vSphere environment](https://kb.vmware.com/s/article/1025279)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-migrating-cns-vols-between-datastores.md" %}{% endleveloffset %}

<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [For vSphere 8](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/vsphere-storage-8-0/getting-started-with-cloud-native-storage-in-vsphere/cloud-native-storage-for-vsphere-administrators/migrating-container-volumes-in-vsphere.html)
*   [For VCF 9](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/9-0/vsphere-storage/getting-started-with-cloud-native-storage-in-vsphere/cloud-native-storage-for-vsphere-administrators/migrating-container-volumes-in-vsphere.html#GUID-536DEB75-84F5-48DC-A425-3BF703B8F54E-en)
*   [For vSphere v8.0, more general information](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0.html)
*   [For VCF 9, more general information](https://techdocs.broadcom.com/us/en/vmware-cis/vcf.html)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-disable-storage-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-disable-storage-consequences.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-disable-storage-procedure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-adding-bm-nodes.md" %}{% endleveloffset %}

{%- set FeatureName = "Adding bare-metal nodes" %}
{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}
<a name="link_installation_config_parameters_vsphere"></a>**Additional resources**

*   [Disabling and enabling storage on vSphere](/storage/container_storage_interface/persistent-storage-csi-vsphere#persistent-storage-csi-vsphere-disable-storage-overview_persistent-storage-csi-vsphere)
*   [Adding bare-metal compute machines to a vSphere cluster](/machine_management/user_infra/adding-bare-metal-compute-vsphere-user-infra)

{% leveloffset +1 %}{% include "./modules/persistent-storage-csi-vsphere-increase-max-vols-per-node-overview.md" %}{% endleveloffset %}

{%- set FeatureName = "Increasing volumes per node" %}

{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/persistent-storage-csi-vsphere-increase-max-vols-per-node-procedure.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Best practices for using VMware snapshots in the vSphere environment](https://kb.vmware.com/s/article/1025279)
*   [VMware vCenter documentation](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere.html)