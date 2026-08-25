---
title: Understanding custom metrics autoscaler trigger authentications
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "nodes-cma-autoscaling-custom-trigger-auth" %}
# Understanding custom metrics autoscaler trigger authentications {id="nodes-cma-autoscaling-custom-trigger-auth"}
{% include "./_attributes/common-attributes.md" %}

A trigger authentication allows you to include authentication information in a scaled object or a scaled job that can be used by the associated containers. You can use trigger authentications to pass {{ product_title }} secrets, platform-native pod authentication mechanisms, environment variables, and so on.

You define a `TriggerAuthentication` object in the same namespace as the object that you want to scale. That trigger authentication can be used only by objects in that namespace.

Alternatively, to share credentials between objects in multiple namespaces, you can create a `ClusterTriggerAuthentication` object that can be used across all namespaces.

Trigger authentications and cluster trigger authentication use the same configuration. However, a cluster trigger authentication requires an additional `kind` parameter in the authentication reference of the scaled object.

```yaml title="Example trigger authentication that uses a bound service account token"
kind: TriggerAuthentication
apiVersion: keda.sh/v1alpha1
metadata:
  name: secret-triggerauthentication
  namespace: my-namespace (1)
spec:
  boundServiceAccountToken: (2)
    - parameter: bearerToken
      serviceAccountName: thanos (3)
```
1.  Specifies the namespace of the object you want to scale.
1.  Specifies that this trigger authentication uses a bound service account token for authorization when connecting to the metrics endpoint.
1.  Specifies the name of the service account to use.

```yaml title="Example cluster trigger authentication that uses a bound service account token"
kind: ClusterTriggerAuthentication
apiVersion: keda.sh/v1alpha1
metadata:
  name: bound-service-account-token-triggerauthentication (1)
spec:
  boundServiceAccountToken: (2)
    - parameter: bearerToken
      serviceAccountName: thanos (3)
```
1.  Specifies the namespace of the object you want to scale.
1.  Specifies that this cluster trigger authentication uses a bound service account token for authorization when connecting to the metrics endpoint.
1.  Specifies the name of the service account to use.

```yaml title="Example trigger authentication that uses a secret for Basic authentication"
kind: TriggerAuthentication
apiVersion: keda.sh/v1alpha1
metadata:
  name: secret-triggerauthentication
  namespace: my-namespace (1)
spec:
  secretTargetRef: (2)
  - parameter: username (3)
    name: my-basic-secret (4)
    key: username (5)
  - parameter: password
    name: my-basic-secret
    key: password
```
1.  Specifies the namespace of the object you want to scale.
1.  Specifies that this trigger authentication uses a secret for authorization when connecting to the metrics endpoint.
1.  Specifies the authentication parameter to supply by using the secret.
1.  Specifies the name of the secret to use. See the following example secret for Basic authentication.
1.  Specifies the key in the secret to use with the specified parameter.

```yaml title="Example secret for Basic authentication"
apiVersion: v1
kind: Secret
metadata:
  name: my-basic-secret
  namespace: default
data:
  username: "dXNlcm5hbWU=" (1)
  password: "cGFzc3dvcmQ="
```
1.  User name and password to supply to the trigger authentication. The values in the `data` stanza must be base-64 encoded.

```yaml title="Example trigger authentication that uses a secret for CA details"
kind: TriggerAuthentication
apiVersion: keda.sh/v1alpha1
metadata:
  name: secret-triggerauthentication
  namespace: my-namespace (1)
spec:
  secretTargetRef: (2)
    - parameter: key (3)
      name: my-secret (4)
      key: client-key.pem (5)
    - parameter: ca (6)
      name: my-secret (7)
      key: ca-cert.pem (8)
```
1.  Specifies the namespace of the object you want to scale.
1.  Specifies that this trigger authentication uses a secret for authorization when connecting to the metrics endpoint.
1.  Specifies the type of authentication to use.
1.  Specifies the name of the secret to use.
1.  Specifies the key in the secret to use with the specified parameter.
1.  Specifies the authentication parameter for a custom CA when connecting to the metrics endpoint.
1.  Specifies the name of the secret to use. See the following example secret with certificate authority (CA) details.
1.  Specifies the key in the secret to use with the specified parameter.

```yaml title="Example secret with certificate authority (CA) details"
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
  namespace: my-namespace
data: 
  ca-cert.pem: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0... (1)
  client-cert.pem: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0... (2)
  client-key.pem: LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0t...
```
1.  Specifies the TLS CA Certificate for authentication of the metrics endpoint. The value must be base-64 encoded.
1.  Specifies the TLS certificates and key for TLS client authentication. The values must be base-64 encoded.

```yaml title="Example trigger authentication that uses a bearer token"
kind: TriggerAuthentication
apiVersion: keda.sh/v1alpha1
metadata:
  name: token-triggerauthentication
  namespace: my-namespace (1)
spec:
  secretTargetRef: (2)
  - parameter: bearerToken (3)
    name: my-secret (4)
    key: bearerToken (5)
```
1.  Specifies the namespace of the object you want to scale.
1.  Specifies that this trigger authentication uses a secret for authorization when connecting to the metrics endpoint.
1.  Specifies the type of authentication to use.
1.  Specifies the name of the secret to use. See the following example secret for a bearer token.
1.  Specifies the key in the token to use with the specified parameter.

```yaml title="Example secret for a bearer token"
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
  namespace: my-namespace
data: 
  bearerToken: "<bearer_token>" (1)
```
1.  Specifies a bearer token to use with bearer authentication. The value must be base-64 encoded.

```yaml title="Example trigger authentication that uses an environment variable"
kind: TriggerAuthentication
apiVersion: keda.sh/v1alpha1
metadata:
  name: env-var-triggerauthentication
  namespace: my-namespace (1)
spec:
  env: (2)
  - parameter: access_key (3)
    name: ACCESS_KEY (4)
    containerName: my-container (5)
```
1.  Specifies the namespace of the object you want to scale.
1.  Specifies that this trigger authentication uses environment variables for authorization when connecting to the metrics endpoint.
1.  Specify the parameter to set with this variable.
1.  Specify the name of the environment variable.
1.  Optional: Specify a container that requires authentication. The container must be in the same resource as referenced by `scaleTargetRef` in the scaled object.

```yaml title="Example trigger authentication that uses pod authentication providers"
kind: TriggerAuthentication
apiVersion: keda.sh/v1alpha1
metadata:
  name: pod-id-triggerauthentication
  namespace: my-namespace (1)
spec:
  podIdentity: (2)
    provider: aws-eks (3)
```
1.  Specifies the namespace of the object you want to scale.
1.  Specifies that this trigger authentication uses a platform-native pod authentication when connecting to the metrics endpoint.
1.  Specifies a pod identity. Supported values are `none`, `azure`, `gcp`, `aws-eks`, or `aws-kiam`. The default is `none`.

**Additional resources**

*   [Understanding and creating service accounts](/authentication/understanding-and-creating-service-accounts#understanding-service-accounts)
*   [Providing sensitive data to pods](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets).

{% leveloffset +1 %}{% include "./modules/nodes-cma-autoscaling-custom-trigger-auth-using.md" %}{% endleveloffset %}