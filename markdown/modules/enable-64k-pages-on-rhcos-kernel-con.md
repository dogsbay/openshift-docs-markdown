{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable 64k pages on the {{ op_system }} kernel {id="enable-64k-pages-on-rhcos-kernel-con_{{ context }}"}

On 64-bit ARM nodes, you can switch the kernel to a 64k memory page size by using the Machine Config Operator. The larger page size improves memory management for GPU workloads and for workloads that use large amounts of memory.