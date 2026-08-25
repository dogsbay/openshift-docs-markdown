{%- set _mod_docs_content_type = "REFERENCE" %}
# Options for additional ports for node pools {id="hosted-clusters-openstack-addl-ports-options_{{ context }}"}

To support advanced networking scenarios, you can use the `--openstack-node-additional-port` flag to attach additional ports to nodes in a hosted cluster on OpenStack.  {._abstract}

The flag takes a list of comma-separated parameters that can be used multiple times to attach multiple additional ports to the nodes.

The parameters are as follows:

| Parameter | Description | Required | Default |
| --- | --- | --- | --- |
| `network-id` | The ID of the network to attach to the node. | Yes | N/A |
| `vnic-type` | The vNIC type to use for the port. If not specified, Neutron uses the default type `normal`. | No | N/A |
| `disable-port-security` | Whether to disable port security for the port. If not specified, Neutron enables port security unless it is explicitly disabled at the network level. | No | N/A |
| `address-pairs` | A list of IP address pairs to assign to the port. The format is `ip_address=mac_address`. Multiple pairs can be provided, separated by a hyphen (`-`). The `mac_address` portion is optional. | No | N/A |