---
title: "MetalLB logging, troubleshooting, and support"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# MetalLB logging, troubleshooting, and support {id="metallb-logging-troubleshooting-support"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "metallb-troubleshoot-support" %}

To diagnose and resolve MetalLB configuration issues, refer to this list of commonly used commands. By using these commands, you can verify network connectivity and inspect service states to ensure efficient error recovery.

{% leveloffset +1 %}{% include "./modules/nw-metallb-loglevel.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-metallb-levels.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-troubleshoot-bgp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-troubleshoot-bfd.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-metallb-metrics.md" %}{% endleveloffset %}

**Additional resources**

*   [Querying metrics for all projects with the monitoring dashboard](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/accessing_metrics/accessing-metrics-as-an-administrator#querying-metrics-for-all-projects-with-mon-dashboard_accessing-metrics-as-an-administrator)

{% leveloffset +1 %}{% include "./modules/nw-metallb-collecting-data.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources"}

*   [Managing symmetric routing with MetalLB](/networking/ingress_load_balancing/metallb/metallb-configure-return-traffic#metallb-configure-return-traffic)
*   [Querying metrics for all projects with the monitoring dashboard](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/4.21/html/accessing_metrics/accessing-metrics-as-an-administrator#querying-metrics-for-all-projects-with-mon-dashboard_accessing-metrics-as-an-administrator)
*   [Gathering data about your cluster](/support/gathering-cluster-data#gathering-cluster-data)