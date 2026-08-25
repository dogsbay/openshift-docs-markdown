{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About {{ FunctionsProductName }} {id="serverless-functions-about"}
{%- set context = "serverless-functions-about" %}

{{ FunctionsProductName }} enables developers to create and deploy stateless, event-driven functions as a Knative service on {{ product_title }}. The `kn func` CLI is provided as a plugin for the Knative `kn` CLI. You can use the `kn func` CLI to create, build, and deploy the container image as a Knative service on the cluster.

## Included runtimes {id="serverless-functions-about-runtimes"}

{{ FunctionsProductName }} provides templates that can be used to create basic functions for the following runtimes:

*   [Quarkus](/serverless/functions/serverless-developing-quarkus-functions#serverless-developing-quarkus-functions)
*   [Node.js](/serverless/functions/serverless-developing-nodejs-functions#serverless-developing-nodejs-functions)
*   [TypeScript](/serverless/functions/serverless-developing-typescript-functions#serverless-developing-typescript-functions)

## Next steps {id="next-steps_serverless-functions-about"}

*   [Getting started with functions](/serverless/functions/serverless-functions-getting-started#serverless-functions-getting-started).