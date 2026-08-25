{%- set _mod_docs_content_type = "REFERENCE" %}
# The Ingress configuration asset {id="nw-installation-ingress-config-asset_{{ context }}"}

The installation program generates an asset with an `Ingress` resource in the `config.openshift.io` API group, `cluster-ingress-02-config.yml`.

```yaml title="YAML Definition of the Ingress resource"
apiVersion: config.openshift.io/v1
kind: Ingress
metadata:
  name: cluster
spec:
  domain: apps.openshiftdemos.com
```

The installation program stores this asset in the `cluster-ingress-02-config.yml` file in the `manifests/` directory. This `Ingress` resource defines the cluster-wide configuration for Ingress. This Ingress configuration is used as follows:

*   The Ingress Operator uses the domain from the cluster Ingress configuration as the domain for the default Ingress Controller.
*   The OpenShift API Server Operator uses the domain from the cluster Ingress configuration. This domain is also used when generating a default host for a `Route` resource that does not specify an explicit host.