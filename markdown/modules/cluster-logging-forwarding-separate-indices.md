{%- set _mod_docs_content_type = "PROCEDURE" %}
# Forwarding JSON logs from containers in the same pod to separate indices {id="cluster-logging-forwarding-separate-indices_{{ context }}"}

You can forward structured logs from different containers within the same pod to different indices. To use this feature, you must configure the pipeline with multi-container support and annotate the pods. Logs are written to indices with a prefix of `app-`. It is recommended that Elasticsearch be configured with aliases to accommodate this.


:::important

JSON formatting of logs varies by application. Because creating too many indices impacts performance, limit your use of this feature to creating indices for logs that have incompatible JSON formats. Use queries to separate logs from different namespaces, or applications with compatible JSON formats.

:::


**Prerequisites**

*   {{ logging_title_uc }}: 5.5

**Procedure**

1.  Create or edit a YAML file that defines the `ClusterLogForwarder` CR object:
    ```yaml
    apiVersion: logging.openshift.io/v1
    kind: ClusterLogForwarder
    metadata:
      name: instance
      namespace: openshift-logging
    spec:
      outputDefaults:
        elasticsearch:
          structuredTypeKey: kubernetes.labels.logFormat (1)
          structuredTypeName: nologformat
          enableStructuredContainerLogs: true (2)
      pipelines:
      - inputRefs:
        - application
        name: application-logs
        outputRefs:
        - default
        parse: json
    ```
    1.  Uses the value of the key-value pair that is formed by the Kubernetes `logFormat` label.
    1.  Enables multi-container outputs.
1.  Create or edit a YAML file that defines the `Pod` CR object:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      annotations:
        containerType.logging.openshift.io/heavy: heavy (1)
        containerType.logging.openshift.io/low: low
    spec:
      containers:
      - name: heavy (2)
        image: heavyimage
      - name: low
        image: lowimage
    ```
    1.  Format: `containerType.logging.openshift.io/<container-name>: <index>`
    1.  Annotation names must match container names


:::warning

This configuration might significantly increase the number of shards on the cluster.

:::


**Additional resources**

*   [Kubernetes Annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/)