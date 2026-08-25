{%- set _mod_docs_content_type = "REFERENCE" %}
# Network policy configuration examples {id="cert-manager-nw-policy-examples_{{ context }}"}

To control traffic flow and enhance cluster security, enable network policies and custom rules for the {{ cert_manager_operator }}. {._abstract}

To enable network policy and custom rules, see the following example:

```yaml
apiVersion: operator.openshift.io/v1alpha1
kind: CertManager
metadata:
  name: cluster
spec:
  defaultNetworkPolicy: "true"
```

To allow egress access to all external issuer providers, see the following example:

```yaml
apiVersion: operator.openshift.io/v1alpha1
kind: CertManager
metadata:
  name: cluster
spec:
  defaultNetworkPolicy: "true"
  networkPolicies:
  - name: allow-egress-to-all
    componentName: CoreController
    egress:
     - {}
```

To allow the cert-manager Operator controller to perform the ACME challenge self-check, see the following example. This process requires connections to the ACME provider, DNS API endpoints, and recursive DNS servers.

```yaml
apiVersion: operator.openshift.io/v1alpha1
kind: CertManager
metadata:
  name: cluster
spec:
  defaultNetworkPolicy: "true"
  networkPolicies:
  - name: allow-egress-to-acme-server
    componentName: CoreController
    egress:
    - ports:
      - port: 80
        protocol: TCP
      - port: 443
        protocol: TCP
  - name: allow-egress-to-dns-service
    componentName: CoreController
    egress:
    - ports:
      - port: 53
        protocol: UDP
      - port: 53
        protocol: TCP
```