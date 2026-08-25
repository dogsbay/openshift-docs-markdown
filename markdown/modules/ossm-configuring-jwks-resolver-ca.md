{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring JSON Web Key Sets resolver certificate authority {id="ossm-configuring-jwks-resolver-ca_{{ context }}"}

You can configure your own JSON Web Key Sets (JWKS) resolver certificate authority (CA) from the `ServiceMeshControlPlane` (SMCP) spec.

**Procedure**

1.  Edit the `ServiceMeshControlPlane` spec file:
    ```yaml
    $ oc edit smcp <smcp-name>
    ```
1.  Enable `mtls` for the data plane by setting the value of the `mtls` field to `true` in the `ServiceMeshControlPlane` spec, as shown in the following example:
    ```yaml
    spec:
      security:
        dataPlane:
            mtls: true # enable mtls for data plane
        # JWKSResolver extra CA
        # PEM-encoded certificate content to trust an additional CA
        jwksResolverCA: |
            -----BEGIN CERTIFICATE-----
            [...]
            [...]
            -----END CERTIFICATE-----
    ...
    ```
1.  Save the changes. {{ product_title }} automatically applies them.

A `ConfigMap` such as `pilot-jwks-cacerts-<SMCP name>` is created with the CA `.pem data`.

```yaml title="Example ConfigMap pilot-jwks-cacerts-<SMCP name>"
kind: ConfigMap
apiVersion: v1
data:
  extra.pem: |
      -----BEGIN CERTIFICATE-----
      [...]
      [...]
      -----END CERTIFICATE-----
```