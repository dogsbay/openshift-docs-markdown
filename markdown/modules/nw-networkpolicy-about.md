{%- set _mod_docs_content_type = "CONCEPT" %}
# About network policy {id="nw-networkpolicy-about_{{ context }}"}

To control traffic between workloads and improve network isolation, configure `NetworkPolicy` objects for your projects. Network policies define the allowed ingress and egress connections for selected pods and help secure applications in your cluster. {._abstract}

By default, all pods in a project are accessible from other pods and network endpoints. To isolate one or more pods in a project, you can create `NetworkPolicy` objects in that project to indicate the allowed incoming connections. Project administrators can create and delete `NetworkPolicy` objects within their own project.


:::important

From {{ product_title }} 4.22, {{ product_title }} now includes `NetworkPolicy` objects in some of its own namespaces by default. This inclusion improves overall security and better protects control plane components. Do not modify the `NetworkPolicy` objects that {{ product_title }} includes in its own namespaces by default. To check the namespaces that include the objects by default, you can run the following command:

```terminal
$ oc get networkpolicies --all-namespaces
```

The {{ product_title }} 4.22 release does not include these objects in all {{ product_title }} namespaces; later {{ product_title }} releases might include the objects in additional namespaces. 

:::


By default, all pods in a project are accessible from any network endpoint.

If a pod is matched by selectors in one or more `NetworkPolicy` objects, then the pod accepts only connections that are allowed by at least one of those `NetworkPolicy` objects. A pod that is not selected by any `NetworkPolicy` objects remains fully accessible.

## Policy additivity {id="nw-networkpolicy-additive_{{ context }}"}

`NetworkPolicy` objects are additive, which means you can combine multiple `NetworkPolicy` objects together to satisfy complex network requirements.

For example, if you define both an `allow-same-namespace` policy and an `allow-http-and-https` policy within the same project, pods with the `role=frontend` label accept any connection allowed by either policy.

This means the pods accept:

*   Connections on any port from pods in the same namespace.
*   Connections on ports `80` and `443` from pods in any namespace.

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-router
spec:
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          policy-group.network.openshift.io/ingress: ""
  podSelector: {}
  policyTypes:
  - Ingress
```

The `policy-group.network.openshift.io/ingress:""` label supports OVN-Kubernetes.

To reduce the cluster attack surface and ensure predictable network behavior, {{ product_title }} enforces least-privilege network policies on critical networking components.

The operators that manage cluster DNS and cluster Ingress automatically install and maintain default "deny-all" `NetworkPolicy` objects in their respective namespaces.

Traffic is controlled using targeted "allow" policies in the following namespaces:

*   DNS component namespaces (`openshift-dns` and `openshift-dns-operator`): 
    *   Egress is limited to the API server and required DNS ports.
    *   Ingress is restricted to essential DNS traffic and metrics.
*   Ingress component namespaces (`openshift-ingress` and `openshift-ingress-operator`): 
    *   Egress is limited to the API server, DNS ports, and route endpoints.
    *   Ingress is restricted to HTTP/HTTPS traffic and metrics.


:::important

Do not run unmanaged or custom pods in these namespaces. Because these namespaces operate on a deny-by-default model, network traffic for any unmanaged containers running in these namespaces will be blocked.

:::