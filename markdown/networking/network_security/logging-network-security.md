---
title: Audit logging for network security
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Audit logging for network security {id="logging-network-security"}
{%- set context = "logging-network-security" %}

The OVN-Kubernetes network plugin uses Open Virtual Network (OVN) access control lists (ACLs) to manage `AdminNetworkPolicy`, `BaselineAdminNetworkPolicy`, `NetworkPolicy`, and `EgressFirewall` objects. Audit logging exposes `Allow` and `Deny` ACL events for `NetworkPolicy`, `EgressFirewall` and `BaselineAdminNetworkPolicy` custom resources (CR). Logging also exposes `Allow`, `Deny`, and `Pass` ACL events for `AdminNetworkPolicy` (ANP) CR. {._abstract}


:::note

Audit logging is available for only the [OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes).

:::


{% leveloffset +1 %}{% include "./modules/nw-audit-configuration.md" %}{% endleveloffset %}

**`policyAuditConfig` object**

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
  <td><code>rateLimit</code></td>
  <td>integer</td>
  <td>The maximum number of messages to generate every second per node. The default value is <code>20</code> messages per second.</td>
</tr>
<tr>
  <td><code>maxFileSize</code></td>
  <td>integer</td>
  <td>The maximum size for the audit log in bytes. The default value is <code>50000000</code> or 50 MB.</td>
</tr>
<tr>
  <td><code>maxLogFiles</code></td>
  <td>integer</td>
  <td>The maximum number of log files that are retained.</td>
</tr>
<tr>
  <td><code>destination</code></td>
  <td>string</td>
  <td>One of the following additional audit log targets:<br><br><dl><dt><code>libc</code></dt><dd>The libc <code>syslog()</code> function of the journald process on the host.</dd><dt><code>udp:&lt;host&gt;:&lt;port&gt;</code></dt><dd>A syslog server. Replace <code>&lt;host&gt;:&lt;port&gt;</code> with the host and port of the syslog server.</dd><dt><code>unix:&lt;file&gt;</code></dt><dd>A Unix Domain Socket file specified by <code>&lt;file&gt;</code>.</dd><dt><code>null</code></dt><dd>Do not send the audit logs to any additional target.</dd></dl></td>
</tr>
<tr>
  <td><code>syslogFacility</code></td>
  <td>string</td>
  <td>The syslog facility, such as <code>kern</code>, as defined by RFC5424. The default value is <code>local0</code>.</td>
</tr>
</tbody>
</table>

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-concept.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Understanding network policy APIs](/networking/network_security/network-policy-apis#network-policy-apis)

{% leveloffset +1 %}{% include "./modules/nw-anp-audit-logging-concept.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-banp-audit-logging-concept.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-enable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-networkpolicy-audit-disable.md" %}{% endleveloffset %}

{% if not openshift_rosa_hcp %}
## Additional resources {id="{{ context }}-additional-resources" ._additional-resources}

{% if openshift_rosa or openshift_enterprise %}
*   [About network policy](/networking/network_security/network_policy/about-network-policy#about-network-policy)
{% endif %}
{% if not (openshift_dedicated or openshift_rosa) %}
*   [Configuring an egress firewall for a project](/networking/network_security/egress_firewall/configuring-egress-firewall-ovn#configuring-egress-firewall-ovn)
{% endif %}
{% endif %}