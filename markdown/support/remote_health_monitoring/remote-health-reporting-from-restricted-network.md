---
title: Using remote health reporting in a restricted network
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Using remote health reporting in a restricted network {id="remote-health-reporting-from-restricted-network"}

{% include "./_attributes/common-attributes.md" %}
{%- set context = "remote-health-reporting-from-restricted-network" %}

You can manually gather and upload {{ insights_operator }} archives to diagnose issues from a restricted network.

To use the {{ insights_operator }} in a restricted network, you must complete the following tasks:

*   Create a copy of your {{ insights_operator }} archive.
*   Upload the {{ insights_operator }} archive to the {{ hybrid_console }}.

Additionally, you can select to obfuscate the {{ insights_operator }} data before data upload.

**Additional resources**

*   [{{ hybrid_console }}](https://console.redhat.com)
*   [Enabling {{ insights_operator }} data obfuscation](/support/remote_health_monitoring/remote-health-reporting-from-restricted-network#insights-operator-enable-obfuscation_remote-health-reporting-from-restricted-network)

{% leveloffset +1 %}{% include "./modules/insights-operator-one-time-gather.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-manual-upload.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/insights-operator-enable-obfuscation.md" %}{% endleveloffset %}

**Additional resources**

*   [Showing data collected by the {{ insights_operator }}](/support/remote_health_monitoring/showing-data-collected-by-remote-health-monitoring#insights-operator-showing-data-collected-from-the-cluster_showing-data-collected-by-remote-health-monitoring)