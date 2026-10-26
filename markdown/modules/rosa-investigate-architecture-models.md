{%- set _mod_docs_content_type = "CONCEPT" %}
# Architecture models {id="rosa-hcp-investigate-architecture-models_{{ context }}"}

{{ product_title }} uses a hosted control plane architecture where the control plane is hosted in a Red&#160;Hat account and the worker nodes are deployed in the customer’s AWS account. Learn about the architecture models, comparisons, and deployment options. {._abstract}

**Additional resources**
{._additional-resources}

*   [AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html)
{%- if openshift_rosa_hcp %}
*   [Regions and availability zones](/rosa_architecture/rosa_policy_service_definition/rosa-hcp-service-definition#rosa-sdpolicy-regions-az_rosa-hcp-service-definition)
{%- endif %}
{%- if openshift_rosa %}
*   [Regions and availability zones](/rosa_architecture/rosa_policy_service_definition/rosa-service-definition#rosa-sdpolicy-regions-az_rosa-service-definition)
*   [Security and regulation compliance](/rosa_architecture/rosa_policy_service_definition/rosa-policy-process-security#rosa-policy-security-regulation-compliance_rosa-policy-process-security)
*   [Configuring machine pools in Local Zones](/rosa_cluster_admin/rosa_nodes/rosa-nodes-machinepools-configuring#rosa-nodes-machinepools-configuring)
{%- endif %}