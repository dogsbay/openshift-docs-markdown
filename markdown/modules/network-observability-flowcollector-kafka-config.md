{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the FlowCollector resource with Kafka {id="network-observability-flowcollector-kafka-config_{{ context }}"}

Configure the `FlowCollector` resource to use Kafka for high-throughput and low-latency data feeds. {._abstract}

You must have a running Kafka instance and create a Kafka topic in that instance dedicated to {{ product_title }} Network Observability. For more information, see [Kafka documentation with AMQ Streams](https://access.redhat.com/documentation/en-us/red_hat_amq/7.7/html/using_amq_streams_on_openshift/using-the-topic-operator-str).

**Prerequisites**

*   You have installed Kafka. Red&#160;Hat supports Kafka with AMQ Streams Operator.

**Procedure**

1.  In the web console, navigate to **Ecosystem** -> **Installed Operators**.
1.  Under the **Provided APIs** heading for the Network Observability Operator, select **Flow Collector**.
1.  Select the cluster and then click the **YAML** tab.
1.  Change the `FlowCollector` resource for {{ product_title }} Network Observability Operator to use Kafka, as shown in the following sample YAML:
    ```yaml title="Sample Kafka configuration in FlowCollector resource"
    apiVersion: flows.netobserv.io/v1beta2
    kind: FlowCollector
    metadata:
      name: cluster
    spec:
      deploymentModel: Kafka
      kafka:
        address: "kafka-cluster-kafka-bootstrap.netobserv"
        topic: network-flows
        tls:
          enable: false
    ```

    where:

    `spec.deploymentModel`
    :   Specifies the deployment model. Set to `Kafka` instead of `Service`
        to enable the Kafka deployment model.

    `spec.kafka.address`
    :   Specifies the Kafka bootstrap server address. You can specify a port if needed, for instance `kafka-cluster-kafka-bootstrap.netobserv:9093` for using TLS on port 9093.

    `spec.kafka.topic`
    :   Specifies the name of the topic created in Kafka. It should match the name of a topic created in Kafka.

    `spec.kafka.tls`
    :   Specifies communication encryption. Use this setting to encrypt all communications to and from Kafka with TLS or mTLS. When enabled, the Kafka CA certificate must be available as a ConfigMap or a Secret in both namespaces: the namespace where you deploy the `flowlogs-pipeline` processor component (default: `netobserv`) and the namespace where you deploy the eBPF agents (default: `netobserv-privileged`). Reference the certificate by using `spec.kafka.tls.caCert`. When you use mTLS, make the client secrets available in these namespaces as well. You can generate the secrets by using the Red Hat AMQ Streams User Operator. Reference the secrets by using `spec.kafka.tls.userCert`.