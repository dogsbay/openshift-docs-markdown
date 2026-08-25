{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing the {{ ServerlessOperatorName }} {id="install-serverless-operator"}
{%- set context = "install-serverless-operator" %}

Installing the {{ ServerlessOperatorName }} enables you to install and use Knative Serving, Knative Eventing, and the Knative broker for Apache Kafka on a {{ product_title }} cluster. The {{ ServerlessOperatorName }} manages Knative custom resource definitions (CRDs) for your cluster and enables you to configure them without directly modifying individual config maps for each component.

{% leveloffset +1 %}{% include "./modules/serverless-install-web-console.md" %}{% endleveloffset %}


:::important

If you want to [use {{ DTProductName }} with {{ ServerlessProductName }}](/serverless/observability/tracing/serverless-tracing#serverless-tracing), you must install and configure {{ DTProductName }} before you install Knative Serving or Knative Eventing.

:::


{% leveloffset +1 %}{% include "./modules/serverless-install-cli.md" %}{% endleveloffset %}


:::important

If you want to [use {{ DTProductName }} with {{ ServerlessProductName }}](/serverless/observability/tracing/serverless-tracing#serverless-tracing), you must install and configure {{ DTProductName }} before you install Knative Serving or Knative Eventing.

:::


## Global configuration {id="serverless-configuration"}

The {{ ServerlessOperatorName }} manages the global configuration of a Knative installation, including propagating values from the `KnativeServing` and `KnativeEventing` custom resources to system [config maps](https://kubernetes.io/docs/concepts/configuration/configmap/). Any updates to config maps which are applied manually are overwritten by the Operator. However, modifying the Knative custom resources allows you to set values for these config maps.

Knative has multiple config maps that are named with the prefix `config-`. All Knative config maps are created in the same namespace as the custom resource that they apply to. For example, if the `KnativeServing` custom resource is created in the `knative-serving` namespace, all Knative Serving config maps are also created in this namespace.

The `spec.config` in the Knative custom resources have one `<name>` entry for each config map, named `config-<name>`, with a value which is be used for the config map `data`.

{% if openshift_enterprise %}
## Additional resources {id="additional-resources_knative-serving-CR-config" ._additional-resources}
*   [Managing resources from custom resource definitions](/operators/understanding/crds/crd-managing-resources-from-crds)
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
*   [Configuring a custom PKI](/networking/configuring_network_settings/configuring-a-custom-pki#configuring-a-custom-pki)
{% endif %}

## Next steps {id="next-steps_install-serverless-operator"}

*   After the {{ ServerlessOperatorName }} is installed, you can [install Knative Serving](/serverless/install/installing-knative-serving#installing-knative-serving) or [install Knative Eventing](/serverless/install/installing-knative-eventing#installing-knative-eventing).