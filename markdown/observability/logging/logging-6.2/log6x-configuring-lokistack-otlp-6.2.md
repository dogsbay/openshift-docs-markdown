{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OTLP data ingestion in Loki {id="log6x-configuring-lokistack-otlp-6-2"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "log6x-configuring-lokistack-otlp-6-2" %}

You can use an API endpoint by using the OpenTelemetry Protocol (OTLP) with Logging. As OTLP is a standardized format not specifically designed for Loki, OTLP requires an additional Loki configuration to map data format of OpenTelemetry to data model of Loki. OTLP lacks concepts such as _stream labels_ or _structured metadata_. Instead, OTLP provides metadata about log entries as **attributes**, grouped into the following three categories:

*   Resource
*   Scope
*   Log

You can set metadata for multiple entries simultaneously or individually as needed.

{% leveloffset +1 %}{% include "./modules/log6x-configuring-lokistack-otlp-data-ingestion.md" %}{% endleveloffset %}

## Attribute mapping {id="attribute-mapping_{{ context }}"}

When you set the {{ loki_op }} to the `openshift-logging` mode, {{ loki_op }} automatically applies a default set of attribute mappings. These mappings align specific OTLP attributes with stream labels and structured metadata of Loki.

For typical setups, these default mappings are sufficient. However, you might need to customize attribute mapping in the following cases:

*   Using a custom collector: If your setup includes a custom collector that generates additional attributes that you do not want to store, consider customizing the mapping to ensure these attributes are dropped by Loki.
*   Adjusting attribute detail levels: If the default attribute set is more detailed than necessary, you can reduce it to essential attributes only. This can avoid excessive data storage and streamline the {{ logging }} process.

### Custom attribute mapping for OpenShift {id="custom-attribute-mapping-for-openshift_{{ context }}"}

When using the {{ loki_op }} in `openshift-logging` mode, attribute mapping follow OpenShift default values, but you can configure custom mappings to adjust default values. 
In the `openshift-logging` mode, you can configure custom attribute mappings globally for all tenants or for individual tenants as needed. When you define custom mappings, they are appended to the OpenShift default values. If you do not need default labels, you can disable them in the tenant configuration.


:::note

A major difference between the {{ loki_op }} and Loki lies in inheritance handling. Loki copies only `default_resource_attributes_as_index_labels` to tenants by default, while the {{ loki_op }} applies the entire global configuration to each tenant in the `openshift-logging` mode.

:::


Within `LokiStack`, attribute mapping configuration is managed through the `limits` setting. See the following example `LokiStack` configuration:

```yaml
# ...
spec:
  limits:
    global:
      otlp: {} # (1)
    tenants:
      application: # (2)
        otlp: {}
```
1.  Defines global OTLP attribute configuration.
1.  Defines the OTLP attribute configuration for the `application` tenant within the `openshift-logging` mode. You can also configure `infrastructure` and `audit` tenants in addition to `application` tenants.


:::note

You can use both global and per-tenant OTLP configurations for mapping attributes to stream labels.

:::


Stream labels derive only from resource-level attributes, which the `LokiStack` resource structure reflects. See the following `LokiStack` example configuration:

```yaml
spec:
  limits:
    global:
      otlp:
        streamLabels:
          resourceAttributes:
          - name: "k8s.namespace.name"
          - name: "k8s.pod.name"
          - name: "k8s.container.name"
```

You can drop attributes of type resource, scope, or log from the log entry.

```yaml
# ...
spec:
  limits:
    global:
      otlp:
        streamLabels:
# ...
        drop:
          resourceAttributes:
          - name: "process.command_line"
          - name: "k8s\\.pod\\.labels\\..+"
            regex: true
          scopeAttributes:
          - name: "service.name"
          logAttributes:
          - name: "http.route"
```

You can use regular expressions by setting `regex: true` to apply a configuration for attributes with similar names.


:::important

Avoid using regular expressions for stream labels, as this can increase data volume.

:::


Attributes that are not explicitly set as stream labels or dropped from the entry are saved as structured metadata by default.

### Customizing OpenShift defaults {id="customizing-openshift-defaults_{{ context }}"}

In the `openshift-logging` mode, certain attributes are required and cannot be removed from the configuration due to their role in OpenShift functions. Other attributes, labeled **recommended**, might be dropped if performance is impacted. For information about the attributes, see [OpenTelemetry data model attributes](https://docs.openshift.com/container-platform/4.17/observability/logging/logging-6.1/log6x-opentelemetry-data-model-6.1.html#attributes_log6x-opentelemetry-data-model-6-1).

When using the `openshift-logging` mode without custom attributes, you can achieve immediate compatibility with OpenShift tools. If additional attributes are needed as stream labels or some attributes need to be droped, use custom configuration. Custom configurations can merge with default configurations.

### Removing recommended attributes {id="removing-recommended-attributes_{{ context }}"}

To reduce default attributes in the `openshift-logging` mode, disable recommended attributes:

```yaml
# ...
spec:
  tenants:
    mode: openshift-logging
    openshift:
      otlp:
        disableRecommendedAttributes: true # (1)
```
1.  Set `disableRecommendedAttributes: true` to remove recommended attributes, which limits default attributes to the required attributes or stream labels.

    :::note

    This setting might negatively impact query performance, as it removes default stream labels. You must pair this option with a custom attribute configuration to retain attributes essential for queries.
    
    :::


## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [Loki labels](https://grafana.com/docs/loki/latest/get-started/labels/) (Grafana documentation)
*   [Structured metadata](https://grafana.com/docs/loki/latest/get-started/labels/structured-metadata/) (Grafana documentation)
*   [OpenTelemetry data model](https://docs.openshift.com/container-platform/4.17/observability/logging/logging-6.1/log6x-opentelemetry-data-model-6.1.html)
*   [OpenTelemetry attribute](https://opentelemetry.io/docs/specs/otel/common/#attribute) (OpenTelemetry documentation)