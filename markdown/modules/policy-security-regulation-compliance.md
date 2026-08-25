{%- set _mod_docs_content_type = "REFERENCE" %}
# Security and regulation compliance {id="policy-security-regulation-compliance_{{ context }}"}

Security and regulation compliance includes tasks, such as the implementation of security controls and compliance certification. {._abstract}

## Data classification {id="data-classification_{{ context }}"}
Red Hat defines and follows a data classification standard to determine the sensitivity of data and highlight inherent risk to the confidentiality and integrity of that data while it is collected, used, transmitted stored, and processed. Customer-owned data is classified at the highest level of sensitivity and handling requirements.

## Data management {id="data-management_{{ context }}"}
{{ product_title }} uses cloud provider services such as AWS Key Management Service (KMS) and {{ gcp_full }} KMS to help securely manage encryption keys for persistent data. These keys are used for encrypting all control plane, infrastructure, and worker node root volumes. Customers can specify their own KMS key for encrypting root volumes at installation time. Persistent volumes (PVs) also use KMS for key management. Customers can specify their own KMS key for encrypting PVs by creating a new `StorageClass` referencing the KMS key Amazon Resource Name (ARN) or ID.

When a customer deletes their {{ product_title }} cluster, all cluster data is permanently deleted, including control plane data volumes and customer application data volumes, such a persistent volumes (PV).

## Vulnerability management {id="vulnerability-management_{{ context }}"}
Red Hat performs periodic vulnerability scanning of {{ product_title }} using industry standard tools. Identified vulnerabilities are tracked to their remediation according to timelines based on severity. Vulnerability scanning and remediation activities are documented for verification by third-party assessors in the course of compliance certification audits.

## Network security: Firewall and DDoS protection {id="firewall_{{ context }}"}
Each {{ product_title }} cluster is protected by a secure network configuration at the cloud infrastructure level using firewall rules (AWS Security Groups or {{ gcp_full }} Compute Engine firewall rules). {{ product_title }} customers on AWS are also protected against DDoS attacks with [AWS Shield Standard](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html).
Similarly, all {{ gcp_short }} load balancers and public IP addresses used by {{ product_title }} on {{ gcp_short }} are protected against DDoS attacks with [{{ gcp_full }} Armor Standard](https://cloud.google.com/armor/docs/managed-protection-overview).

## Network security: Component and traffic flow encryption {id="Component-traffic-flow-encryption_{{ context }}"}
{{ product_title }} components are configured to use Transport Layer Security (TLS) for secure communication, prioritizing TLS 1.3 for its performance and security enhancements. For components not yet supporting TLS 1.3, robust TLS 1.2 cipher suites are configured. This comprehensive TLS configuration ensures the encryption of various traffic flows within and to the OpenShift Dedicated environment. For more information, refer to [TLS configuration on OpenShift](https://access.redhat.com/articles/5348961#openshift-4-10) and [Appendix 4(Online Subscription Services).](https://www.redhat.com/en/about/appendices)

*   Starting with version 4.7, the OpenShift API server (port 6443), kube-controller (port 10257), and kube-scheduler (port 10259) are configured to use TLS 1.3 with a reduced set of secure cipher suites.
*   The Web Console and etcd also use secure default cipher suites. As OpenShift is updated, older and more vulnerable cipher options are deprecated for these components.
*   The Kubelet (ports 10248, 10250) secures node-level operations using TLS 1.3, while also allowing the explicit configuration of specific TLS 1.2 cipher suites.
*   Ingress traffic is secured by the {{ product_title }} Router through a robust TLS configuration. By default, it uses a hardened set of TLS 1.2 cipher suites, and in OpenShift 4.6 and later, it also supports TLS 1.3 for enhanced security.
*   By default, OpenShift 4 enables secure TLS configurations on numerous internal services to protect their communications. These services include the Machine Config Server (ports 22623-22624), Node Exporter (ports 9100-9101), and Kube RBAC Proxy (port 9192).

## Network security: Private clusters and network connectivity {id="private-clusters_{{ context }}"}
Customers can optionally configure their {{ product_title }} cluster endpoints (web console, API, and application router) to be made private so that the cluster control plane or applications are not accessible from the Internet.

For AWS, customers can configure a private network connection to their {{ product_title }} cluster through AWS VPC peering, AWS VPN, or AWS Direct Connect.

## Network security: Cluster network access controls {id="network-access-controls_{{ context }}"}
Fine-grained network access control rules can be configured by customers per project.

## Penetration testing {id="penetration-testing_{{ context }}"}
Red Hat performs periodic penetration tests against {{ product_title }}. Tests are performed by an independent internal team using industry standard tools and best practices.

Any issues that are discovered are prioritized based on severity. Any issues found belonging to open source projects are shared with the community for resolution.

## Compliance {id="compliance_{{ context }}"}
{{ product_title }} follows common industry best practices for security and controls. The certifications are outlined in the following table.

**Security and control certifications for {{ product_title }}**

| Compliance | {{ product_title }} on AWS | {{ product_title }} on {{ gcp_short }} |
| --- |
| HIPAA Qualified |
| Yes (Only Customer Cloud Subscriptions) |
| Yes (Only Customer Cloud Subscriptions) |
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

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Red Hat Subprocessor List](https://access.redhat.com/articles/5528091)