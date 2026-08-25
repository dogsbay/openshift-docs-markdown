{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing Knative Serving {id="installing-knative-serving"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-knative-serving" %}

Installing Knative Serving allows you to create Knative services and functions on your cluster. It also allows you to use additional functionality such as autoscaling and networking options for your applications.

After you install the {{ ServerlessOperatorName }}, you can install Knative Serving by using the default settings, or configure more advanced settings in the `KnativeServing` custom resource (CR). For more information about configuration options for the `KnativeServing` CR, see [Global configuration](/serverless/install/install-serverless-operator#serverless-configuration).


:::important

If you want to [use {{ DTProductName }} with {{ ServerlessProductName }}](/serverless/observability/tracing/serverless-tracing#serverless-tracing), you must install and configure {{ DTProductName }} before you install Knative Serving.

:::


{% leveloffset +1 %}{% include "./modules/serverless-install-serving-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-install-serving-yaml.md" %}{% endleveloffset %}

## Next steps {id="next-steps_installing-knative-serving"}

*   If you want to use Knative event-driven architecture you can [install Knative Eventing](/serverless/install/installing-knative-eventing#installing-knative-eventing).