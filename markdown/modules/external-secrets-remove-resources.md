{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing {{ external_secrets_operator }} resources by using the web console {id="external-secrets-remove-resources_{{ context }}"}

After you have uninstalled the {{ external_secrets_operator }}, you can optionally eliminate its associated resources from your cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.
*   You have access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Remove the deployments of the `external-secrets` application components in the `external-secrets` namespace:
    1.  Click the **Project** drop-down menu to see a list of all available projects, and select the **external-secrets** project.
    1.  Navigate to **Workloads** → **Deployments**.
    1.  Select the deployment that you want to delete.
    1.  Click the **Actions** drop-down menu, and select **Delete Deployment** to see a confirmation dialog box.
    1.  Click **Delete** to delete the deployment.
1.  Remove the custom resource definitions (CRDs) that were installed by the {{ external_secrets_operator_short }} using the following steps:
    1.  Navigate to **Administration** → **CustomResourceDefinitions**.
    1.  Choose `external-secrets.io/component: controller` from the suggestions in the **Label** field to filter the CRDs.
    1.  Click the Options menu {{ kebab }} next to each of the following CRDs, and select **Delete Custom Resource Definition**:
        *   ACRAccessToken
        *   ClusterExternalSecret
        *   ClusterGenerator
        *   ClusterPushSecret
        *   ClusterSecretStore
        *   ECRAuthorizationToken
        *   ExternalSecret
        *   GCRAccessToken
        *   GeneratorState
        *   GithubAccessToken
        *   Grafana
        *   MFA
        *   Password
        *   PushSecret
        *   QuayAccessToken
        *   SecretStore
        *   SSHKey
        *   STSSessionToken
        *   UUID
        *   VaultDynamicSecret
        *   Webhook
1.  Remove the `external-secrets-operator` namespace using the following steps:
    1.  Navigate to **Administration** → **Namespaces**.
    1.  Click the Options menu {{ kebab }} next to the **{{ external_secrets_operator_short }}** and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `external-secrets-operator` in the field and click **Delete**.