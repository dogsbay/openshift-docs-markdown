{%- set _mod_docs_content_type = "REFERENCE" %}
# Node Configuration {id="telco-core-node-configuration_{{ context }}"}

Node configuration for telco core clusters includes additional kernel modules, container mount namespace settings, and kdump configuration. {._abstract}


New in this release
:   *   There are no reference design updates in this release.

Limits and requirements
:   *   Analyze additional kernel modules to determine impact on CPU load, system performance, and ability to meet KPIs.

    ***Additional kernel modules***

<table>
<thead>
<tr>
  <th>Feature</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Additional kernel modules</td>
  <td>Install the following kernel modules by using <code>MachineConfig</code> CRs to provide extended kernel functionality to CNFs.<br><br><ul><li>sctp</li><li>ip_gre</li><li>nf_tables</li><li>nf_conntrack</li><li>nft_ct</li><li>nft_limit</li><li>nft_log</li><li>nft_nat</li><li>nft_chain_nat</li><li>nf_reject_ipv4</li><li>nf_reject_ipv6</li><li>nfnetlink_log</li></ul></td>
</tr>
<tr>
  <td>Container mount namespace hiding</td>
  <td>Reduce the frequency of kubelet housekeeping and eviction monitoring to reduce CPU usage.</td>
</tr>
<tr>
  <td>Kdump enable</td>
  <td>Optional configuration (enabled by default)</td>
</tr>
</tbody>
</table>