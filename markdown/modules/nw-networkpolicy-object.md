{%- set _mod_docs_content_type = "REFERENCE" %}
# Example NetworkPolicy object {id="nw-networkpolicy-object_{{ context }}"}

Reference the example `NetworkPolicy` object to understand how to configure this object. {._abstract}

```yaml
kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: allow-27107
spec:
  podSelector:
    matchLabels:
      app: mongodb
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: app
    ports:
    - protocol: TCP
      port: 27017
```

where:


`name`
:   The name of the NetworkPolicy object.

`spec.podSelector`
:   A selector that describes the pods to which the policy applies.
{%- if not microshift %}
    The policy object can only select pods in the project that defines the NetworkPolicy object.
{%- endif %}

`ingress.from.podSelector`
:   A selector that matches the pods from which the policy object allows ingress traffic. The selector matches pods in the same namespace as the NetworkPolicy.

`ingress.ports`
:   A list of one or more destination ports on which to accept traffic.