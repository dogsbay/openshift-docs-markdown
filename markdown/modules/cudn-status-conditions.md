{%- set _mod_docs_content_type = "REFERENCE" %}
# User-defined network status condition types {id="cudn-status-conditions_{{ context }}"}

To troubleshoot your network deployment in {{ product_title }}, evaluate the status condition types returned for `ClusterUserDefinedNetwork` and `UserDefinedNetwork` custom resources (CRs). Reviewing these conditions ensures that you can identify and resolve configuration errors. {._abstract}

***NetworkCreated condition types (`ClusterDefinedNetwork` and `UserDefinedNetwork` CRs)***

<table>
<thead>
<tr>
  <th>Condition type</th>
  <th>Status</th>
  <th colspan="2">Reason and Message</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.3+</td>
  <td><code>NetworkCreated</code> .3+</td>
  <td><code>True</code></td>
  <td colspan="2">When <code>True</code>, the following reason and message is returned:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message</td>
  <td><code>NetworkAttachmentDefinitionCreated</code></td>
</tr>
<tr>
  <td>'NetworkAttachmentDefinition has been created in following namespaces: [example-namespace-1, example-namespace-2, example-namespace-3]'`<br><br>.9+</td>
  <td><code>NetworkCreated</code> .9+</td>
  <td><code>False</code></td>
  <td colspan="2">When <code>False</code>, one of the following messages is returned:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message</td>
  <td><code>SyncError</code></td>
</tr>
<tr>
  <td><code>failed to generate NetworkAttachmentDefinition</code></td>
  <td><code>SyncError</code></td>
  <td><code>failed to update NetworkAttachmentDefinition</code></td>
  <td><code>SyncError</code></td>
</tr>
<tr>
  <td><code>primary network already exist in namespace "<namespace_name>": "<primary_network_name>"</code></td>
  <td><code>SyncError</code></td>
  <td><code>failed to create NetworkAttachmentDefinition: create NAD error</code></td>
  <td><code>SyncError</code></td>
</tr>
<tr>
  <td><code>foreign NetworkAttachmentDefinition with the desired name already exist</code></td>
  <td><code>SyncError</code></td>
  <td><code>failed to add finalizer to UserDefinedNetwork</code></td>
  <td><code>NetworkAttachmentDefinitionDeleted</code></td>
</tr>
<tr>
  <td><code>NetworkAttachmentDefinition is being deleted: [<namespace>/<nad_name>]</code></td>
</tr>
</tbody>
</table>

***NetworkAllocationSucceeded condition types (`UserDefinedNetwork` CRs)***

<table>
<thead>
<tr>
  <th>Condition type</th>
  <th>Status</th>
  <th colspan="2">Reason and Message</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.3+</td>
  <td><code>NetworkAllocationSucceeded</code> .3+</td>
  <td><code>True</code></td>
  <td colspan="2">When <code>True</code>, the following reason and message is returned:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message</td>
  <td><code>NetworkAllocationSucceeded</code></td>
</tr>
<tr>
  <td><code>Network allocation succeeded for all synced nodes.</code><br><br>.3+</td>
  <td><code>NetworkAllocationSucceeded</code> .3+</td>
  <td><code>False</code></td>
  <td colspan="2">When <code>False</code>, the following message is returned:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message</td>
  <td><code>InternalError</code></td>
</tr>
<tr>
  <td><code>Network allocation failed for at least one node: [<node_name>], check UDN events for more info.</code></td>
</tr>
</tbody>
</table>

***Invalid `mtu` scenarios types for the `ClusterUserDefinedNetwork` CR***

<table>
<thead>
<tr>
  <th>Condition type</th>
  <th colspan="3">Reason, Message, Resolution</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.6+</td>
  <td><code>invalid mtu</code></td>
  <td colspan="3">One of the following messages is returned when the <code>mtu</code> is set incorrect:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message h</td>
  <td>Resolution</td>
</tr>
<tr>
  <td>The <code>mtu</code> field is set higher than <code>65536</code>.</td>
  <td><code>spec.network.localnet.mtu</code> in body should be less than <code>65536</code>.</td>
  <td>You must set the <code>mtu</code> field lower than <code>65536</code>.</td>
  <td>The <code>mtu</code> field  is set lower than <code>576</code>.</td>
</tr>
<tr>
  <td><code>spec.network.localnet.mtu</code> in body should be greater than or equal to <code>576</code>.</td>
  <td>You must set the <code>mtu</code> field greater than or equal to <code>576</code>.</td>
  <td>The <code>mtu</code> field must be at least <code>1280</code> when using the IPv6 subnet.</td>
  <td><code>MTU should be greater than or equal to 1280 when an IPv6 subnet is used</code></td>
</tr>
<tr>
  <td>You must set the <code>mtu</code> field higher than or equal to <code>1280</code> when you have an IPv6 subnet defined on your user-defined network configuration.</td>
</tr>
</tbody>
</table>

***Invalid `PhysicalNetworkName` scenarios types for the `ClusterUserDefinedNetwork` CR***

<table>
<thead>
<tr>
  <th>Condition type</th>
  <th colspan="3">Reason, Message, Resolution</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.6+</td>
  <td><code>invalid PhysicalNetworkName</code></td>
  <td colspan="3">One of the following messages is returned when the <code>PhysicalNetworkName</code> is set incorrect:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message h</td>
  <td>Resolution</td>
</tr>
<tr>
  <td>The name of the physical network is not set.</td>
  <td><code>spec.network.localnet.physicalNetworkName: Required value</code></td>
  <td>You must set the <code>physicalNetworkName</code> field.</td>
  <td>The name of the physical network does not meet minimum length requirements.</td>
</tr>
<tr>
  <td><code>spec.network.localnet.physicalNetworkName in body should be at least 1 chars long</code></td>
  <td>You must set physical network name to be at least one character in length.</td>
  <td>The name of the physical network exceeds the maximum character limit of 253.</td>
  <td><code>spec.network.localnet.physicalNetworkName: Too long: may not be more than 253 bytes</code></td>
</tr>
<tr>
  <td>You must set physical network name to not exceed the 253 character in length.</td>
  <td>The name of the physical network must not contain <code>,</code> or <code>:</code>.</td>
  <td><code>physicalNetworkName cannot contain "," or ":" characters</code>.</td>
  <td>You must remove the <code>,</code> or <code>:</code> from the physical network name.</td>
</tr>
</tbody>
</table>

***Invalid `role` scenarios types for the `ClusterUserDefinedNetwork` CR***

<table>
<thead>
<tr>
  <th>Condition type</th>
  <th colspan="3">Reason, Message, Resolution</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.6+</td>
  <td><code>role unset</code> or <code>role is primary</code></td>
  <td colspan="3">One of the following messages is returned when the <code>spec.network.localnet.role</code> is set incorrect:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message h</td>
  <td>Resolution</td>
</tr>
<tr>
  <td>The <code>role</code> field must be set for your localnet topology.</td>
  <td><code>spec.network.localnet.role: Required value</code></td>
  <td>You must set the <code>role</code> field.</td>
  <td><code>Primary</code> is not a supported value for the Localnet topology.</td>
</tr>
<tr>
  <td><code>spec.network.localnet.role: Unsupported value: "Primary": supported values: "Secondary"</code></td>
  <td>You must set the <code>role</code> field for your Localnet topology to <code>Secondary</code>-the accepted value.</td>
</tr>
</tbody>
</table>

***Invalid `subnets` and `ipam` scenarios types for the `ClusterUserDefinedNetwork` CR***

<table>
<thead>
<tr>
  <th>Condition type</th>
  <th colspan="3">Reason, Message, Resolution</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.11+</td>
  <td><code>LocalnetInvalidSubnets</code></td>
  <td colspan="3">One of the following messages is returned when either the <code>spec.network.localnet.subnets</code> or <code>spec.network.localnet.ipam</code> is set incorrect:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message h</td>
  <td>Resolution</td>
</tr>
<tr>
  <td>The optional fields, <code>subnets</code> and <code>ipam.mode</code>, have to be set together.</td>
  <td><code>Subnets is required with ipam.mode is Enabled or unset, and forbidden otherwise</code></td>
  <td>You must set the <code>subnets</code> field unless the <code>spec.network.localnet.ipam.mode</code> is explicitly disabled.</td>
  <td>The <code>spec.network.localnet.subnets</code> must have an acceptable value when using this optional field.</td>
</tr>
<tr>
  <td><code>The ClusterUserDefinedNetwork "localnet-empty-subnets-fail" is invalid: spec.network.localnet.subnets: Invalid value: 0: spec.network.localnet.subnets in body should have at least 1 items</code></td>
  <td>You must set an acceptable value for <code>spec.network.localnet.subnets</code>. Acceptable values are IPv4 and IPv6 Classless Inter-Domain Routing (CIDR) ranges that do not overlap with any CIDR ranges used by {{ product_title }}.</td>
  <td>The <code>subnet</code> field must be set when using the optional <code>spec.network.localnet.excludeSubnets</code> field.</td>
  <td><code>excludeSubnets must be unset when subnets is unset</code></td>
</tr>
<tr>
  <td>You must set the <code>spec.network.localnet.subnets</code> field when using the <code>spec.network.localnet.excludeSubnet</code> field.</td>
  <td>The <code>excludeSubnets</code> must be a value within the <code>subnets</code> field.</td>
  <td><code>excludeSubnets must be subnetworks of the networks specified in the subnets field</code></td>
  <td>You must set the value for the <code>excludeSubnets</code> field to be within the <code>subnets</code> field. For example, a <code>subnets</code> value of <code>192.168.100.0/24</code> and an <code>excludeSubnets</code> value of <code>192.168.200.1/32</code> is invalid.</td>
</tr>
<tr>
  <td>The CIDR range is invalid.</td>
  <td><code>The ClusterUserDefinedNetwork "localnet-subnets-invalid-ipv4-cidr-fail" is invalid: spec.network.localnet.subnets[0]: Invalid value: "string": CIDR is invalid</code></td>
  <td>You must set an acceptable CIDR range for <code>spec.network.localnet.subnets</code> field. Acceptable values are IPv4 and IPv6 CIDR ranges which are not in use or reserved by {{ product_title }}.</td>
  <td>You must set the <code>subnets</code> field when the <code>ipam.mode</code> is <code>Enabled</code> or when the IPAM mode is unset because the default value is <code>Enabled</code>.</td>
</tr>
<tr>
  <td><code>Subnets is required with ipam.mode is Enabled or unset, and forbidden otherwise</code>.</td>
  <td>You must set the <code>spec.network.localnet.subnets</code> field unless the <code>spec.network.localnet.ipam.mode</code> is explicitly disabled.</td>
  <td>Setting two CIDR ranges for <code>spec.network.localnet.subnets</code> field requires that one be IPv4 and the other be IPv6.</td>
  <td><code>Invalid value...When 2 CIDRs are set, they must be from different IP families</code>.</td>
</tr>
<tr>
  <td>You must change one of your CIDR ranges to a different IP family.</td>
  <td>The <code>spec.network.localnet.ipam.mode</code> is <code>Disabled</code> but the <code>spec.network.localnet.lifecycle</code> has a value of <code>Persistent</code>.</td>
  <td><code>lifecycle Persistent is only supported when ipam.mode is Enabled</code></td>
  <td>You must set the <code>ipam.mode</code> to <code>Enabled</code> when the optional field <code>lifecycle</code> has a value of <code>Persistent</code>.</td>
</tr>
</tbody>
</table>

***Invalid `vlan` scenarios types for the `ClusterUserDefinedNetwork` CR***

<table>
<thead>
<tr>
  <th>Condition type</th>
  <th colspan="3">Reason, Message, Resolution</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.8+</td>
  <td><code>invalid vlan</code> or <code>invalid mode</code></td>
  <td colspan="3">One of the following messages is returned when the <code>spec.network.localnet.vlan</code> is set incorrect:</td>
</tr>
<tr>
  <td>h</td>
  <td>Reason h</td>
  <td>Message h</td>
  <td>Resolution</td>
</tr>
<tr>
  <td>The <code>spec.network.localnet.vlan.mode</code> field must be set.</td>
  <td><code>spec.network.localnet.vlan.mode: Unsupported value: "Disabled": supported values: "Access</code></td>
  <td>You must set the <code>spec.network.localnet.vlan.mode</code> field to <code>Access</code> mode.</td>
  <td>The <code>spec.network.localnet.vlan</code> field must be set when <code>spec.network.localnet.vlan.mode</code> is set to <code>Access</code> mode.</td>
</tr>
<tr>
  <td><code>vlan access config is required when vlan mode is 'Access', and forbidden otherwise</code>.</td>
  <td>You must set <code>spec.network.localnet.vlan.mode.access</code> field when using <code>Access</code> mode.</td>
  <td>The <code>spec.network.localnet.vlan.access.id</code> value must be set when using <code>Access</code> mode.</td>
  <td><code>spec.network.localnet.vlan.access.id: Required value</code></td>
</tr>
<tr>
  <td>You must set a value for <code>spec.network.localnet.mode.access.id</code>.</td>
  <td>Acceptable values for <code>access.id</code> are greater than or equal to 1.</td>
  <td><code>spec.network.localnet.vlan.access.id in body should be greater than or equal to 1</code></td>
  <td>You must set a value of 1 or greater for <code>access.id</code> field.</td>
</tr>
<tr>
  <td>Acceptable values for <code>access.id</code> are less than or equal to 4094.</td>
  <td><code>spec.network.localnet.vlan.access.id in body should be less than or equal to 4094</code></td>
  <td>You must set a value of 4094 or less for <code>access.id</code> field.</td>
</tr>
</tbody>
</table>