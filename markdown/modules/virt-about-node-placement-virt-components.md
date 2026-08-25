{%- set _mod_docs_content_type = "CONCEPT" %}
# About node placement rules for {{ VirtProductName }} components {id="virt-about-node-placement-virt-components_{{ context }}"}

You can use node placement rules to deploy virtual machines only on nodes intended for virtualization workloads, to deploy Operators only on infrastructure nodes, or to maintain separation between workloads. {._abstract}

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