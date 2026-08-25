---
title: Understanding network policy APIs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Understanding network policy APIs {id="network-policy-apis"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "network-policy-apis" %}

Network policy is defined using both cluster-scoped and namespace-scoped network policy APIs. By defining network policy across these different levels, you can create sophisticated network security configurations for your clusters, including full multi-tenant isolation.

## Network policies and their scope {id="nw-anp-np-scope"}


Cluster-scoped network policy
:   Cluster and network administrators can use the AdminNetworkPolicy to define network policy at the cluster level. The AdminNetworkPolicy feature consists of two APIs: the `AdminNetworkPolicy` API and `BaselineAdminNetworkPolicy` API. These APIs are used to set rules that can be applied to the entire cluster, or delegated to the namespace-scoped `NetworkPolicy`.

    Policies defined using the `AdminNetworkPolicy` API take precedence over all other policy types when set to "Allow" or "Deny". However, administrators can also use "Pass" to delegate responsibility for a given policy to the namespace-scoped `NetworkPolicy` to allow application developers and namespace tenants to control specific aspects of network security for their projects.

    Policies defined using the `BaselineAdminNetworkPolicy` API apply only when no other network policy overrides them. When you use the `AdminNetworkPolicy` API to delegate an aspect of network policy to the namespace-scoped `NetworkPolicy`, you should also define a sensible minimum restriction in the `BaselineAdminNetworkPolicy`. This ensures a baseline level of network security at the cluster level in case the `NetworkPolicy` for a namespace does not provide sufficient protection.


Namespace-scoped network policy
:   Application developers and namespace tenants can use the `NetworkPolicy` API to define network policy rules for a specific namespace. Rules in the `NetworkPolicy` for a namespace take precedence over cluster-wide rules configured using the BaselineAdminNetworkPolicy API, or for a cluster-wide rule that has been delegated or "passed" from the cluster-wide `AdminNetworkPolicy` API.

## How network policy is evaluated and applied {id="nw-anp-np-evaluation"}

When a network connection is established, the network provider (default: OVN-Kubernetes) checks the connection details against network policy rules to determine how to handle the connection.

OVN-Kubernetes evaluates connections against network policy objects in the following order:

1.  Check for matches in the AdminNetworkPolicy tier.
    1.  If a connection matches an `Allow` or `Deny` rule, follow that rule and stop evaluating.
    1.  If a connection matches a `Pass` rule, move to the NetworkPolicy tier.
1.  Check for matches in the NetworkPolicy tier.
    1.  If a connection matches a rule, follow that rule and stop evaluating.
    1.  If no match is found, move to the BaselineAdminNetworkPolicy tier.
1.  Follow a matching rule in the BaselineAdminNetworkPolicy tier.

<a name="img-ovn-kubernetes-network-policy-evaluation"></a>**Figure 1. Evaluation of network policies by OVN-Kubernetes**

![OVN-Kubernetes Access Control List (ACL)](/_assets/images/615_OpenShift_OVN-K_ACLs_0324.png)

{% leveloffset +1 %}{% include "./modules/nw-anp-np-reference.md" %}{% endleveloffset %}