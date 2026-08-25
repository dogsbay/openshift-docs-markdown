---
title: Replacing an unhealthy etcd member
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Replacing an unhealthy etcd member {id="replacing-unhealthy-etcd-member"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "replacing-unhealthy-etcd-member" %}

To restore etcd quorum when a single member is unhealthy, identify the member and determine whether its machine is stopped, its node is not ready, or its pod is crashlooping. You can then follow the replacement procedure that matches that state.


:::note

If you have lost the majority of your control plane hosts, follow the steps in "Restoring to an earlier cluster state" instead of this procedure..

If the control plane certificates are not valid on the member being replaced, then you must follow the steps in "Recovering from expired control plane certificates" instead of this procedure.

If a control plane node is lost and a new one is created, the etcd cluster Operator handles generating the new TLS certificates and adding the node as an etcd member.

:::


{% leveloffset +1 %}{% include "./modules/restore-identify-unhealthy-etcd-member.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/restore-determine-state-etcd-member.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/restore-replace-stopped-etcd-member.md" %}{% endleveloffset %}

**Additional resources**

*   [Recovering a degraded etcd Operator](/machine_management/control_plane_machine_management/cpmso-troubleshooting#cpmso-ts-etcd-degraded_cpmso-troubleshooting)
*   [Replacing a control plane node on an unhealthy cluster](https://docs.redhat.com/en/documentation/assisted_installer_for_openshift_container_platform/2026/html/installing_openshift_container_platform_with_the_assisted_installer/expanding-the-cluster#installing-control-plane-node-unhealthy-cluster_expanding-the-cluster)

{% leveloffset +2 %}{% include "./modules/restore-replace-crashlooping-etcd-member.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/restore-replace-stopped-baremetal-etcd-member.md" %}{% endleveloffset %}

**Additional resources**

*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
*   [Recovering from expired control plane certificates](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-recovering-expired-certs)
*   [Quorum protection with machine lifecycle hooks](/machine_management/deleting-machine#machine-lifecycle-hook-deletion-etcd_deleting-machine)