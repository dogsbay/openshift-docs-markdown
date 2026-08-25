{%- set _mod_docs_content_type = "CONCEPT" %}
# About the control plane {id="about-control-planes_{{ context }}"}

The control plane manages compute nodes and pods in {{ product_title }} clusters, with configurable machine config pools for different workload types. {._abstract}

The control plane manages the compute nodes and the pods in your cluster. You can configure nodes with the use of machine config pools (MCPs).
MCPs are groups of machines, such as control plane components or user workloads, that are based on the resources that they handle.
{{ product_title }} assigns different roles to hosts. These roles define the function of a machine in a cluster.
The cluster contains definitions for the standard control plane and compute role types.

You can use Operators to package, deploy, and manage services on the control plane. Operators are important components in {{ product_title }} because they provide the following services:

*   Perform health checks
*   Provide ways to watch applications
*   Manage over-the-air updates
*   Ensure applications stay in the specified state