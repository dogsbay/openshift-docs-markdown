{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an Apache Kafka event source by using the Knative CLI {id="serverless-kafka-source-kn_{{ context }}"}

You can use the `kn source kafka create` command to create a Kafka source by using the Knative (`kn`) CLI. Using the Knative CLI to create event sources provides a more streamlined and intuitive user interface than modifying YAML files directly.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Eventing, Knative Serving, and the `KnativeKafka` custom resource (CR) are installed on your cluster.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have access to a Red Hat AMQ Streams (Kafka) cluster that produces the Kafka messages you want to import.
*   You have installed the Knative (`kn`) CLI.
*   Optional: You have installed the OpenShift CLI (`oc`) if you want to use the verification steps in this procedure.

**Procedure**

1.  To verify that the Kafka event source is working, create a Knative service that dumps incoming events into the service logs:
    ```terminal
    $ kn service create event-display \
        --image quay.io/openshift-knative/knative-eventing-sources-event-display
    ```
1.  Create a `KafkaSource` CR:
    ```terminal
    $ kn source kafka create <kafka_source_name> \
        --servers <cluster_kafka_bootstrap>.kafka.svc:9092 \
        --topics <topic_name> --consumergroup my-consumer-group \
        --sink event-display
    ```

    :::note

    Replace the placeholder values in this command with values for your source name, bootstrap servers, and topics.
    
    :::


    The `--servers`, `--topics`, and `--consumergroup` options specify the connection parameters to the Kafka cluster. The `--consumergroup` option is optional.
1.  Optional: View details about the `KafkaSource` CR you created:
    ```terminal
    $ kn source kafka describe <kafka_source_name>
    ```
    ```terminal title="Example output"
    Name:              example-kafka-source
    Namespace:         kafka
    Age:               1h
    BootstrapServers:  example-cluster-kafka-bootstrap.kafka.svc:9092
    Topics:            example-topic
    ConsumerGroup:     example-consumer-group

    Sink:
      Name:       event-display
      Namespace:  default
      Resource:   Service (serving.knative.dev/v1)

    Conditions:
      OK TYPE            AGE REASON
      ++ Ready            1h
      ++ Deployed         1h
      ++ SinkProvided     1h
    ```

**Verification steps**

1.  Trigger the Kafka instance to send a message to the topic:
    ```terminal
    $ oc -n kafka run kafka-producer \
        -ti --image=quay.io/strimzi/kafka:latest-kafka-2.7.0 --rm=true \
        --restart=Never -- bin/kafka-console-producer.sh \
        --broker-list <cluster_kafka_bootstrap>:9092 --topic my-topic
    ```

    Enter the message in the prompt. This command assumes that:
    *   The Kafka cluster is installed in the `kafka` namespace.
    *   The `KafkaSource` object has been configured to use the `my-topic` topic.
1.  Verify that the message arrived by viewing the logs:
    ```terminal
    $ oc logs $(oc get pod -o name | grep event-display) -c user-container
    ```
    ```terminal title="Example output"
    ☁️  cloudevents.Event
    Validation: valid
    Context Attributes,
      specversion: 1.0
      type: dev.knative.kafka.event
      source: /apis/v1/namespaces/default/kafkasources/example-kafka-source#example-topic
      subject: partition:46#0
      id: partition:46/offset:0
      time: 2021-03-10T11:21:49.4Z
    Extensions,
      traceparent: 00-161ff3815727d8755848ec01c866d1cd-7ff3916c44334678-00
    Data,
      Hello!
    ```