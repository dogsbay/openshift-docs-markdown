{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a graphical representation of the network state of a node (NNS) topology from the web console {id="virt-viewing-graphical-representation-of-network-state-of-node-console_{{ context }}"}

To make the configuration of the node network in the cluster easier to understand, you can view it in the form of a diagram. {._abstract}

The NNS topology diagram displays all node components (network interface controllers, bridges, bonds, and VLANs), their properties and configurations, and connections between the nodes.

**Procedure**

*   In the **Administrator** view of the {{ product_title }} web console, navigate to **Networking** → **Node Network Configuration**.

    The NNS topology diagram opens. Each group of components represents a single node.
    *   To display the configuration and properties of a node, click inside the border of the node.
    *   To display the features or the YAML file of a specific component (for example, an interface or a bridge), click the icon of the component.
    *   The icons of active components have green borders; the icons of disconnected components have red borders.