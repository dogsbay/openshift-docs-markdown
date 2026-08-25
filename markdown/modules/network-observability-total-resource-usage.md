{%- set _mod_docs_content_type = "REFERENCE" %}
# Total average memory and CPU usage {id="network-observability-total-resource-usage-table_{{ context }}"}

Review the table detailing the total average CPU and memory usage for network observability components under two distinct traffic scenarios (`Test 1` and `Test 2`) at different eBPF sampling values. {._abstract}

The following table outlines averages of total resource usage for clusters with a sampling value of `1` and `50` for two different tests: `Test 1` and `Test 2`. The tests differ in the following ways:

*   `Test 1` takes into account high ingress traffic volume in addition to the total number of namespace, pods and services in an {{ product_title }} cluster, places load on the eBPF agent, and represents use cases with a high number of workloads for a given cluster size. For example, `Test 1` consists of 76 Namespaces, 5153 Pods, and 2305 Services with a network traffic scale of ~350 MB/s.
*   `Test 2` takes into account high ingress traffic volume in addition to the total number of namespace, pods and services in an {{ product_title }} cluster and represents use cases with a high number of workloads for a given cluster size. For example, `Test 2` consists of 553 Namespaces, 6998 Pods, and 2508 Services with a network traffic scale of ~950 MB/s.

Since different types of cluster use cases are exemplified in the different tests, the numbers in this table do not scale linearly when compared side-by-side. Instead, they are intended to be used as a benchmark for evaluating your personal cluster usage. The examples outlined in the table demonstrate scenarios that are tailored to specific workloads. Consider each example only as a baseline from which adjustments can be made to accommodate your workload needs.


:::note

Metrics exported to Prometheus can impact the resource usage. Cardinality values for the metrics can help determine how much resources are impacted. For more information, see "Network Flows format" in the Additional resources section.

:::


**Total average resource usage**

<table>
<thead>
<tr>
  <th>Sampling value</th>
  <th>Resources used</th>
  <th>Test 1 (25 nodes)</th>
  <th>Test 2 (250 nodes)</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="2"><strong>Sampling = 50</strong></td>
  <td>Total NetObserv CPU Usage</td>
  <td>1.35</td>
  <td>5.39</td>
</tr>
<tr>
  <td>Total NetObserv RSS (Memory) Usage</td>
  <td>16 GB</td>
  <td>63 GB</td>
</tr>
<tr>
  <td rowspan="2"><strong>Sampling = 1</strong></td>
  <td>Total NetObserv CPU Usage</td>
  <td>1.82</td>
  <td>11.99</td>
</tr>
<tr>
  <td>Total NetObserv RSS (Memory) Usage</td>
  <td>22 GB</td>
  <td>87 GB</td>
</tr>
</tbody>
</table>

Summary: This table shows average total resource usage of Network Observability, which includes Agents, FLP, Kafka, and Loki with all features enabled. For details about what features are enabled, see the features covered in "Observing the network traffic", which comprises all the features that are enabled for this testing.