{%- set _mod_docs_content_type = "CONCEPT" %}
# How network policy is evaluated and applied {id="network-policy-evaluation-and-application_{{ context }}"}

When a network connection is established, the network provider (default: OVN-Kubernetes) checks the connection details against network policy rules to determine how to handle the connection. {._abstract}

OVN-Kubernetes evaluates connections against network policy objects in the following order:

1.  Check for matches in the AdminNetworkPolicy tier.
    1.  If a connection matches an `Allow` or `Deny` rule, follow that rule and stop evaluating.
    1.  If a connection matches a `Pass` rule, move to the NetworkPolicy tier.
1.  Check for matches in the NetworkPolicy tier.
    1.  If a connection matches a rule, follow that rule and stop evaluating.
    1.  If no match is found, move to the BaselineAdminNetworkPolicy tier.
1.  Follow a matching rule in the BaselineAdminNetworkPolicy tier.