{%- set _mod_docs_content_type = "PROCEDURE" %}

# Required customer procedure {id="ccs-gcp-customer-procedure_{{ context }}"}

The Customer Cloud Subscription (CCS) model allows Red&#160;Hat to deploy and manage {{ product_title }} into a customer’s {{ gcp_first }} project. Red&#160;Hat requires several prerequisites to be completed before providing these services.

:::note

The following requirements in this topic apply to {{ product_title }} on {{ GCP }} clusters created using both the Workload Identity Federation (WIF) and service account authentication types.
Red&#160;Hat recommends using WIF as the authentication type for installing and interacting with an {{ product_title }} cluster deployed on {{ gcp_short }} because WIF provides enhanced security.

For information about creating a cluster using the WIF authentication type, see _Additional resources_.

For additional requirements that apply to the WIF authentication type only, see _Workload Identity Federation authentication type procedure_.
For additional requirements that apply to the service account authentication type only, see _Service account authentication type procedure_.

:::


**Prerequisites**

Before using {{ product_title }} in your {{ gcp_short }} project, confirm that the following organizational policy constraints are configured correctly where applicable:

*   `constraints/iam.allowedPolicyMemberDomains`
    *   This policy constraint is supported only if Red&#160;Hat’s Directory Customer ID’s `C02k0l5e8` and `C04j7mbwl` are included in the allowlist.
*   `constraints/compute.restrictLoadBalancerCreationForTypes`
    *   This organization policy constraint restricts the types of {{ GCP }} load balancer types that can be created within a project. Certain load balancer types are required depending on the type of {{ product_title }} cluster you are creating.
        *   For private Workload Identity Federation (WIF)-enabled {{ product_title }} clusters with {{ gcp_short }} Private Service Connect (PSC), you must ensure the `INTERNAL_TCP_UDP` load balancer type is included in your organization’s allowlist or excluded from the denylist.
        *   For public WIF-enabled {{ product_title }} clusters, you must ensure the `INTERNAL_TCP_UDP`, `EXTERNAL_TCP_PROXY`, and `EXTERNAL_NETWORK_TCP_UDP` load balancer types are permitted in your organization’s allowlist or excluded from the denylist.

            :::important

            Although the `EXTERNAL_NETWORK_TCP_UDP` load balancer type is not required when creating a private cluster with PSC, disallowing it with this constraint will prevent the cluster from being able to create externally accessible load balancers.
            
            :::

*   `constraints/compute.requireShieldedVm`
    *   This policy constraint is supported only if the cluster is created with **Enable Secure Boot support for Shielded VMs** selected during the initial cluster creation.
*   `constraints/compute.vmExternalIpAccess`
    *   This policy constraint is supported only when creating a private cluster with {{ gcp_short }} Private Service Connect (PSC). For all other cluster types, this policy constraint is supported only after cluster creation.
*   `constraints/compute.trustedImageProjects`
    *   This policy constraint is supported only when the projects `redhat-marketplace-public`, `rhel-cloud`, and `rhcos-cloud` are included in the allowlist. If this policy constraint is enabled and these projects are not included in the allowlist, cluster creation will fail.

For more information about configuring {{ gcp_short }} organization policy constraints, see [Organization policy constraints](https://cloud.google.com/resource-manager/docs/organization-policy/org-policy-constraints).

**Procedure**

1.  [Create a {{ gcp_full }} project](https://cloud.google.com/resource-manager/docs/creating-managing-projects) to host the {{ product_title }} cluster.
1.  [Enable](https://cloud.google.com/service-usage/docs/enable-disable#enabling) the following required APIs in the project that hosts your {{ product_title }} cluster:

    **Required API services**

<table>
<thead>
<tr>
  <th>API service</th>
  <th>Console service name</th>
  <th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="https://cloud.google.com/deployment-manager/docs/apis#google-cloud-deployment-manager-v2-api">Cloud Deployment Manager V2 API</a></td>
  <td><code>deploymentmanager.googleapis.com</code></td>
  <td>Used for automated deployment and management of infrastructure resources.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/compute/docs/reference/rest/v1">Compute Engine API</a></td>
  <td><code>compute.googleapis.com</code></td>
  <td>Used for creating and managing virtual machines, firewalls, networks, persistent disk volumes, and load balancers.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/apis/docs/overview">Google Cloud APIs</a></td>
  <td><code>cloudapis.googleapis.com</code></td>
  <td>Used for managing Google Cloud services and resources.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/resource-manager/reference/rest">Cloud Resource Manager API</a></td>
  <td><code>cloudresourcemanager.googleapis.com</code></td>
  <td>Used for getting projects, getting or setting an IAM policy for projects, validating required permissions, and tagging.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/dns/docs/reference/rest/v1">Cloud DNS API</a></td>
  <td><code>dns.googleapis.com</code></td>
  <td>Used for creating DNS zones and managing DNS records for the cluster domains.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/firewall/docs/reference/network-security/rest">Network Security API</a></td>
  <td><code>networksecurity.googleapis.com</code></td>
  <td>Used for creating, managing, and enforcing network security policies for your applications and resources within Google Cloud.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/iam/docs/reference/credentials/rest">IAM Service Account Credentials API</a></td>
  <td><code>iamcredentials.googleapis.com</code></td>
  <td>Used for creating short-lived credentials for impersonating IAM service accounts.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/iam/docs/reference/rest">Identity and Access Management (IAM) API</a></td>
  <td><code>iam.googleapis.com</code></td>
  <td>Used for managing the IAM configuration for the cluster.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest">Service Management API</a></td>
  <td><code>servicemanagement.googleapis.com</code></td>
  <td>Used indirectly to fetch quota information for {{ gcp_short }} resources.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/service-usage/docs/reference/rest">Service Usage API</a></td>
  <td><code>serviceusage.googleapis.com</code></td>
  <td>Used for determining what services are available in the customer’s {{ gcp_full }} account.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/storage/docs/json_api">Cloud Storage JSON API</a></td>
  <td><code>storage-api.googleapis.com</code></td>
  <td>Used for accessing Cloud Storage for the image registry, ignition, and cluster backups (if applicable).</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/storage/docs/apis">Cloud Storage</a></td>
  <td><code>storage-component.googleapis.com</code></td>
  <td>Used for managing Cloud Storage for the image registry, ignition, and cluster backups (if applicable).</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/resource-manager/docs/reference/orgpolicy/rest">Organization Policy API</a></td>
  <td><code>orgpolicy.googleapis.com</code></td>
  <td>Used to identify governance rules applied to customer’s {{ gcp_full }} that might impact cluster creation or management.</td>
</tr>
<tr>
  <td><a href="https://docs.cloud.google.com/marketplace/docs/reference/consumerprocurement/rest">Cloud Commerce Consumer Procurement API</a></td>
  <td><code>cloudcommerceconsumerprocurement.googleapis.com</code></td>
  <td>Enables users to procure products from the {{ gcp_short }}  Marketplace. Specifically, it is required to validate that customers have accepted the Marketplace terms and conditions for {{ product_title }}.<br><br>This API is required when transacting through the {{ gcp_short }} Marketplace.</td>
</tr>
<tr>
  <td><a href="https://cloud.google.com/iap/docs/reference/rest">Cloud Identity-Aware Proxy API</a></td>
  <td><code>iap.googleapis.com</code></td>
  <td>Used in emergency situations to troubleshoot cluster nodes that are otherwise inaccessible.<br><br>This API is required for clusters deployed with Private Service Connect.</td>
</tr>
</tbody>
</table>