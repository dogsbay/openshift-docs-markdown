{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{% include "./_attributes/common-attributes.md" %}
# Architecture models {id="rosa-architecture-models"}
{%- set context = "rosa-architecture-models" %}

{{ product_title }} has a classic architecture cluster topology meaning the control plane and the worker nodes are deployed in the customer’s AWS account.

{% leveloffset +1 %}{% include "./modules/rosa-hcp-classic-comparison.md" %}{% endleveloffset %}

**Additional resources**

{% if openshift_rosa_hcp %}
*   [Regions and availability zones](/rosa_architecture/rosa_policy_service_definition/rosa-hcp-service-definition#rosa-sdpolicy-regions-az_rosa-hcp-service-definition)

{% endif %}

*   [Security and regulation compliance](/rosa_architecture/rosa_policy_service_definition/rosa-policy-process-security#rosa-policy-security-regulation-compliance_rosa-policy-process-security)

{% if openshift_rosa_hcp %}
{% leveloffset +1 %}{% include "./modules/rosa-hcp-architecture.md" %}{% endleveloffset %}
{% endif %}

{% if openshift_rosa %}
{% leveloffset +1 %}{% include "./modules/rosa-architecture.md" %}{% endleveloffset %}
{% endif %}

{% leveloffset +2 %}{% include "./modules/osd-aws-privatelink-architecture.md" %}{% endleveloffset %}
{% leveloffset +2 %}{% include "./modules/rosa-architecture-local-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring machine pools in Local Zones](/rosa_cluster_admin/rosa_nodes/rosa-nodes-machinepools-configuring)