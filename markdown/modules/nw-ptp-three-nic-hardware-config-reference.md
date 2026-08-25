{%- set _mod_docs_content_type = "REFERENCE" %}
# 3-card E810 NIC configuration reference {id="nw-ptp-three-nic-hardware-config-reference_{{ context }}"}

Use this information to understand how to configure 3 E810 NICs as PTP grandmaster clock (T-GM). {._abstract}

Before you configure the 3-card cluster host, you must connect the 3 NICs by using the 1PPS faceplate connections.
The primary NIC `1PPS_out` outputs feed the other 2 NICs.

When you configure a 3-card T-GM, you need to compensate for the 1PPS signal delay that occurs when you connect the NICs by using the SMA1 connection ports.
Various factors such as cable length, ambient temperature, and component and manufacturing tolerances can affect the signal delay.
To compensate for the delay, you must calculate the specific value that you use to offset the signal delay.

***3-card E810 T-GM PtpConfig CR reference***

<table>
<thead>
<tr>
  <th>PtpConfig field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.profile.plugins.e810.pins</code></td>
  <td>Configure the E810 hardware pins with the PTP Operator E810 hardware plugin.<br><br><ul><li><code>$iface_timeTx1.SMA1</code> enables the <code>1PPS OUT</code> connection for <code>SMA1</code> on NIC 1.</li><li><code>$iface_timeTx1.SMA2</code> enables the <code>1PPS OUT</code> connection for <code>SMA2</code> on NIC 1.</li><li><code>$iface_timeTx2.SMA1</code> and <code>$iface_timeTx3.SMA1</code> enables the <code>1PPS IN</code> connection for <code>SMA1</code> on NIC 2 and NIC 3.</li><li><code>$iface_timeTx2.SMA2</code> and <code>$iface_timeTx3.SMA2</code> disables the <code>SMA2</code> connection on NIC 2 and NIC 3.</li></ul></td>
</tr>
<tr>
  <td><code>spec.profile.ts2phcConf</code></td>
  <td>Use the <code>ts2phcConf</code> field to configure parameters for the NICs.</td>
</tr>
<tr>
  <td><code>spec.profile.ptp4lConf</code></td>
  <td>Set the value of <code>boundary_clock_jbod</code> to 1 to enable support for multiple NICs.</td>
</tr>
</tbody>
</table>