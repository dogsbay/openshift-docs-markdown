{%- set _mod_docs_content_type = "CONCEPT" %}
# VMware vSphere CSI Driver Operator requirements {id="vsphere-csi-driver-reqs_{{ context }}"}

To successfully install and operate the vSphere CSI Driver Operator, verify that your environment meets the minimum VMware vSphere, vCenter, and virtual machine version requirements. {._abstract}

To install the vSphere Container Storage Interface (CSI) Driver Operator, the following requirements must be met:

*   VMware vSphere version 8.0 Update 1 or later; or VMware vSphere Foundation (VVF) 9; or VMware Cloud Foundation (VCF) 5 or later
*   vCenter version 8.0 Update 1 or later; or VVF 9; or VCF 5 or later
*   Virtual machines of hardware version 15 or later
*   No third-party vSphere CSI driver already installed in the cluster

If a third-party vSphere CSI driver is present in the cluster, {{ product_title }} does not overwrite it. The presence of a third-party vSphere CSI driver prevents {{ product_title }} from updating to {{ product_title }} 4.13 or later.


:::note

The VMware vSphere CSI Driver Operator is supported only on clusters deployed with `platform: vsphere` in the installation manifest.

:::


You can create a custom role for the Container Storage Interface (CSI) driver, the vSphere CSI Driver Operator, and the vSphere Problem Detector Operator. The custom role can include privilege sets that assign a minimum set of permissions to each vSphere object. This means that the CSI driver, the vSphere CSI Driver Operator, and the vSphere Problem Detector Operator can establish a basic interaction with these objects.


:::important

Installing an {{ product_title }} cluster in a vCenter is tested against a full list of privileges as described in the "Required vCenter account privileges" section. By adhering to the full list of privileges, you can reduce the possibility of unexpected and unsupported behaviors that might occur when creating a custom role with a set of restricted privileges.

:::


To remove a third-party CSI driver, see "Removing a third-party vSphere CSI Driver".