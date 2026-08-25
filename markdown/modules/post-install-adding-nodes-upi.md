{%- set _mod_docs_content_type = "REFERENCE" %}
# Adding worker nodes to user-provisioned infrastructure clusters {id="adding-nodes-upi_{{ context }}"}

Add worker nodes to user-provisioned infrastructure clusters by using an ISO image and Ignition config files. {._abstract}

For user-provisioned infrastructure clusters, you can add worker nodes by using a {{ op_system_base }} or {{ op_system }} ISO image and connecting it to your cluster using cluster Ignition config files. For RHEL worker nodes, the following example uses Ansible playbooks to add worker nodes to the cluster. For RHCOS worker nodes, the following example uses an ISO image and network booting to add worker nodes to the cluster.