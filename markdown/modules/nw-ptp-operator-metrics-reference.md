{%- set _mod_docs_content_type = "REFERENCE" %}
# PTP fast event metrics reference {id="nw-ptp-operator-metrics-reference-{{ ptp_events_rest_api }}_{{ context }}"}

The following table describes the PTP fast events metrics that are available from cluster nodes where the `linuxptp-daemon` service is running.

**PTP fast event metrics**

<table>
<thead>
<tr>
  <th>Metric</th>
  <th>Description</th>
  <th>Example</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>openshift_ptp_clock_class</code></td>
  <td>Returns the PTP clock class for the interface. Possible values for PTP clock class are 6 (<code>LOCKED</code>), 7 (<code>PRC UNLOCKED IN-SPEC</code>), 52 (<code>PRC UNLOCKED OUT-OF-SPEC</code>), 187 (<code>PRC UNLOCKED OUT-OF-SPEC</code>), 135 (<code>T-BC HOLDOVER IN-SPEC</code>), 165 (<code>T-BC HOLDOVER OUT-OF-SPEC</code>), 248 (<code>DEFAULT</code>), or 255 (<code>SLAVE ONLY CLOCK</code>).</td>
  <td><code>{node="compute-1.example.com",process="ptp4l"} 6</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_clock_state</code></td>
  <td>Returns the current PTP clock state for the interface. Possible values for PTP clock state are <code>FREERUN</code>, <code>LOCKED</code>, or <code>HOLDOVER</code>.</td>
  <td><code>{iface="CLOCK_REALTIME", node="compute-1.example.com", process="phc2sys"} 1</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_delay_ns</code></td>
  <td>Returns the delay in nanoseconds between the primary clock sending the timing packet and the secondary clock receiving the timing packet.</td>
  <td><code>{from="master", iface="ens2fx", node="compute-1.example.com", process="ts2phc"} 0</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_ha_profile_status</code></td>
  <td>Returns the current status of the highly available system clock when there are multiple time sources on different NICs. Possible values are 0 (<code>INACTIVE</code>) and 1 (<code>ACTIVE</code>).</td>
  <td><code>{node="node1",process="phc2sys",profile="profile1"} 1</code> <code>{node="node1",process="phc2sys",profile="profile2"} 0</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_frequency_adjustment_ns</code></td>
  <td>Returns the frequency adjustment in nanoseconds between 2 PTP clocks. For example, between the upstream clock and the NIC, between the system clock and the NIC, or between the PTP hardware clock (<code>phc</code>) and the NIC.</td>
  <td><code>{from="phc", iface="CLOCK_REALTIME", node="compute-1.example.com", process="phc2sys"} -6768</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_interface_role</code></td>
  <td>Returns the configured PTP clock role for the interface. Possible values are 0 (<code>PASSIVE</code>), 1 (<code>SLAVE</code>), 2 (<code>MASTER</code>), 3 (<code>FAULTY</code>), 4 (<code>UNKNOWN</code>), or 5 (<code>LISTENING</code>).</td>
  <td><code>{iface="ens2f0", node="compute-1.example.com", process="ptp4l"} 2</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_max_offset_ns</code></td>
  <td>Returns the maximum offset in nanoseconds between 2 clocks or interfaces. For example, between the upstream GNSS clock and the NIC (<code>ts2phc</code>), or between the PTP hardware clock (<code>phc</code>) and the system clock (<code>phc2sys</code>).</td>
  <td><code>{from="master", iface="ens2fx", node="compute-1.example.com", process="ts2phc"} 1.038099569e+09</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_offset_ns</code></td>
  <td>Returns the offset in nanoseconds between the DPLL clock or the GNSS clock source and the NIC hardware clock.</td>
  <td><code>{from="phc", iface="CLOCK_REALTIME", node="compute-1.example.com", process="phc2sys"} -9</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_process_restart_count</code></td>
  <td>Returns a count of the number of times the <code>ptp4l</code> and <code>ts2phc</code> processes were restarted.</td>
  <td><code>{config="ptp4l.0.config", node="compute-1.example.com",process="phc2sys"} 1</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_process_status</code></td>
  <td>Returns a status code that shows whether the PTP processes are running or not.</td>
  <td><code>{config="ptp4l.0.config", node="compute-1.example.com",process="phc2sys"} 1</code></td>
</tr>
<tr>
  <td><code>openshift_ptp_threshold</code></td>
  <td>Returns values for <code>HoldOverTimeout</code>, <code>MaxOffsetThreshold</code>, and <code>MinOffsetThreshold</code>.<br><br><ul><li><code>holdOverTimeout</code> is the time value in seconds before the PTP clock event state changes to <code>FREERUN</code> when the PTP master clock is disconnected.</li><li><code>maxOffsetThreshold</code> and <code>minOffsetThreshold</code> are offset values in nanoseconds that compare against the values for <code>CLOCK_REALTIME</code> (<code>phc2sys</code>) or master offset (<code>ptp4l</code>) values that you configure in the <code>PtpConfig</code> CR for the NIC.</li></ul></td>
  <td><code>{node="compute-1.example.com", profile="grandmaster", threshold="HoldOverTimeout"} 5</code></td>
</tr>
</tbody>
</table>

## PTP fast event metrics only when T-GM is enabled {id="_ptp_fast_event_metrics_only_when_t-gm_is_enabled"}

The following table describes the PTP fast event metrics that are available only when PTP grandmaster clock (T-GM) is enabled.

**PTP fast event metrics when T-GM is enabled**

| Metric | Description | Example |
| --- | --- | --- |
| `openshift_ptp_frequency_status` | Returns the current status of the digital phase-locked loop (DPLL) frequency for the NIC. Possible values are -1 (`UNKNOWN`), 0 (`INVALID`), 1 (`FREERUN`), 2 (`LOCKED`), 3 (`LOCKED_HO_ACQ`), or 4 (`HOLDOVER`). | `{from="dpll",iface="ens2fx",node="compute-1.example.com",process="dpll"} 3` |
| `openshift_ptp_nmea_status` | Returns the current status of the NMEA connection. NMEA is the protocol that is used for 1PPS NIC connections. Possible values are 0 (`UNAVAILABLE`) and 1 (`AVAILABLE`). | `{iface="ens2fx",node="compute-1.example.com",process="ts2phc"} 1` |
| `openshift_ptp_phase_status` | Returns the status of the DPLL phase for the NIC. Possible values are -1 (`UNKNOWN`), 0 (`INVALID`), 1 (`FREERUN`), 2 (`LOCKED`), 3 (`LOCKED_HO_ACQ`), or 4 (`HOLDOVER`). | `{from="dpll",iface="ens2fx",node="compute-1.example.com",process="dpll"} 3` |
| `openshift_ptp_pps_status` | Returns the current status of the NIC 1PPS connection. You use the 1PPS connection to synchronize timing between connected NICs. Possible values are 0 (`UNAVAILABLE`) and 1 (`AVAILABLE`). | `{from="dpll",iface="ens2fx",node="compute-1.example.com",process="dpll"} 1` |
| `openshift_ptp_gnss_status` | Returns the current status of the global navigation satellite system (GNSS) connection. GNSS provides satellite-based positioning, navigation, and timing services globally. Possible values are 0 (`NOFIX`), 1 (`DEAD RECKONING ONLY`), 2 (`2D-FIX`), 3 (`3D-FIX`), 4 (`GPS+DEAD RECKONING FIX`), 5, (`TIME ONLY FIX`). | `{from="gnss",iface="ens2fx",node="compute-1.example.com",process="gnss"} 3` |