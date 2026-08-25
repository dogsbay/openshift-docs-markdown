{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure {{ microshift_short }} Observability {id="microshift-otel-config_{{ context }}"}

You must configure {{ microshift_short }} Observability after it is installed by specifying a valid endpoint. You can specify any OpenTelemetry Protocol (OTLP)-compatible endpoint for each configuration before starting {{ microshift_short }}. {._abstract}


:::important

If an endpoint is not specified, {{ microshift_short }} Observability does not start.

:::


**Procedure**

1.  Update the `/etc/microshift/observability/opentelemetry-collector.yaml` file to specify an OTLP-compatible endpoint with the following information. The endpoint must link to an IP address or host name, and port number of an OTLP service.
    ```yaml title="OTLP-compatible endpoint configuration"
    # ...
    exporters:
      otlp:
        sending_queue:
          storage: file_storage
        endpoint: ${env:OTEL_BACKEND}:4317
        tls:
          insecure: true
    # ...
    service:
    # ...
      telemetry:
        metrics:
          readers:
            - periodic:
                exporter:
                  otlp:
                    protocol: http/protobuf
                    endpoint: http://${env:OTEL_BACKEND}:4318
    # ...
    ```

    Replace `${env:OTEL_BACKEND}` with the IP address or hostname of the remote back end. This IP address resolves to the local node’s hostname. An unreachable endpoint is reported in the {{ microshift_short }} service logs.
1.  Each time that you update the `opentelemetry-collector.yaml` file, you must restart {{ microshift_short }} Observability to apply the updates.

    Restart {{ microshift_short }} Observability by entering the following command:
    ```terminal
    $ sudo systemctl restart microshift-observability
    ```