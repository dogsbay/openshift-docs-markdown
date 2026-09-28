{%- set _mod_docs_content_type = "CONCEPT" %}
# Allocate huge pages of specific sizes {id="allocate-huge-pages-of-specific-sizes-con_{{ context }}"}

You can allocate huge pages of a particular size at boot time, and allocate more than one huge page size on the same node, by using a performance profile. Matching the huge page size to your workload reduces page table overhead for memory-intensive applications.