---
title: Post-installation troubleshooting and recovery
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Post-installation troubleshooting and recovery {id="installing-post-tnf"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "install-post-tnf" %}

You can troubleshoot and restore  a two-node {{ product_title }} cluster with fencing (TNF) after a disruption event. Manually recover services when automated recovery is unavailable, replace degraded control plane nodes, and use the `fencing_validator` script to verify cluster health.

{% leveloffset +1 %}{% include "./modules/installation-manual-recovering-when-auto-recovery-is-unavail.md" %}{% endleveloffset %}

**Additional resources**

*   [Restoring etcd from a backup](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd-restoring_backing-up-etcd)
*   [Verifying etcd health in a two-node OpenShift cluster with fencing](/installing/installing_two_node_cluster/installing_tnf/install-post-tnf#installation-verifying-etcd-health_install-post-tnf)
*   [Gathering an sosreport for {{ product_title }}](/support/gathering-cluster-data#about-sosreport_gathering-cluster-data)

{% leveloffset +1 %}{% include "./modules/installation-replacing-control-plane-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-verifying-etcd-health.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/fencing-validator-script-overview.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/fencing-validator-script-prerequisites.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/command-line-options-for-fencing-validator-script.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/fencing-validator-script-for-non-disruptive-checks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/fencing-validator-script-for-disruptive-checks.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/exit-codes-for-fencing-validator-script.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/transport-mode-for-fencing-validator-script.md" %}{% endleveloffset %}