{%- set _mod_docs_content_type = "REFERENCE" %}
# Adding worker nodes to an on-premise cluster {id="adding-nodes-iso_{{ context }}"}

Add worker nodes to an on-premise {{ product_title }} cluster by using the OpenShift CLI to generate an ISO image. {._abstract}

For on-premise clusters, you can add worker nodes by using the {{ product_title }} CLI (`oc`) to generate an ISO image, which can then be used to boot one or more nodes in your target cluster.
This process can be used regardless of how you installed your cluster.

You can add one or more nodes at a time while customizing each node with more complex configurations, such as static network configuration, or you can specify only the MAC address of each node.
Any configurations that are not specified during ISO generation are retrieved from the target cluster and applied to the new nodes.

Preflight validation checks are also performed when booting the ISO image to inform you of failure-causing issues before you attempt to boot each node.