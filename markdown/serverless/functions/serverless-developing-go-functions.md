{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Developing Go functions {id="serverless-developing-go-functions"}
{%- set context = "serverless-developing-go-functions" %}

{%- set FeatureName = "{{ FunctionsProductName }} with Go" %}
{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

After you have [created a Go function project](/serverless/functions/serverless-functions-getting-started#serverless-create-func-kn_serverless-functions-getting-started), you can modify the template files provided to add business logic to your function. This includes configuring function invocation and the returned headers and status codes.

## Prerequisites {id="prerequisites_serverless-developing-go-functions"}

*   Before you can develop functions, you must complete the steps in [Setting up {{ FunctionsProductName }}](/serverless/functions/serverless-functions-setup#serverless-functions-setup).

{% leveloffset +1 %}{% include "./modules/serverless-go-template.md" %}{% endleveloffset %}

## About invoking Go functions {id="serverless-developing-go-functions-about-invoking"}

When using the Knative (`kn`) CLI to create a function project, you can generate a project that responds to CloudEvents, or one that responds to simple HTTP requests. Go functions are invoked by using different methods, depending on whether they are triggered by an HTTP request or a CloudEvent.

{% leveloffset +2 %}{% include "./modules/serverless-invoking-go-functions-http.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-invoking-go-functions-cloudevent.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-go-function-return-values.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-testing-go-functions.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-developing-go-functions"}

*   [Build](/serverless/functions/serverless-functions-getting-started#serverless-build-func-kn_serverless-functions-getting-started) and [deploy](/serverless/functions/serverless-functions-getting-started#serverless-deploy-func-kn_serverless-functions-getting-started) a function.