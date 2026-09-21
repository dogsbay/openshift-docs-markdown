{%- set _mod_docs_content_type = "CONCEPT" %}
# Add nodes to the cluster {id="add-nodes-to-the-cluster-con_{{ context }}"}

As the capacity needs of your workloads grow, you can add compute nodes to your {{ product_title }} cluster. On installer-provisioned infrastructure, you scale a compute machine set and the cluster provisions the machines for you. On user-provisioned infrastructure, you create the {{ op_system }} machines yourself, by generating a node image with the {{ oc_first }} or by booting from ISO or PXE, and then approve the certificate signing requests that admit the new nodes.