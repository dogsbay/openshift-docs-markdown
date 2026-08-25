{%- set _mod_docs_content_type = "CONCEPT" %}
# Comparison of LVM Storage, LSO, and HPP {id="comparison-of-solutions-to-provision-node-local-storage_{{ context }}"}

Compare {{ lvms }}, Local Storage Operator (LSO), and HostPath Provisioner (HPP) across storage types, core features, performance, and isolation to determine the best local storage provisioning solution for your cluster. {._abstract}

## Comparison of the support for storage types and filesystems {id="comparing-storage-types_{{ context }}"}
The following table compares the support for storage types and filesystems provided by {{ lvms }}, Local Storage Operator (LSO), and HostPath Provisioner (HPP) to provision local storage:

***Comparison of the support for storage types and filesystems***

<table>
<thead>
<tr>
  <th>Functionality</th>
  <th>LVM Storage</th>
  <th>LSO</th>
  <th>HPP</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Support for block storage</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for file storage</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Support for object storage ^[1]^</td>
  <td>No</td>
  <td>No</td>
  <td>No</td>
</tr>
<tr>
  <td>Available filesystems</td>
  <td><code>ext4</code>, <code>xfs</code></td>
  <td><code>ext4</code>, <code>xfs</code></td>
  <td>Any mounted system available on the node is supported.</td>
</tr>
</tbody>
</table>

1.  None of the solutions ({{ lvms }}, LSO, and HPP) provide support for object storage. Therefore, if you want to use object storage, you need an S3 object storage solution, such as `MultiClusterGateway` from the Red&#160;Hat OpenShift Data Foundation. All of the solutions can serve as underlying storage providers for the S3 object storage solutions.

## Comparison of the support for core functionalities {id="comparing-core-functionalities_{{ context }}"}
The following table compares how {{ lvms }}, Local Storage Operator (LSO), and HostPath Provisioner (HPP) support core functionalities for provisioning local storage:

***Comparison of the support for core functionalities***

<table>
<thead>
<tr>
  <th>Functionality</th>
  <th>LVM Storage</th>
  <th>LSO</th>
  <th>HPP</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Support for automatic file system formatting</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>N/A</td>
</tr>
<tr>
  <td>Support for dynamic provisioning</td>
  <td>Yes</td>
  <td>No</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for using software Redundant Array of Independent Disks (RAID) arrays</td>
  <td>Yes<br><br>Supported on 4.15 and later.</td>
  <td>Yes</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Support for transparent disk encryption</td>
  <td>Yes Supported on 4.16 and later.</td>
  <td>Yes</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Support for volume based disk encryption</td>
  <td>No</td>
  <td>No</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for disconnected installation</td>
  <td>Yes</td>
  <td>Yes</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Support for PVC expansion</td>
  <td>Yes</td>
  <td>No</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for volume snapshots and volume clones</td>
  <td>Yes</td>
  <td>No</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for thin provisioning</td>
  <td>Yes Devices are thin-provisioned by default.</td>
  <td>Yes<br><br>You can configure the devices to point to the thin-provisioned volumes</td>
  <td>Yes<br><br>You can configure a path to point to the thin-provisioned volumes.</td>
</tr>
<tr>
  <td>Support for automatic disk discovery and setup</td>
  <td>Yes Automatic disk discovery is available during installation and runtime. You can also dynamically add the disks to the <code>LVMCluster</code> custom resource (CR) to increase the storage capacity of the existing storage classes.</td>
  <td>Technology Preview<br><br>Automatic disk discovery is available during installation.</td>
  <td>No</td>
</tr>
</tbody>
</table>

## Comparison of performance and isolation capabilities {id="comparing-performance-and-isolation-boundary_{{ context }}"}
The following table compares the performance and isolation capabilities of {{ lvms }}, Local Storage Operator (LSO), and HostPath Provisioner (HPP) in provisioning local storage.

***Comparison of performance and isolation capabilities***

<table>
<thead>
<tr>
  <th>Functionality</th>
  <th>LVM Storage</th>
  <th>LSO</th>
  <th>HPP</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Performance</td>
  <td>I/O speed is shared for all workloads that use the same storage class.<br><br>Block storage allows direct I/O operations.<br><br>Thin provisioning can affect the performance.</td>
  <td>I/O depends on the LSO configuration.<br><br>Block storage allows direct I/O operations.</td>
  <td>I/O speed is shared for all workloads that use the same storage class.<br><br>The restrictions imposed by the underlying filesystem can affect the I/O speed.</td>
</tr>
<tr>
  <td>Isolation boundary ^[1]^</td>
  <td>LVM Logical Volume (LV)<br><br>It provides higher level of isolation compared to HPP.</td>
  <td>LVM Logical Volume (LV)<br><br>It provides higher level of isolation compared to HPP</td>
  <td>Filesystem path<br><br>It provides lower level of isolation compared to LSO and {{ lvms }}.</td>
</tr>
</tbody>
</table>

1.  Isolation boundary refers to the level of separation between different workloads or applications that use local storage resources.

## Comparison of the support for additional functionalities {id="comparing-additional-functionalities_{{ context }}"}

The following table compares the additional features provided by {{ lvms }}, Local Storage Operator (LSO), and HostPath Provisioner (HPP) to provision local storage:

***Comparison of the support for additional functionalities***

<table>
<thead>
<tr>
  <th>Functionality</th>
  <th>LVM Storage</th>
  <th>LSO</th>
  <th>HPP</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Support for generic ephemeral volumes</td>
  <td>Yes</td>
  <td>No</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for CSI inline ephemeral volumes</td>
  <td>No</td>
  <td>No</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for storage topology</td>
  <td>Yes Supports CSI node topology</td>
  <td>Yes<br><br>LSO provides partial support for storage topology through node tolerations.</td>
  <td>No</td>
</tr>
<tr>
  <td>Support for <code>ReadWriteMany</code> (RWX) access mode ^[1]^</td>
  <td>No</td>
  <td>No</td>
  <td>No</td>
</tr>
</tbody>
</table>

1.  All of the solutions ({{ lvms }}, LSO, and HPP) have the `ReadWriteOnce` (RWO) access mode. RWO access mode allows access from multiple pods on the same node.