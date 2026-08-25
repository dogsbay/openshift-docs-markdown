{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Function project configuration in func.yaml {id="serverless-functions-project-configuration"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-functions-yaml" %}

The `func.yaml` file contains the configuration for your function project. Values specified in `func.yaml` are used when you execute a `kn func` command. For example, when you run the `kn func build` command, the value in the `build` field is used. In some cases, you can override these values with command-line flags or environment variables.

{% leveloffset +1 %}{% include "./modules/serverless-functions-func-yaml-fields.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-functions-func-yaml-environment-variables.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_serverless-functions-project-configuration" ._additional-resources}
*   [Getting started with functions](/serverless/functions/serverless-functions-getting-started#serverless-functions-getting-started)
*   [Accessing secrets and config maps from Serverless functions](/serverless/functions/serverless-functions-accessing-secrets-configmaps#serverless-functions-accessing-secrets-configmaps)
*   [Knative documentation on Autoscaling](https://knative.dev/docs/serving/autoscaling/)
*   [Kubernetes documentation on managing resources for containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)
*   [Knative documentation on configuring concurrency](https://knative.dev/docs/serving/autoscaling/concurrency/)