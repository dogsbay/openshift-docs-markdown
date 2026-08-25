{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling {{ pipelines_shortname }} {id="uninstalling-pipelines"}
{%- set context = "uninstalling-pipelines" %}

Cluster administrators can uninstall the {{ pipelines_title }} Operator by performing the following steps:

1.  Delete the Custom Resources (CRs) that were added by default when you installed the {{ pipelines_title }} Operator.
1.  Delete the CRs of the optional components such as {{ tekton_hub }} that depend on the Operator.

    :::caution

    If you uninstall the Operator without removing the CRs of optional components, you cannot remove them later.
    
    :::

1.  Uninstall the {{ pipelines_title }} Operator.

Uninstalling only the Operator will not remove the {{ pipelines_title }} components created by default when the Operator is installed.

{% leveloffset +1 %}{% include "./modules/op-deleting-the-pipelines-component-and-custom-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-uninstalling-the-pipelines-operator.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   You can learn more about uninstalling Operators on {{ product_title }} in the [deleting Operators from a cluster](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-a-cluster) section.