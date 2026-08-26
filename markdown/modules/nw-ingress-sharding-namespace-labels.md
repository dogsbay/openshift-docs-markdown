{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Ingress Controller sharding by using namespace labels {id="nw-ingress-sharding-namespace-labels_{{ context }}"}

You can use namespace labels to configure Ingress Controller sharding so that the Ingress Controller serves any route in any namespace that is selected by the namespace selector. {._abstract}

**Figure 1. Ingress sharding by using namespace labels**

![A diagram showing multiple Ingress Controllers with different namespace selectors serving routes that belong to the namespace containing a label that matches a given namespace selector](/images/nw-sharding-namespace-labels.png)

Ingress Controller sharding is useful when balancing incoming traffic load among
a set of Ingress Controllers and when isolating traffic to a specific Ingress
Controller. For example, company A goes to one Ingress Controller and company B
to another.

**Procedure**

1.  Edit the `router-internal.yaml` file:
    ```terminal
    $ cat router-internal.yaml
    ```
    ```yaml title="Example output"
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: sharded
      namespace: openshift-ingress-operator
    spec:
      domain: <apps-sharded.basedomain.example.net>
      nodePlacement:
        nodeSelector:
          matchLabels:
            node-role.kubernetes.io/worker: ""
      namespaceSelector:
        matchLabels:
          type: sharded
    ```
    *   `<apps-sharded.basedomain.example.net>`: Specify a domain to be used by the Ingress Controller. This domain must be different from the default Ingress Controller domain.
1.  Apply the Ingress Controller `router-internal.yaml` file:
    ```terminal
    $ oc apply -f router-internal.yaml
    ```

    The Ingress Controller selects routes in any namespace that is selected by the
    namespace selector that have the label `type: sharded`.
1.  Create a new route by using the domain configured in the `router-internal.yaml`:
    ```terminal
    $ oc expose svc <service-name> --hostname <route-name>.apps-sharded.basedomain.example.net
    ```