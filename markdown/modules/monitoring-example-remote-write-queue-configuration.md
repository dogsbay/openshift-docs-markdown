{%- set _mod_docs_content_type = "REFERENCE" %}
# Example remote write queue configuration {id="example-remote-write-queue-configuration_{{ context }}"}

{%- set configmap_name = "cluster-monitoring-config" -%}
{%- set namespace_name = "openshift-monitoring" -%}
{%- set component = "prometheusK8s" %}
{%- set configmap_name = "user-workload-monitoring-config" -%}
{%- set namespace_name = "openshift-user-workload-monitoring" -%}
{%- set component = "prometheus" %}

You can use the `queueConfig` object for remote write to tune the remote write queue parameters. The following example shows the queue parameters with their default values for 
default platform monitoring
monitoring for user-defined projects
in the `{{ namespace_name }}` namespace.

```yaml title="Example configuration of remote write parameters with default values"
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ configmap_name }}
  namespace: {{ namespace_name }}
data:
  config.yaml: |
    {{ component }}:
      remoteWrite:
      - url: "https://remote-write-endpoint.example.com" 
        <endpoint_authentication_credentials>
        queueConfig:
          capacity: 10000 #<1>
          minShards: 1 #<2>
          maxShards: 50 #<3>
          maxSamplesPerSend: 2000 #<4>
          batchSendDeadline: 5s #<5>
          minBackoff: 30ms #<6>
          maxBackoff: 5s #<7>
          retryOnRateLimit: false #<8>
          sampleAgeLimit: 0s #<9>
```
1.  The number of samples to buffer per shard before they are dropped from the queue.
1.  The minimum number of shards.
1.  The maximum number of shards.
1.  The maximum number of samples per send.
1.  The maximum time for a sample to wait in buffer.
1.  The initial time to wait before retrying a failed request. The time gets doubled for every retry up to the `maxbackoff` time.
1.  The maximum time to wait before retrying a failed request.
1.  Set this parameter to `true` to retry a request after receiving a 429 status code from the remote write storage.
1.  The samples that are older than the `sampleAgeLimit` limit are dropped from the queue. If the value is undefined or set to `0s`, the parameter is ignored.

{%- set configmap_name = false -%}
{%- set namespace_name = false -%}
{%- set component = false -%}