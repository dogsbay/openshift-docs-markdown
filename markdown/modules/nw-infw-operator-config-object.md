{%- set _mod_docs_content_type = "CONCEPT" %}
# Ingress Node Firewall configuration object {id="nw-infw-operator-config-object_{{ context }}"}

Review configuration fields so you can define how the Operator deploys the firewall. {._abstract}

The fields for the Ingress Node Firewall configuration object are described in the following table:

**Ingress Node Firewall Configuration object**

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
  <td>The name of the CR object. The name of the firewall rules object must be <code>ingressnodefirewallconfig</code>.</td>
</tr>
<tr>
  <td><code>metadata.namespace</code></td>
  <td><code>string</code></td>
  <td>Namespace for the Ingress Firewall Operator CR object. The <code>IngressNodeFirewallConfig</code> CR must be created inside the <code>openshift-ingress-node-firewall</code> namespace.</td>
</tr>
<tr>
  <td><code>spec.nodeSelector</code></td>
  <td><code>string</code></td>
  <td>A node selection constraint used to target nodes through specified node labels. For example:<br><br><pre>apiVersion: ingressnodefirewall.openshift.io/v1alpha1&#10;kind: IngressNodeFirewallConfig&#10;metadata:&#10;  name: ingressnodefirewallconfig&#10;  namespace: openshift-ingress-node-firewall&#10;spec:&#10;  nodeSelector:&#10;    node-role.kubernetes.io/worker: ""</pre><br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>One label used in <code>nodeSelector</code> must match a label on the nodes in order for the daemon set to start. For example, if the node labels <code>node-role.kubernetes.io/worker</code> and <code>node-type.kubernetes.io/vm</code> are applied to a node, then at least one label must be set using <code>nodeSelector</code> for the daemon set to start.</dd></dl></td>
</tr>
<tr>
  <td><code>spec.ebpfProgramManagerMode</code></td>
  <td><code>boolean</code></td>
  <td>Specifies if the Node Ingress Firewall Operator uses the eBPF Manager Operator or not to manage eBPF programs. This capability is a Technology Preview feature.<br><br>For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</td>
</tr>
</tbody>
</table>


:::note

{% if not (openshift_rosa or openshift_rosa_hcp) %}
The Operator consumes the CR and creates an ingress node firewall daemon set on all the nodes that match the `nodeSelector`.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
To start, the Operator consumes an `IngressNodeFirewallConfig` in order to generate the daemonset on all nodes. After this is created, additional firewall rule objects can be created.
{% endif %}

:::


## Ingress Node Firewall Operator example configuration {id="nw-ingress-node-firewall-example-cr-2_{{ context }}"}

A complete Ingress Node Firewall Configuration is specified in the following example:

```yaml title="Example of how to create an Ingress Node Firewall Configuration object"
$ cat << EOF | oc create -f -
apiVersion: ingressnodefirewall.openshift.io/v1alpha1
kind: IngressNodeFirewallConfig
metadata:
  name: ingressnodefirewallconfig
  namespace: openshift-ingress-node-firewall
spec:
  nodeSelector:
    node-role.kubernetes.io/worker: ""
EOF
```


:::note

The Operator consumes the CR object and creates an ingress node firewall daemon set on all the nodes that match the `nodeSelector`.

:::