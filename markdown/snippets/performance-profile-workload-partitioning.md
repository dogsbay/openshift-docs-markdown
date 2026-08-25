{%- set _mod_docs_content_type = "SNIPPET" %}
**PerformanceProfile CR options for {{ sno }} clusters**

<table>
<thead>
<tr>
  <th>PerformanceProfile CR field</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>metadata.name</code></td>
  <td>Ensure that <code>name</code> matches the following fields set in related {{ ztp }} custom resources (CRs):<br><br><ul><li><code>include=openshift-node-performance-${PerformanceProfile.metadata.name}</code> in <code>TunedPerformancePatch.yaml</code></li><li><code>name: 50-performance-${PerformanceProfile.metadata.name}</code> in <code>validatorCRs/informDuValidator.yaml</code></li></ul></td>
</tr>
<tr>
  <td><code>spec.additionalKernelArgs</code></td>
  <td><code>"efi=runtime"</code> Configures UEFI secure boot for the cluster host.</td>
</tr>
<tr>
  <td><code>spec.cpu.isolated</code></td>
  <td>Set the isolated CPUs. Ensure all of the Hyper-Threading pairs match.<br><br><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>The reserved and isolated CPU pools must not overlap and together must span all available cores. CPU cores that are not accounted for cause an undefined behaviour in the system.</dd></dl></td>
</tr>
<tr>
  <td><code>spec.cpu.reserved</code></td>
  <td>Set the reserved CPUs. When workload partitioning is enabled, system processes, kernel threads, and system container threads are restricted to these CPUs. All CPUs that are not isolated should be reserved.</td>
</tr>
<tr>
  <td><code>spec.hugepages.pages</code></td>
  <td><ul><li>Set the number of huge pages (<code>count</code>)</li><li>Set the huge pages size (<code>size</code>).</li><li>Set <code>node</code> to the NUMA node where the <code>hugepages</code> are allocated (<code>node</code>)</li></ul></td>
</tr>
<tr>
  <td><code>spec.realTimeKernel</code></td>
  <td>Set <code>enabled</code> to <code>true</code> to use the realtime kernel.</td>
</tr>
<tr>
  <td><code>spec.workloadHints</code></td>
  <td>Use <code>workloadHints</code> to define the set of top level flags for different type of workloads. The example configuration configures the cluster for low latency and high performance.</td>
</tr>
</tbody>
</table>