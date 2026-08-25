{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring event delivery ordering for triggers {id="trigger-event-delivery-config_{{ context }}"}

If you are using a Kafka broker, you can configure the delivery order of events from triggers to event sinks.

**Prerequisites**

*   The {{ ServerlessOperatorName }}, Knative Eventing, and Knative broker implementation for Apache Kafka are installed on your {{ product_title }} cluster.
*   Kafka broker is enabled for use on your cluster, and you have created a Kafka broker.
*   You have created a project or have access to a project with the appropriate roles and permissions to create applications and other workloads in {{ product_title }}.
*   You have installed the OpenShift (`oc`) CLI.

**Procedure**

1.  Create or modify a `Trigger` object and set the `kafka.eventing.knative.dev/delivery.order` annotation:
    ```yaml
    apiVersion: eventing.knative.dev/v1
    kind: Trigger
    metadata:
      name: <trigger_name>
      annotations:
         kafka.eventing.knative.dev/delivery.order: ordered
    ...
    ```

    The supported consumer delivery guarantees are:

    `unordered`
    :   An unordered consumer is a non-blocking consumer that delivers messages unordered, while preserving proper offset management.

    `ordered`
    :   An ordered consumer is a per-partition blocking consumer that waits for a successful response from the CloudEvent subscriber before it delivers the next message of the partition.
    The default ordering guarantee is `unordered`.

1.  Apply the `Trigger` object:
    ```terminal
    $ oc apply -f <filename>
    ```