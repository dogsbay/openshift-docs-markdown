{%- set _mod_docs_content_type = "REFERENCE" %}
# Storage requirements {id="virt-storage-requirements_{{ context }}"}

{{ VirtProductName }} requires {{ product_title }}-supported storage with specific configuration for VM workloads and snapshots. {._abstract}


Storage requirements for {{ VirtProductName }}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
:   *   Storage must be supported by {{ product_title }}. For more information, see "Optimizing storage" in the Additional resources section.
{% endif %}
{% if openshift_rosa or openshift_dedicated or openshift_rosa_hcp %}
    *   Storage must be supported by {{ product_title }}.
        {% endif %}
        {% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
    *   You must create a default {{ VirtProductName }} or {{ product_title }} storage class. The purpose of this is to address the unique storage needs of VM workloads and offer optimized performance, reliability, and user experience. If both {{ VirtProductName }} and {{ product_title }} default storage classes exist, the {{ VirtProductName }} class takes precedence when creating VM disks.

    :::note


    To mark a storage class as the default for virtualization workloads, set the annotation `storageclass.kubevirt.io/is-default-virt-class` to `"true"`.
    
    :::

{% endif %}
*   If the storage provisioner supports snapshots, you must associate a `VolumeSnapshotClass` object with the default storage class.