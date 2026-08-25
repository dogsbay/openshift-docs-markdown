---
title: Troubleshooting OVN-Kubernetes
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting OVN-Kubernetes {id="ovn-kubernetes-troubleshooting-sources"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "ovn-kubernetes-sources-of-troubleshooting-information" %}

To troubleshoot OVN-Kubernetes in {{ product_title }}, you can use built-in health checks, alerting, logs, and connectivity checks. Follow these sections to examine your cluster before opening a support case.

OVN-Kubernetes has many sources of built-in health checks and logs. Follow the instructions in these sections to examine your cluster. If a support case is necessary, collect additional information through a `must-gather` as described in "Gathering data about your cluster for Red Hat Support". Only use the `-- gather_network_logs` option when instructed by support.

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-readiness-probes.md" %}{% endleveloffset %}

**Additional resources**

*   [Monitoring application health by using health checks](/applications/application-health#application-health)

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-alerts-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-alerts-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-logs-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-logs-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ovn-kubernetes-change-log-levels.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-pod-connectivity-checks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-kubernetes-observability.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/observability-ovs-sampling-flags.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_ovn-kubernetes-sources-of-troubleshooting-information"}

*   [Gathering data about your cluster for Red Hat Support](/support/gathering-cluster-data#support_gathering_data_gathering-cluster-data)
*   [Implementation of connection health checks](/networking/advanced_networking/verifying-connectivity-endpoint#nw-pod-network-connectivity-implementation_verifying-connectivity-endpoint)
*   [Verifying network connectivity for an endpoint](/networking/advanced_networking/verifying-connectivity-endpoint#nw-pod-network-connectivity-verify_verifying-connectivity-endpoint)