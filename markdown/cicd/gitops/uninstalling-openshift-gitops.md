{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling OpenShift GitOps {id="uninstalling-openshift-gitops"}
{%- set context = "uninstalling-openshift-gitops" %}

Uninstalling the {{ gitops_title }} Operator is a two-step process:

1.  Delete the Argo CD instances that were added under the default namespace of the {{ gitops_title }} Operator.
1.  Uninstall the {{ gitops_title }} Operator.

Uninstalling only the Operator will not remove the Argo CD instances created.

{% leveloffset +1 %}{% include "./modules/go-deleting-argocd-instance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/go-uninstalling-gitops-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   You can learn more about uninstalling Operators on {{ product_title }} in the [Deleting Operators from a cluster](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster) section.