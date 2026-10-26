{%- set _mod_docs_content_type = "CONCEPT" %}
# Updating the cluster to {{ op_system }} 10.x {id="mco-image-streams_{{ context }}"}

If you have {{ product_title }} 5.0 with {{ op_system_first }} version 9.x, you can update the nodes in your cluster to use {{ op_system }} 10.x. {._abstract}

For new installations of {{ product_title }} 5.0, {{ op_system }} 10.x is installed by default.

{{ op_system }} is a purpose-designed operating system for use with containers that is deployed by default on all {{ product_title }} nodes. Each version of {{ op_system }} is based on a specific version of {{ op_system_base_full }}. {{ op_system }} 10.x is based on {{ op_system_base }} 10.x.


:::important

You cannot update the {{ op_system }} version in a cluster that is using the runC container runtime, because runC is deprecated in {{ product_title }} 5.0. You must configure your cluster to use the crun container runtime. Starting in {{ product_title }} 4.18, crun is the default container runtime for new installations. For more information, see "Configuring the container runtime".

:::