{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Removing the {{ ServerlessOperatorName }} {id="removing-serverless-operator"}
{%- set context = "removing-serverless-operator" %}

After you have removed Knative Serving and Knative Eventing, you can remove the {{ ServerlessOperatorName }}. You can do this by using the {{ product_title }} web console or the `oc` CLI.

{% leveloffset +1 %}{% include "./modules/olm-deleting-operators-from-a-cluster-using-web-console.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/olm-deleting-operators-from-a-cluster-using-cli.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/olm-refresh-subs.md" %}{% endleveloffset %}