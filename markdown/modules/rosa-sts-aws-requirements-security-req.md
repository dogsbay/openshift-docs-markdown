{%- set _mod_docs_content_type = "CONCEPT" %}
# Security requirements {id="rosa-security-requirements_{{ context }}"}

Before deploying your cluster, ensure that you plan for your egresses and ingresses to have access to certain domains and IP addresses. {._abstract}

*   Red&#160;Hat must have ingress access to EC2 hosts and the API server from allow-listed IP addresses.
*   Red&#160;Hat must have egress allowed to the domains documented in the "AWS Firewall prerequisites" section. 
{%- if openshift_rosa_hcp %}
Clusters with {{ egress_zero }} are exempt from this requirement.
{% endif %}