{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Source for Apache Kafka {id="serverless-kafka-developer-source"}
{%- set context = "serverless-kafka-developer-source" %}

You can create an Apache Kafka source that reads events from an Apache Kafka cluster and passes these events to a sink. You can create a Kafka source by using the {{ product_title }} web console, the Knative (`kn`) CLI, or by creating a `KafkaSource` object directly as a YAML file and using the OpenShift CLI (`oc`) to apply it.


:::note

See the documentation for [Installing Knative broker for Apache Kafka](/serverless/install/installing-knative-eventing#serverless-install-kafka-odc_installing-knative-eventing).

:::


{% leveloffset +1 %}{% include "./modules/serverless-kafka-source-odc.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kafka-source-kn.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/specifying-sink-flag-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kafka-source-yaml.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-kafka-sasl-source.md" %}{% endleveloffset %}