{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure node placement for {{ VirtProductName }} components {id="virt-configure-node-placement-postinstall_{{ context }}"}

Configure node placement rules to specify the nodes on which {{ VirtProductName }} Operators, workloads, and controllers are deployed. Custom placement rules allow you to isolate virtual machine (VM) traffic or dedicate specialized compute resources to critical workloads. {._abstract}


:::important

You can configure node placement rules for some components after installing {{ VirtProductName }}, but virtual machines cannot be present if you want to configure node placement rules for workloads.

:::


Depending on the object, you can use one or more of the following rule types:


`nodeSelector`
:   Allows pods to be scheduled on nodes that are labeled with the key-value pair or pairs that you specify in this field. The node must have labels that exactly match all listed pairs.

`affinity`
:   Enables you to use more expressive syntax to set rules that match nodes with pods. Affinity also allows for more nuance in how the rules are applied. For example, you can specify that a rule is a preference, not a requirement. If a rule is a preference, pods are still scheduled when the rule is not satisfied.

`tolerations`
:   Allows pods to be scheduled on nodes that have matching taints. If a taint is applied to a node, that node only accepts pods that tolerate the taint.

{% if openshift_enterprise %}
If you are running an {{ ibm_z_title }} or {{ ibm_linuxone_title }} (`s390x`) cluster with mixed hypervisors, refer to the following table for the supported nodes to run the virtual machines.  

**{{ ibm_z_name }} node options**

| Node architecture | Hypervisor | VM deployment | Node selection | VM architecture |
| --- | --- | --- | --- | --- |
| s390x | LPAR | Supported | set node selector for LPAR node | s390x |
| s390x | z/VM | Unsupported | set anti-affinity for z/VM node | Not applicable |
| s390x | KVM | Unsupported | set anti-affinity for KVM node | Not applicable |


:::note

The scheduler does not select LPAR over z/VM or KVM nodes on `s390x` by default. To have a supported `s390x` virtual machine, you must set at least one `s390x` LPAR node as a schedulable compute node and you must set the node selector before deploying the virtual machine.

:::

{% endif %}

{% leveloffset +1 %}{% include "./virt-applying-node-placement-rules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-node-placement-rule-examples.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./virt-configuring-node-placement-ibm-z.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Specifying nodes for virtual machines](/virt/managing_vms/advanced_vm_management/virt-specifying-nodes-for-vms#virt-specifying-nodes-for-vms)
*   [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
*   [Controlling pod placement on nodes using node affinity rules](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
{%- endif %}
{%- if openshift_enterprise %}
*   [Installing the Node Feature Discovery Operator](/hardware_enablement/psap-node-feature-discovery-operator#installing-the-node-feature-discovery-operator_psap-node-feature-discovery-operator)
{%- endif %}