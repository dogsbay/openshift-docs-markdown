---
title: Monitoring overview
---

{%- set _mod_docs_content_type = "REFERENCE" %}
# Monitoring overview {id="virt-monitoring-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "virt-monitoring-overview" %}

Monitor the health of your cluster and virtual machines (VMs) to have a unified operational view of your environment. This ensures high availability and optimal resource performance.

You can monitor the health of your cluster and VMs with the following tools:


Monitoring {{ VirtProductName }} VM health status
:   View the overall health of your {{ VirtProductName }} environment in the web console by navigating to the **Home** -> **Overview** page in the {{ product_title }} web console. The **Status** card displays the overall health of {{ VirtProductName }} based on the alerts and conditions.

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

[{{ product_title }} cluster checkup framework](/virt/monitoring/virt-running-cluster-checkups#virt-running-cluster-checkups)
:   Run automated tests with the {{ product_title }} cluster checkup framework to ensure that your cluster, including cluster storage, is optimally configured for {{ VirtProductName }}.
{% endif %}


[Prometheus queries for virtual resources](/virt/monitoring/virt-prometheus-queries#virt-prometheus-queries)
:   Query vCPU, network, storage, and guest memory swapping usage and live migration progress.


[VM custom metrics](/virt/monitoring/virt-exposing-custom-metrics-for-vms#virt-exposing-custom-metrics-for-vms)
:   Configure the `node-exporter` service to expose internal VM metrics and processes.


[VM health checks](/virt/monitoring/virt-monitoring-vm-health#virt-monitoring-vm-health)
:   Configure readiness, liveness, and guest agent ping probes and a watchdog for VMs.


[Runbooks](/virt/monitoring/virt-runbooks#virt-runbooks)

{% if not openshift_rosa_hcp %}
:   Diagnose and resolve issues that trigger {{ VirtProductName }} [alerts](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/monitoring_key_concepts/key-concepts#about-managing-alerts_key-concepts) in the {{ product_title }} web console.
{% endif %}