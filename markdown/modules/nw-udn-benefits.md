{%- set _mod_docs_content_type = "REFERENCE" %}
# Benefits of a user-defined network {id="nw-udn-benefits_{{ context }}"}

User-defined networks enable tenant isolation by providing each namespace with its own isolated primary network, reducing cross-tenant traffic risks and simplifying network management by eliminating the need for complex network policies. {._abstract}

User-defined networks offer the following benefits:

1.  Enhanced network isolation for security
    *   **Tenant isolation**: Namespaces can have their own isolated primary network, similar to how tenants are isolated in {{ rh_openstack_first }}. This improves security by reducing the risk of cross-tenant traffic.
1.  Network flexibility
    *   **Layer 2 and layer 3 support**: Cluster administrators can configure primary networks as layer 2 or layer 3 network types.
1.  Simplified network management
    *   **Reduced network configuration complexity**: With user-defined networks, the need for complex network policies are eliminated because isolation can be achieved by grouping workloads in different networks.
1.  Advanced capabilities
    *   **Consistent and selectable IP addressing**: Users can specify and reuse IP subnets across different namespaces and clusters, providing a consistent networking environment.
    *   **Support for multiple networks**: The user-defined networking feature allows administrators to connect multiple namespaces to a single network, or to create distinct networks for different sets of namespaces.
    *   **Virtual machine reachability over CUDN**: When you attach virtual machines (VM)s to a layer 2 `ClusterUserDefinedNetwork` with BGP route advertisements enabled, you can publish VM routes to the provider network and import routes back, avoiding per‑node static routes while improving VM ingress and egress reachability.
1.  Simplification of application migration from {{ rh_openstack_first }}
    *   **Network parity**: With user-defined networking, the migration of applications from OpenStack to {{ product_title }} is simplified by providing similar network isolation and configuration options.

Developers and administrators can create a user-defined network that is namespace scoped using the custom resource. An overview of the process is as follows:

1.  An administrator creates a namespace for a user-defined network with the `k8s.ovn.org/primary-user-defined-network` label.
1.  The `UserDefinedNetwork` CR is created by either the cluster administrator or the user.
1.  The user creates pods in the namespace.