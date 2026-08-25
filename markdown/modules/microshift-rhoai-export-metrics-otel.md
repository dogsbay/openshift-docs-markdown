{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exporting model-server metrics by using Open Telemetry {id="microshift-rhoai-export-metrics-otel_{{ context }}"}

You can export model-server metrics by using Open Telemetry if you installed the `microshift-observability` RPM for {{ microshift_short }}. {._abstract}


:::note

You can alternatively get the Prometheus-format metrics of the model server by making a request on the `/metrics` endpoint. See "Getting the model-server metrics" for more information.

:::


**Prerequisites**

*   You configured the `ServingRuntimes` CR.
*   You have root user access to your machine.
*   The {{ oc_first }} is installed.
*   You installed the `microshift-observability` RPM.
*   Your {{ microshift_short }} Open Telemetry configuration includes the Prometheus Receiver. For more information, see [Prometheus Receiver](https://docs.redhat.com/en/documentation/openshift_container_platform/4.18/html/red_hat_build_of_opentelemetry/configuring-the-collector#prometheus-receiver_otel-collector-receivers).

**Procedure**

*   Add the following Open Telemetry annotation to your `InferenceService` custom resource:
    ```yaml title="Example InferenceService object with Open Telemetry"
    apiVersion: serving.kserve.io/v1beta1
    kind: InferenceService
    metadata:
      name: ovms-resnet50
    #...
      annotations:
        prometheus.io/scrape: "true"
    #...
    ```