{%- set _mod_docs_content_type = "REFERENCE" %}
# UserDefinedNetwork and NetworkAttachmentDefinition support matrix {id="support-matrix-for-udn-nad_{{ context }}"}

You can use user defined networks and network attachment definitions to define and configure customized networks for your needs. {._abstract}

By creating `UserDefinedNetwork` and `NetworkAttachmentDefinition` custom resources (CRs), cluster administrators can complete the following tasks:

*   Create customizable network configurations
*   Define their own network topologies
*   Ensure network isolation
*   Manage IP addressing for workloads
*   Configure advanced network features

By creating a `ClusterUserDefinedNetwork` CR, administrators can create and define secondary networks that span multiple namespaces at the cluster level.

User-defined networks and network attachment definitions can serve as both the primary and secondary network interface, and each support `layer2` and `layer3` topologies.


:::note

As of {{ product_title }} 4.19, the use of the `Localnet` topology by `ClusterUserDefinedNetwork` CRs is generally available. This configuration is the preferred method for connecting physical networks to virtual networks. Or, you can use the `NetworkAttachmentDefinition` CR to create secondary networks with `Localnet` topologies.

:::


The following section highlights the supported features of the `UserDefinedNetwork` and `NetworkAttachmentDefinition` CRs when used as either the primary or secondary network. A separate table for the `ClusterUserDefinedNetwork` CR is also included.

**Primary network support matrix for `UserDefinedNetwork` and `NetworkAttachmentDefinition` CRs**

<table>
<thead>
<tr>
  <th>Network feature ^</th>
  <th>Layer2 topology ^</th>
  <th>Layer3 topology</th>
</tr>
</thead>
<tbody>
<tr>
  <td>east-west traffic</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>north-south traffic</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>Persistent IPs</td>
  <td>&#10003;</td>
  <td>X</td>
</tr>
<tr>
  <td>Services</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>Routes</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td><code>EgressIP</code> resource</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>Multicast</td>
  <td>X</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td><code>NetworkPolicy</code> resource</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td><code>MultinetworkPolicy</code> resource</td>
  <td>X</td>
  <td>X</td>
</tr>
</tbody>
</table>

where:


Multicast
:   Must be enabled in the namespace, and it is only available between OVN-Kubernetes network pods. For more information, see "About multicast".

`NetworkPolicy` resource
:   When creating a `ClusterUserDefinedNetwork` CR with a primary network type, network policies must be created _after_ the `UserDefinedNetwork` CR.

**Secondary network support matrix for `UserDefinedNetwork` and `NetworkAttachmentDefinition` CRs**

<table>
<thead>
<tr>
  <th>Network feature ^</th>
  <th>Layer2 topology ^</th>
  <th>Layer3 topology ^</th>
  <th>Localnet topology</th>
</tr>
</thead>
<tbody>
<tr>
  <td>east-west traffic</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td>&#10003; (<code>NetworkAttachmentDefinition</code> CR only)</td>
</tr>
<tr>
  <td>north-south traffic</td>
  <td>X</td>
  <td>X</td>
  <td>&#10003; (<code>NetworkAttachmentDefinition</code> CR only)</td>
</tr>
<tr>
  <td>Persistent IPs</td>
  <td>&#10003;</td>
  <td>X</td>
  <td>&#10003; (<code>NetworkAttachmentDefinition</code> CR only)</td>
</tr>
<tr>
  <td>Services</td>
  <td>X</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>Routes</td>
  <td>X</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td><code>EgressIP</code> resource</td>
  <td>X</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>Multicast</td>
  <td>X</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td><code>NetworkPolicy</code> resource</td>
  <td>X</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td><code>MultinetworkPolicy</code> resource</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td>&#10003; (<code>NetworkAttachmentDefinition</code> CR only)</td>
</tr>
</tbody>
</table>

The Localnet topology is unavailable for use with the `UserDefinedNetwork` CR. It is only supported on secondary networks for `NetworkAttachmentDefinition` CRs.

**Support matrix for `ClusterUserDefinedNetwork` CRs**

<table>
<thead>
<tr>
  <th>Network feature ^</th>
  <th>Layer2 topology ^</th>
  <th>Layer3 topology ^</th>
  <th>Localnet topology</th>
</tr>
</thead>
<tbody>
<tr>
  <td>east-west traffic</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>north-south traffic</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>Persistent IPs</td>
  <td>&#10003;</td>
  <td>X</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td>Services</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td></td>
</tr>
<tr>
  <td>Routes</td>
  <td>X</td>
  <td>X</td>
  <td></td>
</tr>
<tr>
  <td><code>EgressIP</code> resource</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td></td>
</tr>
<tr>
  <td>Multicast</td>
  <td>X</td>
  <td>&#10003;</td>
  <td></td>
</tr>
<tr>
  <td><code>MultinetworkPolicy</code> resource</td>
  <td>X</td>
  <td>X</td>
  <td>&#10003;</td>
</tr>
<tr>
  <td><code>NetworkPolicy</code> resource</td>
  <td>&#10003;</td>
  <td>&#10003;</td>
  <td></td>
</tr>
</tbody>
</table>

where:


Multicast
:   must be enabled in the namespace, and it is only available between OVN-Kubernetes network pods. For more information, see "About multicast".

`NetworkPolicy` resource
:   When creating a `ClusterUserDefinedNetwork` CR with a primary network type, network policies must be created _after_ the `UserDefinedNetwork` CR.