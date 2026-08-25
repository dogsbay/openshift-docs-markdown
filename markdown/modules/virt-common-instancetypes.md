{%- set _mod_docs_content_type = "REFERENCE" %}
# Pre-defined instance types {id="virt-common-instancetypes_{{ context }}"}

{{ VirtProductName }} includes a set of pre-defined instance types called `common-instancetypes`. Some are specialized for specific workloads and others are workload-agnostic. {._abstract}

These instance type resources are named according to their series, version, and size. The size value follows the `.` delimiter and ranges from `nano` to `8xlarge`.

**`common-instancetypes` series comparison**

<table>
<tbody>
<tr>
  <td>^.^</td>
  <td>Use case ^.^</td>
  <td>Series ^.^</td>
  <td>Characteristics ^.^</td>
  <td>vCPU to memory ratio ^.^</td>
</tr>
<tr>
  <td>Example resource ^.^</td>
  <td>Network ^.^</td>
  <td>N</td>
  <td><ul><li>Hugepages</li><li>Dedicated CPU</li><li>Isolated emulator threads</li><li>Requires nodes capable of running DPDK workloads</li></ul>^.^</td>
  <td>1:2</td>
</tr>
<tr>
  <td>.^a</td>
  <td><code>n1.medium</code>:: * 4 vCPUs * 4GiB Memory ^.^</td>
  <td>Overcommitted ^.^</td>
  <td>O</td>
  <td><ul><li>Overcommitted memory</li><li>Burstable CPU performance</li></ul>^.^</td>
</tr>
<tr>
  <td>1:4 .^a</td>
  <td><code>o1.small</code>:: * 1 vCPU * 2GiB Memory ^.^</td>
  <td>Compute Exclusive ^.^</td>
  <td>CX</td>
  <td><ul><li>Hugepages</li><li>Dedicated CPU</li><li>Isolated emulator threads</li><li>vNUMA</li></ul>^.^</td>
</tr>
<tr>
  <td>1:2 .^a</td>
  <td><code>cx1.2xlarge</code>:: * 8 vCPUs * 16GiB Memory ^.^</td>
  <td>General Purpose ^.^</td>
  <td>U</td>
  <td><ul><li>Burstable CPU performance</li></ul>^.^</td>
</tr>
<tr>
  <td>1:4 .^a</td>
  <td><code>u1.medium</code>:: * 1 vCPU * 4GiB Memory ^.^</td>
  <td>Memory Intensive ^.^</td>
  <td>M</td>
  <td><ul><li>Hugepages</li><li>Burstable CPU performance</li></ul>^.^</td>
</tr>
<tr>
  <td>1:8 .^a</td>
  <td><code>m1.large</code>:: * 2 vCPUs * 16GiB Memory ^.^</td>
  <td>Dedicated ^.^</td>
  <td>D</td>
  <td><ul><li>Dedicated CPU</li><li>Isolated emulator threads</li></ul>^.^</td>
</tr>
<tr>
  <td>1:4 .^a</td>
  <td><code>d1.medium</code>:: * 1 vCPUs * 4GiB Memory</td>
</tr>
</tbody>
</table>