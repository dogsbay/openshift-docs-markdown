{%- set _mod_docs_content_type = "CONCEPT" %}
# Add pre-packaged software that is not in the base {{ op_system }} image to my nodes {id="add-pre-packaged-software-that-is-not-in-the-base-rhcos-to-my-nodes-con_{{ context }}"}

You can add supported software that is not in the {{ op_system }} base image, such as USB device control or specialized kernel modules, by creating a machine config that enables the matching {{ op_system_base }} extension. Extensions are supported by Red&#160;Hat, so you can add this functionality without affecting the supportability of your cluster.