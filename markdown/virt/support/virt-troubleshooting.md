---
title: Troubleshooting
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Troubleshooting {id="virt-troubleshooting"}
{%- set context = "virt-troubleshooting" -%}

{%- set toclevels = "4" %}

To diagnose and resolve issues with virtual machine (VM) and cluster components, you can troubleshoot {{ VirtProductName }} by using the web console or the {{ oc_first }}. These practices help ensure your virtualized infrastructure remains healthy.

{% leveloffset +1 %}{% include "./modules/virt-troubleshooting-events.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-troubleshooting-pod-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-configuring-pod-log-verbosity.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-viewing-virt-launcher-pod-logs-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-viewing-logs-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-troubleshooting-guest-system-logs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-enable-guest-log-default-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-enable-guest-log-default-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-set-guest-log-single-vm-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-set-guest-log-single-vm-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-view-guest-system-logs-web.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-view-guest-system-logs-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-troubleshooting-log-aggregation.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-viewing-logs-loki.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-loki-log-queries.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-common-error-messages.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/virt-troubleshooting-data-volumes.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-about-dv-conditions-and-events.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/virt-analyzing-datavolume-conditions-and-events.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [{{ product_title }} events](/nodes/clusters/nodes-containers-events#nodes-containers-events)
*   [List of events](/nodes/clusters/nodes-containers-events#nodes-containers-events-list_nodes-containers-events)
*   [Aggregated logs](/virt/support/virt-troubleshooting#virt-viewing-logs-loki_virt-troubleshooting)
*   [Connecting to virtual machine consoles](/virt/managing_vms/virt-accessing-vm-consoles#virt-accessing-vm-consoles)
*   [LogQL log queries](https://grafana.com/docs/loki/latest/logql/log_queries/)