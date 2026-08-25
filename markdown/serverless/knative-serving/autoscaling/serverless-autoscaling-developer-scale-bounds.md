{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Scale bounds {id="serverless-autoscaling-developer-scale-bounds"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-serving-scale-bounds" %}

Scale bounds determine the minimum and maximum numbers of replicas that can serve an application at any given time. You can set scale bounds for an application to help prevent cold starts or control computing costs.

{% leveloffset +1 %}{% include "./modules/serverless-autoscaling-developer-minscale.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-autoscaling-minscale-kn.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/serverless-autoscaling-developer-maxscale.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/serverless-autoscaling-maxscale-kn.md" %}{% endleveloffset %}