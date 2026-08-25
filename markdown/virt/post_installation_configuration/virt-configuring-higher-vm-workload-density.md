---
title: Configuring higher VM workload density
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring higher VM workload density {id="virt-configuring-higher-vm-workload-density"}
{%- set context = "virt-configuring-higher-vm-workload-density" %}

You can increase the number of virtual machines (VMs) on nodes by overcommitting memory (RAM). Increasing VM workload density can be useful if you have many similar workloads or underused workloads.


:::note

Memory overcommitment can lower workload performance on a highly utilized system.

:::


{% leveloffset +1 %}{% include "./modules/virt-using-wasp-agent-to-configure-higher-vm-workload-density.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-removing-wasp-agent.md" %}{% endleveloffset %}