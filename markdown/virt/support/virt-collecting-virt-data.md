---
title: Collecting data for Red Hat Support
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Collecting data for Red&#160;Hat Support {id="virt-collecting-virt-data"}
{%- set context = "virt-collecting-virt-data" %}

When you submit a support case to Red&#160;Hat Support, it is helpful to provide debugging information for {{ product_title }} and {{ VirtProductName }}.

You can use the following tools to collect debugging information:

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

must-gather tool
:   The `must-gather` tool collects diagnostic information, including resource definitions and service logs.
{% endif %}


Prometheus
:   Prometheus is a time-series database and a rule evaluation engine for metrics. Prometheus sends alerts to Alertmanager for processing.


Alertmanager
:   The Alertmanager service handles alerts received from Prometheus. The Alertmanager is also responsible for sending the alerts to external notification systems.

{% leveloffset +1 %}{% include "./modules/virt-collecting-data-about-your-environment.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-collecting-data-about-vms.md" %}{% endleveloffset %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
{% leveloffset +1 %}{% include "./modules/virt-using-virt-must-gather.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-must-gather-options.md" %}{% endleveloffset %}

{% endif %}

{% leveloffset +1 %}{% include "./modules/virt-generating-a-vm-memory-dump.md" %}{% endleveloffset %}

{% if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp or openshift_origin) %}
{% leveloffset +1 %}{% include "./modules/about-self-service-tsr.md" %}{% endleveloffset %}
{% endif %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [VM support overview](/virt/support/virt-support-overview#virt-support-overview)
*   [How to provide log files to Red Hat Support (Red Hat Knowledgebase)](https://access.redhat.com/solutions/2112)
{%- if not (openshift_dedicated or openshift_rosa_hcp or openshift_rosa) %}
*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
{% endif %}
{% if openshift_dedicated or openshift_rosa %}
*   [About {{ product_title }} monitoring](/observability/monitoring/about-ocp-monitoring/about-ocp-monitoring#about-ocp-monitoring)
{%- endif %}
*   [Installing the QEMU guest agent on a Linux VM](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent-on-linux-vm_virt-installing-qemu-guest-agent)
*   [Installing VirtIO drivers from a SATA CD drive on an existing Windows VM](/virt/managing_vms/virt-install-virtio-drivers-on-windows-vms#virt-installing-virtio-drivers-existing-windows_virt-install-virtio-drivers-on-windows-vms)
*   [Connect to the desktop viewer by using the web console](/virt/managing_vms/virt-accessing-vm-consoles#virt-connecting-desktop-viewer-web_virt-accessing-vm-consoles)
*   [Collect memory dumps from VMs](/virt/support/virt-collecting-virt-data#virt-generating-a-vm-memory-dump_virt-collecting-virt-data)
*   [Submitting a support case](/support/getting-support#support-submitting-a-case_getting-support)
*   [Modifying retention time and size for Prometheus metrics data](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/storing-and-recording-data-uwm#modifying-retention-time-and-size-for-prometheus-metrics-data_storing-and-recording-data-uwm)
*   [Configuring the Alertmanager to capture relevant alerts and to send alert notifications to a dedicated mailbox](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_user_workload_monitoring/storing-and-recording-data-uwm#modifying-retention-time-and-size-for-prometheus-metrics-data_storing-and-recording-data-uwm)
*   [Modifying retention time and size for Prometheus metrics data](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/storing-and-recording-data#modifying-retention-time-and-size-for-prometheus-metrics-data_storing-and-recording-data)
*   [Configuring alerts and notifications](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/configuring-alerts-and-notifications)
*   [Downloading log files and diagnostic information](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest/html-single/troubleshooting_openshift_data_foundation/index#downloading-log-files-and-diagnostic-information_rhodf)
*   [Querying metrics for all projects with the monitoring dashboard](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator#querying-metrics-for-all-projects-with-mon-dashboard_accessing-metrics-as-an-administrator)
*   [Installing the latest VirtIO drivers](https://access.redhat.com/solutions/6957701)
*   [Volatility3 tool](https://github.com/volatilityfoundation/volatility3)
*   [Customer Support](https://access.redhat.com/support/cases/#/case/list)
*   [Create issue](https://redhat.atlassian.net/secure/CreateIssue.jspa)