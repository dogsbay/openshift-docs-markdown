{%- set _mod_docs_content_type = "REFERENCE" %}
# Identity and access management {id="policy-identity-access-management_{{ context }}"}

Most access by Red Hat site reliability engineering (SRE) teams is done by using cluster Operators through automated configuration management. {._abstract}


:::note

{{ product_title }} on {{ GCP }} clusters that are created with the Workload Identify Federation (WIF) authentication type do not use Operators for SRE access. Instead, the required roles necessary for SRE account access are assigned to the sd-sre-platform-gcp-access group as part of the WIF configuration creation and are validated prior to the deployment of the cluster by the {{ cluster_manager }}. For more information about WIF configurations, see _Additional resources_.

:::


## Subprocessors {id="subprocessors_{{ context }}"}
For a list of the available subprocessors, see the [Red Hat Subprocessor List](https://access.redhat.com/articles/5528091) on the Red Hat Customer Portal.

## SRE access to all {{ product_title }} clusters {id="sre-access-all_{{ context }}"}
SREs access {{ product_title }} clusters through a proxy. The proxy mints a service account in an {{ product_title }} cluster for the SREs when they log in. As no identity provider is configured for {{ product_title }} clusters, SREs access the proxy by running a local web console container. SREs do not access the cluster web console directly. SREs must authenticate as individual users to ensure auditability. All authentication attempts are logged to a Security Information and Event Management (SIEM) system.

## Privileged access controls in {{ product_title }} {id="privileged-access_{{ context }}"}
Red Hat SRE adheres to the principle of least privilege when accessing {{ product_title }} and public cloud provider components. There are four basic categories of manual SRE access:

*   SRE admin access through the Red Hat Customer Portal with normal two-factor authentication and no privileged elevation.
*   SRE admin access through the Red Hat corporate SSO with normal two-factor authentication and no privileged elevation.
*   OpenShift elevation, which is a manual elevation using Red Hat SSO. It is fully audited and management approval is required for every operation SREs make.
*   Cloud provider access or elevation, which is a manual elevation for cloud provider console or CLI access. Access is limited to 60 minutes and is fully audited.

Each of these access types has different levels of access to components:

| Component | Typical SRE admin access (Red Hat Customer Portal) | Typical SRE admin access (Red Hat SSO) | OpenShift elevation | Cloud provider access |
| --- |
| {{ cluster_manager }} |
| R/W |
| No access |
| No access |
| No access |
| OpenShift web console |
| No access |
| R/W |
| R/W |
| No access |
| Node operating  system |
| No access |
| A specific list of elevated OS and network permissions. |
| A specific list of elevated OS and network permissions. |
| No access |
| AWS Console |
| No access |
| No access, but this is the account used to request cloud provider access. |
| No access |
| All cloud provider permissions using the SRE identity. |

## SRE access to cloud infrastructure accounts {id="sre-access-cloud-infra_{{ context }}"}
Red Hat personnel do not access cloud infrastructure accounts in the course of routine {{ product_title }} operations. For emergency troubleshooting purposes, Red Hat SRE have well-defined and auditable procedures to access cloud infrastructure accounts.

In AWS, SREs generate a short-lived AWS access token for the `BYOCAdminAccess` user using the AWS Security Token Service (STS). Access to the STS token is audit logged and traceable back to individual users. The `BYOCAdminAccess` has the `AdministratorAccess` IAM policy attached.

In {{ gcp_full }}, SREs access resources after being authenticated against a Red Hat SAML identity provider (IDP). The IDP authorizes tokens that have time-to-live expirations. The issuance of the token is auditable by corporate Red Hat IT and linked back to an individual user.

## Red Hat support access {id="support-access_{{ context }}"}
Members of the Red Hat CEE team typically have read-only access to parts of the cluster. Specifically, CEE has limited access to the core and product namespaces and does not have access to the customer namespaces.

| Role | Core namespace | Layered product namespace | Customer namespace | Cloud infrastructure account^*^ |
| --- |
| OpenShift SRE |
| Read: All Write: Very Limited ^[1]^ |
| Read: All Write: None |
| Read: None^[2]^ Write: None |
| Read: All ^[3]^ Write: All ^[3]^ |
| CEE |
| Read: All Write: None |
| Read: All Write: None |
| Read: None^[2]^ Write: None |
| Read: None Write: None |
| Customer administrator |
| Read: None Write: None |
| Read: None Write: None |
| Read: All Write: All |
| Read: Limited^[4]^ Write: Limited^[4]^ |
| Customer user |
| Read: None Write: None |
| Read: None Write: None |
| Read: Limited^[5]^ Write: Limited^[5]^ |
| Read: None Write: None |
| Everybody else |
| Read: None Write: None |
| Read: None Write: None |
| Read: None Write: None |
| Read: None Write: None |
Cloud Infrastructure Account refers to the underlying AWS or {{ gcp_full }} account

1.  Limited to addressing common use cases such as failing deployments, upgrading a cluster, and replacing bad worker nodes.
1.  Red Hat associates have no access to customer data by default.
1.  SRE access to the cloud infrastructure account is a "break-glass" procedure for exceptional troubleshooting during a documented incident.
1.  Customer administrator has limited access to the cloud infrastructure account console through Cloud Infrastructure Access.
1.  Limited to what is granted through RBAC by the customer administrator, as well as namespaces created by the user.

## Customer access {id="customer-access_{{ context }}"}
Customer access is limited to namespaces created by the customer and permissions that are granted using RBAC by the customer administrator role. Access to the underlying infrastructure or product namespaces is generally not permitted without `cluster-admin` access. More information on customer access and authentication can be found in the Understanding Authentication section of the documentation.

## Access approval and review {id="access-approval_{{ context }}"}
New SRE user access requires management approval. Separated or transferred SRE accounts are removed as authorized users through an automated process. Additionally, SRE performs periodic access review including management sign-off of authorized user lists.