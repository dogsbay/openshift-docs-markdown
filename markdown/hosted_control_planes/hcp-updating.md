---
title: "Updating {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Updating {{ hcp }} {id="hcp-updating"}
{%- set context = "hcp-updating" %}

Updates for {{ hcp }} involve updating the hosted cluster and the node pools.  {._abstract}

For a cluster to remain fully operational during an update process, you must meet the requirements of the hosted cluster and node pool version skew policy while completing the control plane and node updates. For more information, see "Hosted cluster and node pool version skew policy".

{% leveloffset +1 %}{% include "./modules/hcp-updating-requirements.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Updating a cluster using the web console](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)
*   [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli)
*   [Updating installed Operators](/operators/admin/olm-upgrading-operators#olm-upgrading-operators)
*   [Updating a control plane in a hosted cluster](/hosted_control_planes/hcp-updating#hcp-update-ocp-hc_hcp-updating)
*   [Updating node pools in a hosted cluster](/hosted_control_planes/hcp-updating#hcp-update-node-pools_hcp-updating)

{% leveloffset +1 %}{% include "./modules/hcp-np-version-skew.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-get-ocp-channel.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-get-upgrade-versions.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Hosted cluster and node pool version skew policy](/hosted_control_planes/hcp-updating#hcp-np-version-skew_hcp-updating)
*   [{{ mce_short }} 2.17](https://access.redhat.com/articles/7142379)
*   [{{ mce_short }} 2.11](https://access.redhat.com/articles/7136929)
*   [{{ mce_short }} 2.10](https://access.redhat.com/articles/7133096)
*   [{{ mce_short }} 2.9](https://access.redhat.com/articles/7120837)
*   [{{ mce_short }} 2.8](https://access.redhat.com/articles/7099674)
*   [{{ mce_short }} 2.7](https://access.redhat.com/articles/7086906)
*   [{{ mce_short }} 2.6](https://access.redhat.com/articles/7073030)
*   [{{ mce_short }} 2.5](https://access.redhat.com/articles/7056007)
*   [{{ mce_short }} 2.4](https://access.redhat.com/articles/7027079)

{% leveloffset +1 %}{% include "./modules/hcp-updates-hosted-cluster.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About the Node Health Check Operator](https://docs.redhat.com/en/documentation/workload_availability_for_red_hat_openshift/24.4/html/remediation_fencing_and_maintenance/node-health-check-operator#about-node-health-check-operator_node-health-check-operator)

{% leveloffset +1 %}{% include "./modules/hcp-updates-node-pools.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-update-node-pools.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-update-ocp-hc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-update-using-mce-console.md" %}{% endleveloffset %}