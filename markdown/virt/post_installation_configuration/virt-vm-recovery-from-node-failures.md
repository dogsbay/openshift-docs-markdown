---
title: Virtual machine recovery from node failures
---

{% if context %}
{% endif %}

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Virtual machine recovery from node failures {id="virt-vm-recovery-from-node-failures"}

{% include "./_attributes/common-attributes.md" %}

{%- set context = "virt-vm-recovery-from-node-failures" %}

To ensure that virtual machines (VMs) recover automatically when a node fails, configure node health checks, automated remediation, and capacity planning. These recommendations come from chaos testing results and help minimize VM downtime during node failure conditions.

{% leveloffset +1 %}{% include "./modules/virt-about-recommended-node-practices.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-configuring-runstrategy-vm.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-configuring-node-health-checks-for-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-node-remediation-strategies.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-snr-configuration-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-about-capacity-planning-for-vm-failover.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Configure eviction and run strategies](/virt/nodes/virt-eviction-strategies#virt-eviction-strategies)
*   [Run strategies](/virt/nodes/virt-eviction-strategies#virt-runstrategies-vms_virt-eviction-strategies)
*   [About high availability for virtual machines](/virt/managing_vms/advanced_vm_management/virt-high-availability-for-vms#virt-high-availability-for-vms)
*   [Control virtual machine states](/virt/managing_vms/virt-controlling-vm-states#virt-controlling-vm-states)
*   [Workload Availability for Red Hat OpenShift](https://docs.redhat.com/en/documentation/workload_availability_for_red_hat_openshift/24.3)

{% if parent_context %}
{% endif %}
{% if not parent_context %}
{% endif %}