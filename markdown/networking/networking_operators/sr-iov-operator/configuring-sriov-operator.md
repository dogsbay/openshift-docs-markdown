---
title: Configuring the SR-IOV Network Operator
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the SR-IOV Network Operator {id="configuring-sriov-operator"}
{%- set context = "configuring-sriov-operator" %}

To manage SR-IOV network devices and network attachments in your cluster, use the Single Root I/O Virtualization (SR-IOV) Network Operator. {._abstract}

{% leveloffset +1 %}{% include "./modules/nw-sriov-configuring-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-sriov-operator-cr.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-network-resource-injector.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/disable-enable-network-resource-injector.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/about-sr-iov-operator-admission-control-webhook.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring the SR-IOV Network Operator to use an unsupported NIC](https://access.redhat.com/articles/7010183)

{% leveloffset +1 %}{% include "./modules/disable-enable-sr-iov-operator-admission-control-webhook.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-custom-nodeselector.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configure-sr-iov-operator-single-node.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/sriov-operator-hosted-control-planes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sriov-network-metrics-exporter.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/sriov-operator-metrics.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Querying metrics for all projects with the monitoring dashboard](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator#querying-metrics-for-all-projects-with-mon-dashboard_accessing-metrics-as-an-administrator)
*   [Querying metrics for user-defined projects as a developer](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-a-developer#querying-metrics-for-user-defined-projects-with-mon-dashboard_accessing-metrics-as-a-developer)
*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)
*   [Uninstalling the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/uninstalling-sriov-operator#uninstalling-sriov-operator)