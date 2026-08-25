{%- set _mod_docs_content_type = "REFERENCE" %}
# Interactive OCM and user role creation mode options {id="rosa-sts-interactive-ocm-and-user-role-creation-mode-options_{{ context }}"}

Before you can use {{ cluster_manager_first }} to create {{ product_title }} clusters that use the AWS Security Token Service (STS), you must associate your AWS account with your Red&#160;Hat organization by creating and linking the OCM and user roles. You can enable interactive mode by specifying the `--interactive` option when you run the `rosa create ocm-role` command or the `rosa create user-role` command. {._abstract}

The following tables describe the interactive OCM role creation mode options:

***`--interactive` OCM role creation mode options***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Role prefix</code></td>
  <td>Specify the prefix to include in the OCM IAM role name. The default is <code>ManagedOpenShift</code>. You can create only one OCM role per AWS account for your Red&#160;Hat organization.</td>
</tr>
<tr>
  <td><code>Enable admin capabilities for the OCM role (optional)</code></td>
  <td>Enable the admin OCM IAM role, which is equivalent to specifying the <code>--admin</code> argument. The admin role is required if you want to use <code>auto</code> mode to automatically provision the cluster-specific Operator roles and the OIDC provider by using {{ cluster_manager }}.</td>
</tr>
<tr>
  <td><code>Permissions boundary ARN (optional)</code></td>
  <td>Specify a permissions boundary Amazon Resource Name (ARN) for the OCM role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM entities</a> in the AWS documentation.</td>
</tr>
<tr>
  <td><code>Role Path (optional)</code></td>
  <td>Specify a custom ARN path for your OCM role. The path must contain alphanumeric characters only and start and end with <code>/</code>, for example <code>/test/path/dev/</code>. For more information, see <em>ARN path customization for IAM roles and policies</em>.</td>
</tr>
<tr>
  <td><code>Role creation mode</code></td>
  <td>Select the role creation mode. You can use <code>auto</code> mode to automatically create the OCM role and link it to your Red&#160;Hat organization account. In <code>manual</code> mode, the ROSA CLI (<code>rosa</code>) generates the <code>aws</code> commands needed to create and link the role. In <code>manual</code> mode, the corresponding policy JSON files are also saved to the current directory. <code>manual</code> mode enables you to review the details before running the <code>aws</code> commands manually.</td>
</tr>
<tr>
  <td><code>Create the '<ocm_role_name>' role?</code></td>
  <td>Confirm if you want to create the OCM role.</td>
</tr>
<tr>
  <td><code>Link the '<ocm_role_arn>' role with organization '<red_hat_organization_id>'?</code></td>
  <td>Confirm if you want to link the OCM role with your Red&#160;Hat organization.</td>
</tr>
</tbody>
</table>

The following tables describe the interactive user role creation mode options:

***`--interactive` user role creation mode options***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Role prefix</code></td>
  <td>Specify the prefix to include in the user role name. The default is <code>ManagedOpenShift</code>.</td>
</tr>
<tr>
  <td><code>Permissions boundary ARN (optional)</code></td>
  <td>Specify a permissions boundary Amazon Resource Name (ARN) for the user role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM entities</a> in the AWS documentation.</td>
</tr>
<tr>
  <td><code>Role Path (optional)</code></td>
  <td>Specify a custom ARN path for your user role. The path must contain alphanumeric characters only and start and end with <code>/</code>, for example <code>/test/path/dev/</code>. For more information, see <em>ARN path customization for IAM roles and policies</em>.</td>
</tr>
<tr>
  <td><code>Role creation mode</code></td>
  <td>Selects the role creation mode. You can use <code>auto</code> mode to automatically create the user role and link it to your {{ cluster_manager }} user account. In <code>manual</code> mode, the ROSA CLI generates the <code>aws</code> commands needed to create and link the role. In <code>manual</code> mode, the corresponding policy JSON files are also saved to the current directory. <code>manual</code> mode enables you to review the details before running the <code>aws</code> commands manually.</td>
</tr>
<tr>
  <td><code>Create the '<user_role_name>' role?</code></td>
  <td>Confirm if you want to create the user role.</td>
</tr>
<tr>
  <td><code>Link the '<user_role_arn>' role with account '<red_hat_user_account_id>'?</code></td>
  <td>Confirm if you want to link the user role with your Red&#160;Hat user account.</td>
</tr>
</tbody>
</table>