{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Apache Kafka broker settings {id="serverless-kafka-broker-configmap_{{ context }}"}

You can configure the replication factor, bootstrap servers, and the number of topic partitions for a Kafka broker, by creating a config map and referencing this config map in the Kafka `Broker` object.

**Prerequisites**

*   You have cluster or dedicated administrator permissions on {{ product_title }}.
*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` custom resource (CR) are installed on your {{ product_title }} cluster.
*   You have created a project or have access to a project that has the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Modify the `kafka-broker-config` config map, or create your own config map that contains the following configuration:
    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: <config_map_name> (1)
      namespace: <namespace> (2)
    data:
      default.topic.partitions: <integer> (3)
      default.topic.replication.factor: <integer> (4)
      bootstrap.servers: <list_of_servers> (5)
    ```
    1.  The config map name.
    1.  The namespace where the config map exists.
    1.  The number of topic partitions for the Kafka broker. This controls how quickly events can be sent to the broker. A higher number of partitions requires greater compute resources.
    1.  The replication factor of topic messages. This prevents against data loss. A higher replication factor requires greater compute resources and more storage.
    1.  A comma separated list of bootstrap servers. This can be inside or outside of the {{ product_title }} cluster, and is a list of Kafka clusters that the broker receives events from and sends events to.

        :::important

        The `default.topic.replication.factor` value must be less than or equal to the number of Kafka broker instances in your cluster. For example, if you only have one Kafka broker, the `default.topic.replication.factor` value should not be more than `"1"`.
        
        :::

        ```yaml title="Example Kafka broker config map"
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: kafka-broker-config
          namespace: knative-eventing
        data:
          default.topic.partitions: "10"
          default.topic.replication.factor: "3"
          bootstrap.servers: "my-cluster-kafka-bootstrap.kafka:9092"
        ```
1.  Apply the config map:
    ```yaml
    $ oc apply -f <config_map_filename>
    ```
1.  Specify the config map for the Kafka `Broker` object:
    ```yaml title="Example Broker object"
    apiVersion: eventing.knative.dev/v1
    kind: Broker
    metadata:
      name: <broker_name> (1)
      namespace: <namespace> (2)
      annotations:
        eventing.knative.dev/broker.class: Kafka (3)
    spec:
      config:
        apiVersion: v1
        kind: ConfigMap
        name: <config_map_name> (4)
        namespace: <namespace> (5)
    ...
    ```
    1.  The broker name.
    1.  The namespace where the broker exists.
    1.  The broker class annotation. In this example, the broker is a Kafka broker that uses the class value `Kafka`.
    1.  The config map name.
    1.  The namespace where the config map exists.
1.  Apply the broker:
    ```yaml
    $ oc apply -f <broker_filename>
    ```