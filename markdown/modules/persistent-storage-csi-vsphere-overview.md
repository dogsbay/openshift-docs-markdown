{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of vSphere CSI Driver Operator {id="persistent-storage-csi-vsphere-overview_{{ context }}"}

{{ product_title }} can provision persistent volumes (PVs) using the Container Storage Interface (CSI) VMware vSphere driver for Virtual Machine Disk (VMDK) volumes. {._abstract}

Familiarity with persistent storage and configuring CSI volumes is recommended when working with a CSI Operator and driver. For more information, see "Understanding persistent volumes" and "Configuring CSI volumes".

To create CSI-provisioned persistent volumes (PVs) that mount to vSphere storage assets, {{ product_title }} installs the vSphere CSI Driver Operator and the vSphere CSI driver by default in the `openshift-cluster-csi-drivers` namespace.


vSphere CSI Driver Operator
:   The Operator provides a storage class, called `thin-csi`, that you can use to create persistent volume claims (PVCs). The vSphere CSI Driver Operator supports dynamic volume provisioning by allowing storage volumes to be created on-demand, eliminating the need for cluster administrators to pre-provision storage. You can disable this default storage class if desired (see "Managing the default storage class").


vSphere CSI driver
:   The driver enables you to create and mount vSphere PVs. In {{ product_title }} 4.20, and later, the driver version is 3.6.0 The vSphere CSI driver supports all of the file systems supported by the underlying {{ op_system_first }} release, including XFS and Ext4. For more information about supported file systems, see "Overview of available file systems".


:::note

For new installations, {{ product_title }} 4.13 and later provides automatic migration for the vSphere in-tree volume plugin to its equivalent CSI driver. Updating to {{ product_title }} 4.15 and later also provides automatic migration. For more information about updating and migration, see "CSI automatic migration".

CSI automatic migration should be seamless. Migration does not change how you use all existing API objects, such as persistent volumes, persistent volume claims, and storage classes.

:::