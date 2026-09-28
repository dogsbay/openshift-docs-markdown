{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand huge pages fundamentals {id="understand-huge-pages-fundamentals-con_{{ context }}"}

Huge pages let the kernel map memory in blocks that are much larger than the default 4 KiB page, which reduces page table overhead for memory-intensive applications. Understand how {{ product_title }} presents huge pages as a schedulable resource before you allocate them to workloads.