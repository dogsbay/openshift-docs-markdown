{%- set _mod_docs_content_type = "CONCEPT" %}
# VM migration support for {{ op_system }} 10.x {id="virt-vm-migration-dual-stream_{{ context }}"}

{%- set FeatureName = "Live migration support for {{ op_system }} 10.x" %}
{% include "./snippets/technology-preview.md" %}

{{ VirtProductName }} 4.22 and later versions supports live migration with {{ op_system }} 10.x worker nodes as a Technology Preview feature. {._abstract}

For information on configuring your cluster to use {{ op_system }} 10.x, refer to the {{ product_title }} documentation.

When performing live migration on a cluster using {{ op_system }} 10.x, the migration does not complete successfully when the migration policy uses the attribute `allowPostCopy: true`. This is a known limitation.

Live migration is supported across both {{ op_system }} 9.x and 10.x worker nodes when both versions are present in a cluster. Any VM live migration from {{ op_system }} 10.x to {{ op_system }} 9.x and from {{ op_system }} 9.x to {{ op_system }} 10.x worker nodes, is a Technology Preview feature in {{ product_title }} 4.22.