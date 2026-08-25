{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Knative broker implementation for Apache Kafka {id="kafka-broker"}
{%- set context = "kafka-broker" %}

{% include "./snippets/serverless-about-kafka-broker.md" %}

## Creating an Apache Kafka broker when it is not configured as the default broker type {id="creating-kafka-broker"}

If your {{ ServerlessProductName }} deployment is not configured to use Kafka broker as the default broker type, you can use one of the following procedures to create a Kafka-based broker.

{% leveloffset +2 %}{% include "./modules/serverless-kafka-broker.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-kafka-broker-with-kafka-topic.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-kafka-broker-with-isolated-dataplane.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-create-kafka-namespaced-broker.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-kafka-broker-configmap.md" %}{% endleveloffset %}

## Security configuration for the Knative broker implementation for Apache Kafka {id="serverless-kafka-admin-security"}

Kafka clusters are generally secured by using the TLS or SASL authentication methods. You can configure a Kafka broker or channel to work against a protected Red Hat AMQ Streams cluster by using TLS or SASL.


:::note

Red Hat recommends that you enable both SASL and TLS together.

:::


{% leveloffset +2 %}{% include "./modules/serverless-kafka-broker-tls-default-config.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-kafka-broker-sasl-default-config.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_serverless-kafka-admin" ._additional-resources}
*   [Red Hat AMQ Streams documentation](https://access.redhat.com/documentation/en-us/red_hat_amq/7.6/html/amq_streams_on_openshift_overview/kafka-concepts_str#kafka-concepts-key_str)
*   [TLS and SASL on Kafka](https://access.redhat.com/documentation/en-us/red_hat_amq/7.5/html-single/using_amq_streams_on_rhel/index#assembly-kafka-encryption-and-authentication-str)