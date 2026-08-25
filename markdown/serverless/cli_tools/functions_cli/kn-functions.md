{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# kn functions commands {id="kn-functions"}
{%- set context = "kn-functions" %}

{% leveloffset +1 %}{% include "./modules/serverless-create-func-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kn-func-run.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-build-func-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-deploy-func-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/functions-list-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/describe-function-kn.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kn-func-invoke.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-kn-func-invoke-reference.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-kn-func-delete.md" %}{% endleveloffset %}