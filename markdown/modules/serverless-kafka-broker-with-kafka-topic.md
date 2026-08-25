{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an Apache Kafka broker that uses an externally managed Kafka topic {id="serverless-kafka-broker-with-kafka-topic_{{ context }}"}

If you want to use a Kafka broker without allowing it to create its own internal topic, you can use an externally managed Kafka topic instead. To do this, you must create a Kafka `Broker` object that uses the `kafka.eventing.knative.dev/external.topic` annotation.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` custom resource are installed on your {{ product_title }} cluster.
*   You have access to a Kafka instance such as [Red Hat AMQ Streams](https://access.redhat.com/documentation/en-us/red_hat_amq/7.6/html/amq_streams_on_openshift_overview/kafka-concepts_str#kafka-concepts-key_str), and have created a Kafka topic.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a Kafka-based broker as a YAML file:
    ```yaml
    apiVersion: eventing.knative.dev/v1
    kind: Broker
    metadata:
      annotations:
        eventing.knative.dev/broker.class: Kafka (1)
        kafka.eventing.knative.dev/external.topic: <topic_name> (2)
    ...
    ```
    1.  The broker class. If not specified, brokers use the default class as configured by cluster administrators. To use the Kafka broker, this value must be `Kafka`.
    1.  The name of the Kafka topic that you want to use.
1.  Apply the Kafka-based broker YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```