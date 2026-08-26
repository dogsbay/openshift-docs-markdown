{%- set _mod_docs_content_type = "SNIPPET" %}

Brokers can be used in combination with triggers to deliver events from an event source to an event sink. Events are sent from an event source to a broker as an HTTP `POST` request. After events have entered the broker, they can be filtered by [CloudEvent attributes](https://github.com/cloudevents/spec/blob/v1.0/spec.md#context-attributes) using triggers, and sent as an HTTP `POST` request to an event sink.

![Broker event delivery overview](/images/serverless-event-broker-workflow.png)