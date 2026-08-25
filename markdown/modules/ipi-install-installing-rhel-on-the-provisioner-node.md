{%- set _mod_docs_content_type = "CONCEPT" %}
# Installations {{ op_system_base }} on the provisioner node {id="installing-rhel-on-the-provisioner-node_{{ context }}"}

With the configuration of the prerequisites complete, the next step is to install {{ op_system_base }} {{ op_system_version }} on the provisioner node. The installer uses the provisioner node as the orchestrator while installing the {{ product_title }} cluster.  {._abstract}

For the purposes of this document, installing {{ op_system_base }} on the provisioner node is out of scope. However, options include but are not limited to using a RHEL Satellite server, PXE, or installation media.