{%- set _mod_docs_content_type = "PROCEDURE" %}
# Rekeying Tang servers {id="nbde-rekeying-tang-servers_{{ context }}"}

This procedure uses a set of three Tang servers, each with unique keys, as an example.

Using redundant Tang servers reduces the chances of nodes failing to boot automatically.

Rekeying a Tang server, and all associated NBDE-encrypted nodes, is a three-step procedure.

**Prerequisites**

*   A working Network-Bound Disk Encryption (NBDE) installation on one or more nodes.

**Procedure**

1.  Generate a new Tang server key.
1.  Rekey all NBDE-encrypted nodes so they use the new key.
1.  Delete the old Tang server key.

    :::note

    Deleting the old key before all NBDE-encrypted nodes have completed their rekeying causes those nodes to become overly dependent on any other configured Tang servers.
    
    :::


**Figure 1. Example workflow for rekeying a Tang server**

![Rekeying a Tang server](/_assets/images/179_OpenShift_NBDE_implementation_0821_4.png)