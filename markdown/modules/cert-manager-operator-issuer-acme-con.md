{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring an ACME issuer {id="cert-manager-operator-issuer-acme-con_{{ context }}"}

The {{ cert_manager_operator }} supports using Automated Certificate Management Environment (ACME) CA servers, such as _Let’s Encrypt_, to issue certificates. Explicit credentials are configured by specifying the secret details in the `Issuer` API object. Ambient credentials are extracted from the environment, metadata services, or local files which are not explicitly configured in the `Issuer` API object. {._abstract}

The `Issuer` object is namespace scoped. It can only issue certificates from the same namespace. You can also use the `ClusterIssuer` object to issue certificates across all namespaces in the cluster.

```yaml title="Example YAML file that defines the ClusterIssuer object"
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: acme-cluster-issuer
spec:
  acme:
    ...
```


:::note

By default, you can use the `ClusterIssuer` object with ambient credentials. To use the `Issuer` object with ambient credentials, you must enable the `--issuer-ambient-credentials` setting for the cert-manager controller.

:::