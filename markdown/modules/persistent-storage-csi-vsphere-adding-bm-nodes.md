{%- set _mod_docs_content_type = "CONCEPT" %}
# Adding bare-metal nodes {id="persistent-storage-csi-vsphere-adding-bm-nodes_{{ context }}"}

{{ product_title }} has the ability to add bare-metal nodes to a cluster on vSphere as a Technology Preview feature.  {._abstract}

However, if you add bare-metal nodes, you must remove the vSphere CSI Driver, otherwise the cluster is marked as degraded. For information about how to remove the driver and the consequences of doing this, see "Disabling and enabling storage on vSphere". 

For information about how to add bare-metal nodes, see "Adding bare-metal compute machines to a vSphere cluster".