{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Upgrading to Logging 6.0 {id="log6x-upgrading-to-6"}
{%- set context = "log6x" %}

Logging v6.0 is a significant upgrade from previous releases, achieving several longstanding goals of Cluster Logging:

*   Introduction of distinct operators to manage logging components (e.g., collectors, storage, visualization).
*   Removal of support for managed log storage and visualization based on Elastic products (i.e., Elasticsearch, Kibana).
*   Deprecation of the Fluentd log collector implementation.
*   Removal of support for `ClusterLogging.logging.openshift.io` and `ClusterLogForwarder.logging.openshift.io` resources.


:::note

The **cluster-logging-operator** does not provide an automated upgrade process.

:::


Given the various configurations for log collection, forwarding, and storage, no automated upgrade is provided by the **cluster-logging-operator**. This documentation assists administrators in converting existing `ClusterLogging.logging.openshift.io` and `ClusterLogForwarder.logging.openshift.io` specifications to the new API. Examples of migrated `ClusterLogForwarder.observability.openshift.io` resources for common use cases are included.

{% leveloffset +1 %}{% include "./modules/log6x-oc-explain.md" %}{% endleveloffset %}

## Log Storage {id="_log_storage"}

The only managed log storage solution available in this release is a Lokistack, managed by the Loki Operator. This solution, previously available as the preferred alternative to the managed Elasticsearch offering, remains unchanged in its deployment process.


:::important

To continue using an existing Red Hat managed Elasticsearch or Kibana deployment provided by the Elasticsearch Operator, remove the owner references from the Elasticsearch resource named `elasticsearch`, and  the Kibana resource named `kibana` in the `openshift-logging` namespace before removing the `ClusterLogging` resource named `instance` in the same namespace.

:::


1.  Temporarily set `ClusterLogging` resource to the `Unmanaged` state by running the following command:
    ```terminal
    $ oc -n openshift-logging patch clusterlogging/instance -p '{"spec":{"managementState": "Unmanaged"}}' --type=merge
    ```
1.  Remove the `ownerReferences` parameter from the `Elasticsearch` resource by running the following command:

    The following command ensures that `ClusterLogging` no longer owns the `Elasticsearch` resource. Updates to the `ClusterLogging` resource’s `logStore` field will no longer affect the `Elasticsearch` resource.
    ```terminal
    $ oc -n openshift-logging patch elasticsearch/elasticsearch -p '{"metadata":{"ownerReferences": []}}' --type=merge
    ```
1.  Remove the `ownerReferences` parameter from the `Kibana` resource.

    The following command ensures that Cluster Logging no longer owns the `Kibana` resource. Updates to the `ClusterLogging` resource’s `visualization` field will no longer affect the `Kibana` resource.
    ```terminal
    $ oc -n openshift-logging patch kibana/kibana -p '{"metadata":{"ownerReferences": []}}' --type=merge
    ```
1.  Set the `ClusterLogging` resource to the `Managed` state by running the following command:
    ```terminal
    $ oc -n openshift-logging patch clusterlogging/instance -p '{"spec":{"managementState": "Managed"}}' --type=merge
    ```

## Log Visualization {id="_log_visualization"}
The OpenShift console UI plugin for log visualization has been moved to the **cluster-observability-operator** from the **cluster-logging-operator**.

## Log Collection and Forwarding {id="_log_collection_and_forwarding"}

Log collection and forwarding configurations are now specified under the new [API](https://github.com/openshift/cluster-logging-operator/blob/master/docs/reference/operator/api_observability_v1.adoc), part of the `observability.openshift.io` API group. The following sections highlight the differences from the old API resources.


:::note

Vector is the only supported collector implementation.

:::


## Management, Resource Allocation, and Workload Scheduling {id="_management_resource_allocation_and_workload_scheduling"}

Configuration for management state (e.g., Managed, Unmanaged), resource requests and limits, tolerations, and node selection is now part of the new **ClusterLogForwarder** API.

```yaml title="Previous Configuration"
apiVersion: "logging.openshift.io/v1"
kind: "ClusterLogging"
spec:
  managementState: "Managed"
  collection:
    resources:
      limits: {}
      requests: {}
    nodeSelector: {}
    tolerations: {}
```

```yaml title="Current Configuration"
apiVersion: "observability.openshift.io/v1"
kind: ClusterLogForwarder
spec:
  managementState: Managed
  collector:
    resources:
      limits: {}
      requests: {}
    nodeSelector: {}
    tolerations: {}
```

## Input Specifications {id="_input_specifications"}

The input specification is an optional part of the **ClusterLogForwarder** specification. Administrators can continue to use the predefined values of **application**, **infrastructure**, and **audit** to collect these sources.

### Application Inputs {id="_application_inputs"}

Namespace and container inclusions and exclusions have been consolidated into a single field.

```yaml title="5.9 Application Input with Namespace and Container Includes and Excludes"
apiVersion: "logging.openshift.io/v1"
kind: ClusterLogForwarder
spec:
  inputs:
   - name: application-logs
     type: application
     application:
       namespaces:
       - foo
       - bar
       includes:
       - namespace: my-important
         container: main
       excludes:
       - container: too-verbose
```

```yaml title="6.0 Application Input with Namespace and Container Includes and Excludes"
apiVersion: "observability.openshift.io/v1"
kind: ClusterLogForwarder
spec:
  inputs:
   - name: application-logs
     type: application
     application:
       includes:
       - namespace: foo
       - namespace: bar
       - namespace: my-important
         container: main
       excludes:
       - container: too-verbose
```


:::note

**application**, **infrastructure**, and **audit** are reserved words and cannot be used as names when defining an input.

:::


### Input Receivers {id="_input_receivers"}

Changes to input receivers include:

*   Explicit configuration of the type at the receiver level.
*   Port settings moved to the receiver level.

```yaml title="5.9 Input Receivers"
apiVersion: "logging.openshift.io/v1"
kind: ClusterLogForwarder
spec:
  inputs:
  - name: an-http
    receiver:
      http:
        port: 8443
        format: kubeAPIAudit
  - name: a-syslog
    receiver:
      type: syslog
      syslog:
        port: 9442
```

```yaml title="6.0 Input Receivers"
apiVersion: "observability.openshift.io/v1"
kind: ClusterLogForwarder
spec:
  inputs:
  - name: an-http
    type: receiver
    receiver:
      type: http
      port: 8443
      http:
        format: kubeAPIAudit
  - name: a-syslog
    type: receiver
    receiver:
      type: syslog
      port: 9442
```

## Output Specifications {id="_output_specifications"}

High-level changes to output specifications include:

*   URL settings moved to each output type specification.
*   Tuning parameters moved to each output type specification.
*   Separation of TLS configuration from authentication.
*   Explicit configuration of keys and secret/configmap for TLS and authentication.

## Secrets and TLS Configuration {id="_secrets_and_tls_configuration"}

Secrets and TLS configurations are now separated into authentication and TLS configuration for each output. They must be explicitly defined in the specification rather than relying on administrators to define secrets with recognized keys. Upgrading TLS and authorization configurations requires administrators to understand previously recognized keys to continue using existing secrets. Examples in the following sections provide details on how to configure **ClusterLogForwarder** secrets to forward to existing Red Hat managed log storage solutions.

## Red Hat Managed Elasticsearch {id="_red_hat_managed_elasticsearch"}

```yaml title="v5.9 Forwarding to Red Hat Managed Elasticsearch"
apiVersion: logging.openshift.io/v1
kind: ClusterLogging
metadata:
  name: instance
  namespace: openshift-logging
spec:
  logStore:
    type: elasticsearch
```

```yaml title="v6.0 Forwarding to Red Hat Managed Elasticsearch"
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: instance
  namespace: openshift-logging
spec:
  serviceAccount:
    name: <service_account_name>
  managementState: Managed
  outputs:
  - name: audit-elasticsearch
    type: elasticsearch
    elasticsearch:
      url: https://elasticsearch:9200
      version: 6
      index: audit-write
    tls:
      ca:
        key: ca-bundle.crt
        secretName: collector
      certificate:
        key: tls.crt
        secretName: collector
      key:
        key: tls.key
        secretName: collector
  - name: app-elasticsearch
    type: elasticsearch
    elasticsearch:
      url: https://elasticsearch:9200
      version: 6
      index: app-write
    tls:
      ca:
        key: ca-bundle.crt
        secretName: collector
      certificate:
        key: tls.crt
        secretName: collector
      key:
        key: tls.key
        secretName: collector
  - name: infra-elasticsearch
    type: elasticsearch
    elasticsearch:
      url: https://elasticsearch:9200
      version: 6
      index: infra-write
    tls:
      ca:
        key: ca-bundle.crt
        secretName: collector
      certificate:
        key: tls.crt
        secretName: collector
      key:
        key: tls.key
        secretName: collector
  pipelines:
  - name: app
    inputRefs:
    - application
    outputRefs:
    - app-elasticsearch
  - name: audit
    inputRefs:
    - audit
    outputRefs:
    - audit-elasticsearch
  - name: infra
    inputRefs:
    - infrastructure
    outputRefs:
    - infra-elasticsearch
```

## Red Hat Managed LokiStack {id="_red_hat_managed_lokistack"}

```yaml title="v5.9 Forwarding to Red Hat Managed LokiStack"
apiVersion: logging.openshift.io/v1
kind: ClusterLogging
metadata:
  name: instance
  namespace: openshift-logging
spec:
  logStore:
    type: lokistack
    lokistack:
      name: lokistack-dev
```

```yaml title="v6.0 Forwarding to Red Hat Managed LokiStack"
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
metadata:
  name: instance
  namespace: openshift-logging
spec:
  serviceAccount:
    name: <service_account_name>
  outputs:
  - name: default-lokistack
    type: lokiStack
    lokiStack:
      target:
        name: lokistack-dev
        namespace: openshift-logging
      authentication:
        token:
          from: serviceAccount
    tls:
      ca:
        key: service-ca.crt
        configMapName: openshift-service-ca.crt
  pipelines:
  - outputRefs:
    - default-lokistack
  - inputRefs:
    - application
    - infrastructure
```

## Filters and Pipeline Configuration {id="_filters_and_pipeline_configuration"}

Pipeline configurations now define only the routing of input sources to their output destinations, with any required transformations configured separately as filters. All attributes of pipelines from previous releases have been converted to filters in this release. Individual filters are defined in the `filters` specification and referenced by a pipeline.

```yaml title="5.9 Filters"
apiVersion: logging.openshift.io/v1
kind: ClusterLogForwarder
spec:
  pipelines:
   - name: application-logs
     parse: json
     labels:
       foo: bar
     detectMultilineErrors: true
```

```yaml title="6.0 Filter Configuration"
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
spec:
  filters:
  - name: detectexception
    type: detectMultilineException
  - name: parse-json
    type: parse
  - name: labels
    type: openshiftLabels
    openshiftLabels:
      foo: bar
  pipelines:
  - name: application-logs
    filterRefs:
    - detectexception
    - labels
    - parse-json
```

## Validation and Status {id="_validation_and_status"}

Most validations are enforced when a resource is created or updated, providing immediate feedback. This is a departure from previous releases, where validation occurred post-creation and required inspecting the resource status. Some validation still occurs post-creation for cases where it is not possible to validate at creation or update time.

Instances of the `ClusterLogForwarder.observability.openshift.io` must satisfy the following conditions before the operator will deploy the log collector: Authorized, Valid, Ready. An example of these conditions is:

```yaml title="6.0 Status Conditions"
apiVersion: observability.openshift.io/v1
kind: ClusterLogForwarder
status:
  conditions:
  - lastTransitionTime: "2024-09-13T03:28:44Z"
    message: 'permitted to collect log types: [application]'
    reason: ClusterRolesExist
    status: "True"
    type: observability.openshift.io/Authorized
  - lastTransitionTime: "2024-09-13T12:16:45Z"
    message: ""
    reason: ValidationSuccess
    status: "True"
    type: observability.openshift.io/Valid
  - lastTransitionTime: "2024-09-13T12:16:45Z"
    message: ""
    reason: ReconciliationComplete
    status: "True"
    type: Ready
  filterConditions:
  - lastTransitionTime: "2024-09-13T13:02:59Z"
    message: filter "detectexception" is valid
    reason: ValidationSuccess
    status: "True"
    type: observability.openshift.io/ValidFilter-detectexception
  - lastTransitionTime: "2024-09-13T13:02:59Z"
    message: filter "parse-json" is valid
    reason: ValidationSuccess
    status: "True"
    type: observability.openshift.io/ValidFilter-parse-json
  inputConditions:
  - lastTransitionTime: "2024-09-13T12:23:03Z"
    message: input "application1" is valid
    reason: ValidationSuccess
    status: "True"
    type: observability.openshift.io/ValidInput-application1
  outputConditions:
  - lastTransitionTime: "2024-09-13T13:02:59Z"
    message: output "default-lokistack-application1" is valid
    reason: ValidationSuccess
    status: "True"
    type: observability.openshift.io/ValidOutput-default-lokistack-application1
  pipelineConditions:
  - lastTransitionTime: "2024-09-13T03:28:44Z"
    message: pipeline "default-before" is valid
    reason: ValidationSuccess
    status: "True"
    type: observability.openshift.io/ValidPipeline-default-before
```


:::note

Conditions that are satisfied and applicable have a "status" value of "True". Conditions with a status other than "True" provide a reason and a message explaining the issue.

:::