---
title: Troubleshooting the web terminal
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting the web terminal {id="troubleshooting-web-terminal"}

{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
{%- set context = "troubleshooting-web-terminal" %}

## Web terminal and network policies {id="troubleshooting-web-terminal-network-policies"}

The web terminal might fail to start if the cluster has network policies configured. To start a web terminal instance, the {{ web_terminal_op }} must communicate with the web terminal’s pod to verify it is running, and the {{ product_title }} web console needs to send information to automatically log in to the cluster within the terminal. If either step fails, the web terminal fails to start and the terminal panel is in a loading state until a `context deadline exceeded error` occurs.

To avoid this issue, ensure that the network policies for namespaces that are used for terminals allow ingress from the `openshift-console` and `openshift-operators` namespaces.

The following samples show `NetworkPolicy` objects for allowing ingress from the `openshift-console` and `openshift-operators` namespaces.

```yaml title="Allowing ingress from the openshift-console namespace"
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-openshift-console
spec:
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: openshift-console
  podSelector: {}
  policyTypes:
  - Ingress
```

```yaml title="Allowing ingress from the openshift-operators namespace"
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-openshift-operators
spec:
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: openshift-operators
  podSelector: {}
  policyTypes:
  - Ingress
```