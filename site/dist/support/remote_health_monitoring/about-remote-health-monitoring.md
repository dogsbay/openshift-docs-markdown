---
title: About remote health monitoring
---

# About remote health monitoring {#about-remote-health-monitoring}

OpenShift Container Platform collects telemetry and configuration data about your cluster and reports it to Red Hat by using the Telemeter Client and the {{ insights_operator }}. The data that is provided to Red Hat enables the benefits outlined in this document.

A cluster that reports data to Red Hat through Telemetry and the {{ insights_operator }} is considered a *connected cluster*.

Telemetry is the term that Red Hat uses to describe the information being sent to Red Hat by the OpenShift Container Platform Telemeter Client. Lightweight attributes are sent from connected clusters to Red Hat to enable subscription management automation, monitor the health of clusters, assist with support, and improve customer experience.

The {{ insights_operator }} gathers OpenShift Container Platform configuration data and sends it to Red Hat. The data is used to produce insights about potential issues that a cluster might be exposed to. These insights are communicated to cluster administrators on {{ cluster_manager_url }}.

More information is provided in this document about these two processes.

**Additional resources**

- [Red Hat Customer Portal](https://access.redhat.com/support/)

**Additional resources**

- [OpenShift Container Platform update documentation](/openshift-docs-markdown/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)

**Additional resources**

- [Showing data collected by Telemetry](/openshift-docs-markdown/support/remote_health_monitoring/showing-data-collected-by-remote-health-monitoring#showing-data-collected-from-the-cluster_showing-data-collected-by-remote-health-monitoring)
- [Upstream cluster-monitoring-operator source code](https://github.com/openshift/cluster-monitoring-operator/blob/master/manifests/0000_50_cluster-monitoring-operator_04-config.yaml)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)

**Additional resources**

- [{{ red_hat_lightspeed }} Data & Application Security](https://console.redhat.com/security/insights)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)

**Additional resources**

- [Showing data collected by the {{ insights_operator }}](/openshift-docs-markdown/support/remote_health_monitoring/showing-data-collected-by-remote-health-monitoring#insights-operator-showing-data-collected-from-the-cluster_showing-data-collected-by-remote-health-monitoring)
- [What data is being collected by the {{ insights_operator }} in OpenShift? (Knowledgebase article)](https://access.redhat.com/solutions/7066188)
- [Enabling features using feature gates](/openshift-docs-markdown/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
- [{{ insights_operator }} upstream project (GitHub)](https://github.com/openshift/insights-operator/blob/master/docs/gathered-data.md)

**Additional resources**

- [About OpenShift Container Platform monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
- [Configuring your firewall](/openshift-docs-markdown/installing/install_config/configuring-firewall#configuring-firewall)

**Additional resources**

- [Information collected by Telemetry](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#what-information-is-collected_about-remote-health-monitoring)
- [Information collected by the {{ insights_operator }}](/openshift-docs-markdown/support/remote_health_monitoring/about-remote-health-monitoring#insights-operator-what-information-is-collected_about-remote-health-monitoring)
- [Remote health reporting](/openshift-docs-markdown/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
