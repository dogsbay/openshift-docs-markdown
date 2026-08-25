---
title: "Perform health checks before a cluster update with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Perform health checks before a cluster update with {{ cgu_operator }} {id="core-cluster-upgrades-health-checks"}
{%- set context = "core-cluster-upgrades-health-checks" %}

Running pre-update health checks reduces the risk of update failures and identifies problems early.
If any checks fail, resolve the issues before proceeding with the cluster update. {._abstract}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-health-check.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-health-checks" ._additional-resources}

*   [Checking the cluster health](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-before-the-update#update-checking-cluster-health_update-before-the-update)
*   [Backing up etcd](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)