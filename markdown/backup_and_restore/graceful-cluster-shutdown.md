---
title: Shutting down the cluster gracefully
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Shutting down the cluster gracefully {id="graceful-shutdown-cluster"}
{%- set context = "graceful-shutdown-cluster" %}

You can shut down your {{ product_title }} cluster for planned maintenance by cordoning nodes, draining workloads, and stopping nodes in order. Graceful shutdown preserves cluster state so you can restart the cluster when maintenance is complete. {._abstract}

{% leveloffset +1 %}{% include "./modules/graceful-shutdown.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_restarting-restoring-cluster" ._additional-resources}

*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
*   [Restoring to an earlier cluster state](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-2-restoring-cluster-state#dr-restoring-cluster-state)
*   [Restarting the cluster gracefully](/backup_and_restore/graceful-cluster-restart#graceful-restart-cluster)