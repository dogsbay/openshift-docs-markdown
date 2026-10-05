{%- set _mod_docs_content_type = "REFERENCE" %}

# Troubleshoot Workload Identity Federation permission issues {id="wif-troubleshoot-permissions_{{ context }}"}

Discover how to troubleshoot common permission issues that can occur when using a Workload Identity Federation (WIF) configuration in {{ product_title }} clusters on {{ gcp }}. The following table lists common symptoms, their causes, and recommended resolutions. {._abstract}

<table>
<thead>
<tr>
  <th>Symptom</th>
  <th>Cause</th>
  <th>Resolution</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Cluster version upgrade fails with a WIF configuration version mismatch error.</td>
  <td>The WIF configuration was not updated to match the target {{ product_title }} version before the cluster upgrade was initiated.</td>
  <td>Update the WIF configuration to the target version by running <code>ocm gcp update wif-config &lt;wif_name&gt; --version &lt;version&gt;</code>, then retry the cluster upgrade.</td>
</tr>
<tr>
  <td>Machine API pods report <code>Permission iam.serviceAccounts.actAs denied</code> or similar errors when provisioning nodes.</td>
  <td>The scoped <code>iam.serviceAccountUser</code> binding to the <code>osd-worker</code> and <code>osd-control-plane</code> service accounts is missing or incorrect.</td>
  <td>Verify that the <code>openshift-machine-api-gcp</code> service account has the <code>iam.serviceAccountUser</code> role scoped to the <code>osd-worker</code> and <code>osd-control-plane</code> service accounts. Check the IAM bindings on those service accounts in the {{ gcp_full }} console or by using <code>gcloud iam service-accounts get-iam-policy</code>.</td>
</tr>
<tr>
  <td>Update the WIF configuration to the target version by running <code>ocm gcp update wif-config &lt;wif_name&gt; --version &lt;version&gt;</code>.</td>
  <td>GCP PD CSI Driver pods fail to attach or mount persistent volumes with <code>iam.serviceAccountUser</code> errors.</td>
  <td>The project-level <code>iam.serviceAccountUser</code> role was removed from the CSI driver service account, but the scoped binding to node service accounts was not applied.</td>
</tr>
<tr>
  <td>For clusters running {{ product_title }} 4.21 or later, update the WIF configuration, which applies the scoped binding automatically. For clusters running earlier versions, follow the procedure in "Reducing permissions while using the GCP PD CSI Driver Operator" to manually grant the scoped binding before removing the project-level role.</td>
  <td>The <code>ocm gcp create wif-config</code> or <code>ocm gcp update wif-config</code> command fails with a client version error.</td>
  <td>The installed version of the {{ cluster_manager }} CLI (<code>ocm</code>) is older than the minimum version required for the WIF operation.</td>
</tr>
<tr>
  <td>Download and install the latest version of the <code>ocm</code> CLI from the <a href="https://console.redhat.com/openshift/downloads">Downloads</a> page on {{ cluster_manager }}.</td>
  <td>After removing stale permissions, the <code>gcloud iam roles describe</code> output still shows removed permissions.</td>
  <td>IAM role changes can take up to 60 seconds to propagate across {{ gcp_full }}.</td>
</tr>
<tr>
  <td>Wait 60 seconds and run the <code>gcloud iam roles describe</code> command again to verify the updated role definition.</td>
</tr>
</tbody>
</table>

To restore permissions that were removed by mistake, run the following command:

```terminal
$ ocm gcp update wif-config <wif_config_id>
```

This command automatically detects and restores missing permissions to the custom roles within the specified WIF configuration.