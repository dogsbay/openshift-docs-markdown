{% if context == "cco-mode-mint" %}
{%- set mint = true -%}
{% endif %}
{% if context == "cco-mode-passthrough" %}
{%- set passthrough = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Admin credentials root secret format {id="admin-credentials-root-secret-formats_{{ context }}"}

The Cloud Credential Operator (CCO) creates a credentials root secret by minting new credentials with _mint mode_ or by copying the credentials root secret with _passthrough mode_. {._abstract}

Each cloud provider uses a credentials root secret in the `kube-system`
namespace by convention, which is then used to satisfy all credentials requests
and create their respective secrets.

The format for the secret varies by cloud, and is also used for each
`CredentialsRequest` secret.

```yaml title="Amazon Web Services (AWS) secret format"
apiVersion: v1
kind: Secret
metadata:
  namespace: kube-system
  name: aws-creds
stringData:
  aws_access_key_id: <base64-encoded_access_key_id>
  aws_secret_access_key: <base64-encoded_secret_access_key>
```

{% if passthrough %}

```yaml title="Microsoft Azure secret format"
apiVersion: v1
kind: Secret
metadata:
  namespace: kube-system
  name: azure-credentials
stringData:
  azure_subscription_id: <base64-encoded_subscription_id>
  azure_client_id: <base64-encoded_client_id>
  azure_client_secret: <base64-encoded_client_secret>
  azure_tenant_id: <base64-encoded_tenant_id>
  azure_resource_prefix: <base64-encoded_resource_prefix>
  azure_resourcegroup: <base64-encoded_resource_group>
  azure_region: <base64-encoded_region>
```

On Microsoft Azure, the credentials secret format includes two properties that must contain the cluster’s infrastructure ID, generated randomly for each cluster installation. This value can be found after running create manifests:

```terminal
$ cat .openshift_install_state.json | jq '."*installconfig.ClusterID".InfraID' -r
```

```terminal title="Example output"
mycluster-2mpcn
```

This value would be used in the secret data as follows:

```yaml
azure_resource_prefix: mycluster-2mpcn
azure_resourcegroup: mycluster-2mpcn-rg
```
{% endif %}

```yaml title="{{ gcp_first }} secret format"
apiVersion: v1
kind: Secret
metadata:
  namespace: kube-system
  name: gcp-credentials
stringData:
  service_account.json: <base64-encoded_service_account>
```

{% if passthrough %}

```yaml title="{{ rh_openstack_first }} secret format"
apiVersion: v1
kind: Secret
metadata:
  namespace: kube-system
  name: openstack-credentials
data:
  clouds.yaml: <base64-encoded_cloud_creds>
  clouds.conf: <base64-encoded_cloud_creds_init>
```

```yaml title="VMware vSphere secret format"
apiVersion: v1
kind: Secret
metadata:
  namespace: kube-system
  name: vsphere-creds
data:
 vsphere.openshift.example.com.username: <base64-encoded_username>
 vsphere.openshift.example.com.password: <base64-encoded_password>
```

{% endif %}

{% if context == "cco-mode-mint" %}
{%- set mint = "" -%}
{% endif %}
{% if context == "cco-mode-passthrough" %}
{%- set passthrough = "" -%}
{% endif %}