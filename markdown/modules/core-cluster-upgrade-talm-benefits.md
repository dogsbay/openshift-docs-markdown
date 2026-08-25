{%- set _mod_docs_content_type = "CONCEPT" %}
# Benefits of {{ cgu_operator }} for large-scale deployments {id="core-cluster-upgrade-talm-benefits_{{ context }}"}

{{ cgu_operator_first }} is specifically designed for large-scale deployments with many clusters across many sites. {._abstract}

With {{ cgu_operator }}, you can do the following:

*   Update hundreds or thousands of clusters from a central hub.
*   Test updates on a single target cluster before rolling out to the fleet.
*   Schedule updates during planned downtime using blocking custom resources.
*   Manage update policies through existing GitOps tools, such as Argo CD, and the same workflows and approval processes you already use for cluster configuration.