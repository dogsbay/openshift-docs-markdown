---
title: Completing the y-stream cluster update
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Completing the y-stream cluster update {id="update-completing-the-y-stream-update"}
{%- set context = "completing-the-y-stream-update" %}

Complete the following steps to perform a y-stream cluster update. {._abstract}

{% leveloffset +1 %}{% include "./modules/update-acknowledging-the-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Kubernetes API removals](/updating/preparing_for_updates/updating-cluster-prepare#kube-api-removals_updating-cluster-prepare)

{% leveloffset +1 %}{% include "./modules/update-starting-the-cluster-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Selecting the target release](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-api#update-selecting-the-target-release_update-api)

{% leveloffset +1 %}{% include "./modules/update-monitoring-the-cluster-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-updating-the-olm-operators.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating the worker nodes](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-updating-the-worker-nodes_completing-the-update)

{% leveloffset +1 %}{% include "./modules/update-updating-the-worker-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-verifying-the-health-of-the-newly-updated-cluster.md" %}{% endleveloffset %}