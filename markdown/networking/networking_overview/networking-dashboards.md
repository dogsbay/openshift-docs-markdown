---
title: Networking dashboards
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Networking dashboards {id="networking-dashboards_{{ context }}"}
{%- set context = "networking-dashboards" %}

To monitor and analyze network performance within your cluster, view networking metrics in the {{ product_title }} web console. {._abstract}


Network Observability Operator

:   If you have the Network Observability Operator installed, you can view network traffic metrics dashboards by selecting the **Netobserv** dashboard from the **Dashboards** drop-down list. For more information about metrics available in this **Dashboard**, see [Network Observability metrics dashboards](/observability/network_observability/metrics-alerts-dashboards#network-observability-viewing-dashboards_metrics-dashboards-alerts).


Networking and OVN-Kubernetes dashboard

:   You can view both general networking metrics and OVN-Kubernetes metrics from the dashboard.

    To view general networking metrics, select **Networking/Linux Subsystem Stats** from the **Dashboards** drop-down list. You can view the following networking metrics from the dashboard: **Network Utilisation**, **Network Saturation**, and **Network Errors**.

    To view OVN-Kubernetes metrics select **Networking/Infrastructure** from the **Dashboards** drop-down list. You can view the following OVN-Kubernetes metrics: **Networking Configuration**, **TCP Latency Probes**, **Control Plane Resources**, and **Worker Resources**.


Ingress Operator dashboard

:   You can view networking metrics handled by the Ingress Operator from the dashboard. This includes metrics like the following:
    *   Incoming and outgoing bandwidth
    *   HTTP error rates
    *   HTTP server response latency

    To view these Ingress metrics, select **Networking/Ingress** from the **Dashboards** drop-down list. You can view Ingress metrics for the following categories: **Top 10 Per Route**, **Top 10 Per Namespace**, and **Top 10 Per Shard**.