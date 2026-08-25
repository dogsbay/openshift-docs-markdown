{%- set _mod_docs_content_type = "CONCEPT" %}
# StorageClass options for LVMS device classes {id="storageclass-options_{{ context }}"}

You can configure custom StorageClass behaviors for each device class, including reclaim policy, volume binding mode, and custom parameters and labels, by defining the storageClassOptions field in the LVMCluster custom resource. {._abstract}

If you set an empty configuration (storageClassOptions: {}) or omit the field entirely, the Operator uses the following default settings: 

***StorageClass Options Reference***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Immutable</th>
  <th>Description</th>
  <th>Example</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>reclaimPolicy</code></td>
  <td><code>string</code></td>
  <td>Yes</td>
  <td>Controls what happens to the PersistentVolume (PV) and its underlying logical volume when the PersistentVolumeClaim (PVC) is deleted.<br><br>Allowed values: <code>Delete</code> (default), <code>Retain</code><br><br>When set to <code>Retain</code>, deleting a PVC does not delete the PV or the underlying logical volume on disk. Data is preserved, useful for data protection scenarios where accidental PVC deletion must not cause data loss. Manual cleanup is required before you can delete the <code>LVMCluster</code>.<br><br>When set to <code>Delete</code>, both the PV and the on-disk logical volume are removed when the PVC is deleted.</td>
  <td><pre>storageClassOptions:&#10;  reclaimPolicy: Retain</pre></td>
</tr>
<tr>
  <td><code>volumeBindingMode</code></td>
  <td><code>string</code></td>
  <td>Yes</td>
  <td>Controls when volume binding and dynamic provisioning occur.<br><br>Allowed values: <code>WaitForFirstConsumer</code> (default), <code>Immediate</code><br><br><code>WaitForFirstConsumer</code> delays PV provisioning until a pod that uses the PVC is scheduled, enabling topology-aware scheduling where LVMS creates the PV on the node where the pod will run.<br><br><code>Immediate</code> provisions and binds the PV as soon as the PVC is created, without waiting for a consumer pod. On multi-node clusters, PVs might be provisioned on nodes where the consuming pod cannot run. Use <code>Immediate</code> only on single-node clusters or when node affinity is managed externally.</td>
  <td><pre>storageClassOptions:&#10;  volumeBindingMode: Immediate</pre></td>
</tr>
<tr>
  <td><code>additionalParameters</code></td>
  <td><code>map[string]string</code></td>
  <td>Yes</td>
  <td>Adds custom key-value pairs to the <code>StorageClass .parameters</code> map.<br><br>Default: <code>{}</code> (empty). Maximum entries: 16.<br><br>StorageClass parameters are passed to the CSI driver (TopoLVM) during volume provisioning. TopoLVM recognizes only <code>topolvm.io/device-class</code> and <code>csi.storage.k8s.io/fstype</code>. Use <code>additionalParameters</code> for forward-compatibility or for parameters consumed by other Kubernetes components.<br><br>The following keys are managed by LVMS and are rejected at admission:<br><br><ul><li><code>topolvm.io/device-class</code> — automatically set to the device class name</li><li><code>csi.storage.k8s.io/fstype</code> — automatically set from the <code>fstype</code> field on the device class</li></ul><dl><dt>Important</dt><dd>To change the filesystem type, use the <code>fstype</code> field on the device class directly. Do not use <code>additionalParameters</code>.</dd></dl></td>
  <td><pre>storageClassOptions:&#10;  additionalParameters:&#10;    custom-param-key: custom-param-value</pre></td>
</tr>
<tr>
  <td><code>additionalLabels</code></td>
  <td><code>map[string]string</code></td>
  <td>No</td>
  <td>Adds custom labels to the StorageClass metadata.<br><br>Default: none. Maximum entries: 16.<br><br>Use for organizational tagging, cluster policy integration, or monitoring. When you remove a label from <code>additionalLabels</code>, the operator removes it from the StorageClass during the next reconciliation. Labels added directly by other tools are not affected.<br><br>The following label keys are reserved and cannot be set through <code>additionalLabels</code>:<br><br><ul><li><code>app.kubernetes.io/managed-by</code></li><li><code>app.kubernetes.io/part-of</code></li><li><code>app.kubernetes.io/name</code></li><li><code>app.kubernetes.io/component</code></li><li>Any key with the prefix <code>owned-by.topolvm.io/</code></li></ul></td>
  <td><pre>storageClassOptions:&#10;  additionalLabels:&#10;    environment: production&#10;    team: storage</pre></td>
</tr>
</tbody>
</table>