---
title: Creating infrastructure nodes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Creating infrastructure nodes {id="nodes-nodes-creating-infrastructure-nodes"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "creating-infrastructure-nodes" %}

{% leveloffset +1 %}{% include "./snippets/machine-user-provisioned-limitations.md" %}{% endleveloffset %}

You can use infrastructure machine sets to create machines that host only infrastructure components, such as the default router, the integrated container image registry, and the components for cluster metrics and monitoring. These infrastructure machines are not counted toward the total number of subscriptions that are required to run the environment.


:::note

After adding the `NoSchedule` taint on the infrastructure node, existing DNS pods running on that node are marked as `misscheduled`. You must either delete or [add toleration on `misscheduled` DNS pods](https://access.redhat.com/solutions/6592171).

:::


{% leveloffset +1 %}{% include "./modules/infrastructure-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/creating-an-infra-node.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Moving resources to infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#moving-resources-to-infrastructure-machinesets)
*   [Creating infrastructure machine sets](/machine_management/creating-infrastructure-machinesets#creating-infrastructure-machinesets)
*   [Creating a compute machine set](/machine_management/creating-infrastructure-machinesets#machineset-creating_creating-infrastructure-machinesets)
*   [Creating an infrastructure node](/nodes/nodes/nodes-nodes-creating-infrastructure-nodes#creating-an-infra-node_creating-infrastructure-nodes) 
*   [Creating a machine config pool for infrastructure machines](/machine_management/creating-infrastructure-machinesets#creating-infra-machines_creating-infrastructure-machinesets)