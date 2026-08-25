---
title: Deleting a machine
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Deleting a machine {id="deleting-machine"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "deleting-machine" %}

If you need to remove a machine from your cluster, you can delete a specific machine. If the machine is part of a machine set, deleting the machine can help troubleshoot and resolve unhealthy nodes and other technical issues.

{% leveloffset +1 %}{% include "./modules/machine-delete.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/machine-lifecycle-hook-deletion.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-lifecycle-hook-deletion-format.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-lifecycle-hook-deletion-uses.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/machine-lifecycle-hook-deletion-etcd.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_unhealthy-etcd-member"}

*   [Machine phases and lifecycle](/machine_management/machine-phases-lifecycle#machine-phases-lifecycle)
*   [Replacing an unhealthy etcd member](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#replacing-unhealthy-etcd-member)
*   [Managing control plane machines with control plane machine sets](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-managing-machines)