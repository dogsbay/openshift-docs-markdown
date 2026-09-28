{%- set _mod_docs_content_type = "CONCEPT" %}
# Add a multi-architecture compute machine set to an {{ azure_short }} cluster {id="add-multi-architecture-compute-machine-set-to-azure-cluster-con_{{ context }}"}

After you create multi-architecture boot images, you can define a compute machine set that references an architecture-specific image and a matching virtual machine size. The machine set then provisions compute nodes with the CPU architecture that your workloads require.