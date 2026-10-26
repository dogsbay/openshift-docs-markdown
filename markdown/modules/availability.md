{%- set _mod_docs_content_type = "CONCEPT" %}
# Availability {id="availability_{{ context }}"}

Availability and disaster avoidance are important aspects of any application platform. Although {{ product_title }} provides many protections against failures at several levels, customer-deployed applications must be configured for high availability. {._abstract}

**Additional resources**
{._additional-resources}

{% if openshift_rosa_hcp %}
*   [Node lifecycle](/rosa_architecture/rosa_policy_service_definition/rosa-hcp-service-definition#rosa-sdpolicy-node-lifecycle_rosa-hcp-service-definition)
{% endif %}
{% if openshift_rosa %}
*   [Node lifecycle](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-node-lifecycle_rosa-service-definition)
{% endif %}