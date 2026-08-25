---
title: Completing the control plane Only cluster update
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Completing the control plane Only cluster update {id="update-completing-the-update"}
{%- set context = "completing-the-update" %}

Complete the following steps to perform the control plane only cluster update. {._abstract}


:::important

Control plane only updates were previously known as EUS-to-EUS updates.
Control plane only updates are only viable between even-numbered minor versions of {{ product_title }}.

:::


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

{% leveloffset +2 %}{% include "./modules/update-performing-the-second-y-stream-update.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/update-acknowledging-the-y-stream-release-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Preparing to update to {{ product_title }} {{ product_version }}](/updating/preparing_for_updates/updating-cluster-prepare#updating-cluster-prepare)

{% leveloffset +1 %}{% include "./modules/update-starting-the-y-stream-control-plane-update.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-monitoring-second-part-y-update.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Monitoring the cluster update](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-monitoring-the-cluster-update_completing-the-update)

{% leveloffset +1 %}{% include "./modules/update-updating-all-the-olm-operators.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Monitoring the cluster update](/edge_computing/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-monitoring-the-cluster-update_completing-the-update)
*   [Updating the OLM Operators](/post_installation_configuration/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-updating-the-olm-operators_completing-the-update)

{% leveloffset +1 %}{% include "./modules/update-updating-the-worker-nodes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/update-verifying-the-health-of-the-newly-updated-cluster.md" %}{% endleveloffset %}