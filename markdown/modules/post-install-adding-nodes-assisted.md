{%- set _mod_docs_content_type = "REFERENCE" %}
# Adding worker nodes to clusters managed by the Assisted Installer {id="adding-nodes-assisted_{{ context }}"}

Add worker nodes to Assisted Installer clusters by using {{ cluster_manager_first }}, the REST API, or a manual ISO process. {._abstract}

For clusters managed by the Assisted Installer, you can add worker nodes by using the {{ cluster_manager_first }} console, the Assisted Installer REST API or you can manually add worker nodes using an ISO image and cluster Ignition config files.