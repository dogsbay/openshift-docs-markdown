{%- set _mod_docs_content_type = "REFERENCE" %}
# Traditional sharding example {id="nw-traditional-sharding_{{ context }}"}

To understand traditional sharding, you can review the example of a configured Ingress Controller `finops-router` that has the label selector `spec.namespaceSelector.matchExpressions` with key values set to `finance` and `ops`. {._abstract}

```yaml title="Example YAML definition for finops-router"
apiVersion: operator.openshift.io/v1
kind: IngressController
metadata:
  name: finops-router
  namespace: openshift-ingress-operator
spec:
  namespaceSelector:
    matchExpressions:
    - key: name
      operator: In
      values:
      - finance
      - ops
```

An example of a configured Ingress Controller `dev-router` that has the label selector `spec.namespaceSelector.matchLabels.name` with the key value set to `dev`:

```yaml title="Example YAML definition for dev-router"
apiVersion: operator.openshift.io/v1
kind: IngressController
metadata:
  name: dev-router
  namespace: openshift-ingress-operator
spec:
  namespaceSelector:
    matchLabels:
      name: dev
```

If all application routes are in separate namespaces, such as each labeled with `name:finance`, `name:ops`, and `name:dev`, the configuration effectively distributes your routes between the two Ingress Controllers. {{ product_title }} routes for console, authentication, and other purposes should not be handled.

In the previous scenario, sharding becomes a special case of partitioning, with no overlapping subsets. Routes are divided between router shards.


:::warning

The `default` Ingress Controller continues to serve all routes unless the `namespaceSelector` or `routeSelector` fields contain routes that are meant for exclusion. See this [Red Hat Knowledgebase solution](https://access.redhat.com/solutions/5097511) and the section "Sharding the default Ingress Controller" for more information on how to exclude routes from the default Ingress Controller.

:::