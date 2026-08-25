{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Collecting debugging data for a support case {id="collecting-debugging-data-for-support"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "collecting-debugging-data-for-support" %}

When you open a support case, you must provide debugging information about your cluster to the Red Hat Support team. You can use the `must-gather` tool to collect diagnostic information for project-level resources, cluster-level resources, and {{ gitops_title }} components. 


:::note

For prompt support, provide diagnostic information for both {{ product_title }} and {{ gitops_title }}.

:::


{% leveloffset +1 %}{% include "./modules/about-must-gather.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/collecting-gitops-debugging-data.md" %}{% endleveloffset %}