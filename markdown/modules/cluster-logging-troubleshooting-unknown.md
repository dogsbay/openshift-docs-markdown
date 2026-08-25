{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting a Kubernetes unknown error while connecting to Elasticsearch {id="cluster-logging-troubleshooting-unknown_{{ context }}"}

If you are attempting to use a F-5 load balancer in front of Kibana with
`X-Forwarded-For` enabled, this can cause an issue in which the Elasticsearch
`Searchguard` plugin is unable to correctly accept connections from Kibana.

```text title="Example Kibana Error Message"
Kibana: Unknown error while connecting to Elasticsearch

Error: Unknown error while connecting to Elasticsearch
Error: UnknownHostException[No trusted proxies]
```

**Procedure**

To configure Searchguard to ignore the extra header:

1.  Scale down all Fluentd pods.
1.  Scale down Elasticsearch after the Fluentd pods have terminated.
1.  Add `searchguard.http.xforwardedfor.header: DUMMY` to the Elasticsearch
configuration section.
    ```terminal
    $ oc edit configmap/elasticsearch (1)
    ```
    1.  This approach requires that Elasticsearch configurations are within a config map.
1.  Scale Elasticsearch back up.
1.  Scale up all Fluentd pods.