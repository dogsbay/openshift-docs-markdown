{%- set _mod_docs_content_type = "REFERENCE" %}
# EgressFirewall custom resource (CR) {id="nw-egress-firewall-object_{{ context }}"}

You can define one or more rules for an egress firewall. A rule is either an `Allow` rule or a `Deny` rule, with a specification for the traffic that the rule applies to. {._abstract}

The following YAML describes an `EgressFirewall` CR:

```yaml title="EgressFirewall object"
apiVersion: k8s.ovn.org/v1
kind: EgressFirewall
metadata:
  name: <ovn>
spec:
  egress: <egress_rules>
    ...
```
where:


&lt;ovn>
:   The name for the object must be `default`.

&lt;egress_rules>
:   Specifies a collection of one or more egress network policy rules as described in the following section.

## EgressFirewall rules {id="egress-firewall-rules_{{ context }}"}

The following YAML describes the rules for an `EgressFirewall` resource. The user can select either an IP address range in CIDR format, a domain name, or use the `nodeSelector` field to allow or deny egress traffic. The `egress` stanza expects an array of one or more objects.

```yaml title="Egress policy rule stanza"
egress:
- type: <type>
  to:
    cidrSelector: <cidr_range>
    dnsName: <dns_name>
    nodeSelector: <label_name>: <label_value>
  ports: <optional_port>
      ...
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

&lt;ports>
:   Specifies an optional field that describes a collection of network ports and protocols for the rule.

```yaml title="Ports stanza"
ports:
- port: <port>
  protocol: <protocol>
```
where:


&lt;port>
:   Specifies a network port, such as `80` or `443`. If you specify a value for this field, you must also specify a value for the `protocol` field.

&lt;protocol>
:   Specifies a network protocol. The value must be either `TCP`, `UDP`, or `SCTP`.

## Example EgressFirewall CR {id="egress-firewall-example_{{ context }}"}

The following example defines several egress firewall policy rules:

```yaml
apiVersion: k8s.ovn.org/v1
kind: EgressFirewall
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

The following example defines a policy rule that denies traffic to the host at the `172.16.1.1/32` IP address, if the traffic is using either the TCP protocol and destination port `80` or any protocol and destination port `443`.

```yaml
apiVersion: k8s.ovn.org/v1
kind: EgressFirewall
metadata:
  name: default
spec:
  egress:
  - type: Deny
    to:
      cidrSelector: 172.16.1.1/32
    ports:
    - port: 80
      protocol: TCP
    - port: 443
```

## Example EgressFirewall CR using nodeSelector {id="configuring-NodeSelector-egfw-example_{{ context }}"}

As a cluster administrator, you can allow or deny egress traffic to nodes in your cluster by specifying a label using `nodeSelector` field. Labels can be applied to one or more nodes. Labels can be helpful because instead of adding manual rules per node IP address, you can use node selectors to create a label that allows pods behind an egress firewall to access host network pods. The following is an example with the `region=east` label:

```yaml
apiVersion: k8s.ovn.org/v1
kind: EgressFirewall
metadata:
  name: default
spec:
    egress:
    - to:
        nodeSelector:
          matchLabels:
            region: east
      type: Allow
```