{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing Knative Eventing {id="installing-knative-eventing"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-knative-eventing" %}

To use event-driven architecture on your cluster, install Knative Eventing. You can create Knative components such as event sources, brokers, and channels and then use them to send events to applications or external systems.

After you install the {{ ServerlessOperatorName }}, you can install Knative Eventing by using the default settings, or configure more advanced settings in the `KnativeEventing` custom resource (CR). For more information about configuration options for the `KnativeEventing` CR, see [Global configuration](/serverless/install/install-serverless-operator#serverless-configuration).


:::important

If you want to [use {{ DTProductName }} with {{ ServerlessProductName }}](/serverless/observability/tracing/serverless-tracing#serverless-tracing), you must install and configure {{ DTProductName }} before you install Knative Eventing.

:::


{% leveloffset +1 %}{% include "./modules/serverless-install-eventing-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-install-eventing-yaml.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-install-kafka-odc.md" %}{% endleveloffset %}

## Next steps {id="next-steps_installing-knative-eventing"}

*   If you want to use Knative services you can [install Knative Serving](/serverless/install/installing-knative-serving#installing-knative-serving).