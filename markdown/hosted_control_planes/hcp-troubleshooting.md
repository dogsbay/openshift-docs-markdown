---
title: "Troubleshooting {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting {{ hcp }} {id="hcp-troubleshooting"}
{%- set context = "hcp-troubleshooting" %}

If you encounter an issue with {{ hcp }}, you can gather information about the hosted cluster, {{ product_title }}, or other components so that you can determine the root cause and take steps to resolve it.

{% leveloffset +1 %}{% include "./modules/hosted-control-planes-troubleshooting.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the {{ hcp }} command-line interface](/hosted_control_planes/hcp-prepare/hcp-cli#hcp-cli)

{% leveloffset +1 %}{% include "./modules/hcp-must-gather-day-2.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-must-gather-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-must-gather-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-must-gather-dc.md" %}{% endleveloffset %}

**Additional resources**

*   [Install on disconnected networks](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#install-on-disconnected-networks)

{% leveloffset +1 %}{% include "./modules/hcp-ts-ocp-virt.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-hc-stuck.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-no-nodes-reg.md" %}{% endleveloffset %}

**Additional resources**

*   [Identifying the problem: Access the VM console logs](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.11/html/clusters/cluster_mce_overview#identifying-vm-console-logs)

{% leveloffset +2 %}{% include "./modules/hcp-ts-nodes-stuck.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-ingress-not-online.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-load-balancer-svcs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-pvcs-not-avail.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-vm-nodes.md" %}{% endleveloffset %}

**Additional resources**

*   [How to get serial console logs for VMs part of OpenShift Virtualization Hosted Control Plane clusters (Red&#160;Hat Knowledgebase)](https://access.redhat.com/solutions/7037705)

{% leveloffset +2 %}{% include "./modules/hcp-ts-rhcos.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-non-bm.md" %}{% endleveloffset %}

**Additional resources**

*   [Removing a cluster from management](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#remove-managed-cluster)

{% leveloffset +1 %}{% include "./modules/hcp-ts-bm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-bm-nodes-not-added.md" %}{% endleveloffset %}

**Additional resources**

*   [Add the pull secret to the namespace](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html-single/clusters/index#on-prem-creating-your-cluster-with-the-cli-pull-secret)

{% leveloffset +1 %}{% include "./modules/hosted-restart-hcp-components.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hosted-control-planes-pause-reconciliation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/scale-down-data-plane.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/agent-service-failure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ts-internal-subnets.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-ovnkubernetes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-identical-subnet-fields.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-subnet-cidr-format.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-cidr-overlap.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-nodes-not-ready.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-ts-connectivity.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-ts-connect-data-plane.md" %}{% endleveloffset %}

**Additional resources**

*   [Connectivity monitoring for {{ hcp }}](/hosted_control_planes/hcp-observability#hcp-connectivity-metrics_hcp-observability)