{%- set _mod_docs_content_type = "REFERENCE" %}
# Persistent volume plugins {id="security-network-storage-persistent_{{ context }}"}

Containers are useful for both stateless and stateful applications. Protecting attached storage is a key element of securing stateful services. Using the Container Storage Interface (CSI), {{ product_title }} can incorporate storage from any storage back end that supports the CSI interface. {._abstract}

{{ product_title }} provides plugins for multiple types of storage, including:

*   {{ rh_storage_first }} *
*   AWS Elastic Block Stores (EBS) *
*   AWS Elastic File System (EFS) *
*   Azure Disk *
*   Azure File *
*   OpenStack Cinder *
*   Google Compute Engine (GCE) Persistent Disks *
*   VMware vSphere *
*   Network File System (NFS)
*   FlexVolume
*   Fibre Channel
*   Internet Small Computer Systems Interface (iSCSI)

Plugins for those storage types with dynamic provisioning are marked with an asterisk (*). Data in transit is encrypted via HTTPS for all {{ product_title }} components communicating with each other.

You can mount a persistent volume (PV) on a host in any way supported by your storage type. Different types of storage have different capabilities and each PV’s access modes are set to the specific modes supported by that particular volume.

For example, NFS can support multiple read/write clients, but a specific NFS PV might be exported on the server as read-only. Each PV has its own set of access modes describing that specific PV’s capabilities, such as `ReadWriteOnce`, `ReadOnlyMany`, and `ReadWriteMany`.