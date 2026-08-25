{%- set _mod_docs_content_type = "REFERENCE" %}
# Azure component secret formats {id="cco-short-term-creds-format-azure_{{ context }}"}

To change the content of the {{ azure_short }} credentials that are provided to individual {{ product_title }} components, you can use manual mode with with {{ entra_first }}.  {._abstract}

Compare the following secret formats:

```yaml title="Azure secret format using long-term credentials"
apiVersion: v1
kind: Secret
metadata:
  namespace: <target_namespace>
  name: <target_secret_name>
data:
  azure_client_id: <client_id>
  azure_client_secret: <client_secret>
  azure_region: <region>
  azure_resource_prefix: <resource_group_prefix>
  azure_resourcegroup: <resource_group_prefix>-rg
  azure_subscription_id: <subscription_id>
  azure_tenant_id: <tenant_id>
type: Opaque
```
where:


`metadata.namespace`
:   Specifies the namespace for the component.

`metadata.name`
:   Specifies the name of the component secret.

`data.azure_client_id`
:   Specifies the client ID of the Microsoft Entra ID identity that the component uses to authenticate.

`data.azure_client_secret`
:   Specifies the component secret that is used to authenticate with Microsoft Entra ID for the `<client_id>` identity.

`data.azure_resource_prefix`
:   Specifies the resource group prefix.

`data.azure_resourcegroup`
:   Specifies the resource group. This value is formed by the `<resource_group_prefix>` and the suffix `-rg`.

```yaml title="Azure secret format using {{ entra_first }}"
apiVersion: v1
kind: Secret
metadata:
  namespace: <target_namespace>
  name: <target_secret_name>
data:
  azure_client_id: <client_id>
  azure_federated_token_file: <path_to_token_file>
  azure_region: <region>
  azure_subscription_id: <subscription_id>
  azure_tenant_id: <tenant_id>
type: Opaque
```
where:


`metadata.namespace`
:   Specifies the namespace for the component.

`metadata.name`
:   Specifies the name of the component secret.

`data.azure_client_id`
:   Specifies the client ID of the user-assigned managed identity that the component uses to authenticate.

`data.azure_federated_token_file`
:   Specifies the path to the mounted service account token file.