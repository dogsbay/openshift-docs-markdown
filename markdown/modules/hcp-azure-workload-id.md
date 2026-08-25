{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating {{ azure_short }} Workload Identities {id="hcp-azure-workload-id_{{ context }}"}

To ensure control over Identity and Access Management (IAM) resources in your {{ azure_short }} deployment, create Workload Identities separately from your infrastructure. {._abstract}

Workload Identities authenticate hosted cluster components to {{ azure_short }} services by using OIDC federation. You must create identities separately and then consume them during infrastructure or cluster creation.

**Prerequisites**

*   You have an {{ azure_short }} credentials file in the following format:
    ```terminal title="Example file"
    {
      "subscriptionId": "your-subscription-id",
      "tenantId": "your-tenant-id",
      "clientId": "your-client-id",
      "clientSecret": "your-client-secret"
    }
    ```
*   You have a resource group to create the managed identities in.
*   You have an OIDC issuer URL for Workload Identity federation. For more information, see "Setting up an OIDC issuer".

**Procedure**

1.  Set environment variables as shown in the following example:
    ```terminal
    CLUSTER_NAME="my-self-managed-cluster"
    INFRA_ID="${CLUSTER_NAME}-$(openssl rand -hex 4)"
    ```
1.  On the {{ hcp }} command-line interface, `hcp`, enter the following command:
    ```terminal
    $ hcp create iam azure \
        --name <my_cluster_name> \
        --infra-id <infra_id> \
        --azure-creds <azure_credentials_file> \
        --resource-group-name <resource_group> \
        --oidc-issuer-url <oidc_issuer_url> \
        --output-file <workload_identities_file> \
        --location <my_region> \
        --cloud <my_cloud_environment>
    ```

    where:

    `<my_cluster_name>`
    :   Specifies the name of the cluster you intend to create.

    `<infra_id>`
    :   Specifies the unique identifier for naming {{ azure_short }} resources. Typically, this identifier is the cluster name with a suffix.

    `<azure_credentials_file>`
    :   Specifies the {{ azure_short }} credentials file with permission to create managed identities and federated credentials.

    `<resource_group>`
    :   Specifies the name of the resource group where you intend to create identities.

    `<oidc_issuer_url>`
    :   Specifies the URL of the OIDC identity provider for Workload Identity federation.

    `<workload_identities_file>`
    :   Specifies the output file path, such as `my-cluster-name-iam-output.json`.
    You can also add these optional flags to the `hcp create iam azure` command:
    `<my_region>`:: Specifies the {{ azure_short }} region for the managed identities. The default value is `eastus`.
    `<my_cloud_environment>`:: Specifies the {{ azure_short }} cloud environment. The default value is `AzurePublicCloud`.

**Verification**

*   Review the output file, which looks like the following example:
    ```terminal title="Example output"
    {
      "disk": {
        "tenantID": "...",
        "clientID": "...",
        "resourceID": "/subscriptions/.../providers/Microsoft.ManagedIdentity/userAssignedIdentities/my-cluster-abc123-disk"
      },
      "file": {
        "tenantID": "...",
        "clientID": "...",
        "resourceID": "..."
      },
      "imageRegistry": { ... },
      "ingress": { ... },
      "cloudProvider": { ... },
      "nodePoolManagement": { ... },
      "network": { ... },
      "controlPlaneOperator": { ... }
    }
    ```

    The output includes 8 user-assigned identities, one per cluster component, along with federated credentials for each identity:
    *   Disk CSI driver
    *   File CSI driver
    *   Image registry
    *   Ingress Operator
    *   Cloud provider
    *   Node pool management
    *   Network Operator
    *   Control Plane Operator