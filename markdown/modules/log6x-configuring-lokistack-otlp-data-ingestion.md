{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring LokiStack for OTLP data ingestion {id="log6x-configuring-lokistack-otlp-data-ingestion_{{ context }}"}

{%- set FeatureName = "The OpenTelemetry Protocol (OTLP) output log forwarder" %}
{% include "./snippets/technology-preview.md" %}

To configure a `LokiStack` custom resource (CR) for OTLP ingestion, follow these steps:

**Prerequisites**

*   Ensure that your Loki setup supports structured metadata, introduced in schema version 13 to enable OTLP log ingestion.

**Procedure**

1.  Set the schema version:
    *   When creating a new `LokiStack` CR, set `version: v13` in the storage schema configuration.

        :::note

        For existing configurations, add a new schema entry with `version: v13` and an `effectiveDate` in the future. For more information on updating schema versions, see [Upgrading Schemas](https://grafana.com/docs/loki/latest/configure/storage/#upgrading-schemas) (Grafana documentation).
        
        :::

1.  Configure the storage schema as follows:
    ```yaml title="Example configure storage schema"
    # ...
    spec:
      storage:
        schemas:
        - version: v13
          effectiveDate: 2024-10-25
    ```

    Once the `effectiveDate` has passed, the v13 schema takes effect, enabling your `LokiStack` to store structured metadata.