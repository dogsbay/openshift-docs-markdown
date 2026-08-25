---
title: About remote health monitoring
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About remote health monitoring {id="about-remote-health-monitoring"}

{%- if openshift_dedicated %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- endif %}
{%- set context = "about-remote-health-monitoring" %}

{{ product_title }} collects telemetry and configuration data about your cluster and reports it to Red&#160;Hat by using the Telemeter Client and the {{ insights_operator }}. The data that is provided to Red&#160;Hat enables the benefits outlined in this document. {._abstract}

A cluster that reports data to Red Hat through Telemetry and the {{ insights_operator }} is considered a _connected cluster_.

Telemetry is the term that Red Hat uses to describe the information being sent to Red Hat by the {{ product_title }} Telemeter Client. Lightweight attributes are sent from connected clusters to Red Hat to enable subscription management automation, monitor the health of clusters, assist with support, and improve customer experience.

The {{ insights_operator }} gathers {{ product_title }} configuration data and sends it to Red&#160;Hat. The data is used to produce insights about potential issues that a cluster might be exposed to. These insights are communicated to cluster administrators on {{ cluster_manager_url }}.

More information is provided in this document about these two processes.

{% leveloffset +1 %}{% include "./modules/telemetry-insights-operator-benefits.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Red Hat Customer Portal](https://access.redhat.com/support/)

{% leveloffset +1 %}{% include "./modules/telemetry-about-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [{{ product_title }} update documentation](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)
{% endif %}
{% if openshift_rosa %}
*   [{{ product_title }} upgrade documentation](/upgrading/rosa-upgrading-sts#rosa-upgrading-sts)
{% endif %}
{% if openshift_rosa_hcp %}
*   [{{ product_title }} upgrade documentation](/upgrading/rosa-hcp-upgrading#rosa-hcp-upgrading)
{% endif %}
{% if openshift_dedicated %}
*   [{{ product_title }} upgrade documentation](/upgrading/osd-upgrades#osd-upgrades)
{% endif %}

{% leveloffset +2 %}{% include "./modules/telemetry-what-information-is-collected.md" %}{% endleveloffset %}

{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% leveloffset +2 %}{% include "./modules/telemetry-user-telemetry.md" %}{% endleveloffset %}

{% endif %}

**Additional resources**
{._additional-resources}

*   [Showing data collected by Telemetry](/support/remote_health_monitoring/showing-data-collected-by-remote-health-monitoring#showing-data-collected-from-the-cluster_showing-data-collected-by-remote-health-monitoring)
*   [Upstream cluster-monitoring-operator source code](https://github.com/openshift/cluster-monitoring-operator/blob/master/manifests/0000_50_cluster-monitoring-operator_04-config.yaml)

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
{% endif %}

{% leveloffset +1 %}{% include "./modules/insights-operator-about.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ red_hat_lightspeed }} Data & Application Security](https://console.redhat.com/security/insights)
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
{%- endif %}

{% leveloffset +2 %}{% include "./modules/insights-operator-what-information-is-collected.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Showing data collected by the {{ insights_operator }}](/support/remote_health_monitoring/showing-data-collected-by-remote-health-monitoring#insights-operator-showing-data-collected-from-the-cluster_showing-data-collected-by-remote-health-monitoring)
{%- endif %}
*   [What data is being collected by the {{ insights_operator }} in OpenShift? (Knowledgebase article)](https://access.redhat.com/solutions/7066188)

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Enabling features using feature gates](/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features)
{%- endif %}
*   [{{ insights_operator }} upstream project (GitHub)](https://github.com/openshift/insights-operator/blob/master/docs/gathered-data.md)

{% leveloffset +1 %}{% include "./modules/understanding-telemetry-and-insights-operator-data-flow.md" %}{% endleveloffset %}

{%- if not openshift_rosa_hcp %}

**Additional resources**
{._additional-resources}

{% if openshift_dedicated or openshift_rosa %}
*   [About {{ product_title }} monitoring](/observability/monitoring/about-ocp-monitoring/about-ocp-monitoring#about-ocp-monitoring)
{% endif %}

{% if not (openshift_dedicated or openshift_rosa) %}
*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
*   [Configuring your firewall](/installing/install_config/configuring-firewall#configuring-firewall)
{% endif %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/additional-details-about-how-remote-health-monitoring-data-is-used.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Information collected by Telemetry](/support/remote_health_monitoring/about-remote-health-monitoring#what-information-is-collected_about-remote-health-monitoring) 
*   [Information collected by the {{ insights_operator }}](/support/remote_health_monitoring/about-remote-health-monitoring#insights-operator-what-information-is-collected_about-remote-health-monitoring)
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
{%- endif %}