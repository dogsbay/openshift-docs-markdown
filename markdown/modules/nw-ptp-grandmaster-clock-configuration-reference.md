{%- set _mod_docs_content_type = "REFERENCE" %}
# Grandmaster clock PtpConfig configuration reference {id="nw-ptp-grandmaster-clock-configuration-reference_{{ context }}"}

The following reference information describes the configuration options for the `PtpConfig` custom resource (CR) that configures the `linuxptp` services (`ptp4l`, `phc2sys`, `ts2phc`) as a grandmaster clock. {._abstract}

**PtpConfig configuration options for PTP Grandmaster clock**

<table>
<thead>
<tr>
  <th>PtpConfig CR field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>plugins</code></td>
  <td>Specify an array of <code>.exec.cmdline</code> options that configure the NIC for grandmaster clock operation. Grandmaster clock configuration requires certain PTP pins to be disabled.<br><br>The plugin mechanism allows the PTP Operator to do automated hardware configuration. For the Intel Westport Channel NIC or the Intel Logan Beach NIC, when the <code>enableDefaultConfig</code> field is set to <code>true</code>, the PTP Operator runs a hard-coded script to do the required configuration for the NIC.</td>
</tr>
<tr>
  <td><code>ptp4lOpts</code></td>
  <td>Specify system configuration options for the <code>ptp4l</code> service. The options should not include the network interface name <code>-i &lt;interface&gt;</code> and service config file <code>-f /etc/ptp4l.conf</code> because the network interface name and the service config file are automatically appended.</td>
</tr>
<tr>
  <td><code>ptp4lConf</code></td>
  <td>Specify the required configuration to start <code>ptp4l</code> as a grandmaster clock. For example, the <code>ens2f1</code> interface synchronizes downstream connected devices. For grandmaster clocks, set <code>clockClass</code> to <code>6</code> and set <code>clockAccuracy</code> to <code>0x27</code>. Set <code>timeSource</code> to <code>0x20</code> for when receiving the timing signal from a Global navigation satellite system (GNSS).</td>
</tr>
<tr>
  <td><code>tx_timestamp_timeout</code></td>
  <td>Specify the maximum amount of time to wait for the transmit (TX) timestamp from the sender before discarding the data.</td>
</tr>
<tr>
  <td><code>boundary_clock_jbod</code></td>
  <td>Specify the JBOD boundary clock time delay value. This value is used to correct the time values that are passed between the network time devices.</td>
</tr>
<tr>
  <td><code>phc2sysOpts</code></td>
  <td>Specify system config options for the <code>phc2sys</code> service. If this field is empty the PTP Operator does not start the <code>phc2sys</code> service.<dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Ensure that the network interface listed here is configured as grandmaster and is referenced as required in the <code>ts2phcConf</code> and <code>ptp4lConf</code> fields.</dd></dl></td>
</tr>
<tr>
  <td><code>ptpSchedulingPolicy</code></td>
  <td>Configure the scheduling policy for <code>ptp4l</code> and <code>phc2sys</code> processes. Default value is <code>SCHED_OTHER</code>. Use <code>SCHED_FIFO</code> on systems that support FIFO scheduling.</td>
</tr>
<tr>
  <td><code>ptpSchedulingPriority</code></td>
  <td>Set an integer value from 1-65 to configure FIFO priority for <code>ptp4l</code> and <code>phc2sys</code> processes when <code>ptpSchedulingPolicy</code> is set to <code>SCHED_FIFO</code>. The <code>ptpSchedulingPriority</code> field is not used when <code>ptpSchedulingPolicy</code> is set to <code>SCHED_OTHER</code>.</td>
</tr>
<tr>
  <td><code>ptpClockThreshold</code></td>
  <td>Optional. If <code>ptpClockThreshold</code> stanza is not present, default values are used for <code>ptpClockThreshold</code> fields. Stanza shows default <code>ptpClockThreshold</code> values. <code>ptpClockThreshold</code> values configure how long after the PTP master clock is disconnected before PTP events are triggered. <code>holdOverTimeout</code> is the time value in seconds before the PTP clock event state changes to <code>FREERUN</code> when the PTP master clock is disconnected. The <code>maxOffsetThreshold</code> and <code>minOffsetThreshold</code> settings configure offset values in nanoseconds that compare against the values for <code>CLOCK_REALTIME</code> (<code>phc2sys</code>) or master offset (<code>ptp4l</code>). When the <code>ptp4l</code> or <code>phc2sys</code> offset value is outside this range, the PTP clock state is set to <code>FREERUN</code>. When the offset value is within this range, the PTP clock state is set to <code>LOCKED</code>.</td>
</tr>
<tr>
  <td><code>ts2phcConf</code></td>
  <td>Sets the configuration for the <code>ts2phc</code> command.<br><br><code>leapfile</code> is the default path to the current leap seconds definition file in the PTP Operator container image.<br><br><code>ts2phc.nmea_serialport</code> is the serial port device that is connected to the NMEA GPS clock source. When configured, the GNSS receiver is accessible on <code>/dev/gnss&lt;id&gt;</code>. If the host has multiple GNSS receivers, you can find the correct device by enumerating either of the following devices:<br><br><ul><li><code>/sys/class/net/&lt;eth_port&gt;/device/gnss/</code></li><li><code>/sys/class/gnss/gnss&lt;id&gt;/device/</code></li></ul></td>
</tr>
<tr>
  <td><code>ts2phcOpts</code></td>
  <td>Set options for the <code>ts2phc</code> command.</td>
</tr>
<tr>
  <td><code>recommend</code></td>
  <td>Specify an array of one or more <code>recommend</code> objects that define rules on how the <code>profile</code> should be applied to nodes.</td>
</tr>
<tr>
  <td><code>.recommend.profile</code></td>
  <td>Specify the <code>.recommend.profile</code> object name that is defined in the <code>profile</code> section.</td>
</tr>
<tr>
  <td><code>.recommend.priority</code></td>
  <td>Specify the <code>priority</code> with an integer value between <code>0</code> and <code>99</code>. A larger number gets lower priority, so a priority of <code>99</code> is lower than a priority of <code>10</code>. If a node can be matched with multiple profiles according to rules defined in the <code>match</code> field, the profile with the higher priority is applied to that node.</td>
</tr>
<tr>
  <td><code>.recommend.match</code></td>
  <td>Specify <code>.recommend.match</code> rules with <code>nodeLabel</code> or <code>nodeName</code> values.</td>
</tr>
<tr>
  <td><code>.recommend.match.nodeLabel</code></td>
  <td>Set <code>nodeLabel</code> with the <code>key</code> of the <code>node.Labels</code> field from the node object by using the <code>oc get nodes --show-labels</code> command. For example, <code>node-role.kubernetes.io/worker</code>.</td>
</tr>
<tr>
  <td><code>.recommend.match.nodeName</code></td>
  <td>Set <code>nodeName</code> with the value of the <code>node.Name</code> field from the node object by using the <code>oc get nodes</code> command. For example, <code>compute-1.example.com</code>.</td>
</tr>
</tbody>
</table>