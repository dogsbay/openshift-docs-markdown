{%- set _mod_docs_content_type = "REFERENCE" %}
# AWS component secret formats {id="cco-short-term-creds-format-aws_{{ context }}"}

To change the content of the {{ aws_short }} credentials that are provided to individual {{ product_title }} components, you can use manual mode with the AWS Security Token Service (STS) .  {._abstract}

Compare the following secret formats:

```yaml title="AWS secret format using long-term credentials"
apiVersion: v1
kind: Secret
metadata:
  namespace: <target_namespace>
  name: <target_secret_name>
data:
  aws_access_key_id: <base64_encoded_access_key_id>
  aws_secret_access_key: <base64_encoded_secret_access_key>
```
where:


`metadata.namespace`
:   Specifies the namespace for the component.

`metadata.name`
:   Specifies the name of the component secret.

```yaml title="AWS secret format using AWS STS"
apiVersion: v1
kind: Secret
metadata:
  namespace: <target_namespace>
  name: <target_secret_name>
stringData:
  credentials: |-
    [default]
    sts_regional_endpoints = regional
    role_name: <operator_role_name>
    web_identity_token_file: <path_to_token>
```
where:


`metadata.namespace`
:   Specifies the namespace for the component.

`metadata.name`
:   Specifies the name of the component secret.

`stringData.credentials.role_name`
:   Specifies the IAM role for the component.

`stringData.credentials.web_identity_token_file`
:   Specifies the path to the service account token inside the pod. By convention, this is `/var/run/secrets/openshift/serviceaccount/token` for {{ product_title }} components.