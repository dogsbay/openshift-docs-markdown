{%- set _mod_docs_content_type = "PROCEDURE" %}

# Workload Identity Federation authentication type procedure {id="ccs-gcp-customer-procedure-wif_{{ context }}"}

Besides the required customer procedures listed in _Required customer procedure_, there are other specific actions that you must take when creating an {{ product_title }} cluster on {{ GCP }} using Workload Identity Federation (WIF) as the authentication type. {._abstract}

**Procedure**

1.  Assign the following roles to the [service account](https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource) of the user implementing the WIF authentication type:

    :::important

    The following roles are only required when creating, updating, or deleting WIF configurations.
    
    :::


    **Required roles**

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
  <td>Role Admin<br><br>Required by the {{ gcp_short }} client in the OCM CLI for creating custom role.</td>
  <td><code>roles/iam.roleAdmin</code></td>
  <td>iam.roles.create<br><br>iam.roles.delete<br><br>iam.roles.get<br><br>iam.roles.list<br><br>iam.roles.undelete<br><br>iam.roles.update<br><br>resourcemanager.projects.get resourcemanager.projects.getIamPolicy</td>
</tr>
<tr>
  <td>Service Account Admin<br><br>Required for the pre-creation of the service accounts used by the deployer, support, and Operators.</td>
  <td><code>roles/iam.serviceAccountAdmin</code></td>
  <td>iam.serviceAccountApiKeyBindings.create iam.serviceAccountApiKeyBindings.delete iam.serviceAccountApiKeyBindings.undelete iam.serviceAccounts.create iam.serviceAccounts.create iam.serviceAccounts.create iam.serviceAccounts.createTagBinding iam.serviceAccounts.delete iam.serviceAccounts.deleteTagBinding iam.serviceAccounts.disable iam.serviceAccounts.enable iam.serviceAccounts.get iam.serviceAccounts.getIamPolicy iam.serviceAccounts.list iam.serviceAccounts.listEffectiveTags iam.serviceAccounts.listTagBindings iam.serviceAccounts.setIamPolicy iam.serviceAccounts.undelete iam.serviceAccounts.update resourcemanager.projects.get resourcemanager.projects.list</td>
</tr>
<tr>
  <td>Workload Identity Pool Admin<br><br>Required to create and configure the workload identity pool.</td>
  <td><code>roles/iam.workloadIdentityPoolAdmin</code></td>
  <td>iam.googleapis.com/workloadIdentityPoolProviderKeys.create iam.googleapis.com/workloadIdentityPoolProviderKeys.delete iam.googleapis.com/workloadIdentityPoolProviderKeys.get iam.googleapis.com/workloadIdentityPoolProviderKeys.list iam.googleapis.com/workloadIdentityPoolProviderKeys.undelete iam.googleapis.com/workloadIdentityPoolProviders.create iam.googleapis.com/workloadIdentityPoolProviders.delete iam.googleapis.com/workloadIdentityPoolProviders.get iam.googleapis.com/workloadIdentityPoolProviders.list iam.googleapis.com/workloadIdentityPoolProviders.undelete iam.googleapis.com/workloadIdentityPoolProviders.up iam.googleapis.com/workloadIdentityPools.delete iam.googleapis.com/workloadIdentityPools.get iam.googleapis.com/workloadIdentityPools.list iam.googleapis.com/workloadIdentityPools.undelete iam.googleapis.com/workloadIdentityPools.update iam.workloadIdentityPools.createPolicyBinding iam.workloadIdentityPools.deletePolicyBinding iam.workloadIdentityPools.searchPolicyBindings iam.workloadIdentityPools.updatePolicyBinding resourcemanager.projects.get resourcemanager.projects.list</td>
</tr>
<tr>
  <td>Project IAM Admin<br><br>Required for assigning roles to the service account and giving permissions to those roles that are necessary to perform operations on cloud resources.</td>
  <td><code>roles/resourcemanager.projectIamAdmin</code></td>
  <td>iam.policybindings.get iam.policybindings.list resourcemanager.projects.createPolicyBinding resourcemanager.projects.deletePolicyBinding resourcemanager.projects.get resourcemanager.projects.getIamPolicy resourcemanager.projects.searchPolicyBindings resourcemanager.projects.setIamPolicy resourcemanager.projects.updatePolicyBinding</td>
</tr>
</tbody>
</table>

1.  Install the [OpenShift Cluster Manager API command-line interface (`ocm`)](https://console.redhat.com/openshift/downloads).


    :::important

    The {{ cluster_manager }} API command-line interface (`ocm`) is a Developer Preview feature only.
    For more information about the support scope of Red Hat Developer Preview features, see [Developer Preview Support Scope](https://access.redhat.com/support/offerings/devpreview/).
    
    :::

1.  To authenticate against your Red Hat {{ cluster_manager }} account, run one of the following commands.
    1.  If your system supports a web-based browser, run the Red&#160;Hat single sign-on (SSO) authorization code command for secure authentication:
        ```terminal
        $ ocm login --use-auth-code
        ```

        Running this command will redirect you to the Red Hat SSO login. Log in with your Red&#160;Hat login or email.
    1.  If you are working with containers, remote hosts, and other environments without a web browser, run the Red&#160;Hat single sign-on (SSO) device code command for secure authentication:

        ```terminal title="Syntax"
        $ ocm login --use-device-code
        ```

        Running this command will redirect you to the Red&#160;Hat SSO login and provide a log in code.

To switch accounts, logout from https://sso.redhat.com and run the `ocm logout` command in your terminal before attempting to login again.

1.  Install the [gcloud CLI](https://cloud.google.com/sdk/docs/install).
1.  Authenticate the gcloud CLI with the [Application Default Credentials (ADC)](https://cloud.google.com/docs/authentication/provide-credentials-adc).