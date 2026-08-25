{%- set _mod_docs_content_type = "CONCEPT" %}
# About the canary rollout update process and MCPs {id="update-using-custom-machine-config-pools-about-mcp_{{ context }}"}

In {{ product_title }}, nodes are not considered individually. Instead, they are grouped into machine config pools (MCPs).
By default, nodes in an {{ product_title }} cluster are grouped into two MCPs: one for the control plane nodes and one for the worker nodes. {._abstract}

An {{ product_title }} update affects all MCPs concurrently.

During the update, the Machine Config Operator (MCO) drains and cordons all nodes within an MCP up to the specified `maxUnavailable` number of nodes, if a max number is specified.
By default, `maxUnavailable` is set to `1`.
Draining and cordoning a node deschedules all pods on the node and marks the node as unschedulable.

After the node is drained, the Machine Config Daemon applies a new machine configuration, which can include updating the operating system (OS). Updating the OS requires the host to reboot.

## Using custom machine config pools {id="using-custom-mcps_{{ context }}"}

To prevent specific nodes from being updated, you can create custom MCPs.
Because the MCO does not update nodes within paused MCPs, you can pause the MCPs containing nodes that you do not want to update before initiating a cluster update.

Using one or more custom MCPs can give you more control over the sequence in which you update your worker nodes.
For example, after you update the nodes in the first MCP, you can verify the application compatibility and then update the rest of the nodes gradually to the new version.


:::warning

The default setting for `maxUnavailable` is `1` for all the machine config pools in {{ product_title }}. It is recommended to not change this value and update one control plane node at a time. Do not change this value to `3` for the control plane pool.

:::



:::note

To ensure the stability of the control plane, creating a custom MCP from the control plane nodes is not supported. The Machine Config Operator (MCO) ignores any custom MCP created for the control plane nodes.

:::


## Considerations when using custom machine config pools {id="custom-mcp-considerations_{{ context }}"}

Give careful consideration to the number of MCPs that you create and the number of nodes in each MCP, based on your workload deployment topology.
For example, if you must fit updates into specific maintenance windows, you must know how many nodes {{ product_title }} can update within a given window.
This number is dependent on your unique cluster and workload characteristics.

You must also consider how much extra capacity is available in your cluster to determine the number of custom MCPs and the amount of nodes within each MCP.
In a case where your applications fail to work as expected on newly updated nodes, you can cordon and drain those nodes in the pool, which moves the application pods to other nodes.
However, you must determine whether the available nodes in the remaining MCPs can provide sufficient quality-of-service (QoS) for your applications.


:::note

You can use this update process with all documented {{ product_title }} update processes. However, the process does not work with {{ op_system_base_full }} machines, which are updated using Ansible playbooks.

:::