{%- set _mod_docs_content_type = "CONCEPT" %}
# Overlapped sharding example {id="nw-overlapped-sharding_{{ context }}"}

An overlapped sharding example shows how an Ingress Controller in {{ product_title }} can serve overlapping namespace label selectors so that more than one controller can admit the same routes. {._abstract}

```yaml title="Example YAML definition for devops-router"
apiVersion: operator.openshift.io/v1
kind: IngressController
metadata:
  name: devops-router
  namespace: openshift-ingress-operator
spec:
  namespaceSelector:
    matchExpressions:
    - key: name
      operator: In
      values:
      - dev
      - ops

```

The routes in the namespaces labeled `name:dev` and `name:ops` are now serviced by two different Ingress Controllers. With this configuration, you have overlapping subsets of routes.

With overlapping subsets of routes you can create more complex routing rules. For example, you can divert higher priority traffic to the dedicated `finops-router` while sending lower priority traffic to `devops-router`.