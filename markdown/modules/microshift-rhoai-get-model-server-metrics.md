{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting the model-server metrics {id="microshift-rhoai-get-model-server-metrics_{{ context }}"}

After making a query, you can get the model server’s metrics to identify bottlenecks, optimize resource allocation, and ensure efficient infrastructure utilization. {._abstract}


:::note

You can alternatively configure Open Telemetry for {{ microshift_short }} to get model-server metrics. See "Adding Open Telemetry to an InferenceService custom resource" for more information.

:::


**Prerequisites**

*   {{ microshift_short }} is running.
*   There have been enough queries to provide the metrics data you want to see.

**Procedure**

*   Get the Prometheus-format metrics of the model server by making a request on the `/metrics` endpoint by running the following command:
    ```terminal
    $ curl "${DOMAIN}/metrics" --connect-to "${DOMAIN}::${IP}:"
    ```
    ```terminal title="Partial example output"
    # HELP ovms_requests_success Number of successful requests to a model or a DAG.
    # TYPE ovms_requests_success counter
    ovms_requests_success{api="KServe",interface="REST",method="ModelReady",name="ovms-resnet50"} 4
    ovms_requests_success{api="KServe",interface="REST",method="ModelMetadata",name="ovms-resnet50",version="1"} 1
    ```