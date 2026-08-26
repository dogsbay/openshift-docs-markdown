{%- set _mod_docs_content_type = "CONCEPT" %}
# Architectural design {id="microshift-architectural-design_{{ context }}"}

{{ microshift_short }} is a single-node container orchestration runtime that extends the benefits of containerized applications to low-resource edge environments. {._abstract}

Because {{ microshift_short }} is primarily a platform for deploying applications, only the APIs and features essential to operating in edge and small form factor computing environments are included. 

For example, {{ microshift_short }} has only the following Kubernetes node capabilities:

*   Networking
*   Ingress
*   Storage

{{ microshift_short }} also provides the following Kubernetes functions:

*   Orchestration
*   Security

To optimize your deployments, use {{ microshift_short }} with a compatible operating system, such as {{ op_system_ostree_first }}. Using {{ microshift_short }} and {{ op_system_ostree_first }} together forms {{ op_system_bundle }}. Virtual machines are handled by the operating system in {{ microshift_short }} deployments.

**Figure 1. {{ product_title }} as part of {{ op_system_bundle }}.**

![<{{ product_title }} is tasked with only the Kubernetes node services networking](/images/311_RHDevice_Edge_Overview_0223_1.png)

The following operational differences from {{ oke }} can help you understand where you can deploy {{ microshift_short }}:

## Key differences from {{ oke }} {id="microshift-differences-oke_{{ context }}"}

*   Devices with {{ microshift_short }} installed are self-managing
*   Compatible with `rpm-ostree`-based systems
*   Uses only the APIs needed for essential functions, such as security and runtime controls
*   Enables a subset of commands from the {{ oc_first }} tool
*   Does not support workload high availability (HA) or horizontal scalability with the addition of worker nodes

**Figure 2. {{ product_title }} differences from {{ oke }}.**

![<{{ microshift_short }} is tasked with only the Kubernetes node capabilities of networking](/images/311_RHDevice_Edge_Overview_0223_2.png)

The figure "{{ product_title }} differences from {{ oke }}" shows that {{ oke }} has the same cluster capabilities as a {{ product_title }} node, and adds the following information:

*   Install
*   Over-the-air updates
*   Operators
*   Operator Lifecycle Manager
*   Monitoring
*   Logging
*   Registry
*   Authorization
*   Console
*   Cloud Integration
*   Virtual Machines (VMs) through {{ VirtProductName }}

In {{ oke }} and other {{ OCP }} deployments, all of the components from the operating system through the cluster capabilities work as one comprehensive unit, with full cluster services for a multi-node Kubernetes workload. With {{ microshift_short }}, functions such as over-the-air-updates, monitoring, and logging, are performed by the operating system.