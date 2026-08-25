{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Multicloud Object Gateway (MCG) for disaster recovery on {{ rh_storage }} {id="oadp-configuring-noobaa-for-dr_{{ context }}"}

If you use cluster storage for your MCG bucket `backupStorageLocation` on {{ rh_storage }}, configure MCG as an external object store. {._abstract}


:::warning

Failure to configure MCG as an external object store might lead to backups not being available.

:::


{% include "./snippets/snip-noobaa-and-mcg.md" %}

**Procedure**

*   Configure MCG as an external object store as described in [Adding storage resources for hybrid or Multicloud](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.13/html/managing_hybrid_and_multicloud_resources/adding-storage-resources-for-hybrid-or-multicloud_rhodf#doc-wrapper).