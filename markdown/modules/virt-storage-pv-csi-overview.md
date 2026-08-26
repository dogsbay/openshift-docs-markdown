{%- set _mod_docs_content_type = "CONCEPT" %}
# Virtual machine CSI storage overview {id="virt-storage-vp-csi-overview_{{ context }}"}

{{ VirtProductName }} integrates with the Container Storage Interface (CSI) to manage virtual machine (VM) storage. {._abstract}

Storage classes define storage capabilities such as performance tiers and types. PersistentVolumeClaims (PVCs) request storage resources, which bind to PersistentVolumes (PVs). CSI drivers connect Kubernetes to vendor storage backends, including iSCSI, NFS, and Fibre Channel.


:::important

A VM can start even if its PVC is already mounted by another pod. This behavior follows Kubernetes PVC access semantics and can lead to data corruption if multiple writers access the same volume.

:::


![virt-storage-csi-paradigm](/images/virt-storage-csi-paradigm.png "Virtual machine disks and the CSI paradigm")