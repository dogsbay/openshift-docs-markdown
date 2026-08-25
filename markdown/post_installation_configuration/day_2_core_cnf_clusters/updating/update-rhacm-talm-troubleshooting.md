---
title: "Troubleshoot cluster updates with {{ cgu_operator }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshoot cluster updates with {{ cgu_operator }} {id="core-cluster-upgrades-troubleshooting"}
{%- set context = "core-cluster-upgrades-troubleshooting" %}

If a cluster update gets stuck, fails, or results in degraded cluster Operators, use the following diagnostic procedures to identify the root cause and take corrective action. {._abstract}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-cgu-preparing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-cgu-failed.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-operator-degraded.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-update-stuck.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-nodes-notready.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-worker-update-stuck.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-etcd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-image-pull.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-timeout.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-noncompliant-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/core-cluster-upgrade-ts-collect-diagnostics.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_core-cluster-upgrades-troubleshooting" ._additional-resources}

*   [Perform health checks before a cluster update with {{ cgu_operator }}](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-rhacm-talm-health-checks#core-cluster-upgrades-health-checks)
*   [Using the {{ cgu_operator_full }} for cluster updates](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)
*   [Contact Red&#160;Hat support](https://access.redhat.com/support)
*   [Red&#160;Hat Knowledgebase](https://access.redhat.com/solutions)