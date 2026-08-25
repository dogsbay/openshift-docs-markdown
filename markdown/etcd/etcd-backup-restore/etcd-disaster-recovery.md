---
title: Disaster recovery
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Disaster recovery {id="etcd-disaster-recovery"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "etcd-disaster-recovery" %}

To return your cluster to a working state after quorum loss, control plane failure, or expired certificates, follow the disaster recovery procedures for your situation. You can restore etcd quorum, restore the cluster from an etcd snapshot, or recover from expired control plane certificates.


:::important

Disaster recovery requires you to have at least one healthy control plane host.

:::


{% leveloffset +1 %}{% include "./modules/dr-restoring-etcd-quorum-ha.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing a user-provisioned cluster on bare metal](/installing/installing_bare_metal/upi/installing-bare-metal#installing-bare-metal)
*   [Replacing a bare-metal control plane node](/installing/installing_bare_metal/bare-metal-expanding-the-cluster#replacing-a-bare-metal-control-plane-node_bare-metal-expanding)
*   [Replacing an unhealthy etcd member](/backup_and_restore/control_plane_backup_and_restore/replacing-unhealthy-etcd-member#replacing-unhealthy-etcd-member)

{% leveloffset +1 %}{% include "./modules/dr-restoring-cluster-state-about.md" %}{% endleveloffset %}

**Additional resources**

*   [Recovering from expired control plane certificates](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-recovering-expired-certs)

{% leveloffset +1 %}{% include "./modules/dr-restoring-cluster-state-sno.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-restoring-cluster-state.md" %}{% endleveloffset %}

**Additional resources**

*   [Recovering a degraded etcd Operator](/machine_management/control_plane_machine_management/cpmso-troubleshooting#cpmso-ts-etcd-degraded_cpmso-troubleshooting)

{% leveloffset +1 %}{% include "./modules/dr-scenario-cluster-state-issues.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-recover-expired-control-plane-certs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-testing-restore-procedures.md" %}{% endleveloffset %}

**Additional resources**

*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)