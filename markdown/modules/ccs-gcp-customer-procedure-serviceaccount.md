{%- set _mod_docs_content_type = "PROCEDURE" %}

# Service account authentication type procedure {id="ccs-gcp-customer-procedure-sa_{{ context }}"}

Besides the required customer procedures listed in _Required customer procedure_, there are other specific actions that you must take when creating an {{ product_title }} cluster on {{ GCP }} using a service account as the authentication type. {._abstract}

**Procedure**

1.  To ensure that Red Hat can perform necessary actions, you must create an `osd-ccs-admin` IAM [service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating_a_service_account) user within the {{ gcp_short }} project.

The following roles must be [granted to the service account](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource):

**Required roles**

<table>
<thead>
<tr>
  <th>Role</th>
  <th>Console role name</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Compute Admin</td>
  <td><code>roles/compute.admin</code></td>
</tr>
<tr>
  <td>DNS Administrator</td>
  <td><code>roles/dns.admin</code></td>
</tr>
<tr>
  <td>Organization Policy Viewer</td>
  <td><code>roles/orgpolicy.policyViewer</code></td>
</tr>
<tr>
  <td>Service Management Administrator</td>
  <td><code>roles/servicemanagement.admin</code></td>
</tr>
<tr>
  <td>Service Usage Admin</td>
  <td><code>roles/serviceusage.serviceUsageAdmin</code></td>
</tr>
<tr>
  <td>Storage Admin</td>
  <td><code>roles/storage.admin</code></td>
</tr>
<tr>
  <td>Compute Load Balancer Admin</td>
  <td><code>roles/compute.loadBalancerAdmin</code></td>
</tr>
<tr>
  <td>Role Viewer</td>
  <td><code>roles/viewer</code></td>
</tr>
<tr>
  <td>Role Administrator</td>
  <td><code>roles/iam.roleAdmin</code></td>
</tr>
<tr>
  <td>Security Admin</td>
  <td><code>roles/iam.securityAdmin</code></td>
</tr>
<tr>
  <td>Service Account Key Admin</td>
  <td><code>roles/iam.serviceAccountKeyAdmin</code></td>
</tr>
<tr>
  <td>Service Account Admin</td>
  <td><code>roles/iam.serviceAccountAdmin</code></td>
</tr>
<tr>
  <td>Service Account User</td>
  <td><code>roles/iam.serviceAccountUser</code></td>
</tr>
</tbody>
</table>

1.  [Create the service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating_service_account_keys) for the `osd-ccs-admin` IAM service account. Export the key to a file named `osServiceAccount.json`; this JSON file will be uploaded in {{ cluster_manager_first }} when you create your cluster.