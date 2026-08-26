{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an event sink for Apache Kafka by using the {{ product_title }} web console {id="serverless-creating-a-kafka-event-sink_{{ context }}"}

You can create a Kafka sink that sends events to a Kafka topic by using the **Developer** perspective in the {{ product_title }} web console. By default, a Kafka sink uses the binary content mode, which is more efficient than the structured mode.

As a developer, you can create an event sink to receive events from a particular source and send them to a Kafka topic.

**Prerequisites**

*   You have installed the {{ ServerlessOperatorName }}, with Knative Serving, Knative Eventing, and Knative broker for Apache Kafka APIs, from the software catalog.
*   You have created a Kafka topic in your Kafka environment.

**Procedure**

1.  In the **Developer** perspective, navigate to the **+Add** view.
1.  Click **Event Sink** in the **Eventing catalog**.
1.  Search for `KafkaSink` in the catalog items and click it.
1.  Click **Create Event Sink**.
1.  In the form view, type the URL of the bootstrap server, which is a combination of host name and port.
    ![create-event-sink](/images/create-event-sink.png)
1.  Type the name of the topic to send event data.
1.  Type the name of the event sink.
1.  Click **Create**.

**Verification**

1.  In the **Developer** perspective, navigate to the **Topology** view.
1.  Click the created event sink to view its details in the right panel.