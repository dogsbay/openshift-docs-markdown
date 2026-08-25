{%- set _mod_docs_content_type = "REFERENCE" %}
# Recommended configurable storage technology {id="recommended-configurable-storage-technology_{{ context }}"}

Review the recommended and configurable storage technologies for the given {{ product_title }} cluster application. {._abstract}

**Recommended and configurable storage technology**

| Storage type | Block | File | Object |
| --- | --- | --- | --- |
| ROX | Yes | Yes | Yes |
| RWX | No | Yes | Yes |
| Registry | Configurable | Configurable | Recommended |
| Scaled registry | Not configurable | Configurable | Recommended |
| Metrics | Recommended | Configurable | Not configurable |
| Elasticsearch Logging | Recommended | Configurable | Not supported |
| Loki Logging | Not configurable | Not configurable | Recommended |
| Apps | Recommended | Recommended | Not configurable |

where:


`ROX`
:   Specifies `ReadOnlyMany` access mode.


`ROX.Yes`
:   Specifies that this access mode 


`RWX`
:   Specifies `ReadWriteMany` access mode.


`Metrics`
:   Specifies Prometheus as the underlying technology used for metrics.


`Metrics.Configurable`
:   For metrics, using file storage with the `ReadWriteMany` (RWX) access mode is unreliable. If you use file storage, do not configure the RWX access mode on any persistent volume claims (PVCs) that are configured for use with metrics.


`Elasticsearch Logging.Configurable`
:   For logging, review the recommended storage solution in Configuring persistent storage for the log store section. Using NFS storage as a persistent volume or through NAS, such as Gluster, can corrupt the data. Therefore, NFS is not supported for Elasticsearch storage and LokiStack log store in {{ product_title }} Logging. You must use one persistent volume type per log store.


`Apps.Not configurable`
:   Specifies that object storage is not consumed through PVs or PVCs of {{ product_title }}. Apps must integrate with the object storage REST API.


:::note

A scaled registry is an {{ product_registry }} where two or more pod replicas are running.

:::