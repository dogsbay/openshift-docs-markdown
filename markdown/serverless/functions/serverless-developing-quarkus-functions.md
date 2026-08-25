{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Developing Quarkus functions {id="serverless-developing-quarkus-functions"}
{%- set context = "serverless-developing-quarkus-functions" %}
{% include "./_attributes/common-attributes.md" %}

After you have [created a Quarkus function project](/serverless/functions/serverless-functions-getting-started#serverless-create-func-kn_serverless-functions-getting-started), you can modify the template files provided to add business logic to your function. This includes configuring function invocation and the returned headers and status codes.

## Prerequisites {id="prerequisites_serverless-developing-quarkus-functions"}

*   Before you can develop functions, you must complete the setup steps in [Setting up {{ FunctionsProductName }}](/serverless/functions/serverless-functions-setup#serverless-functions-setup).

{% leveloffset +1 %}{% include "./modules/serverless-quarkus-template.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-invoking-quarkus-functions.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-quarkus-cloudevent-attributes.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-quarkus-function-return-values.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-functions-quarkus-return-value-types.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-testing-quarkus-functions.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-developing-quarkus-functions"}

*   [Build](/serverless/functions/serverless-functions-getting-started#serverless-build-func-kn_serverless-functions-getting-started) and [deploy](/serverless/functions/serverless-functions-getting-started#serverless-deploy-func-kn_serverless-functions-getting-started) a function.