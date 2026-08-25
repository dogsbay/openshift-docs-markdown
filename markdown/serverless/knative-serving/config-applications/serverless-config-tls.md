{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Configuring TLS authentication {id="serverless-config-tls"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-config-tls" %}

You can use _Transport Layer Security_ (TLS) to encrypt Knative traffic and for authentication.

TLS is the only supported method of traffic encryption for Knative Kafka. Red Hat recommends using both SASL and TLS together for Knative broker for Apache Kafka resources.


:::note

If you want to enable internal TLS with a {{ SMProductName }} integration, you must enable {{ SMProductShortName }} with mTLS instead of the internal encryption explained in the following procedure.
{%- if not openshift_dedicated %}
&#160;See the documentation for [Enabling Knative Serving metrics when using Service Mesh with mTLS](/serverless/integrations/serverless-ossm-setup#serverless-ossm-enabling-serving-metrics_serverless-ossm-setup).
{%- endif %}

:::


{% leveloffset +1 %}{% include "./modules/serverless-enabling-tls-internal-traffic.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring TLS authentication for the Knative broker for Apache Kafka](/serverless/eventing/brokers/kafka-broker#serverless-kafka-broker-tls-default-config_kafka-broker)
*   [Configuring TLS authentication for channels for Apache Kafka](/serverless/eventing/channels/serverless-kafka-admin-security-channels#serverless-kafka-tls-channels_serverless-kafka-admin-security-channels)
{%- if not openshift_dedicated %}
*   [Enabling Knative Serving metrics when using Service Mesh with mTLS](/serverless/integrations/serverless-ossm-setup#serverless-ossm-enabling-serving-metrics_serverless-ossm-setup)
{% endif %}