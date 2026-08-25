{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Examining metrics of a service {id="serverless-monitoring-services-examining-metrics"}
{%- set context = "serverless-monitoring-services-examining-metrics" %}

After you have configured the application to export the metrics and the monitoring stack to scrape them, you can examine the metrics in the web console.

**Prerequisites**

*   You have logged in to the {{ product_title }} web console.
*   You have installed the {{ ServerlessOperatorName }} and Knative Serving.

**Procedure**

1.  Optional: Run requests against your application that you will be able to see in the metrics:
    ```terminal
    $ hello_route=$(oc get ksvc helloworld-go -n ns1 -o jsonpath='{.status.url}') && \
        curl $hello_route
    ```
    ```terminal title="Example output"
    Hello Go Sample v1!
    ```
1.  In the web console, navigate to the **Observe** → **Metrics** interface.
1.  In the input field, enter the query for the metric you want to observe, for example:
    ```
    revision_app_request_count{namespace="ns1", job="helloworld-go-sm"}
    ```

    Another example:
    ```
    myapp_processed_ops_total{namespace="ns1", job="helloworld-go-sm"}
    ```
1.  Observe the visualized metrics:
    ![Observing metrics of a service](/_assets/images/serverless-monitoring-service-example1.png)
    ![Observing metrics of a service](/_assets/images/serverless-monitoring-service-example2.png)

## Queue proxy metrics {id="serverless-queue-proxy-metrics_{{ context }}"}
{%- set context = "serverless-queue-proxy-metrics" %}

Each Knative service has a proxy container that proxies the connections to the application container. A number of metrics are reported for the queue proxy performance.

You can use the following metrics to measure if requests are queued at the proxy side and the actual delay in serving requests at the application side.

| Metric name | Description | Type | Tags | Unit |
| --- | --- | --- | --- | --- |
| `revision_request_count` | The number of requests that are routed to `queue-proxy` pod. | Counter | `configuration_name`, `container_name`, `namespace_name`, `pod_name`, `response_code`, `response_code_class`, `revision_name`, `service_name` | Integer (no units) |
| `revision_request_latencies` | The response time of revision requests. | Histogram | `configuration_name`, `container_name`, `namespace_name`, `pod_name`, `response_code`, `response_code_class`, `revision_name`, `service_name` | Milliseconds |
| `revision_app_request_count` | The number of requests that are routed to the `user-container` pod. | Counter | `configuration_name`, `container_name`, `namespace_name`, `pod_name`, `response_code`, `response_code_class`, `revision_name`, `service_name` | Integer (no units) |
| `revision_app_request_latencies` | The response time of revision app requests. | Histogram | `configuration_name`, `namespace_name`, `pod_name`, `response_code`, `response_code_class`, `revision_name`, `service_name` | Milliseconds |
| `revision_queue_depth` | The current number of items in the `serving` and `waiting` queues. This metric is not reported if unlimited concurrency is configured. | Gauge | `configuration_name`, `event-display`, `container_name`, `namespace_name`, `pod_name`, `response_code_class`, `revision_name`, `service_name` | Integer (no units) |