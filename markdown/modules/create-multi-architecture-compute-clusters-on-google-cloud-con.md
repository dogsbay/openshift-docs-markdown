{%- set _mod_docs_content_type = "CONCEPT" %}
# Create multi-architecture compute clusters on {{ gcp_first }} {id="create-multi-architecture-compute-clusters-on-google-cloud-con_{{ context }}"}

You can run 64-bit ARM and 64-bit x86 workloads in the same {{ gcp_short }} cluster by creating a compute machine set for each architecture. Each machine set references the boot image and the instance type that match its architecture.