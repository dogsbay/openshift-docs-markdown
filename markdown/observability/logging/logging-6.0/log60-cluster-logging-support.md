{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Support {id="log60-cluster-logging-support"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "log60-cluster-logging-support" %}

{% include "./snippets/logging-supported-config-snip.md" %}
{% include "./snippets/logging-compatibility-snip.md" %}
{% include "./snippets/log6x-loki-statement-snip.md" %}

{{ logging_uc }} {{ for }} is an opinionated collector and normalizer of application, infrastructure, and audit logs. It is intended to be used for forwarding logs to various supported systems.

{{ logging_uc }} is not:

*   A high scale log collection system
*   Security Information and Event Monitoring (SIEM) compliant
*   A "bring your own" (BYO) log collector configuration
*   Historical or long term log retention or storage
*   A guaranteed log sink
*   Secure storage - audit logs are not stored by default

## Supported API custom resource definitions {id="cluster-logging-support-CRDs_{{ context }}"}

The following table describes the supported {{ logging_uc }} APIs.

{% include "./snippets/log6x-api-support-states-snip.md" %}

{% leveloffset +1 %}{% include "./modules/cluster-logging-maintenance-support-list-6x.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/unmanaged-operators.md" %}{% endleveloffset %}

## Support exception for the Logging UI Plugin {id="support-exception-for-coo-logging-ui-plugin_{{ context }}"}

Until the approaching General Availability (GA) release of the Cluster Observability Operator (COO), which is currently in [Technology Preview](https://access.redhat.com/support/offerings/techpreview/) (TP), Red&#160;Hat provides support to customers who are using Logging 6.0 or later with the COO for its Logging UI Plugin on {{ product_title }} 4.14 or later. This support exception is temporary as the COO includes several independent features, some of which are still TP features, but the Logging UI Plugin is ready for GA.

## Collecting {{ logging }} data for Red Hat Support {id="cluster-logging-support-must-gather_{{ context }}"}

When opening a support case, it is helpful to provide debugging information about your cluster to Red&#160;Hat Support.

You can use the [must-gather tool](/support/gathering-cluster-data#gathering-cluster-data) to collect diagnostic information for project-level resources, cluster-level resources, and each of the {{ logging }} components.
For prompt support, supply diagnostic information for both {{ product_title }} and {{ logging }}.

{% leveloffset +2 %}{% include "./modules/cluster-logging-must-gather-about.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/cluster-logging-must-gather-collecting.md" %}{% endleveloffset %}