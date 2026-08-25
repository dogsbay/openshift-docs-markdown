{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Serverless applications {id="serverless-applications"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-applications" %}

{% include "./snippets/serverless-apps.md" %}

You can create a serverless application by using one of the following methods:

*   Create a Knative service from the {{ product_title }} web console.
{%- if openshift_enterprise %}

    See [Creating applications using the Developer perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective) for more information.
{%- endif %}
*   Create a Knative service by using the Knative (`kn`) CLI.
*   Create and apply a Knative `Service` object as a YAML file, by using the `oc` CLI.

{% leveloffset +1 %}{% include "./modules/creating-serverless-apps-kn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/creating-serverless-apps-yaml.md" %}{% endleveloffset %}

If you do not want to switch to the **Developer** perspective in the {{ product_title }} web console or use the Knative (`kn`) CLI or YAML files, you can create Knative components by using the **Administator** perspective of the {{ product_title }} web console.

{% leveloffset +1 %}{% include "./modules/creating-serverless-apps-admin-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/kn-service-offline-create.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_serverless-applications" ._additional-resources}
*   [Knative Serving CLI commands](/serverless/cli_tools/serving_cli/kn-service#kn-service)
*   [Configuring JSON Web Token authentication for Knative services](/serverless/knative-serving/config-access/serverless-ossm-with-kourier-jwt#serverless-ossm-with-kourier-jwt)