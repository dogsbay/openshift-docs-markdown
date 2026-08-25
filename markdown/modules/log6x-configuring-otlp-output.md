{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring OTLP output {id="log6x-configuring-otlp-output_{{ context }}"}

Cluster administrators can use the OpenTelemetry Protocol (OTLP) output to collect and forward logs to OTLP receivers. The OTLP output uses the specification defined by the [OpenTelemetry Observability framework](https://opentelemetry.io/docs/specs/otlp/) to send data over HTTP with JSON encoding.

{%- set FeatureName = "The OpenTelemetry Protocol (OTLP) output log forwarder" %}
{% include "./snippets/technology-preview.md" %}

**Procedure**

*   Create or edit a `ClusterLogForwarder` custom resource (CR) to enable forwarding using OTLP by adding the following annotation:
    ```yaml title="Example ClusterLogForwarder CR"
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      annotations:
        observability.openshift.io/tech-preview-otlp-output: "enabled" (1)
      name: clf-otlp
    spec:
      serviceAccount:
        name: <service_account_name> 
      outputs:
      - name: otlp
        type: otlp
        otlp:
          tuning:
            compression: gzip 
            deliveryMode: AtLeastOnce
            maxRetryDuration: 20
            maxWrite: 10M
            minRetryDuration: 5
          url: <otlp_url> (2)
      pipelines:
      - inputRefs:
        - application
        - infrastructure
        - audit
        name: otlp-logs
        outputRefs:
        - otlp
    ```
    1.  Use this annotation to enable the OpenTelemetry Protocol (OTLP) output, which is a Technology Preview feature.
    1.  This URL must be absolute and is a placeholder for the OTLP endpoint where logs are sent.


    :::note

    The OTLP output uses the OpenTelemetry data model, which is different from the ViaQ data model that is used by other output types. It adheres to the OTLP using [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/) defined by the OpenTelemetry Observability framework.
    
    :::