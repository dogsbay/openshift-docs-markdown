{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using functions with Knative Eventing {id="serverless-functions-eventing"}
{%- set context = "serverless-functions-eventing" %}

Functions are deployed as Knative services on an {{ product_title }} cluster. You can connect functions to Knative Eventing components so that they can receive incoming events.

{% leveloffset +1 %}{% include "./modules/serverless-connect-func-source-odc.md" %}{% endleveloffset %}