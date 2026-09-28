{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure image registry storage by using {{ rh_storage_first }} {id="openshift-data-foundation-ceph-rgw-noobaa-cephfs-con_{{ context }}"}

To back the {{ product_registry }} with {{ rh_storage }} on bare metal or {{ vmw_short }}, install {{ rh_storage }} and then point the registry at Ceph RGW, NooBaa, or CephFS storage.