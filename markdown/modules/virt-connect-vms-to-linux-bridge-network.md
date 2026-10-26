{%- set _mod_docs_content_type = "CONCEPT" %}
# Connect a VM to the physical network by using a Linux bridge {id="virt-connect-vms-to-linux-bridge-network_{{ context }}"}

By default, {{ VirtProductName }} is installed with a single, internal pod network. You can connect a virtual machine (VM) to the physical network by using a Linux bridge. {._abstract}

To create a Linux bridge network and attach a VM to the network, perform the following steps:

1.  Prepare the node network by creating a Linux bridge node network configuration policy (NNCP).
1.  Define the secondary Linux bridge network by creating a network attachment definition (NAD).
1.  Attach the VM to the Linux bridge network.


:::note

{{ VirtProductName }} does not support Linux bridge bonding modes 0, 5, and 6. For more information, see "Additional resources".

:::