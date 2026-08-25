{%- set _mod_docs_content_type = "CONCEPT" %}

# Roles required for {{ GCP }} Marketplace billing {id="ccs-gcp-permissions-marketplace-billing_{{ context }}"}

To deploy an {{ product_title }} cluster using {{ GCP }} Marketplace-based billing, your {{ GCP }} account must first be prepared. This involves accepting the {{ GCP }} Marketplace terms and agreements for the OpenShift Dedicated product listing. Contact your {{ GCP }} administrator who has the `Consumer Procurement Entitlement Manager` role to enable {{ product_title }} cluster deployments in your {{ GCP }} project. {._abstract}

To automate the checking and acceptance of these terms and agreements during OpenShift Dedicated cluster creation, you must grant the `Consumer Procurement Entitlement Viewer` role to the {{ GCP }} identity (user or service account) that is creating the cluster. The `Consumer Procurement Entitlement Viewer` role includes the necessary permissions to check for existing consent to the {{ GCP }} terms and agreements.

The following table lists the permissions that are included in the `Consumer Procurement Entitlement Viewer` role.

**Required permissions in the Consumer Procurement Entitlement Viewer role**

<table>
<thead>
<tr>
  <th>Role and description</th>
  <th>Console role name</th>
  <th>Permissions</th>
</tr>
</thead>
<tbody>
<tr>
  <td><a href="https://docs.cloud.google.com/iam/docs/roles-permissions/consumerprocurement">Consumer Procurement Entitlement Viewer</a><br><br>Allows for the inspecting of entitlements and service states for a consumer project.</td>
  <td><code>consumerprocurement.entitlementViewer</code></td>
  <td>commerceoffercatalog.offers.get consumerprocurement.consents.check consumerprocurement.consents.list consumerprocurement.entitlements.get consumerprocurement.entitlements.list consumerprocurement.freeTrials.get consumerprocurement.freeTrials.list orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list serviceusage.consumerpolicy.analyze serviceusage.consumerpolicy.get serviceusage.effectivepolicy.get serviceusage.groups.list serviceusage.groups.listExpandedMembers serviceusage.groups.listMembers serviceusage.services.get serviceusage.services.list serviceusage.values.test</td>
</tr>
</tbody>
</table>

For more information about {{ GCP }} Marketplace roles and permissions, see [Access control with IAM](https://docs.cloud.google.com/marketplace/docs/access-control) in the {{ GCP }} documentation.