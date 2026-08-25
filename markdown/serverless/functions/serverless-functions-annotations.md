{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Adding annotations to functions {id="serverless-functions-attributes"}
{%- set context = "serverless-functions-annotations" %}

You can add Kubernetes annotations to a deployed Serverless function. Annotations enable you to attach arbitrary metadata to a function, for example, a note about the function’s purpose. Annotations are added to the `annotations` section of the `func.yaml` configuration file.

There are two limitations of the function annotation feature:

*   After a function annotation propagates to the corresponding Knative service on the cluster, it cannot be removed from the service by deleting it from the `func.yaml` file. You must remove the annotation from the Knative service by modifying the YAML file of the service directly, or by using the {{ product_title }} web console.
*   You cannot set annotations that are set by Knative, for example, the `autoscaling` annotations.

{% leveloffset +1 %}{% include "./modules/serverless-functions-adding-annotations.md" %}{% endleveloffset %}