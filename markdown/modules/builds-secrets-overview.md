{%- set _mod_docs_content_type = "CONCEPT" %}
# What is a secret? {id="builds-secrets-overview_{{ context }}"}

The `Secret` object type provides a mechanism to hold sensitive information such as passwords, {{ product_title }} client configuration files, `dockercfg` files, private source repository credentials, and so on. Secrets decouple sensitive content from the pods. You can mount secrets into containers using a volume plugin or the system can use secrets to perform actions on behalf of a pod.

```yaml title="YAML Secret Object Definition"
apiVersion: v1
kind: Secret
metadata:
  name: test-secret
  namespace: my-namespace
type: Opaque (1)
data: (2)
  username: <username> (3)
  password: <password>
stringData: (4)
  hostname: myapp.mydomain.com (5)
```
1.  Indicates the structure of the secret’s key names and values.
1.  The allowable format for the keys in the `data` field must meet the guidelines in the `DNS_SUBDOMAIN` value in the Kubernetes identifiers glossary.
1.  The value associated with keys in the `data` map must be base64 encoded.
1.  Entries in the `stringData` map are converted to base64 and the entry are then moved to the `data` map automatically. This field is write-only. The value is only be returned by the `data` field.
1.  The value associated with keys in the `stringData` map is made up of plain text strings.

## Properties of secrets {id="builds-secrets-overview-properties_{{ context }}"}

Key properties include:

*   Secret data can be referenced independently from its definition.
*   Secret data volumes are backed by temporary file-storage facilities (tmpfs) and never come to rest on a node.
*   Secret data can be shared within a namespace.

## Types of Secrets {id="builds-secrets-overview-types_{{ context }}"}

The value in the `type` field indicates the structure of the secret’s key names and values. The type can be used to enforce the presence of user names and keys in the secret object. If you do not want validation, use the `opaque` type, which is the default.

Specify one of the following types to trigger minimal server-side validation to ensure the presence of specific key names in the secret data:

*   `kubernetes.io/service-account-token`. Uses a service account token.
*   `kubernetes.io/dockercfg`. Uses the `.dockercfg` file for required Docker credentials.
*   `kubernetes.io/dockerconfigjson`. Uses the `.docker/config.json` file for required Docker credentials.
*   `kubernetes.io/basic-auth`. Use with basic authentication.
*   `kubernetes.io/ssh-auth`. Use with SSH key authentication.
*   `kubernetes.io/tls`. Use with TLS certificate authorities.

Specify `type= Opaque` if you do not want validation, which means the secret does not claim to conform to any convention for key names or values. An `opaque` secret, allows for unstructured `key:value` pairs that can contain arbitrary values.


:::note

You can specify other arbitrary types, such as `example.com/my-secret-type`. These types are not enforced server-side, but indicate that the creator of the
secret intended to conform to the key/value requirements of that type.

:::


## Updates to secrets {id="builds-secrets-overview-updates_{{ context }}"}

When you modify the value of a secret, the value used by an already running pod does not dynamically change. To change a secret, you must delete the original pod and create a new pod, in some cases with an identical `PodSpec`.

Updating a secret follows the same workflow as deploying a new container image. You can use the `kubectl rolling-update` command.

The `resourceVersion` value in a secret is not specified when it is referenced. Therefore, if a secret is updated at the same time as pods are starting, the version of the secret that is used for the pod is not defined.


:::note

Currently, it is not possible to check the resource version of a secret object that was used when a pod was created. It is planned that pods report this information, so that a controller could restart ones using an old `resourceVersion`. In the interim, do not update the data of existing secrets, but create new ones with distinct names.

:::