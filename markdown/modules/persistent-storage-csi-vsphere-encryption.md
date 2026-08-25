{%- set _mod_docs_content_type = "CONCEPT" %}
# vSphere persistent disks encryption {id="persistent-storage-csi-vsphere-encryption_{{ context }}"}

You can encrypt virtual machines (VMs) and dynamically provisioned persistent volumes (PVs) on {{ product_title }} running on top of vSphere. {._abstract}


:::note

{{ product_title }} does not support RWX-encrypted PVs. You cannot request RWX PVs out of a storage class that uses an encrypted storage policy.

:::


You must encrypt VMs before you can encrypt PVs, which you can do during or after installation.

For information about encrypting VMs, see:

*   "Requirements for encrypting virtual machines"
*   "During installation: Step 7 of Installing RHCOS and starting the {{ product_title }} bootstrap process"
*   "Enabling encryption on a vSphere cluster"

After encrypting VMs, you can configure a storage class that supports dynamic encryption volume provisioning using the vSphere Container Storage Interface (CSI) driver. This can be accomplished in one of two ways using:

*   **Datastore URL**: This approach is not very flexible, and forces you to use a single datastore. It also does not support topology-aware provisioning.
*   **Tag-based placement**: Encrypts the provisioned volumes and uses tag-based placement to target specific datastores.