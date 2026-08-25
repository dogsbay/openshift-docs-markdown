{%- set _mod_docs_content_type = "CONCEPT" %}
# About bare metal hosts and nodes {id="about-bare-metal-hosts-and-nodes_{{ context }}"}

To provision a {{ op_system_first }} bare-metal host as a node in your cluster, first create a `MachineSet` custom resource (CR) object that corresponds to bare-metal host hardware.  {._abstract}

Bare-metal host compute machine sets describe infrastructure components specific to your configuration. You apply specific Kubernetes labels to these compute machine sets and then update the infrastructure components to run on only those machines.

When you scale up the relevant `MachineSet` CR that contains a `metal3.io/autoscale-to-hosts` annotation, `Machine` CRs are created automatically. {{ product_title }} uses `Machine` CRs to provision the bare-metal node that corresponds to the host as specified in the `MachineSet` CR.