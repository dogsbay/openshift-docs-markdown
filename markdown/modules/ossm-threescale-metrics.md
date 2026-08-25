# 3scale Adapter metrics {id="ossm-threescale-metrics_{{ context }}"}
The adapter, by default reports various Prometheus metrics that are exposed on port `8080` at the `/metrics` endpoint. These metrics provide insight into how the interactions between the adapter and 3scale are performing. The service is labeled to be automatically discovered and scraped by Prometheus.


:::note

There are incompatible changes in the 3scale Istio Adapter metrics since the previous releases in Service Mesh 1.x.

:::


In Prometheus, metrics have been renamed with one addition for the backend cache, so that the following metrics exist as of Service Mesh 2.0:

**Prometheus metrics**

| Metric | Type | Description |
| --- | --- | --- |
| `threescale_latency` | Histogram | Request latency between adapter and 3scale. |
| `threescale_http_total` | Counter | HTTP Status response codes for requests to 3scale backend. |
| `threescale_system_cache_hits` | Counter | Total number of requests to the 3scale system fetched from the configuration cache. |
| `threescale_backend_cache_hits` | Counter | Total number of requests to 3scale backend fetched from the backend cache. |