---
title: "Using {{ VirtProductName }} with {{ IBMFusionFirst }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using {{ VirtProductName }} with {{ IBMFusionFirst }} {id="install-configure-fusion-access-san"}
{%- set context = "install-configure-fusion-access-san" %}

You configure SAN-based storage for virtual machines by using {{ IBMFusionFirst }} with {{ VirtProductName }}. You must install the {{ FusionSAN }} Operator (Fusion Access for SAN) and set up the storage cluster and file systems.

{% leveloffset +1 %}{% include "./modules/virt-about-fusion-access-san.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-fusion-access-san-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-installing-fusion-access-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-pull-secret-fusion-san.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-fusionaccess-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-storage-cluster-fusion-access-san.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-creating-filesystem-fusion-access-san.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-troubleshoot-fusion-access-san.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-fusion-access-san-release-updates.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Creating virtual machines from instance types](/virt/creating_vm/virt-creating-vms-from-instance-types#virt-creating-vms-from-instance-types)
*   [Creating virtual machines from templates](/virt/creating_vm/virt-creating-vms-from-templates#virt-creating-vms-from-templates)