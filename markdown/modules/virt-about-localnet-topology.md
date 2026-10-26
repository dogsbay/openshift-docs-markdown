{%- set _mod_docs_content_type = "CONCEPT" %}
# Localnet topology for OVS bridge networks {id="virt-about-localnet-topology_{{ context }}"}

A localnet topology connects the secondary network to the physical network. This enables both east-west cluster traffic and access to services running outside the cluster, but it requires additional configuration of the underlying Open vSwitch (OVS) bridge on cluster nodes. {._abstract}

To configure a localnet UDN, use the following steps:

1.  Install the Kubernetes NMState Operator, which provides a state-driven network configuration across cluster nodes.
1.  Use the `NodeNetworkConfigurationPolicy` custom resource (CR) to configure OVS bridges and add the appropriate bridge mappings on the nodes.
1.  Use the `ClusterUserDefinedNetwork` CR from the UDN API to attach your workload to the physical network through the OVS bridges that you configured in the previous step.