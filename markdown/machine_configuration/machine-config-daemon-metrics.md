---
title: Machine Config Daemon metrics overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Machine Config Daemon metrics overview {id="machine-config-daemon-metrics"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "machine-config-operator" %}

The Machine Config Daemon, part of the Machine Config Operator, runs on every node in the cluster to manage configuration changes and updates on each of the nodes.

{% leveloffset +1 %}{% include "./modules/machine-config-daemon-metrics-understanding.md" %}{% endleveloffset %}

**Additional resources**

*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   [Gathering data about your cluster](/support/gathering-cluster-data#gathering-cluster-data)
{% endif %}