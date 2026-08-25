{%- set _mod_docs_content_type = "REFERENCE" %}
# About volume and access modes for virtual machine disks {id="virt-about-storage-volumes-for-vm-disks_{{ context }}"}

If you use the storage API with known storage providers, the volume and access modes are selected automatically. However, if you use a storage class that does not have a storage profile, you must configure the volume and access mode. {._abstract}

{% if not openshift_dedicated %}
For a list of known storage providers for {{ VirtProductName }}, see the [ Red Hat Ecosystem Catalog](https://catalog.redhat.com/search?searchType=software&badges_and_features=OpenShift+Virtualization&subcategories=Storage).
{% endif %}

For best results, use the `ReadWriteMany` (RWX) access mode and the `Block` volume mode. This is important for the following reasons:

*   `ReadWriteMany` (RWX) access mode is required for live migration.
*   The `Block` volume mode performs significantly better than the `Filesystem` volume mode. This is because the `Filesystem` volume mode uses more storage layers, including a file system layer and a disk image file. These layers are not necessary for VM disk storage.

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

    For example, if you use {{ rh_storage_first }}, Ceph RBD volumes are preferable to CephFS volumes.
{% endif %}


:::important

You cannot live migrate virtual machines with the following configurations:

*   Storage volume with `ReadWriteOnce` (RWO) access mode
*   Passthrough features such as GPUs

Set the `evictionStrategy` field to `None` for these virtual machines.
The `None` strategy powers down VMs during node reboots.

:::