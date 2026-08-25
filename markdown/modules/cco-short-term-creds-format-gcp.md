{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ gcp_short }} component secret formats {id="cco-short-term-creds-format-gcp_{{ context }}"}

To change the content of the {{ gcp_short }} credentials that are provided to individual {{ product_title }} components, you can use manual mode with {{ gcp_short }} Workload Identity.  {._abstract}

Compare the following secret content:

```yaml title="{{ gcp_short }} secret format"
apiVersion: v1
kind: Secret
metadata:
  namespace: <target_namespace>
  name: <target_secret_name>
data:
  service_account.json: <service_account>
```
where:


`metadata.namespace`
:   Specifies the namespace for the component.

`metadata.name`
:   Specifies the name of the component secret.

`data.service_account.json`
:   Specifies the Base64 encoded service account.

```json title="Content of the Base64 encoded service_account.json file using long-term credentials"
{
   "type": "service_account",
   "project_id": "<project_id>",
   "private_key_id": "<private_key_id>",
   "private_key": "<private_key>",
   "client_email": "<client_email_address>",
   "client_id": "<client_id>",
   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
   "token_uri": "https://oauth2.googleapis.com/token",
   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/<client_email_address>"
}
```
where:


`type`
:   Specifies the credential type, in this example the type is `service_account`.

`private_key`
:   Specifies the private RSA key that is used to authenticate to {{ gcp_short }}. This key must be kept secure and is not rotated.

```json title="Content of the Base64 encoded service_account.json file using {{ gcp_short }} Workload Identity"
{
   "type": "external_account",
   "audience": "//iam.googleapis.com/projects/123456789/locations/global/workloadIdentityPools/test-pool/providers/test-provider",
   "subject_token_type": "urn:ietf:params:oauth:token-type:jwt",
   "token_url": "https://sts.googleapis.com/v1/token",
   "service_account_impersonation_url": "https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/<client_email_address>:generateAccessToken",
   "credential_source": {
      "file": "<path_to_token>",
      "format": {
         "type": "text"
      }
   }
}
```
where:


`type`
:   Specifies the credential type, in this example the type is `external_account`.

`audience`
:   Specifies the target audience is the {{ gcp_short }} Workload Identity provider.

`service_account_impersonation_url`
:   Specifies the resource URL of the service account that can be impersonated with these credentials.

`credential_source.file`
:   Specifies the path to the service account token inside the pod. By convention, this is `/var/run/secrets/openshift/serviceaccount/token` for {{ product_title }} components.