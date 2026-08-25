{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Filtering logs by metadata {id="logging-input-spec-filtering"}
{%- set context = "logging-input-spec-filtering" %}

You can filter logs in the `ClusterLogForwarder` CR to select or ignore an entire log stream based on the metadata by using the `input` selector. As an administrator or developer, you can include or exclude the log collection to reduce the memory and CPU load on the collector.


:::important

You can use this feature only if the Vector collector is set up in your logging deployment.

:::



:::note

`input` spec filtering is different from content filtering. `input` selectors select or ignore entire log streams based on the source metadata. Content filters edit the log streams to remove and modify the records based on the record content.

:::


{% leveloffset +1 %}{% include "./modules/logging-input-spec-filter-namespace-container.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-input-spec-filter-labels-expressions.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/logging-input-spec-filter-audit-infrastructure.md" %}{% endleveloffset %}