{%- set _mod_docs_content_type = "CONCEPT" %}
# Change the instance type for a VM {id="virt-instance-types-changing-types_{{ context }}"}

Cluster administrators and VM owners can change the instance type for existing virtual machines to adjust resources or optimize performance for specific workloads. {._abstract}

Changing the instance type for a VM allows you to adapt to evolving workload requirements without recreating the virtual machine. When a VM’s workload increases over time, you can switch to an instance type with more CPU, additional memory, or specific hardware resources to prevent performance bottlenecks and ensure the VM continues to meet demand.

Different instance types are optimized for specific use cases, so switching to a specialized instance type can improve performance for particular workloads. For example, you might transition to a compute-optimized instance type for CPU-intensive applications or to a memory-optimized type for workloads that require larger memory allocations.

You can change the instance type for an existing VM using either the {{ product_title }} web console or the {{ oc_first }}.