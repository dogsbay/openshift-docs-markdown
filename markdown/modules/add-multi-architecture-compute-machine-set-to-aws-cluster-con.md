{%- set _mod_docs_content_type = "CONCEPT" %}
# Add a multi-architecture compute machine set to an {{ aws_short }} cluster {id="add-multi-architecture-compute-machine-set-to-aws-cluster-con_{{ context }}"}

After you create multi-architecture boot images, you can define a compute machine set that references an architecture-specific image and a matching instance type. The machine set then provisions compute nodes with the CPU architecture that your workloads require.