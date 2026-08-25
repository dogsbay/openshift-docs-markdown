{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Knative broker for Apache Kafka that uses an isolated data plane {id="serverless-create-kafka-namespaced-broker_{{ context }}"}

{%- set FeatureName = "The Knative Broker implementation for Apache Kafka with isolated data plane" %}
{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

To create a `KafkaNamespaced` broker, you must set the `eventing.knative.dev/broker.class` annotation to `KafkaNamespaced`.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` custom resource are installed on your {{ product_title }} cluster.
*   You have access to an Apache Kafka instance, such as [Red Hat AMQ Streams](https://access.redhat.com/documentation/en-us/red_hat_amq/7.6/html/amq_streams_on_openshift_overview/kafka-concepts_str#kafka-concepts-key_str), and have created a Kafka topic.
*   You have created a project, or have access to a project, with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create an Apache Kafka-based broker by using a YAML file:
    ```yaml
    apiVersion: eventing.knative.dev/v1
    kind: Broker
    metadata:
      annotations:
        eventing.knative.dev/broker.class: KafkaNamespaced (1)
      name: default
      namespace: my-namespace (2)
    spec:
      config:
        apiVersion: v1
        kind: ConfigMap
        name: my-config (2)
    ...
    ```
    1.  To use the Apache Kafka broker with isolated data planes, the broker class value must be `KafkaNamespaced`.
    1.  The referenced `ConfigMap` object `my-config` must be in the same namespace as the `Broker` object, in this case `my-namespace`.
1.  Apply the Apache Kafka-based broker YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```


:::important

The `ConfigMap` object in `spec.config` must be in the same namespace as the `Broker` object:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-config
  namespace: my-namespace
data:
  ...
```

:::


After the creation of the first `Broker` object with the `KafkaNamespaced` class, the `kafka-broker-receiver` and `kafka-broker-dispatcher` deployments are created in the namespace. Subsequently, all brokers with the `KafkaNamespaced` class in the same namespace will use the same data plane. If no brokers with the `KafkaNamespaced` class exist in the namespace, the data plane in the namespace is deleted.