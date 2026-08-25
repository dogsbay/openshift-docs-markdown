{%- set _mod_docs_content_type = "REFERENCE" %}
# EgressNetworkPolicy custom resource (CR) {id="nw-egressnetworkpolicy-object_{{ context }}"}

You can define one or more rules for an egress firewall. A rule is either an `Allow` rule or a `Deny` rule, with a specification for the traffic that the rule applies to. {._abstract}

The following YAML describes an `EgressNetworkPolicy` CR:

```yaml
apiVersion: network.openshift.io/v1
kind: EgressNetworkPolicy
metadata:
  name: <name>
spec:
  egress: <egress>
  ...
```

where:


&lt;name>
:   Specifies the name for your egress firewall policy.

&lt;egress>
:   Specifies a collection of one or more egress network policy rules as described in the following section.

## EgressNetworkPolicy rules {id="egressnetworkpolicy-rules_{{ context }}"}

The user can select either an IP address range in CIDR format, a domain name, or use the `nodeSelector` to allow or deny egress traffic. The `egress` stanza expects an array of one or more objects. The following YAML describes an egress firewall rule object.

```yaml
egress:
- type: <type>
  to:
    cidrSelector: <cidr_range>
    dnsName: <dns_name>
    nodeSelector: <label_name>: <label_value>
```

where:


&lt;type>
:   Specifies the type of rule. The value must be either `Allow` or `Deny`.

&lt;to>
:   Specifies a stanza describing an egress traffic match rule that specifies the `cidrSelector` field or the `dnsName` field. You cannot use both fields in the same rule.

&lt;cidr_range>
:   Specifies an IP address range in CIDR format.

&lt;dns_name>
:   Specifies a DNS domain name.

&lt;nodeSelector>
:   Specifies labels which are key and value pairs that the user defines. Labels are attached to objects, such as pods. The `nodeSelector` allows for one or more node labels to be selected and attached to pods.

## Example EgressNetworkPolicy CR objects {id="egressnetworkpolicy-example_{{ context }}"}

The following example defines several egress firewall rules:

```yaml
apiVersion: k8s.ovn.org/v1
kind: EgressNetworkPolicy
metadata:
  name: default
spec:
  egress:
  - type: Allow
    to:
      cidrSelector: 1.2.3.0/24
  - type: Deny
    to:
      cidrSelector: 0.0.0.0/0
```

where:


&lt;egress>
:   Specifies a collection of egress firewall policy rule objects.