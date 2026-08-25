{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Logging 6.0 {id="log6x-about"}
{%- set context = "logging-6x" %}

The `ClusterLogForwarder` custom resource (CR) is the central configuration point for log collection and forwarding.

## Inputs and Outputs {id="_inputs_and_outputs"}

Inputs specify the sources of logs to be forwarded. Logging provides the following built-in input types that select logs from different parts of your cluster: 

*   `application`
*   `receiver`
*   `infrastructure`
*   `audit`

You can also define custom inputs based on namespaces or pod labels to fine-tune log selection.

Outputs define the destinations where logs are sent. Each output type has its own set of configuration options, allowing you to customize the behavior and authentication settings.

## Receiver Input Type {id="_receiver_input_type"}
The receiver input type enables the Logging system to accept logs from external sources. It supports two formats for receiving logs: `http` and `syslog`.

The `ReceiverSpec` field defines the configuration for a receiver input.

## Pipelines and Filters {id="_pipelines_and_filters"}

Pipelines determine the flow of logs from inputs to outputs. A pipeline consists of one or more input refs, output refs, and optional filter refs. You can use filters to transform or drop log messages within a pipeline. The order of filters matters, as they are applied sequentially, and earlier filters can prevent log messages from reaching later stages.

## Operator Behavior {id="_operator_behavior"}

The Cluster Logging Operator manages the deployment and configuration of the collector based on the `managementState` field:

*   When set to `Managed` (default), the Operator actively manages the logging resources to match the configuration defined in the spec.
*   When set to `Unmanaged`, the Operator does not take any action, allowing you to manually manage the logging components.

## Validation {id="_validation"}
Logging includes extensive validation rules and default values to ensure a smooth and error-free configuration experience. The `ClusterLogForwarder` resource enforces validation checks on required fields, dependencies between fields, and the format of input values. Default values are provided for certain fields, reducing the need for explicit configuration in common scenarios.

## Quick Start {id="_quick_start"}

**Prerequisites**

*   You have access to an {{ product_title }} cluster with `cluster-admin` permissions.
*   You installed the {{ oc_first }}.
*   You have access to a supported object store. For example, AWS S3, {{ gcp_full }} Storage, {{ azure_short }}, Swift, Minio, or {{ rh_storage }}.

**Procedure**

1.  Install the `{{ clo }}`{minja}, `{{ loki_op }}`{minja}, and `{{ coo_first }}`{minja} from the software catalog.
1.  Create a secret to access an existing object storage bucket: 
    ```terminal title="Example command for AWS"
    $ oc create secret generic logging-loki-s3 \
      --from-literal=bucketnames="<bucket_name>" \
      --from-literal=endpoint="<aws_bucket_endpoint>" \
      --from-literal=access_key_id="<aws_access_key_id>" \
      --from-literal=access_key_secret="<aws_access_key_secret>" \
      --from-literal=region="<aws_region_of_your_bucket>" \
      -n openshift-logging
    ```
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
        - effectiveDate: '2022-06-01'
          version: v13
        secret:
          name: logging-loki-s3
          type: s3
      storageClassName: gp3-csi
      tenants:
        mode: openshift-logging
    ```
1.  Create a service account for the collector:
    ```shell
    $ oc create sa collector -n openshift-logging
    ```
1.  Bind the `ClusterRole` to the service account:
    ```shell
    $ oc adm policy add-cluster-role-to-user logging-collector-logs-writer -z collector -n openshift-logging
    ```
1.  Create a `UIPlugin` to enable the Log section in the Observe tab:
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
1.  Add additional roles to the collector service account:
    ```shell
    $ oc adm policy add-cluster-role-to-user collect-application-logs -z collector -n openshift-logging
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-audit-logs -z collector -n openshift-logging
    ```
    ```terminal
    $ oc adm policy add-cluster-role-to-user collect-infrastructure-logs -z collector -n openshift-logging
    ```
1.  Create a `ClusterLogForwarder` CR to configure log forwarding:
    ```yaml
    apiVersion: observability.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: collector
      namespace: openshift-logging
    spec:
      serviceAccount:
        name: collector
      outputs:
      - name: default-lokistack
        type: lokiStack
        lokiStack:
          target:
            name: logging-loki
            namespace: openshift-logging
          authentication:
            token:
              from: serviceAccount
        tls:
          ca:
            key: service-ca.crt
            configMapName: openshift-service-ca.crt
      pipelines:
      - name: default-logstore
        inputRefs:
        - application
        - infrastructure
        outputRefs:
        - default-lokistack
    ```

**Verification**

*   Verify that logs are visible in the **Log** section of the **Observe** tab in the {{ product_title }} web console.