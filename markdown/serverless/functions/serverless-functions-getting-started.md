{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Getting started with functions {id="serverless-functions-getting-started"}
{%- set context = "serverless-functions-getting-started" %}
{% include "./_attributes/common-attributes.md" %}

Function lifecycle management includes creating, building, and deploying a function. Optionally, you can also test a deployed function by invoking it. You can do all of these operations on {{ ServerlessProductName }} using the `kn func` tool.

## Prerequisites {id="prerequisites_serverless-functions-getting-started"}

Before you can complete the following procedures, you must ensure that you have completed all of the prerequisite tasks in [Setting up {{ FunctionsProductName }}](/serverless/functions/serverless-functions-setup#serverless-functions-setup).

{% leveloffset +1 %}{% include "./modules/serverless-create-func-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kn-func-run.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-build-func-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-deploy-func-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kn-func-invoke.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kn-func-delete.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
## Additional resources {id="additional-resources_serverless-functions-getting-started" ._additional-resources}
*   [Exposing a default registry manually](/registry/securing-exposing-registry#securing-exposing-registry)
*   link:https://plugins.jetbrains.com/plugin/16476-knative\--serverless-functions-by-red-hat[Marketplace page for the Intellij Knative plugin]
*   [Marketplace page for the Visual Studio Code Knative plugin](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-knative&utm_source=VSCode.pro&utm_campaign=AhmadAwais)
*   [Creating applications using the Developer perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-the-developer-perspective)
{% endif %}

## Next steps {id="next-steps_serverless-functions-getting-started"}

*   See [Using functions with Knative Eventing](/serverless/functions/serverless-functions-eventing#serverless-functions-eventing)