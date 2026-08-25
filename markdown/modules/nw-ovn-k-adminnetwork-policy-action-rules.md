{%- set _mod_docs_content_type = "CONCEPT" %}
# AdminNetworkPolicy actions for rules {id="adminnetworkpolicy-actions-for-rules_{{ context }}"}

You can set the `action` field to `Allow`, `Deny`, or `Pass` on each `AdminNetworkPolicy`(ANP) custom resource rule so OVN-Kubernetes tiered ACLs apply administrative decisions before lower-tier networkpolicies can take effect. {._abstract}

Because OVN-Kubernetes uses tiered ACLs to evaluate network traffic rules, an ANP CR lets you define strong policy rules that can only be changed by an administrator modifying them, deleting the rule, or overriding them by setting a higher priority rule.

## AdminNetworkPolicy Allow example {id="adminnetworkpolicy-allow-example_{{ context }}"}
The following ANP that is defined at priority 9 ensures all ingress traffic is allowed from the `monitoring` namespace towards any tenant (all other namespaces) in the cluster.

```yaml title="Example YAML file for a strong Allow ANP"
apiVersion: policy.networking.k8s.io/v1alpha1
kind: AdminNetworkPolicy
metadata:
  name: allow-monitoring
spec:
  priority: 9
  subject:
    namespaces: {} # Use the empty selector with caution because it also selects OpenShift namespaces as well.
  ingress:
  - name: "allow-ingress-from-monitoring"
    action: "Allow"
    from:
    - namespaces:
        matchLabels:
          kubernetes.io/metadata.name: monitoring
# ...
```
This is an example of a strong `Allow` ANP because it is non-overridable by all the parties involved. No tenants can block themselves from being monitored using `NetworkPolicy` objects and the monitoring tenant also has no say in what it can or cannot monitor.

## AdminNetworkPolicy Deny example {id="adminnetworkpolicy-deny-example_{{ context }}"}
The following ANP that is defined at priority 5 ensures all ingress traffic from the `monitoring` namespace is blocked towards restricted tenants (namespaces that have labels `security: restricted`).

```yaml title="Example YAML file for a strong Deny ANP"
apiVersion: policy.networking.k8s.io/v1alpha1
kind: AdminNetworkPolicy
metadata:
  name: block-monitoring
spec:
  priority: 5
  subject:
    namespaces:
      matchLabels:
        security: restricted
  ingress:
  - name: "deny-ingress-from-monitoring"
    action: "Deny"
    from:
    - namespaces:
        matchLabels:
          kubernetes.io/metadata.name: monitoring
# ...
```
This is a strong `Deny` ANP that is non-overridable by all the parties involved. The restricted tenant owners cannot authorize themselves to allow monitoring traffic, and the infrastructure’s monitoring service cannot scrape anything from these sensitive namespaces.

When combined with the strong `Allow` example, the `block-monitoring` ANP has a lower priority value giving it higher precedence, which ensures `restricted` tenants are never monitored.

## AdminNetworkPolicy Pass example {id="adminnetworkpolicy-pass-example_{{ context }}"}
The following ANP that is defined at priority 7 ensures all ingress traffic from the `monitoring` namespace towards internal infrastructure tenants (namespaces that have labels `security: internal`) are passed on to tier 2 of the ACLs and evaluated by the namespaces’ `NetworkPolicy` objects.

```yaml title="Example YAML file for a strong Pass ANP"
apiVersion: policy.networking.k8s.io/v1alpha1
kind: AdminNetworkPolicy
metadata:
  name: pass-monitoring
spec:
  priority: 7
  subject:
    namespaces:
      matchLabels:
        security: internal
  ingress:
  - name: "pass-ingress-from-monitoring"
    action: "Pass"
    from:
    - namespaces:
        matchLabels:
          kubernetes.io/metadata.name: monitoring
# ...
```
This example is a strong `Pass` action ANP because it delegates the decision to `NetworkPolicy` objects defined by tenant owners. This `pass-monitoring` ANP allows all tenant owners grouped at security level `internal` to choose if their metrics should be scraped by the infrastructures' monitoring service using namespace scoped `NetworkPolicy` objects.