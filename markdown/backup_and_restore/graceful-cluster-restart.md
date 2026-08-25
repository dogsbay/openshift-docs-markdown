---
title: Restarting the cluster gracefully
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Restarting the cluster gracefully {id="graceful-restart-cluster"}
{%- set context = "graceful-restart-cluster" %}

You can restart your {{ product_title }} cluster after a graceful shutdown by powering on nodes and verifying cluster health. The cluster returns to normal operations when nodes and Operators are healthy. {._abstract}

Even though the cluster is expected to be functional after the restart, the cluster might not recover due to unexpected conditions:

*   etcd data corruption during shutdown
*   Node failure due to hardware
*   Network connectivity issues

If your cluster fails to recover, follow the steps in "Restoring to an earlier cluster state".

{% leveloffset +1 %}{% include "./modules/graceful-restart.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Shutting down the cluster gracefully](/backup_and_restore/graceful-cluster-shutdown#graceful-shutdown-cluster)
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)