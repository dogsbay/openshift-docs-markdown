{%- set _mod_docs_content_type = "REFERENCE" %}
# Performance Profile Creator arguments {id="performance-profile-creator-arguments_{{ context }}"}

To customize the generation of performance profiles, review the arguments for the Performance Profile Creator. {._abstract}

**Required Performance Profile Creator arguments**

| Argument | Description |
| --- | --- |
| `mcp-name` | Name for MCP; for example, `worker-cnf` corresponding to the target machines. |
| `must-gather-dir-path` | The path of the must gather directory.<br>This argument is only required if you run the PPC tool by using Podman. If you use the PPC with the wrapper script, do not use this argument. Instead, specify the directory path to the `must-gather` tarball by using the `-t` option for the wrapper script. |
| `reserved-cpu-count` | Number of reserved CPUs. Use a natural number greater than zero. |
| `rt-kernel` | Enables real-time kernel.<br>Possible values: `true` or `false`. |

**Optional Performance Profile Creator arguments**

<table>
<thead>
<tr>
  <th>Argument</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>disable-ht</code></td>
  <td>Disable Hyper-Threading.<br><br>Possible values: <code>true</code> or <code>false</code>.<br><br>Default: <code>false</code>.<br><br><dl class="db-admonition db-admonition-warning"><dt>Warning</dt><dd>If this argument is set to <code>true</code> you should not disable Hyper-Threading in the BIOS. Disabling Hyper-Threading is accomplished with a kernel command-line argument.</dd></dl></td>
</tr>
<tr>
  <td>enable-hardware-tuning</td>
  <td>Enable the setting of maximum CPU frequencies.<br><br>To enable this feature, set the maximum frequency for applications running on isolated and reserved CPUs for both of the following fields:<br><br><ul><li><code>spec.hardwareTuning.isolatedCpuFreq</code></li><li><code>spec.hardwareTuning.reservedCpuFreq</code></li></ul>This is an advanced feature. If you configure hardware tuning, the generated <code>PerformanceProfile</code> includes warnings and guidance on how to set frequency settings.</td>
</tr>
<tr>
  <td><code>info</code></td>
  <td>This captures cluster information. This argument also requires the <code>must-gather-dir-path</code> argument. If any other arguments are set they are ignored.<br><br>Possible values:<br><br><ul><li><code>log</code></li><li><code>JSON</code></li></ul>Default: <code>log</code>.</td>
</tr>
<tr>
  <td><code>offlined-cpu-count</code></td>
  <td>Number of offlined CPUs.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Use a natural number greater than zero. If not enough logical processors are offlined, then error messages are logged. The messages are:<pre>Error: failed to compute the reserved and isolated CPUs: please ensure that reserved-cpu-count plus offlined-cpu-count should be in the range [0,1]</pre><pre>Error: failed to compute the reserved and isolated CPUs: please specify the offlined CPU count in the range [0,1]</pre></dd></dl></td>
</tr>
<tr>
  <td><code>power-consumption-mode</code></td>
  <td>The power consumption mode.<br><br>Possible values:<br><br><ul><li><code>default</code>: Performance achieved through CPU partitioning only.</li><li><code>low-latency</code>: Enhanced measures to improve latency.</li><li><code>ultra-low-latency</code>: Priority given to optimal latency, at the expense of power management.</li></ul>Default: <code>default</code>.</td>
</tr>
<tr>
  <td><code>per-pod-power-management</code></td>
  <td>Enable per pod power management. You cannot use this argument if you configured <code>ultra-low-latency</code> as the power consumption mode.<br><br>Possible values: <code>true</code> or <code>false</code>.<br><br>Default: <code>false</code>.</td>
</tr>
<tr>
  <td><code>profile-name</code></td>
  <td>Name of the performance profile to create.<br><br>Default: <code>performance</code>.</td>
</tr>
<tr>
  <td><code>split-reserved-cpus-across-numa</code></td>
  <td>Split the reserved CPUs across NUMA nodes.<br><br>Possible values: <code>true</code> or <code>false</code>.<br><br>Default: <code>false</code>.</td>
</tr>
<tr>
  <td><code>topology-manager-policy</code></td>
  <td>Kubelet Topology Manager policy of the performance profile to be created.<br><br>Possible values:<br><br><ul><li><code>single-numa-node</code></li><li><code>best-effort</code></li><li><code>restricted</code></li></ul>Default: <code>restricted</code>.</td>
</tr>
<tr>
  <td><code>user-level-networking</code></td>
  <td>Run with user level networking (DPDK) enabled.<br><br>Possible values: <code>true</code> or <code>false</code>.<br><br>Default: <code>false</code>.</td>
</tr>
</tbody>
</table>