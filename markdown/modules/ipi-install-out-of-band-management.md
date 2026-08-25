{%- set _mod_docs_content_type = "CONCEPT" %}
# Out-of-band management {id="out-of-band-management_{{ context }}"}

Out-of-band management uses baseboard management controllers (BMCs) to provide the provisioner node with access to your cluster nodes.  {._abstract}

Nodes typically have an additional NIC used by the BMCs. These BMCs must be accessible from the provisioner node.

Each node must be accessible via out-of-band management. When using an out-of-band management network, the provisioner node requires access to the out-of-band management network for a successful {{ product_title }} installation.

The out-of-band management setup is out of scope for this document. Using a separate management network for out-of-band management can enhance performance and improve security. However, using the provisioning network or the bare metal network are valid options.


:::note

The bootstrap VM features a maximum of two network interfaces. If you configure a separate management network for out-of-band management, and you are using a provisioning network, the bootstrap VM requires routing access to the management network through one of the network interfaces. In this scenario, the bootstrap VM can then access three networks:

*   the bare metal network
*   the provisioning network
*   the management network routed through one of the network interfaces

:::