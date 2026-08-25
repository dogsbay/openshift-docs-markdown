{%- set _mod_docs_content_type = "REFERENCE" %}
# LokiStack ingestion limits and health alerts {id="network-observability-lokistack-configuring-ingestion_{{ context }}"}

The `LokiStack` instance includes default ingestion and query limits that can be overridden by administrators to manage performance and prevent system alerts or errors. {._abstract}


:::note

You might want to update the ingestion and query limits if you get Loki errors showing up in the Console plugin, or in `flowlogs-pipeline` logs.

:::


Here is an example of configured limits:

```yaml
spec:
  limits:
    global:
      ingestion:
        ingestionBurstSize: 40
        ingestionRate: 20
        maxGlobalStreamsPerTenant: 25000
      queries:
        maxChunksPerQuery: 2000000
        maxEntriesLimitPerQuery: 10000
        maxQuerySeries: 3000
```

For more information about these settings, see "LokiStack API reference".