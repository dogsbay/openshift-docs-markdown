{%- set _mod_docs_content_type = "PROCEDURE" %}
# Quick start with OpenTelemetry {id="quick-start-opentelemetry_{{ context }}"}

{%- set FeatureName = "The OpenTelemetry Protocol (OTLP) output log forwarder" %}
{% include "./snippets/technology-preview.md" %}

To configure OTLP ingestion and enable the OpenTelemetry data model, follow these steps:

**Prerequisites**

*   You have access to an {{ product_title }} cluster with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.
*   You have access to a supported object store. For example, AWS S3, {{ gcp_full }} Storage, {{ azure_short }}, Swift, Minio, or {{ rh_storage }}.

**Procedure**

1.  Install the `{{ clo }}`{minja}, `{{ loki_op }}`{minja}, and `{{ coo_first }}`{minja} from the software catalog.
1.  Create a `LokiStack` custom resource (CR) in the `openshift-logging` namespace:
    ```yaml
    apiVersion: loki.grafana.com/v1
    kind: LokiStack
    metadata:
      name: logging-loki
      namespace: openshift-logging
    spec:
      managementState: Managed
      size: 1x.extra-small
      storage:
        schemas:
        - effectiveDate: '2024-10-01'
          version: v13
        secret:
          name: logging-loki-s3
          type: s3
      storageClassName: gp3-csi
      tenants:
        mode: openshift-logging
    ```

    :::note

    Ensure that the `logging-loki-s3` secret is created beforehand. The contents of this secret vary depending on the object storage in use. For more information, see "Secrets and TLS Configuration".
    
    :::

1.  Create a service account for the collector:
    ```terminal
    $ oc create sa collector -n openshift-logging
    ```
1.  Allow the collector’s service account to write data to the `LokiStack` CR:
    ```terminal
    $ oc adm policy add-cluster-role-to-user logging-collector-logs-writer -z collector -n openshift-logging
    ```

    :::note

    The `ClusterRole` resource is created automatically during the Cluster Logging Operator installation and does not need to be created manually.
    
    :::

1.  To collect logs, use the service account of the collector by running the following commands:
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-application-logs -z collector -n openshift-logging
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-audit-logs -z collector -n openshift-logging
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-infrastructure-logs -z collector -n openshift-logging
    ```

    :::note

    The example binds the collector to all three roles (application, infrastructure, and audit). By default, only application and infrastructure logs are collected. To collect audit logs, update your `ClusterLogForwarder` configuration to include them. Assign roles based on the specific log types required for your environment.
    
    :::

1.  Create a `UIPlugin` CR to enable the **Log** section in the **Observe** tab:
    ```yaml
    apiVersion: observability.openshift.io/v1alpha1
    kind: UIPlugin
    metadata:
      name: logging
    spec:
      type: Logging
      logging:
        lokiStack:
          name: logging-loki
    ```
1.  Create a `ClusterLogForwarder` CR to configure log forwarding:
    ```yaml
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: collector
      namespace: openshift-logging
      annotations:
        observability.openshift.io/tech-preview-otlp-output: "enabled" (1)
    spec:
      serviceAccount:
        name: collector
      outputs:
      - name: loki-otlp
        type: lokiStack (2)
        lokiStack:
          target:
            name: logging-loki
            namespace: openshift-logging
          dataModel: Otel (3)
          authentication:
            token:
              from: serviceAccount
        tls:
          ca:
            key: service-ca.crt
            configMapName: openshift-service-ca.crt
      pipelines:
      - name: my-pipeline
        inputRefs:
        - application
        - infrastructure
        outputRefs:
        - loki-otlp
    ```
    1.  Use the annotation to enable the `Otel` data model, which is a Technology Preview feature.
    1.  Define the output type as `lokiStack`.
    1.  Specifies the OpenTelemetry data model.

    :::note

    You cannot use `lokiStack.labelKeys` when `dataModel` is `Otel`. To achieve similar functionality when `dataModel` is `Otel`, refer to "Configuring LokiStack for OTLP data ingestion".
    
    :::


**Verification**

*   To verify that OTLP is functioning correctly, complete the following steps:
    1.  In the OpenShift web console, click **Observe** → **OpenShift Logging** → **LokiStack** → **Writes**.
    1.  Check the **Distributor - Structured Metadata** section.