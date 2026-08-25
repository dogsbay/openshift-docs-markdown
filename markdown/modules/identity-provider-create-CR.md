# Creating the CR that describes an identity provider {id="identity-provider-create-CR_{{ context }}"}

Before you can add an identity provider to your cluster, create a Custom
Resource (CR) that describes it.

**Prerequisites**

*   Create an {{ product_title }} cluster.

**Procedure**

Create a CR file to describe the identity provider. A generic file displaying
the structure is below.

```
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: my_identity_provider (1)
    mappingMethod: claim (2)
    type: <type> (3)
    ...
```
1.  A unique name defining the identity provider. This provider name is
prefixed to provider user names to form an identity name.
1.  Controls how mappings are established between this provider’s identities and user objects.
1.  The type of identity provider to be configured.

    Provide the parameters that are required for your identity provider type.