{%- set _mod_docs_content_type = "ASSEMBLY" %}
# On-cluster function building and deploying {id="serverless-functions-on-cluster-builds"}
{%- set context = "serverless-functions-on-cluster-builds" %}
{% include "./_attributes/common-attributes.md" %}

Instead of building a function locally, you can build a function directly on the cluster. When using this workflow on a local development machine, you only need to work with the function source code. This is useful, for example, when you cannot install on-cluster function building tools, such as docker or podman.

{% leveloffset +1 %}{% include "./modules/serverless-functions-creating-on-cluster-builds.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/serverless-functions-specifying-function-revision.md" %}{% endleveloffset %}