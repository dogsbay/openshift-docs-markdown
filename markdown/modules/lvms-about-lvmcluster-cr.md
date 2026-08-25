{%- set _mod_docs_content_type = "CONCEPT" %}
# About the LVMCluster custom resource {id="about-lvmcluster_{{ context }}"}

The `LVMCluster` custom resource (CR) is the primary configuration for {{ lvms }} deployment, defining how storage is provisioned across your cluster by specifying volume groups, devices, node selection, and thin pool settings to meet your workload requirements. {._abstract}

You can configure the `LVMCluster` CR to perform the following actions:

*   Create LVM volume groups that you can use to provision persistent volume claims (PVCs).
*   Configure a list of devices that you want to add to the LVM volume groups. 
*   Configure the requirements to select the nodes on which you want to create an LVM volume group, and the thin pool configuration for the volume group.
*   Force wipe the selected devices.

After you have installed {{ lvms }}, you must create an `LVMCluster` custom resource (CR).

{% include "./snippets/lvms-creating-lvmcluster.md" %}

## Explanation of fields in the LVMCluster CR {id="about-lvmcluster-explain-fields_{{ context }}"}

The `LVMCluster` CR fields are described in the following table:

***`LVMCluster` CR fields***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.storage.deviceClasses</code></td>
  <td><code>array</code></td>
  <td>Contains the configuration to assign the local storage devices to the LVM volume groups.<br><br>LVM Storage creates a storage class and volume snapshot class for each device class that you create.</td>
</tr>
<tr>
  <td><code>deviceClasses.name</code></td>
  <td><code>string</code></td>
  <td>Specify a name for the LVM volume group (VG).<br><br>You can also configure this field to reuse a volume group that you created in the previous installation. For more information, see "Reusing a volume group from the previous LVM Storage installation".</td>
</tr>
<tr>
  <td><code>deviceClasses.fstype</code></td>
  <td><code>string</code></td>
  <td>Set this field to <code>ext4</code> or <code>xfs</code>. By default, this field is set to <code>xfs</code>.</td>
</tr>
<tr>
  <td><code>deviceClasses.default</code></td>
  <td><code>boolean</code></td>
  <td>Set this field to <code>true</code> to indicate that a device class is the default. Otherwise, you can set it to <code>false</code>. You can only configure a single default device class.</td>
</tr>
<tr>
  <td><code>deviceClasses.nodeSelector</code></td>
  <td><code>object</code></td>
  <td>Contains the configuration to choose the nodes on which you want to create the LVM volume group. If this field is empty, all nodes without no-schedule taints are considered.<br><br>On the control-plane node, {{ lvms }} detects and uses the additional worker nodes when the new nodes become active in the cluster.</td>
</tr>
<tr>
  <td><code>nodeSelector.nodeSelectorTerms</code></td>
  <td><code>array</code></td>
  <td>Configure the requirements that are used to select the node.</td>
</tr>
<tr>
  <td><code>deviceClasses.deviceSelector</code></td>
  <td><code>object</code></td>
  <td>Contains the configuration to perform the following actions:<br><br><ul><li>Specify the paths to the devices that you want to add to the LVM volume group.</li><li>Force wipe the devices that are added to the LVM volume group.</li></ul>For more information, see "About adding devices to a volume group".</td>
</tr>
<tr>
  <td><code>deviceSelector.paths</code></td>
  <td><code>array</code></td>
  <td>Specify the device paths.<br><br>If the device path specified in this field does not exist, or the device is not supported by {{ lvms }}, the <code>LVMCluster</code> CR moves to the <code>Failed</code> state.</td>
</tr>
<tr>
  <td><code>deviceSelector.optionalPaths</code></td>
  <td><code>array</code></td>
  <td>Specify the optional device paths.<br><br>If the device path specified in this field does not exist, or the device is not supported by {{ lvms }}, {{ lvms }} ignores the device without causing an error.</td>
</tr>
<tr>
  <td>`deviceSelector. forceWipeDevicesAndDestroyAllData`</td>
  <td><code>boolean</code></td>
  <td>{{ lvms }} uses only those disks that are empty and do not contain file system signatures. To ensure that the disks are empty and do not contain file system signatures, wipe the disks before using them.<br><br>To force wipe the selected devices, set this field to <code>true</code>. By default, this field is set to <code>false</code>.<br><br><dl><dt>Warning</dt><dd>If this field is set to <code>true</code>, {{ lvms }} wipes all previous data on the devices. Use this feature with caution.</dd></dl><br><br>Wiping the device can lead to inconsistencies in data integrity if any of the following conditions are met:<br><br><ul><li>The device is being used as swap space.</li><li>The device is part of a RAID array.</li><li>The device is mounted.</li></ul>If any of these conditions are true, do not force wipe the disk. Instead, you must manually wipe the disk.</td>
</tr>
<tr>
  <td>deviceClasses.storageClassOptions</td>
  <td>object</td>
  <td>Optional. Allows customization of the StorageClass created for this device class, including reclaim policy, volume binding mode, additional parameters, and labels. For more information, see "StorageClass customization for LVMS device classes".</td>
</tr>
<tr>
  <td><code>deviceClasses.thinPoolConfig</code></td>
  <td><code>object</code></td>
  <td>Contains the configuration to create a thin pool in the LVM volume group.<br><br>If you exclude this field, logical volumes are thick provisioned.<br><br>Using thick-provisioned storage includes the following limitations:<br><br><ul><li>No copy-on-write support for volume cloning.</li><li>No support for snapshot class.</li><li>No support for over-provisioning. As a result, the provisioned capacity of <code>PersistentVolumeClaims</code> (PVCs) is immediately reduced from the volume group.</li><li>No support for thin metrics. Thick-provisioned devices only support volume group metrics.</li></ul></td>
</tr>
<tr>
  <td><code>thinPoolConfig.name</code></td>
  <td><code>string</code></td>
  <td>Specify a name for the thin pool.</td>
</tr>
<tr>
  <td><code>thinPoolConfig.sizePercent</code></td>
  <td><code>integer</code></td>
  <td>Specify the percentage of space in the LVM volume group for creating the thin pool.<br><br>By default, this field is set to 90. The minimum value that you can set is 10, and the maximum value is 90.</td>
</tr>
<tr>
  <td><code>thinPoolConfig.overprovisionRatio</code></td>
  <td><code>integer</code></td>
  <td>Specify a factor by which you can provision additional storage based on the available storage in the thin pool.<br><br>For example, if this field is set to 10, you can provision up to 10 times the amount of available storage in the thin pool.You can modify this field after the LVM cluster has been created.<br><br>To update the parameter, do any of the following tasks:<br><br><ul><li>To edit the LVM Cluster, run the following command:</li></ul><pre>$ oc edit lvmcluster &lt;lvmcluster_name&gt;</pre><ul><li>To apply a patch, run the following command:</li></ul><pre>$ oc patch lvmcluster &lt;lvmcluster_name&gt; -p &lt;patch_file.yaml&gt;</pre>To disable over-provisioning, set this field to 1.</td>
</tr>
<tr>
  <td><code>thinPoolConfig.chunkSize</code></td>
  <td><code>integer</code></td>
  <td>Specifies the statically calculated chunk size for the thin pool. This field is only used when the <code>ChunkSizeCalculationPolicy</code> field is set to <code>Static</code>. The value for this field must be configured in the range of 64 KiB to 1 GiB because of the underlying limitations of <code>lvm2</code>.<br><br>If you do not configure this field and the <code>ChunkSizeCalculationPolicy</code> field is set to <code>Static</code>, the default chunk size is set to 128 KiB.<br><br>For more information, see "Overview of chunk size".</td>
</tr>
<tr>
  <td><code>thinPoolConfig.chunkSizeCalculationPolicy</code></td>
  <td><code>string</code></td>
  <td>Specifies the policy to calculate the chunk size for the underlying volume group. You can set this field to either <code>Static</code> or <code>Host</code>. By default, this field is set to <code>Static</code>.<br><br>If this field is set to <code>Static</code>, the chunk size is set to the value of the <code>chunkSize</code> field. If the <code>chunkSize</code> field is not configured, chunk size is set to 128 KiB.<br><br>If this field is set to <code>Host</code>, the chunk size is calculated based on the configuration in the <code>lvm.conf</code> file.<br><br>For more information, see "Limitations to configure the size of the devices used in LVM Storage".</td>
</tr>
<tr>
  <td><code>thinPoolConfig.metadataSize</code></td>
  <td><code>integer</code></td>
  <td>Specifies the metadata size for the thin pool. You can configure this field only when the <code>MetadataSizeCalculationPolicy</code> field is set to <code>Static</code>.<br><br>If this field is not configured, and the <code>MetadataSizeCalculationPolicy</code> field is set to <code>Static</code>, the default metadata size is set to 1 GiB.<br><br>The value for this field must be configured in the range of 2 MiB to 16 GiB due to the underlying limitations of <code>lvm2</code>. You can only increase the value of this field during updates.</td>
</tr>
<tr>
  <td><code>thinPoolConfig.metadataSizeCalculationPolicy</code></td>
  <td><code>string</code></td>
  <td>Specifies the policy to calculate the metadata size for the underlying volume group. You can set this field to either <code>Static</code> or <code>Host</code>. By default, this field is set to <code>Host</code>.<br><br>If this field is set to <code>Static</code>, the metadata size is calculated based on the value of the <code>thinPoolConfig.metadataSize</code> field.<br><br>If this field is set to <code>Host</code>, the metadata size is calculated based on the <code>lvm2</code> settings.</td>
</tr>
</tbody>
</table>