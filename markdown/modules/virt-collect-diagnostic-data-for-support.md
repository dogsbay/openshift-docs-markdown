{%- set _mod_docs_content_type = "CONCEPT" %}
# Collect diagnostic data for support {id="virt-collect-diagnostic-data-for-support_{{ context }}"}

Collect logs, diagnostic data, and other artifacts before opening a support case. {._abstract}

Much of what a support case needs is the same data you gather while diagnosing a cluster or virtual machine (VM) issue. Collecting the rest in a set form before you open the case saves a round trip with Red&#160;Hat Support.

When you submit a support case to Red&#160;Hat Support, it is helpful to provide debugging information for {{ product_title }} and {{ VirtProductName }}. You can use the following tools to collect it:

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

`must-gather` tool
:   The `must-gather` tool collects diagnostic information, including resource definitions and service logs.
{%- endif %}


Prometheus
:   Prometheus is a time-series database and a rule evaluation engine for metrics. Prometheus sends alerts to Alertmanager for processing.


Alertmanager
:   The Alertmanager service handles alerts received from Prometheus. The Alertmanager is also responsible for sending the alerts to external notification systems.


`virtctl memory-dump` command
:   The `virtctl memory-dump` command outputs a memory dump from a VM that terminated unexpectedly so that you can analyze the state of its guest operating system.

Include the data that you collect with your support case.

**Additional resources**
{._additional-resources}

*   [Submitting a support case](/support/getting-support#support-submitting-a-case_getting-support)
*   [Customer Support](https://access.redhat.com/support/cases/#/case/list)
*   [How to provide log files to Red&#160;Hat Support (Red&#160;Hat Knowledgebase)](https://access.redhat.com/solutions/2112)
*   [Red&#160;Hat Issue Router (RHIR)](https://access.redhat.com/labs/rhir/?product=cnv)
*   [Installing the QEMU guest agent on a Linux VM](/virt/managing_vms/virt-installing-qemu-guest-agent#virt-installing-qemu-guest-agent-on-linux-vm_virt-installing-qemu-guest-agent)
*   [Installing VirtIO drivers from a SATA CD drive on an existing Windows VM](/virt/managing_vms/virt-install-virtio-drivers-on-windows-vms#virt-installing-virtio-drivers-existing-windows_virt-install-virtio-drivers-on-windows-vms)
*   [Connect to the desktop viewer by using the web console](/virt/managing_vms/virt-accessing-vm-consoles#virt-connecting-desktop-viewer-web_virt-accessing-vm-consoles)
*   [Volatility3 tool](https://github.com/volatilityfoundation/volatility3)
*   [Modifying retention time and size for Prometheus metrics data](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/storing-and-recording-data#modifying-retention-time-and-size-for-prometheus-metrics-data_storing-and-recording-data)
*   [Configuring alerts and notifications](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/configuring-alerts-and-notifications)