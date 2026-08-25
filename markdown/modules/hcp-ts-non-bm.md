{%- set _mod_docs_content_type = "PROCEDURE" %}
# Returning non-bare-metal clusters to the late binding pool {id="hcp-ts-non-bm_{{ context }}"}

If you are using late binding managed clusters without `BareMetalHosts`, you must complete additional manual steps to delete a late binding cluster and return the nodes back to the Discovery ISO. {._abstract}

For late binding managed clusters without `BareMetalHosts`, removing cluster information does not automatically return all nodes to the Discovery ISO.

To unbind the non-bare-metal nodes with late binding, complete the following steps.

**Procedure**

1.  Remove the cluster information. For more information, see "Removing a cluster from management".
1.  Clean the root disks.
1.  Reboot manually with the Discovery ISO.