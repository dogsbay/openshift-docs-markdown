---
title: "Hardware, software, and operational requirements"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Hardware, software, and operational requirements {id="virt-requirements"}
{%- set context = "virt-requirements" %}

Review the hardware, software, and operational requirements for {{ VirtProductName }}, including CPU, OS, storage, cluster sizing, and live migration.

{% leveloffset +1 %}{% include "./modules/virt-cpu-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-os-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-storage-requirements.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-about-storage-volumes-for-vm-disks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-cluster-resource-requirements.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-sno-differences.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-object-maximums.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-live-migration-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-cluster-ha-options.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Configuring a required node affinity rule](/nodes/scheduling/nodes-scheduler-node-affinity#nodes-scheduler-node-affinity-configuring-required_nodes-scheduler-node-affinity)
*   [About RHCOS](/architecture/architecture-rhcos#rhcos-about_architecture-rhcos)
*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#_optimizing-storage)
*   [Red Hat Ecosystem Catalog](https://catalog.redhat.com)
*   [Configuring live migration](/virt/live_migration/virt-configuring-live-migration#virt-configuring-live-migration)
*   [Using a dedicated network for live migration](/virt/vm_networking/virt-dedicated-network-live-migration#virt-dedicated-network-live-migration)
*   [Run strategies](/virt/nodes/virt-eviction-strategies#virt-runstrategies-vms_virt-eviction-strategies)
*   [{{ product_title }} object maximums](/scalability_and_performance/planning-your-environment-according-to-object-maximums#planning-your-environment-according-to-object-maximums)
*   [{{ VirtProductName }} supported limits](/virt/about_virt/virt-supported-limits#virt-supported-limits)
*   [Installer-provisioned infrastructure installation overview](/installing/installing_bare_metal/ipi/ipi-install-overview#ipi-install-overview)
*   [About machine health checks](/machine_management/deploying-machine-health-checks#machine-health-checks-about_deploying-machine-health-checks)