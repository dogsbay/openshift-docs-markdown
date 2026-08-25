{%- set _mod_docs_content_type = "REFERENCE" %}

# Red Hat managed {{ gcp_full }} resources {id="ccs-gcp-iam_{{ context }}"}

Red Hat is responsible for creating and managing the following IAM {{ gcp_first }} resources. {._abstract}


:::important

The _IAM service account and roles_ and _IAM group and roles_ topics are only applicable to clusters created using the service account authentication type.

:::


## IAM service account and roles {id="ccs-gcp-iam-service-account-roles_{{ context }}"}

The `osd-managed-admin` IAM service account is created immediately after taking control of the customer-provided {{ gcp_short }} account. This is the user that will perform the {{ product_title }} cluster installation.

The following roles are attached to the service account:

**IAM roles for osd-managed-admin**

<table>
<thead>
<tr>
  <th>Role</th>
  <th>Console role name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Compute Admin</td>
  <td><code>roles/compute.admin</code></td>
  <td>Provides full control of all Compute Engine resources.</td>
</tr>
<tr>
  <td>DNS Administrator</td>
  <td><code>roles/dns.admin</code></td>
  <td>Provides read-write access to all Cloud DNS resources.</td>
</tr>
<tr>
  <td>Security Admin</td>
  <td><code>roles/iam.securityAdmin</code></td>
  <td>Security admin role, with permissions to get and set any IAM policy.</td>
</tr>
<tr>
  <td>Storage Admin</td>
  <td><code>roles/storage.admin</code></td>
  <td>Grants full control of objects and buckets.<br><br>When applied to an individual <strong>bucket</strong>, control applies only to the specified bucket and objects within the bucket.</td>
</tr>
<tr>
  <td>Service Account Admin</td>
  <td><code>roles/iam.serviceAccountAdmin</code></td>
  <td>Create and manage service accounts.</td>
</tr>
<tr>
  <td>Service Account Key Admin</td>
  <td><code>roles/iam.serviceAccountKeyAdmin</code></td>
  <td>Create and manage (and rotate) service account keys.</td>
</tr>
<tr>
  <td>Service Account User</td>
  <td><code>roles/iam.serviceAccountUser</code></td>
  <td>Run operations as the service account.</td>
</tr>
<tr>
  <td>Role Administrator</td>
  <td><code>roles/iam.roleAdmin</code></td>
  <td>Provides access to all custom roles in the project.</td>
</tr>
</tbody>
</table>

## IAM group and roles {id="ccs-gcp-iam-group-roles_{{ context }}"}

The `sd-sre-platform-gcp-access` Google group is granted access to the {{ gcp_short }} project to allow Red Hat Site Reliability Engineering (SRE) access to the console for emergency troubleshooting purposes.


:::note

*   For information regarding the roles within the `sd-sre-platform-gcp-access`  group that are specific to clusters created when using the Workload Identity Federation (WIF) authentication type, see [managed-cluster-config](https://github.com/openshift/managed-cluster-config/blob/master/resources/wif/4.19/vanilla.yaml).
*   For information about creating a cluster using the Workload Identity Federation authentication type, see _Additional resources_.

:::

The following roles are attached to the group:

**IAM roles for sd-sre-platform-gcp-access**

<table>
<thead>
<tr>
  <th>Role</th>
  <th>Console role name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Compute Admin</td>
  <td><code>roles/compute.admin</code></td>
  <td>Provides full control of all Compute Engine resources.</td>
</tr>
<tr>
  <td>Editor</td>
  <td><code>roles/editor</code></td>
  <td>Provides all viewer permissions, plus permissions for actions that modify state.</td>
</tr>
<tr>
  <td>Organization Policy Viewer</td>
  <td><code>roles/orgpolicy.policyViewer</code></td>
  <td>Provides access to view Organization Policies on resources.</td>
</tr>
<tr>
  <td>Project IAM Admin</td>
  <td><code>roles/resourcemanager.projectIamAdmin</code></td>
  <td>Provides permissions to administer IAM policies on projects.</td>
</tr>
<tr>
  <td>Quota Administrator</td>
  <td><code>roles/servicemanagement.quotaAdmin</code></td>
  <td>Provides access to administer service quotas.</td>
</tr>
<tr>
  <td>Role Administrator</td>
  <td><code>roles/iam.roleAdmin</code></td>
  <td>Provides access to all custom roles in the project.</td>
</tr>
<tr>
  <td>Service Account Admin</td>
  <td><code>roles/iam.serviceAccountAdmin</code></td>
  <td>Create and manage service accounts.</td>
</tr>
<tr>
  <td>Service Usage Admin</td>
  <td><code>roles/serviceusage.serviceUsageAdmin</code></td>
  <td>Ability to enable, disable, and inspect service states, inspect operations, and consume quota and billing for a consumer project.</td>
</tr>
<tr>
  <td>Tech Support Editor</td>
  <td><code>roles/cloudsupport.techSupportEditor</code></td>
  <td>Provides full read-write access to technical support cases.</td>
</tr>
</tbody>
</table>