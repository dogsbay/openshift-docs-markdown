{%- set _mod_docs_content_type = "CONCEPT" %}
# Enable dedicated resources and huge pages {id="virt-enable-dedicated-resources-and-huge-pages_{{ context }}"}

Enable dedicated CPUs and huge pages for latency-sensitive virtual machine (VM) workloads. When you configure dedicated CPUs, you provide exclusive access to physical hardware cores, which removes possible resource contention from the VM. Huge pages reduce the load on the memory management hardware cache. {._abstract}

Use huge pages to optimize memory mapping efficiency. Unlike standard 4Ki blocks, huge pages are larger memory segments that reduce the tracking load on the translation lookaside buffer (TLB) hardware cache.

Memory is managed in blocks known as pages. On most systems, a page is 4Ki, huge pages are commonly page 2Mi or 1Gi. CPUs use a translation lookaside buffer (TLB) to check if a virtual address passed in a hardware instruction are cached. If not, a TLB miss occurs, and the system falls back to slower, software-based address translation. Increasing the size of pages that are addressed reduces the chances of a TLB miss, and increases performance.