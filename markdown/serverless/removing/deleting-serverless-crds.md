{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deleting {{ ServerlessProductName }} custom resource definitions {id="deleting-serverless-crds"}
{%- set context = "deleting-serverless-crds" %}

After uninstalling the {{ ServerlessProductName }}, the Operator and API custom resource definitions (CRDs) remain on the cluster. You can use the following procedure to remove the remaining CRDs.


:::important

Removing the Operator and API CRDs also removes all resources that were defined by using them, including Knative services.

:::


{% leveloffset +1 %}{% include "./modules/serverless-deleting-crds.md" %}{% endleveloffset %}