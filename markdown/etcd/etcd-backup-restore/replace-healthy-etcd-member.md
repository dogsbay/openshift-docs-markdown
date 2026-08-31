---
title: Replacing a healthy etcd member
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Replacing a healthy etcd member {id="replace-healthy-etcd-member"}
{%- set context = "replace-healthy-etcd-member" %}

You might need to replace a healthy etcd member for planned hardware maintenance, hardware upgrades, or migration to new infrastructure. {._abstract}

{% leveloffset +1 %}{% include "./modules/replace-healthy-etcd-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/replace-healthy-etcd-procedures-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/determining-replace-healthy-etcd-member.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/replacing-healthy-etcd-member-cpms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/replacing-healthy-etcd-member-machine-api.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/replacing-healthy-etcd-member-scale-up-down.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_replace-healthy-etcd-member" ._additional-resources}

*   [Backing up etcd data](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backing-up-etcd-data_backup-etcd)
*   [Replacing an unhealthy etcd member](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#replacing-unhealthy-etcd-member)
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
*   [Replacing a control plane node in a healthy cluster](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/expanding-the-cluster#installing-control-plane-node-healthy-cluster_expanding-the-cluster)
*   [Quorum protection with machine lifecycle hooks](/machine_management/deleting-machine#machine-lifecycle-hook-deletion-etcd_deleting-machine)
*   [Replacing a control plane machine](/machine_management/control_plane_machine_management/cpmso-managing-machines#cpmso-feat-replace_cpmso-managing-machines)
*   [Adding a control plane node to your cluster](/machine_management/control_plane_machine_management/cpmso-manually-scaling-control-planes#creating-control-plane-node_cpmso-manually-scaling-control-planes)
*   [How to replace all master nodes in OpenShift Container Platform 4 (Red&#160;Hat Knowledgebase article)](https://access.redhat.com/articles/6270901)