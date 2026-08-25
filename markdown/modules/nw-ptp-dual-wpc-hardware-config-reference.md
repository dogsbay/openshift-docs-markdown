{%- set _mod_docs_content_type = "REFERENCE" %}
# Dual E810 NIC configuration reference {id="nw-ptp-dual-e810-hardware-config-reference_{{ context }}"}

Use this information to understand how to use the [Intel E810 hardware plugin](https://github.com/openshift/linuxptp-daemon/blob/release-4.14/addons/intel/e810.go) to configure a pair of E810 network interfaces as PTP grandmaster clock (T-GM). {._abstract}

Before you configure the dual-NIC cluster host, you must connect the two NICs with an SMA1 cable using the 1PPS faceplace connections.

When you configure a dual-NIC T-GM, you need to compensate for the 1PPS signal delay that occurs when you connect the NICs using the SMA1 connection ports.
Various factors such as cable length, ambient temperature, and component and manufacturing tolerances can affect the signal delay.
To compensate for the delay, you must calculate the specific value that you use to offset the signal delay.

***E810 dual-NIC T-GM PtpConfig CR reference***

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
  <td>Configure the E810 hardware pins using the PTP Operator E810 hardware plugin.<br><br><ul><li>Pin <code>2 1</code> enables the <code>1PPS OUT</code> connection for <code>SMA1</code> on NIC one.</li><li>Pin <code>1 1</code> enables the <code>1PPS IN</code> connection for <code>SMA1</code> on NIC two.</li></ul></td>
</tr>
<tr>
  <td><code>spec.profile.ts2phcConf</code></td>
  <td>Use the <code>ts2phcConf</code> field to configure parameters for NIC one and NIC two.</td>
</tr>
<tr>
  <td><code>spec.profile.ptp4lConf</code></td>
  <td>Set the value of <code>boundary_clock_jbod</code> to 1 to enable support for multiple NICs.</td>
</tr>
</tbody>
</table>

Each value in the `spec.profile.plugins.e810.pins` list follows the `<function>` `<channel_number>` format.

Where:

`<function>`: Specifies the pin role. The following values are associated with the pin role:

*   `0`: Disabled
*   `1`: Receive (Rx) – for 1PPS IN
*   `2`: Transmit (Tx) – for 1PPS OUT

`<channel_number>`: A number associated with the physical connector. The following channel numbers are associated with the physical connectors:

*   `1`: `SMA1` or `U.FL1`
*   `2`: `SMA2` or `U.FL2`

Examples:

*   `2 1`: Enables `1PPS OUT` (Tx) on `SMA1`.
*   `1 1`: Enables `1PPS IN` (Rx) on `SMA1`.

The PTP Operator passes these values to the Intel E810 hardware plugin and writes them to the sysfs pin configuration interface on each NIC.