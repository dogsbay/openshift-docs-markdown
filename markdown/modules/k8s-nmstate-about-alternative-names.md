{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure alternative network interface names {id="k8s-nmstate-alternative-interface-names_{{ context }}"}

You can assign alternative names to network interfaces to create consistent, descriptive labels across cluster nodes.
Alternative names help you overcome the 15-character kernel interface name limitation and simplify automation in environments where interface naming varies across hardware. {._abstract}

Alternative interface names provide the following benefits:

*   **Consistent naming**: Apply standardized names regardless of underlying hardware naming schemes, which is useful in heterogeneous clusters.
*   **Descriptive labels**: Use descriptive names up to 127 characters, such as `production-external-interface`, in addition to kernel-assigned names like `ens3f0`.
*   **Simplified automation**: Reference interfaces by names that remain constant across different node types, reducing configuration errors.

You can use alternative names anywhere that accepts a standard interface name, including bond ports, VLAN base interfaces, bridge ports, and route next-hop interfaces.