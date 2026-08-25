{%- set _mod_docs_content_type = "CONCEPT" %}
# About creating storage classes {id="virt-about-creating-storage-classes_{{ context }}"}

When you create a storage class, you set parameters that affect the dynamic provisioning of persistent volumes (PVs) that belong to that storage class. You cannot update a `StorageClass` object’s parameters after you create it. {._abstract}

To use the hostpath provisioner (HPP) you must create an associated storage class for the CSI driver with the `storagePools` stanza.


:::note

Virtual machines use data volumes that are based on local PVs. Local PVs are bound to specific nodes. While the disk image is prepared for consumption by the virtual machine, it is possible that the virtual machine cannot be scheduled to the node where the local storage PV was previously pinned.

To solve this problem, use the Kubernetes pod scheduler to bind the persistent volume claim (PVC) to a PV on the correct node. By using the `StorageClass` value with `volumeBindingMode` parameter set to `WaitForFirstConsumer`, the binding and provisioning of the PV is delayed until a pod is created using the PVC.

:::