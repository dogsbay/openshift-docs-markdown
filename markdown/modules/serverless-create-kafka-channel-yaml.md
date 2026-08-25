{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a channel for Apache Kafka by using YAML {id="serverless-create-kafka-channel-yaml_{{ context }}"}

Creating Knative resources by using YAML files uses a declarative API, which enables you to describe channels declaratively and in a reproducible manner. You can create a Knative Eventing channel that is backed by Kafka topics by creating a Kafka channel. To create a Kafka channel by using YAML, you must create a YAML file that defines a `KafkaChannel` object, then apply it by using the `oc apply` command.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Eventing, and the `KnativeKafka` custom resource are installed on your {{ product_title }} cluster.
*   Install the OpenShift CLI (`oc`).
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.

**Procedure**

1.  Create a `KafkaChannel` object as a YAML file:
    ```yaml
    apiVersion: messaging.knative.dev/v1beta1
    kind: KafkaChannel
    metadata:
      name: example-channel
      namespace: default
    spec:
      numPartitions: 3
      replicationFactor: 1
    ```

    :::important

    Only the `v1beta1` version of the API for `KafkaChannel` objects on {{ ServerlessProductName }} is supported. Do not use the `v1alpha1` version of this API, as this version is now deprecated.
    
    :::

1.  Apply the `KafkaChannel` YAML file:
    ```terminal
    $ oc apply -f <filename>
    ```