{% if context == "rosa-hcp-life-cycle" %}
{%- set rosa_with_hcp = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Limited support status {id="rosa-limited-support_{{ context }}"}

When a cluster transitions to a _Limited Support_ status, Red&#160;Hat no longer proactively monitors the cluster, the SLA is no longer applicable, and credits requested against the SLA are denied. It does not mean that you no longer have product support. In some cases, the cluster can return to a fully-supported status if you remediate the violating factors. However, in other cases, you might have to delete and recreate the cluster. {._abstract}

A cluster might transition to a Limited Support status for many reasons, including the following scenarios:

{% if not openshift_rosa_hcp %}

If you do not upgrade a cluster to a supported version before the end-of-life date
:   Red&#160;Hat does not make any runtime or SLA guarantees for versions after their end-of-life date. To receive continued support, upgrade the cluster to a supported version before the end-of-life date. If you do not upgrade the cluster before the end-of-life date, the cluster transitions to a Limited Support status until it is upgraded to a supported version.

    Red&#160;Hat provides commercially reasonable support to upgrade from an unsupported version to a supported version. However, if a supported upgrade path is no longer available, you might have to create a new cluster and migrate your workloads.
{% endif %}


If you remove or replace any native {{ product_title }} components or any other component that is installed and managed by Red&#160;Hat
:   If cluster administrator permissions were used, Red&#160;Hat is not responsible for any of your or your authorized users’ actions, including those that affect infrastructure services, service availability, or data loss. If Red&#160;Hat detects any such actions, the cluster might transition to a Limited Support status. Red&#160;Hat notifies you of the status change and you should either revert the action or create a support case to explore remediation steps that might require you to delete and recreate the cluster.

If you have questions about a specific action that might cause a cluster to transition to a Limited Support status or need further assistance, open a support ticket.

{% if context == "rosa-hcp-life-cycle" %}
{%- set rosa_with_hcp = "" -%}
{% endif %}