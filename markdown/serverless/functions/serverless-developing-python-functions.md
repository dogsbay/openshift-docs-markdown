{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Developing Python functions {id="serverless-developing-python-functions"}
{%- set context = "serverless-developing-python-functions" %}

{%- set FeatureName = "{{ FunctionsProductName }} with Python" %}
{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

After you have [created a Python function project](/serverless/functions/serverless-functions-getting-started#serverless-create-func-kn_serverless-functions-getting-started), you can modify the template files provided to add business logic to your function. This includes configuring function invocation and the returned headers and status codes.

## Prerequisites {id="prerequisites_serverless-developing-python-functions"}

*   Before you can develop functions, you must complete the steps in [Setting up {{ FunctionsProductName }}](/serverless/functions/serverless-functions-setup#serverless-functions-setup).

{% leveloffset +1 %}{% include "./modules/serverless-python-template.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-invoking-python-functions.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-python-function-return-values.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-testing-python-functions.md" %}{% endleveloffset %}

## Next steps {id="next-steps_serverless-developing-python-functions"}

*   [Build](/serverless/functions/serverless-functions-getting-started#serverless-build-func-kn_serverless-functions-getting-started) and [deploy](/serverless/functions/serverless-functions-getting-started#serverless-deploy-func-kn_serverless-functions-getting-started) a function.