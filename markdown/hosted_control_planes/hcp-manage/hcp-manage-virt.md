---
title: "Managing {{ hcp }} on {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Managing {{ hcp }} on {{ VirtProductName }} {id="hcp-manage-virt"}
{%- set context = "hcp-manage-virt" %}

After you deploy a hosted cluster on {{ VirtProductName }}, you can manage the cluster. {._abstract}

{% leveloffset +1 %}{% include "./modules/hcp-virt-access.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-bm-autoscale.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-map-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-csi-snapshot.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-multiple-snapshots.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-root-volume.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-image-caching.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Cloning a data volume using smart-cloning](/virt/creating_vm/virt-creating-vms-by-cloning-pvcs#smart-cloning_virt-creating-vms-by-cloning-pvcs)

{% leveloffset +2 %}{% include "./modules/hcp-virt-storage-security-isolation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-etcd-storage.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-attach-nvidia-gpus.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-attach-nvidia-gpus-np-api.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-evict-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-topology-spread-constraint.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installing the descheduler](/nodes/scheduling/descheduler/nodes-descheduler-configuring#nodes-descheduler-installing_virt-enabling-descheduler-evictions)