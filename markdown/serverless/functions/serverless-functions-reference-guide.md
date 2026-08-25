{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Functions development reference guide {id="serverless-functions-reference-guide"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-functions-reference-guide" %}

{{ FunctionsProductName }} provides templates that can be used to create basic functions. A template initiates the function project boilerplate and prepares it for use with the `kn func` tool. Each function template is tailored for a specific runtime and follows its conventions. With a template, you can initiate your function project automatically.

Templates for the following runtimes are available:

*   [Node.js](/serverless/functions/serverless-developing-nodejs-functions#serverless-developing-nodejs-functions)
*   [Quarkus](/serverless/functions/serverless-developing-quarkus-functions#serverless-developing-quarkus-functions)
*   [TypeScript](/serverless/functions/serverless-developing-typescript-functions#serverless-developing-typescript-functions)

{% leveloffset +1 %}{% include "./modules/serverless-nodejs-context-object-reference.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-typescript-context-object-reference.md" %}{% endleveloffset %}