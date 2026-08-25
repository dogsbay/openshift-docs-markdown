{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Support {id="cluster-logging-support"}
{%- set context = "cluster-logging-support" %}

{% include "./snippets/logging-supported-config-snip.md" %}
{% include "./snippets/logging-compatibility-snip.md" %}
{% include "./snippets/log6x-loki-statement-snip.md" %}

{{ logging_uc }} {{ for }} is an opinionated collector and normalizer of application, infrastructure, and audit logs. You can use it to forward logs to various supported systems.

{{ logging_uc }} is not:

*   A high scale log collection system
*   Security Information and Event Monitoring (SIEM) compliant
*   A "bring your own" (BYO) log collector configuration
*   Historical or long term log retention or storage
*   A guaranteed log sink
*   Secure storage - audit logs are not stored by default

## Supported API custom resource definitions {id="cluster-logging-support-CRDs_{{ context }}"}

The following table describes the supported {{ logging_uc }} APIs.

**Loki API support states**

| CustomResourceDefinition (CRD) | ApiVersion | Support state |
| --- | --- | --- |
| LokiStack | lokistack.loki.grafana.com/v1 | Supported from 5.5 |
| RulerConfig | rulerconfig.loki.grafana/v1 | Supported from 5.7 |
| AlertingRule | alertingrule.loki.grafana/v1 | Supported from 5.7 |
| RecordingRule | recordingrule.loki.grafana/v1 | Supported from 5.7 |
| LogFileMetricExporter | LogFileMetricExporter.logging.openshift.io/v1alpha1 | Supported from 5.8 |
| ClusterLogForwarder | clusterlogforwarder.logging.openshift.io/v1 | Supported from 4.5. |

{% leveloffset +1 %}{% include "./modules/cluster-logging-maintenance-support-list.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/unmanaged-operators.md" %}{% endleveloffset %}

## Collecting logging data for Red Hat Support {id="cluster-logging-support-must-gather_{{ context }}"}

When opening a support case, it is helpful to provide debugging information about your cluster to Red&#160;Hat Support.

You can use the [must-gather tool](/support/gathering-cluster-data#gathering-cluster-data) to collect diagnostic information for project-level resources, cluster-level resources, and each of the {{ logging }} components.
For prompt support, supply diagnostic information for both {{ product_title }} and {{ logging }}.

{% leveloffset +2 %}{% include "./modules/cluster-logging-must-gather-about.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/cluster-logging-must-gather-collecting.md" %}{% endleveloffset %}