{%- set _mod_docs_content_type = "REFERENCE" %}
# Storage considerations {id="telco-hub-storage-considerations_{{ context }}"}


Limits and requirements
:   *   Minimum {{ product_title }} and {{ rh_rhacm_first }} limits apply
    *   High availability should be provided through a storage backend.
    The hub cluster reference configuration provides storage through {{ rh_storage_first }}.
    *   Object bucket storage is provided through {{ rh_storage }}.


Engineering considerations
:   *   Use SSD or NVMe disks with low latency and high throughput for etcd storage.
    *   You must use clean storage disks with {{ rh_storage }}, including before a re-install procedure. See "ODF disks cleaning procedure" for further information.
    *   The storage solution for telco hub clusters is {{ rh_storage }}.
        *   Local Storage Operator supports the storage class used by {{ rh_storage }} to provide block, file, and object storage as needed by other components on the hub cluster.
    *   The Local Storage Operator `LocalVolume` configuration includes setting `forceWipeDevicesAndDestroyAllData: true` to support the reinstallation of hub cluster nodes where {{ rh_storage }} has previously been used.