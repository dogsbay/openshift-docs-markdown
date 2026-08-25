{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ product_title }} monitoring {id="about-ocp-monitoring"}
{%- set context = "about-ocp-monitoring" %}

{% if not (openshift_dedicated or openshift_rosa) %}
{{ product_title }} includes a preconfigured, preinstalled, and self-updating monitoring stack that provides monitoring for core platform components. You also have the option to [enable monitoring for user-defined projects](/observability/monitoring/configuring-user-workload-monitoring/preparing-to-configure-the-monitoring-stack-uwm#enabling-monitoring-for-user-defined-projects-uwm_preparing-to-configure-the-monitoring-stack-uwm).

A cluster administrator can [configure the monitoring stack](/observability/monitoring/configuring-core-platform-monitoring/preparing-to-configure-the-monitoring-stack#preparing-to-configure-the-monitoring-stack) with the supported configurations. {{ product_title }} delivers monitoring best practices out of the box.

A set of alerts are included by default that immediately notify administrators about issues with a cluster. Default dashboards in the {{ product_title }} web console include visual representations of cluster metrics to help you to quickly understand the state of your cluster. With the {{ product_title }} web console, you can [access metrics](/observability/monitoring/accessing-metrics/accessing-metrics-as-an-administrator#accessing-metrics-as-an-administrator) and [manage alerts](/observability/monitoring/managing-alerts/managing-alerts-as-an-administrator#managing-alerts-as-an-administrator).

After installing {{ product_title }}, cluster administrators can optionally enable monitoring for user-defined projects. By using this feature, cluster administrators, developers, and other users can specify how services and pods are monitored in their own projects.
As a cluster administrator, you can find answers to common problems such as user metrics unavailability and high consumption of disk space by Prometheus in [Troubleshooting monitoring issues](/observability/monitoring/troubleshooting-monitoring-issues#troubleshooting-monitoring-issues).
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
In {{ product_title }}, you can monitor your own projects in isolation from Red&#160;Hat Site Reliability Engineering (SRE) platform metrics. You can monitor your own projects without the need for an additional monitoring solution.

The {{ product_title }} monitoring stack is based on the [Prometheus](https://prometheus.io/) open source project and its wider ecosystem.
{% endif %}