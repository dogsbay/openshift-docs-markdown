{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Review your cluster notifications {id="mos-tshoot-cluster-notifications"}

{%- set context = "tshoot-cluster-notifications" %}

Use cluster notifications to help you resolve cluster problems. Cluster notifications are messages about the status, health, or performance of your cluster. Red Hat Site Reliability Engineering (SRE) uses these notifications to communicate about the health and problem resolution of your clusters. {._abstract}

{% leveloffset +1 %}{% include "./modules/managed-cluster-notification-view-in-hcc.md" %}{% endleveloffset %}