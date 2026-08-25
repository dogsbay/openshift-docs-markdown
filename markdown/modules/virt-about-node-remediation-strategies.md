{%- set _mod_docs_content_type = "CONCEPT" %}
# Node remediation strategies for {{ VirtProductName }} {id="virt-about-node-remediation-strategies_{{ context }}"}

Use the best remediation strategy for your environment to ensure that virtual machine (VM) workloads recover automatically when nodes become unhealthy. {._abstract}

Self Node Remediation (SNR) and Fence Agents Remediation (FAR) are the recommended remediation Operators for {{ VirtProductName }} environments. Recovery time depends on the number of VMs on the failed nodes.


Self Node Remediation (SNR)
:   Use for nodes that do not have a management interface, or when the management interface might be unreachable. SNR does not require a management interface to function. Do not use SNR for hyperconverged storage because API unavailability can cause remediation actions that negatively impact hyperconverged storage protection domains.


Fence Agents Remediation (FAR)
:   The fastest remediation Operator for workload recovery time. Use FAR when a baseboard management controller (BMC) interface is available. FAR requires a management interface that is reachable from the Kubernetes pod network.

    You must use FAR for hyperconverged storage configurations. For hyperconverged storage, set the Node Health Check `minHealthy` property to your total node count minus one. With this setting, FAR does not remediate more than a single worker-node failure within the same zone, storage placement, and replication group to maintain storage stability.


:::note

*   Remediation actions start after the node conditions monitored by the Node Health Check Operator exceed the time specified in `spec.unhealthyConditions[].duration`.
*   Disruption to the node running the `self-node-remediation-controller-manager` pod increases recovery times.

:::