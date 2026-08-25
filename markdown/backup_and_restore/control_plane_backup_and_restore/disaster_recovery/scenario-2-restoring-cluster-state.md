---
title: Restoring to an earlier cluster state
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Restoring to an earlier cluster state {id="dr-restoring-cluster-state"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "dr-restoring-cluster-state" %}

To return your {{ product_title }} cluster to a known good state, restore from a saved etcd snapshot after quorum loss or critical resource deletion. Understanding restore impact helps you decide whether rollback is appropriate before you begin.

{% leveloffset +1 %}{% include "./modules/dr-restoring-cluster-state-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-restoring-cluster-state-sno.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-restoring-cluster-state.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/dr-scenario-cluster-state-issues.md" %}{% endleveloffset %}

**Additional resources**

*   [Recovering a degraded etcd Operator](/machine_management/control_plane_machine_management/cpmso-troubleshooting#cpmso-ts-etcd-degraded_cpmso-troubleshooting)
*   [Deleting the Local Storage Operator resources](/storage/persistent_storage_local/persistent-storage-local#local-storage-deleting-resources-overview_persistent-storage-local)