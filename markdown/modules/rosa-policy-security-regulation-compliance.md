{%- set _mod_docs_content_type = "CONCEPT" %}
# Security and regulation compliance {id="rosa-policy-security-regulation-compliance_{{ context }}"}

Security and regulation compliance includes tasks such as the implementation of security controls and compliance certification.

## Data classification {id="rosa-policy-data-classification_{{ context }}"}
Red&#160;Hat defines and follows a data classification standard to determine the sensitivity of data and highlight inherent risk to the confidentiality and integrity of that data while it is collected, used, transmitted, stored, and processed. Customer-owned data is classified at the highest level of sensitivity and handling requirements.

## Data management {id="rosa-policy-data-management_{{ context }}"}
{{ product_title }} (ROSA) uses AWS Key Management Service (KMS) to help securely manage keys for encrypted data. These keys are used for control plane, infrastructure, and worker data volumes that are encrypted by default. Persistent volumes (PVs) for customer applications also use AWS KMS for key management.

When a customer deletes their ROSA cluster, all cluster data is permanently deleted, including control plane data volumes and customer application data volumes, such as persistent volumes (PV).

## Vulnerability management {id="rosa-policy-vulnerability-management_{{ context }}"}
Red&#160;Hat performs periodic vulnerability scanning of ROSA using industry standard tools. Identified vulnerabilities are tracked to their remediation according to timelines based on severity. Vulnerability scanning and remediation activities are documented for verification by third-party assessors in the course of compliance certification audits.

## Network security {id="rosa-policy-network-security_{{ context }}"}

### Firewall and DDoS protection {id="rosa-policy-firewall-ddos-protection_{{ context }}"}
Each ROSA cluster is protected by a secure network configuration using firewall rules for AWS Security Groups. ROSA customers are also protected against DDoS attacks with [AWS Shield Standard](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html).

### Private clusters and network connectivity {id="rosa-policy-private-clusters-network-connectivity_{{ context }}"}
Customers can optionally configure their ROSA cluster endpoints, such as web console, API, and application router, to be made private so that the cluster control plane and applications are not accessible from the Internet. Red&#160;Hat SRE still requires Internet-accessible endpoints that are protected with IP allow-lists.

AWS customers can configure a private network connection to their ROSA cluster through technologies such as AWS VPC peering, AWS VPN, or AWS Direct Connect.

### Cluster network access controls {id="rosa-policy-cluster-network-access_{{ context }}"}
Fine-grained network access control rules can be configured by customers, on a per-project basis, using `NetworkPolicy` objects and the
{%- if openshift_rosa_hcp %}
OVN-Kubernetes CNI.
{% endif %}
{% if not openshift_rosa_hcp %}
OpenShift SDN.
{% endif %}

## Penetration testing {id="rosa-policy-penetration-testing_{{ context }}"}
Red&#160;Hat performs periodic penetration tests against ROSA. Tests are performed by an independent internal team by using industry standard tools and best practices.

Any issues that may be discovered are prioritized based on severity. Any issues found belonging to open source projects are shared with the community for resolution.

## Compliance {id="rosa-policy-compliance_{{ context }}"}
{{ product_title }} follows common industry best practices for security and controls. The certifications are outlined in the following table.

{% if openshift_rosa_hcp %}
**Security and control certifications for {{ product_title }}**

| Compliance | {{ hcp_title_first }} |
| --- |
| FIPS |
| Yes |
| HIPAA Qualified^[1]^ |
| Yes |
| ISO 27001 |
| Yes |
| ISO 27017 |
| Yes |
| ISO 27018 |
| Yes |
| PCI DSS 4.0 |
| Yes |
| SOC 1 Type 2 |
| Yes |
| SOC 2 Type 2 |
| Yes |
| SOC 3 |
| Yes |
| FedRAMP High^[2]^ |
| Yes |
1.  For more information about Red Hat’s HIPAA Qualified ROSA offerings, see the [HIPAA Overview](https://access.redhat.com/articles/compliance_activities_and_gov_standards#hipaa-overview-13).
1.  For more information about ROSA on GovCloud, see  [FedRAMP Marketplace ROSA Agency](https://marketplace.fedramp.gov/products/FR2102031769).

{% endif %}

{% if not openshift_rosa_hcp %}
**Security and control certifications for {{ product_title }}**

| Compliance | {{ product_title }} (ROSA) | {{ hcp_title_first }} |
| --- |
| HIPAA Qualified^[1]^ |
| Yes |
| Yes |
| ISO 27001 |
| Yes |
| Yes |
| ISO 27017 |
| Yes |
| Yes |
| ISO 27018 |
| Yes |
| Yes |
| PCI DSS 4.0 |
| Yes |
| Yes |
| SOC 1 Type 2 |
| Yes |
| Yes |
| SOC 2 Type 2 |
| Yes |
| Yes |
| SOC 3 |
| Yes |
| Yes |
| FedRAMP High^[2]^ |
| Yes ([GovCloud](https://aws.amazon.com/govcloud-us/?whats-new-ess.sort-by=item.additionalFields.postDateTime&whats-new-ess.sort-order=desc) requisite) |
| Yes |
1.  For more information about Red Hat’s HIPAA Qualified ROSA offerings, see the [HIPAA Overview](https://access.redhat.com/articles/compliance_activities_and_gov_standards#hipaa-overview-13).
1.  For more information about ROSA on GovCloud, see  [FedRAMP Marketplace ROSA Agency](https://marketplace.fedramp.gov/products/FR2102031769).

{% endif %}