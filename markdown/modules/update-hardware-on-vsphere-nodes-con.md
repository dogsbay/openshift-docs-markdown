{%- set _mod_docs_content_type = "CONCEPT" %}
# Update hardware on vSphere nodes {id="update-hardware-on-vsphere-nodes-con_{{ context }}"}

{{ product_title }} nodes that run on VMware vSphere use a virtual hardware version that must stay within the range the cluster supports. You update the virtual hardware on control plane nodes, compute nodes, and the node template, and you can schedule the update to apply at the next restart.