{%- set _mod_docs_content_type = "REFERENCE" %}
# Pre-defined instance types {id="virt-common-instancetypes_{{ context }}"}

{{ VirtProductName }} includes a set of pre-defined instance types called `common-instancetypes`. Some are specialized for specific workloads and others are workload-agnostic. {._abstract}

These instance type resources are named according to their series, version, and size. The size value follows the `.` delimiter and ranges from `nano` to `8xlarge`.

**`common-instancetypes` series comparison**

<table>
<tbody>
<tr>
  <td>Use case ^.^</td>
  <td>Series ^.^</td>
  <td>Characteristics ^.^</td>
  <td>vCPU to memory ratio ^.^</td>
  <td>Example resource</td>
</tr>
<tr>
  <td>Network</td>
  <td>N</td>
  <td><ul><li>Hugepages</li><li>Dedicated CPU</li><li>Isolated emulator threads</li><li>Requires nodes capable of running DPDK workloads</li></ul></td>
  <td>1:2</td>
  <td><code>n1.medium</code>::<ul><li>4 vCPUs</li><li>4GiB Memory</li></ul></td>
</tr>
<tr>
  <td>Overcommitted</td>
  <td>O</td>
  <td><ul><li>Overcommitted memory</li><li>Burstable CPU performance</li></ul></td>
  <td>1:4</td>
  <td><code>o1.small</code>::<ul><li>1 vCPU</li><li>2GiB Memory</li></ul></td>
</tr>
<tr>
  <td>Compute Exclusive</td>
  <td>CX</td>
  <td><ul><li>Hugepages</li><li>Dedicated CPU</li><li>Isolated emulator threads</li><li>vNUMA</li></ul></td>
  <td>1:2</td>
  <td><code>cx1.2xlarge</code>::<ul><li>8 vCPUs</li><li>16GiB Memory</li></ul></td>
</tr>
<tr>
  <td>General Purpose</td>
  <td>U</td>
  <td><ul><li>Burstable CPU performance</li></ul></td>
  <td>1:4</td>
  <td><code>u1.medium</code>::<ul><li>1 vCPU</li><li>4GiB Memory</li></ul></td>
</tr>
<tr>
  <td>Memory Intensive</td>
  <td>M</td>
  <td><ul><li>Hugepages</li><li>Burstable CPU performance</li></ul></td>
  <td>1:8</td>
  <td><code>m1.large</code>::<ul><li>2 vCPUs</li><li>16GiB Memory</li></ul></td>
</tr>
<tr>
  <td>Dedicated</td>
  <td>D</td>
  <td><ul><li>Dedicated CPU</li><li>Isolated emulator threads</li></ul></td>
  <td>1:4</td>
  <td><code>d1.medium</code>::<ul><li>1 vCPUs</li><li>4GiB Memory</li></ul></td>
</tr>
</tbody>
</table>