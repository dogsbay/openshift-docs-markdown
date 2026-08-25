{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Scale-to-zero {id="serverless-autoscaling-scale-to-zero"}
{%- set context = "serverless-autoscaling-scale-to-zero" %}

Knative Serving provides automatic scaling, or _autoscaling_, for applications to match incoming demand.

{% leveloffset +1 %}{% include "./modules/serverless-enable-scale-to-zero.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-scale-to-zero-grace-period.md" %}{% endleveloffset %}