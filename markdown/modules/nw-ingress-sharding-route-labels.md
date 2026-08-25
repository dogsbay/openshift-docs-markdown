{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Ingress Controller sharding by using route labels {id="nw-ingress-sharding-route-labels_{{ context }}"}

You can use route labels to configure Ingress Controller sharding so that the Ingress Controller serves any route in any namespace that is selected by the route selector. {._abstract}

**Figure 1. Ingress sharding by using route labels**

![A diagram showing multiple Ingress Controllers with different route selectors serving any route containing a label that matches a given route selector regardless of the namespace a route belongs to](/_assets/images/nw-sharding-route-labels.png)

Ingress Controller sharding is useful when balancing incoming traffic load among a set of Ingress Controllers and when isolating traffic to a specific Ingress Controller. For example, company A goes to one Ingress Controller and company B to another.

**Procedure**

1.  Edit the `router-internal.yaml` file:
    ```yaml
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
      routeSelector:
        matchLabels:
          type: sharded
    ```
    *   `<apps-sharded.basedomain.example.net>`: Specify a domain to be used by the Ingress Controller. This domain must be different from the default Ingress Controller domain.
1.  Apply the Ingress Controller `router-internal.yaml` file:
    ```terminal
    # oc apply -f router-internal.yaml
    ```

    The Ingress Controller selects routes in any namespace that have the label
    `type: sharded`.
1.  Create a new route by using the domain configured in the `router-internal.yaml`:
    ```terminal
    $ oc expose svc <service-name> --hostname <route-name>.apps-sharded.basedomain.example.net
    ```