{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the default channel implementation {id="serverless-channel-default_{{ context }}"}

**Prerequisites**

*   You have administrator permissions on {{ product_title }}.
*   You have installed the {{ ServerlessOperatorName }} and Knative Eventing on your cluster.
*   If you want to use Knative channels for Apache Kafka as the default channel implementation, you must also install the `KnativeKafka` CR on your cluster.

**Procedure**

*   Modify the `KnativeEventing` custom resource to add configuration details for the `default-ch-webhook` config map:
    ```yaml
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeEventing
    metadata:
      name: knative-eventing
      namespace: knative-eventing
    spec:
      config: (1)
        default-ch-webhook: (2)
          default-ch-config: |
            clusterDefault: (3)
              apiVersion: messaging.knative.dev/v1
              kind: InMemoryChannel
              spec:
                delivery:
                  backoffDelay: PT0.5S
                  backoffPolicy: exponential
                  retry: 5
            namespaceDefaults: (4)
              my-namespace:
                apiVersion: messaging.knative.dev/v1beta1
                kind: KafkaChannel
                spec:
                  numPartitions: 1
                  replicationFactor: 1
    ```
    1.  In `spec.config`, you can specify the config maps that you want to add modified configurations for.
    1.  The `default-ch-webhook` config map can be used to specify the default channel implementation for the cluster or for one or more namespaces.
    1.  The cluster-wide default channel type configuration. In this example, the default channel implementation for the cluster is `InMemoryChannel`.
    1.  The namespace-scoped default channel type configuration. In this example, the default channel implementation for the `my-namespace` namespace is `KafkaChannel`.

        :::important

        Configuring a namespace-specific default overrides any cluster-wide settings.
        
        :::