{%- set _mod_docs_content_type = "REFERENCE" %}
# Measuring latency {id="cnf-measuring-latency_{{ context }}"}

To accurately measure system latency, use the `hwlatdetect`, `cyclictest`, and `oslat` tools provided in the `cnf-tests` image. Evaluating these metrics helps you identify and resolve performance delays in your environment. {._abstract}

Each tool has a specific use. Use the tools in sequence to achieve reliable test results.


hwlatdetect
:   Measures the baseline that the bare-metal hardware can achieve. Before proceeding with the next latency test, ensure that the latency reported by `hwlatdetect` meets the required threshold because you cannot fix hardware latency spikes by operating system tuning.


cyclictest
:   Verifies the real-time kernel scheduler latency after `hwlatdetect` passes validation. The `cyclictest` tool schedules a repeated timer and measures the difference between the desired and the actual trigger times. The difference can uncover basic issues with the tuning caused by interrupts or process priorities. The tool must run on a real-time kernel.


oslat
:   Behaves similarly to a CPU-intensive DPDK application and measures all the interruptions and disruptions to the busy loop that simulates CPU heavy data processing.

The tests introduce the following environment variables:

***Latency test environment variables***

<table>
<thead>
<tr>
  <th>Environment variables</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>LATENCY_TEST_DELAY</code></td>
  <td>Specifies the amount of time in seconds after which the test starts running. You can use the variable to allow the CPU manager reconcile loop to update the default CPU pool. The default value is 0.</td>
</tr>
<tr>
  <td><code>LATENCY_TEST_CPUS</code></td>
  <td>Specifies the number of CPUs that the pod running the latency tests uses. If you do not set the variable, the default configuration includes all isolated CPUs. When <code>LATENCY_TEST_MEMORY</code> is unset, this value is also used to calculate the default memory request and limit for the latency test pod.</td>
</tr>
<tr>
  <td><code>LATENCY_TEST_MEMORY</code></td>
  <td>Specifies the memory request and limit for the pod that runs the latency tests. If you do not set the variable, the test allocates 32Mi of memory per <code>LATENCY_TEST_CPUS</code>, with a minimum of 1Gi. To override the calculated value, set <code>LATENCY_TEST_MEMORY</code> to a valid Kubernetes quantity greater than <code>0</code>, for example <code>2Gi</code>.</td>
</tr>
<tr>
  <td><code>LATENCY_TEST_RUNTIME</code></td>
  <td>Specifies the amount of time in seconds that the latency test must run. The default value is 300 seconds.<br><br><dl><dt>Note</dt><dd>To prevent the Ginkgo 2.0 test suite from timing out before the latency tests complete, set the <code>-ginkgo.timeout</code> flag to a value greater than <code>LATENCY_TEST_RUNTIME</code> + 2 minutes. If you also set a <code>LATENCY_TEST_DELAY</code> value then you must set <code>-ginkgo.timeout</code> to a value greater than <code>LATENCY_TEST_RUNTIME</code> + <code>LATENCY_TEST_DELAY</code> + 2 minutes. The default timeout value for the Ginkgo 2.0 test suite is 1 hour.</dd></dl></td>
</tr>
<tr>
  <td><code>HWLATDETECT_MAXIMUM_LATENCY</code></td>
  <td>Specifies the maximum acceptable hardware latency in microseconds for the workload and operating system. If you do not set the value of <code>HWLATDETECT_MAXIMUM_LATENCY</code> or <code>MAXIMUM_LATENCY</code>, the tool compares the default expected threshold (20μs) and the actual maximum latency in the tool itself. Then, the test fails or succeeds accordingly.</td>
</tr>
<tr>
  <td><code>CYCLICTEST_MAXIMUM_LATENCY</code></td>
  <td>Specifies the maximum latency in microseconds that all threads expect before waking up during the <code>cyclictest</code> run. If you do not set the value of <code>CYCLICTEST_MAXIMUM_LATENCY</code> or <code>MAXIMUM_LATENCY</code>, the tool skips the comparison of the expected and the actual maximum latency.</td>
</tr>
<tr>
  <td><code>OSLAT_MAXIMUM_LATENCY</code></td>
  <td>Specifies the maximum acceptable latency in microseconds for the <code>oslat</code> test results. If you do not set the value of <code>OSLAT_MAXIMUM_LATENCY</code> or <code>MAXIMUM_LATENCY</code>, the tool skips the comparison of the expected and the actual maximum latency.</td>
</tr>
<tr>
  <td><code>MAXIMUM_LATENCY</code></td>
  <td>Unified variable that specifies the maximum acceptable latency in microseconds. Applicable for all available latency tools.</td>
</tr>
</tbody>
</table>


:::note

Variables that are specific to a latency tool take precedence over unified variables. For example, if `OSLAT_MAXIMUM_LATENCY` is set to 30 microseconds and `MAXIMUM_LATENCY` is set to 10 microseconds, the `oslat` test will run with maximum acceptable latency of 30 microseconds.

:::