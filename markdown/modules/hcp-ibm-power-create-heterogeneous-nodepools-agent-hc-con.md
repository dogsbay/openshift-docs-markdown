{%- set _mod_docs_content_type = "CONCEPT" %}
# About creating heterogeneous node pools on agent hosted clusters {id="hcp-ibm-power-create-heterogeneous-nodepools-agent-hc-con_{{ context }}"}

A node pool is a group of nodes within a cluster that share the same configuration. Heterogeneous node pools have different configurations so that you can create pools and optimize them for various workloads. {._abstract}

You can create heterogeneous node pools on the agent platform. The platform enables clusters to run diverse machine types, such as `x86_64` or `ppc64le`, within a single hosted cluster.

Creating a heterogeneous node pool requires completion of the following general steps:

*   Create an `AgentServiceConfig` custom resource (CR) that informs the Operator how much storage it needs for components such as the database and filesystem. The CR also defines which {{ product_title }} versions to support.
*   Create an agent cluster.
*   Create the heterogeneous node pool.
*   Configure DNS for hosted control planes
*   Create an `InfraEnv` custom resource (CR) for each architecture.
*   Add agents to the heterogeneous cluster.