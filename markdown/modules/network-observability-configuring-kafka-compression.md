{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure Kafka compression {id="network-observability-configuring-kafka-compression_{{ context }}"}

Configure the compression algorithm for network flow records exported to Kafka to optimize bandwidth and storage. This helps manage the data footprint of high-volume network telemetry. {._abstract}

**Prerequisites**

*   The Network Observability Operator is installed.
*   The `FlowCollector` custom resource (CR) is configured to export data to a Kafka topic.
*   You have `cluster-admin` permissions to edit the `FlowCollector` CR.

**Procedure**

1.  Open the `FlowCollector` custom resource for editing by running the following command:
    ```terminal
    $ oc edit flowcollector cluster
    ```
1.  Navigate to the `spec.kafka` section and add the `compression` parameter:
    ```yaml
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      deploymentModel: Kafka
      kafka:
        address: "kafka-cluster-kafka-bootstrap.netobserv:9093"
        topic: "network-flows"
        compression: "lz4"
    ```

    where:

    `spec.kafka.compression`
    :   Specifies the compression algorithm. Accepted values: `gzip`, `snappy`, `lz4`, `zstd`, `none`. Default is `none`.

1.  Save and apply the changes.

**Verification**

1.  Confirm that the eBPF agent pods are running in the cluster by running the following command:
    ```terminal
    $ oc get pods -A -l app=netobserv-ebpf-agent
    ```
1.  Verify that Kafka compression is active by running the following command:
    ```terminal
    $ oc logs -n <namespace> <pod_name> | grep "KafkaCompression"
    ```

    The output shows the compression configuration attribute in the eBPF agent pod logs.