{%- set _mod_docs_content_type = "CONCEPT" %}
# About the ClusterUserDefinedNetwork CR {id="about-cudn_{{ context }}"}

The `ClusterUserDefinedNetwork` (CUDN) custom resource (CR) provides cluster-scoped network segmentation in {{ product_title }} and isolation for administrators only. Defining this resource ensures that network traffic is securely partitioned across the entire cluster. {._abstract}

The following diagram demonstrates how a cluster administrator can use the CUDN CR to create network isolation between tenants. This network configuration allows a network to span across many namespaces. In the diagram, network isolation is achieved through the creation of two user-defined networks, `udn-1` and `udn-2`. These networks are not connected and the `spec.namespaceSelector.matchLabels` field is used to select different namespaces. For example, `udn-1` configures and isolates communication for `namespace-1` and `namespace-2`, while `udn-2` configures and isolates communication for `namespace-3` and `namespace-4`. Isolated tenants (Tenants 1 and Tenants 2) are created by separating namespaces while also allowing pods in the same namespace to communicate.

**Figure 1. Tenant isolation using a ClusterUserDefinedNetwork CR**

![The tenant isolation concept in a user-defined network (UDN)](/images/528-OpenShift-multitenant-0225.png)