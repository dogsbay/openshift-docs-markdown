{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Developing Node.js functions {id="serverless-developing-nodejs-functions"}
{%- set context = "serverless-developing-nodejs-functions" %}

After you have [created a Node.js function project](/serverless/functions/serverless-functions-getting-started#serverless-create-func-kn_serverless-functions-getting-started), you can modify the template files provided to add business logic to your function. This includes configuring function invocation and the returned headers and status codes.

## Prerequisites {id="prerequisites_serverless-developing-nodejs-functions"}

*   Before you can develop functions, you must complete the steps in [Setting up {{ FunctionsProductName }}](/serverless/functions/serverless-functions-setup#serverless-functions-setup).

{% leveloffset +1 %}{% include "./modules/serverless-nodejs-template.md" %}{% endleveloffset %}

## About invoking Node.js functions {id="serverless-developing-nodejs-functions-about-invoking"}

When using the Knative (`kn`) CLI to create a function project, you can generate a project that responds to CloudEvents, or one that responds to simple HTTP requests. CloudEvents in Knative are transported over HTTP as a POST request, so both function types listen for and respond to incoming HTTP events.

Node.js functions can be invoked with a simple HTTP request. When an incoming request is received, functions are invoked with a `context` object as the first parameter.

{% leveloffset +2 %}{% include "./modules/serverless-nodejs-functions-context-objects.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-nodejs-function-return-values.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-testing-nodejs-functions.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-developing-nodejs-functions"}

*   See the [Node.js context object reference](/serverless/functions/serverless-functions-reference-guide#serverless-nodejs-context-object-reference_serverless-functions-reference-guide) documentation.
*   [Build](/serverless/functions/serverless-functions-getting-started#serverless-build-func-kn_serverless-functions-getting-started) and [deploy](/serverless/functions/serverless-functions-getting-started#serverless-deploy-func-kn_serverless-functions-getting-started) a function.