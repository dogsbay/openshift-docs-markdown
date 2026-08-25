---
title: Replacing a failed bare-metal control plane node without BMC credentials
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Replacing a failed bare-metal control plane node without BMC credentials {id="replacing-control-plane-node"}
{%- set context = "replacing-control-plane-node" %}

If a control plane node on your bare-metal cluster has failed and cannot be recovered, but you installed your cluster without providing baseboard management controller (BMC) credentials, you must take extra steps in order to replace the failed node with a new one.

{% leveloffset +1 %}{% include "./modules/nodes-replace-control-plane-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-remove-unhealthy-etcd-member.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-create-new-control-plane-node.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-link-node-machine-bmh.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-add-new-etcd-member.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-enable-etcd-quorum-guard.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-delete-machine-unhealthy-etcd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-verify-failed-node-deleted.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Replacing an unhealthy bare metal etcd member whose machine is not running or whose node is not ready](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#restore-replace-stopped-baremetal-etcd-member_replacing-unhealthy-etcd-member)
*   [Replacing an unhealthy etcd member whose etcd pod is crashlooping](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#restore-replace-crashlooping-etcd-member_replacing-unhealthy-etcd-member)
*   [BareMetalHost reference is missing after adding a host to OpenShift Assisted Installer cluster (Red&#160;Hat KCS article)](https://access.redhat.com/solutions/6471021)
*   [How to retrieve control plane or worker Ignition Configuration from {{ product_title }} 4? (Red&#160;Hat KCS article)](https://access.redhat.com/solutions/5504291)