{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring the default broker backing channel {id="serverless-broker-backing-channel-default"}
{%- set context = "serverless-broker-backing-channel-default" %}

If you are using a channel-based broker, you can set the default backing channel type for the broker to either `InMemoryChannel` or `KafkaChannel`.

**Prerequisites**

*   You have administrator permissions on {{ product_title }}.
*   You have installed the {{ ServerlessOperatorName }} and Knative Eventing on your cluster.
*   You have installed the OpenShift (`oc`) CLI.
*   If you want to use Apache Kafka channels as the default backing channel type, you must also install the `KnativeKafka` CR on your cluster.

**Procedure**

1.  Modify the `KnativeEventing` custom resource (CR) to add configuration details for the `config-br-default-channel` config map:
    ```yaml
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeEventing
    metadata:
      name: knative-eventing
      namespace: knative-eventing
    spec:
      config: (1)
        config-br-default-channel:
          channel-template-spec: |
            apiVersion: messaging.knative.dev/v1beta1
            kind: KafkaChannel (2)
            spec:
              numPartitions: 6 (3)
              replicationFactor: 3 (4)
    ```
    1.  In `spec.config`, you can specify the config maps that you want to add modified configurations for.
    1.  The default backing channel type configuration. In this example, the default channel implementation for the cluster is `KafkaChannel`.
    1.  The number of partitions for the Kafka channel that backs the broker.
    1.  The replication factor for the Kafka channel that backs the broker.
1.  Apply the updated `KnativeEventing` CR:
    ```terminal
    $ oc apply -f <filename>
    ```