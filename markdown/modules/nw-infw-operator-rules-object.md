{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress Node Firewall rules object {id="nw-ingress-node-firewall-operator-rules-object_{{ context }}"}

You can review rule fields and examples to define which ingress traffic is allowed or denied by using the Ingress Node Firewall rules object. {._abstract}

The fields for the Ingress Node Firewall rules object are described in the following table:

**Ingress Node Firewall rules object**

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td><code>string</code></td>
  <td>The name of the CR object.</td>
</tr>
<tr>
  <td><code>interfaces</code></td>
  <td><code>array</code></td>
  <td>The fields for this object specify the interfaces to apply the firewall rules to. For example, <code>- en0</code> and <code>- en1</code>.</td>
</tr>
<tr>
  <td><code>nodeSelector</code></td>
  <td><code>array</code></td>
  <td>You can use <code>nodeSelector</code> to select the nodes to apply the firewall rules to. Set the value of your named <code>nodeselector</code> labels to <code>true</code> to apply the rule.</td>
</tr>
<tr>
  <td><code>ingress</code></td>
  <td><code>object</code></td>
  <td><code>ingress</code> allows you to configure the rules that allow outside access to the services on your cluster.</td>
</tr>
</tbody>
</table>

## Ingress object configuration {id="nw-infw-ingress-rules-object_{{ context }}"}

The values for the `ingress` object are defined in the following table:

**`ingress` object**

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>sourceCIDRs</code></td>
  <td><code>array</code></td>
  <td>Allows you to set the CIDR block. You can configure multiple CIDRs from different address families.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Different CIDRs allow you to use the same order rule. In the case that there are multiple <code>IngressNodeFirewall</code> objects for the same nodes and interfaces with overlapping CIDRs, the <code>order</code> field will specify which rule is applied first. Rules are applied in ascending order.</dd></dl></td>
</tr>
<tr>
  <td><code>rules</code></td>
  <td><code>array</code></td>
  <td>Ingress firewall <code>rules.order</code> objects are ordered starting at <code>1</code> for each <code>source.CIDR</code> with up to 100 rules per CIDR. Lower order rules are executed first.<br><br><code>rules.protocolConfig.protocol</code> supports the following protocols: TCP, UDP, SCTP, ICMP and ICMPv6. ICMP and ICMPv6 rules can match against ICMP and ICMPv6 types or codes. TCP, UDP, and SCTP rules can match against a single destination port or a range of ports using <code>&lt;start : end-1&gt;</code> format.<br><br>Set <code>rules.action</code> to <code>allow</code> to apply the rule or <code>deny</code> to disallow the rule.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Ingress firewall rules are verified using a verification webhook that blocks any invalid configuration. The verification webhook prevents you from blocking any critical cluster services such as the API server.</dd></dl></td>
</tr>
</tbody>
</table>

## Ingress Node Firewall rules object example {id="nw-ingress-node-firewall-example-cr_{{ context }}"}

A complete Ingress Node Firewall configuration is specified in the following example:

```yaml title="Example Ingress Node Firewall configuration"
apiVersion: ingressnodefirewall.openshift.io/v1alpha1
kind: IngressNodeFirewall
metadata:
  name: ingressnodefirewall
spec:
  interfaces:
  - eth0
  nodeSelector:
    matchLabels:
      <label_name>: <label_value>
  ingress:
  - sourceCIDRs:
       - 172.16.0.0/12
    rules:
    - order: 10
      protocolConfig:
        protocol: ICMP
        icmp:
          icmpType: 8 #ICMP Echo request
      action: Deny
    - order: 20
      protocolConfig:
        protocol: TCP
        tcp:
          ports: "8000-9000"
      action: Deny
  - sourceCIDRs:
       - fc00:f853:ccd:e793::0/64
    rules:
    - order: 10
      protocolConfig:
        protocol: ICMPv6
        icmpv6:
          icmpType: 128 #ICMPV6 Echo request
      action: Deny
```

A `<label_name>` and a `<label_value>` must exist on the node and must match the `nodeselector` label and value applied to the nodes you want the `ingressfirewallconfig` CR to run on. The `<label_value>` can be `true` or `false`. By using `nodeSelector` labels, you can target separate groups of nodes to apply different rules to using the `ingressfirewallconfig` CR.

## Zero trust Ingress Node Firewall rules object example {id="nw-ingress-node-firewall-zero-trust-example-cr_{{ context }}"}

Zero trust Ingress Node Firewall rules can provide additional security to multi-interface clusters. For example, you can use zero trust Ingress Node Firewall rules to drop all traffic on a specific interface except for SSH.

A complete configuration of a zero trust Ingress Node Firewall rule for a network-interface cluster is specified in the following example:


:::important

Users need to add all ports their application will use to their allowlist in the following case to ensure proper functionality.

:::


```yaml title="Example zero trust Ingress Node Firewall rules"
apiVersion: ingressnodefirewall.openshift.io/v1alpha1
kind: IngressNodeFirewall
metadata:
 name: ingressnodefirewall-zero-trust
spec:
 interfaces:
 - eth1
 nodeSelector:
   matchLabels:
     <ingress_firewall_label_name>: <label_value>
 ingress:
 - sourceCIDRs:
      - 0.0.0.0/0
   rules:
   - order: 10
     protocolConfig:
       protocol: TCP
       tcp:
         ports: 22
     action: Allow
   - order: 20
     action: Deny
```