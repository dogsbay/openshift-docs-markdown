{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Scale-to-zero {id="serverless-autoscaling-scale-to-zero"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-autoscaling-scale-to-zero" %}

Knative Serving provides automatic scaling, or _autoscaling_, for applications to match incoming demand.

{% leveloffset +1 %}{% include "./modules/serverless-enable-scale-to-zero.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-scale-to-zero-grace-period.md" %}{% endleveloffset %}