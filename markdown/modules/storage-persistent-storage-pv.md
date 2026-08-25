{%- set _mod_docs_content_type = "REFERENCE" %}
# Persistent volumes {id="persistent-volumes_{{ context }}"}

Configure persistent volumes (PVs) with capacity, access modes, mount options, and reclaim policies to manage cluster-wide storage resources across their lifecycle phases. {._abstract}

Each storage backend supports different access mode combinations, and volumes transition through phases (Available, Bound, Released, Failed) affecting claim availability.

Each PV contains a `spec` and `status`, which is the specification and status of the volume, for example:

```yaml title="Example PersistentVolume object definition"
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv0001
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  ...
status:
  ...
```
*   `metadata.name`: Specifies the name of the persistent volume.
*   `spec.storage`: Specifies the amount of storage available to the volume.
*   `spec.accessModes`: Specifies the access mode, defining the read/write and mount permissions.
*   `spec.persistentVolumeReclaimPolicy`: Specifies the reclaim policy, indicating how the resource should be handled once it is released.

You can view the name of a PVC that is bound to a PV by running the following command:

```terminal
$ oc get pv <pv_name> -o jsonpath='{.spec.claimRef.name}'
```

{% if not microshift %}
## Types of PVs {id="types-of-persistent-volumes_{{ context }}"}

{% if not (openshift_rosa or openshift_rosa_hcp) %}
{{ product_title }} supports the following persistent volume plugins:
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}

{{ product_title }} supports the following persistent volume storage options:
{% endif %}

*   AWS Elastic Block Store (EBS), which is installed by default.
{%- if openshift_enterprise or openshift_webscale or openshift_origin or openshift_rosa or openshift_rosa_hcp %}
*   AWS Elastic File Store (EFS)
{%- endif %}
{%- if openshift_enterprise or openshift_webscale or openshift_origin or openshift_aro %}
*   Azure Disk
*   Azure File
{%- endif %}
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
*   Cinder
*   Fibre Channel
{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
*   GCP Persistent Disk
*   GCP Filestore
{%- endif %}
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
*   {{ ibm_power_server_title }} Block
*   {{ ibm_cloud_name }} VPC Block
{%- endif %}
{%- if openshift_enterprise or openshift_webscale or openshift_origin or openshift_aro %}
*   HostPath
*   iSCSI
*   Local volume
*   {{ lvms }}
*   NFS
*   OpenStack Manila
*   {{ rh_storage_first }}
{%- endif %}
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
*   CIFS/SMB
*   VMware vSphere
{%- endif %}
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }} functions with Kubernetes Container Storage Interface (CSI) compatible volume provisioners from other storage vendors. For more information about CSI drivers in {{ product_title }}, see "Configuring CSI volumes".
{% endif %}

## Capacity {id="pv-capacity_{{ context }}"}
Generally, a persistent volume (PV) has a specific storage capacity. This is set by using the `capacity` attribute of the PV.

Currently, storage capacity is the only resource that can be set or requested. Future attributes may include IOPS, throughput, and so on.

{% if not microshift %}
## Access modes {id="pv-access-modes_{{ context }}"}
A persistent volume can be mounted on a host in any way supported by the resource provider. Providers have different capabilities and each PV’s access modes are set to the specific modes supported by that particular volume. For example, NFS can support multiple read/write clients, but a specific NFS PV might be exported on the server as read-only. Each PV gets its own set of access modes describing that specific PV’s capabilities.

Claims are matched to volumes with similar access modes. The only two matching criteria are access modes and size. A claim’s access modes represent a request. Therefore, you might be granted more, but never less. For example, if a claim requests RWO, but the only volume available is an NFS PV (RWO+ROX+RWX), the claim would then match NFS because it supports RWO.

Direct matches are always attempted first. The volume’s modes must match or contain more modes than you requested. The size must be greater than or equal to what is expected. If two types of volumes, such as NFS and iSCSI, have the same set of access modes, either of them can match a claim with those modes. There is no ordering between types of volumes and no way to choose one type over another.

All volumes with the same modes are grouped, and then sorted by size, smallest to largest. The binder gets the group with matching modes and iterates over each, in size order, until one size matches.


:::important

Volume access modes describe volume capabilities. They are not enforced constraints. The storage provider is responsible for runtime errors resulting from invalid use of the resource. Errors in the provider show up at runtime as mount errors.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
For example, NFS offers `ReadWriteOnce` access mode. If you want to use the volume’s ROX capability, mark the claims as `ReadOnlyMany`.

iSCSI and Fibre Channel volumes do not currently have any fencing mechanisms. You must ensure the volumes are only used by one node at a time. In certain situations, such as draining a node, the volumes can be used simultaneously by two nodes. Before draining the node, delete the pods that use the volumes.
{% endif %}

:::


The following table lists the access modes:

**Access modes**

<table>
<thead>
<tr>
  <th>Access Mode</th>
  <th>CLI abbreviation</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>ReadWriteOnce</td>
  <td><code>RWO</code></td>
  <td>The volume can be mounted as read/write by a single node.</td>
</tr>
<tr>
  <td>ReadWriteOncePod</td>
  <td><code>RWOP</code></td>
  <td>The volume can be mounted as read/write by a single pod on a single node.</td>
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>ReadOnlyMany</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td><code>ROX</code></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>The volume can be mounted as read-only by many nodes.</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>ReadWriteMany</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td><code>RWX</code></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>The volume can be mounted as read/write by many nodes.</td>{% endif %}
</tr>
</tbody>
</table>

**Supported access modes for persistent volumes**

<table>
<thead>
<tr>
  <th>Volume plugin</th>
  <th>ReadWriteOnce <sup>[1]</sup></th>
  <th>ReadWriteOncePod</th>
  <th>ReadOnlyMany</th>
  <th>ReadWriteMany</th>
</tr>
</thead>
<tbody>
<tr>
  <td>AWS EBS <sup>[2]</sup></td>
  <td>✅</td>
  <td>✅</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>AWS EFS</td>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
  <td>✅</td>
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>Azure File</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>Azure Disk</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>CIFS/SMB</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>Cinder</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>Fibre Channel</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅ <sup>[3]</sup></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>GCP Persistent Disk</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅ <sup>[4]</sup></td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅ <sup>[4]</sup></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>GCP Filestore</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
  {% if not (openshift_rosa or openshift_rosa_hcp) %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>HostPath</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>{{ ibm_power_server_title }}  Disk</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>{{ ibm_cloud_name }} VPC Disk</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>iSCSI</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅ <sup>[3]</sup></td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>Local volume</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
</tr>
<tr>
  <td>LVM Storage</td>
  <td>✅</td>
  <td>✅</td>
  <td></td>
  <td></td>
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>NFS</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>OpenStack Manila</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>{{ rh_storage_first }}</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
</tr>
<tr>
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>VMware vSphere</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅</td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td></td>{% endif %}
  {% if openshift_enterprise or openshift_webscale or openshift_origin %}<td>✅ <sup>[5]</sup></td>{% endif %}
</tr>
</tbody>
</table>

1.  ReadWriteOnce (RWO) volumes cannot be mounted on multiple nodes. If a node fails, the system does not allow the attached RWO volume to be mounted on a new node because it is already assigned to the failed node. If you encounter a multi-attach error message as a result, force delete the pod on a shutdown or crashed node to avoid data loss in critical workloads, such as when dynamic persistent volumes are attached.
1.  Use a recreate deployment strategy for pods that rely on AWS EBS.
1.  Only raw block volumes support the `ReadWriteMany` (RWX) access mode for Fibre Channel and iSCSI. For more information, see "Block volume support".

{% if not (openshift_rosa or openshift_rosa_hcp) %}
1.  For GCP hyperdisk-balanced disks:
    *   The supported access modes are:
        *   `ReadWriteOnce`
        *   `ReadWriteMany`
{% endif %}
    *   Cloning and snapshotting is disabled for disks with `ReadWriteMany` access mode enabled.
    *   You can attach a single hyperdisk-balanced disk volume in `ReadWriteMany` to a maximum of 8 instances.
    *   You can only resize a disk in `ReadWriteMany` if you detach the disk from all instances.

{% if not (openshift_rosa or openshift_rosa_hcp) %}
    *   For additional limitations, see  Google Cloud documentation "GCP hyperdisk-balanced disk additional limitations".
{% endif %}

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
1.  If the underlying vSphere environment supports the vSAN file service, the vSphere Container Storage Interface (CSI) Driver Operator installed by {{ product_title }} supports provisioning of ReadWriteMany (RWX) volumes. If you do not have vSAN file service configured, and you request RWX, the volume fails to get created and an error is logged. For more information, see "VMware vSphere CSI Driver Operator".
{%- endif %}
{% endif %}

{% if microshift %}
## Supported access modes {id="supported-access-modes_{{ context }}"}
LVMS is the only CSI plugin {{ product_title }} supports. The hostPath and LVs built in to {{ OCP }} also support RWO.
{% endif %}

{% if openshift_online %}
## Restrictions {id="pv-restrictions_{{ context }}"}
The following restrictions apply when using PVs with {{ product_title }}:
{% endif %}

{% if openshift_online %}
*   PVs are provisioned with EBS volumes (AWS).
*   Only RWO access mode is applicable, as EBS volumes and GCE Persistent Disks cannot be mounted to multiple nodes.
*   Docker volumes are disabled.
    *   VOLUME directive without a mapped external volume fails to be
    instantiated
    .
*   **emptyDir** is restricted to 512 Mi per project (group) per node.
    *   A single pod for a project on a particular node can use up to 512 Mi
    of **emptyDir** storage.
    *   Multiple pods for a project on a particular node share the 512 Mi of
    **emptyDir** storage.
*   **emptyDir** has the same lifecycle as the pod:
    *   **emptyDir** volumes survive container crashes/restarts.
    *   **emptyDir** volumes are deleted when the pod is deleted.
{% endif %}

## Phase {id="pv-phase_{{ context }}"}
Volumes can be found in one of the following phases:

.Volume phases
| Phase | Description |
| --- | --- |
| Available | A free resource not yet bound to a claim. |
| Bound | The volume is bound to a claim. |
| Released | The claim was deleted, but the resource is not yet reclaimed by the cluster. |
| Failed | The volume has failed its automatic reclamation. |


Last phase transition time
:   The `LastPhaseTransitionTime` field has a timestamp that updates every time a persistent volume (PV) transitions to a different phase (`pv.Status.Phase`). To find the time of the last phase transition for a PV, run the following command:
    ```terminal
    $ oc get pv <pv_name> -o json | jq '.status.lastPhaseTransitionTime'
    ```

    For '.status.lastPhaseTransitionTime' specify the name of the PV that you want to see the last phase transition.


Mount options
:   You can specify mount options while mounting a PV by using the attribute `mountOptions`.

    <a name="pv-mount-options_{{ context }}"></a>

    For example:
{% if not microshift %}
    ```yaml title="Mount options example"
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: pv0001
    spec:
      capacity:
        storage: 1Gi
      accessModes:
        - ReadWriteOnce
      mountOptions:
        - nfsvers=4.1
      nfs:
        path: /tmp
        server: 172.17.0.2
      persistentVolumeReclaimPolicy: Retain
      claimRef:
        name: claim1
        namespace: default
    ```

    `spec.mountOptions`: Specified mount options are used while mounting the PV to the disk.

    The following PV types support mount options:
    *   AWS Elastic Block Store (EBS)
    *   AWS Elastic File Storage (EFS)
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
    *   Azure Disk
    *   Azure File
    *   Cinder
{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
    *   GCE Persistent Disk
{%- endif %}
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
    *   iSCSI
    *   Local volume
    *   NFS
    *   {{ rh_storage_first }} (Ceph RBD only)
    *   CIFS/SMB
    *   VMware vSphere

    :::note


    Fibre Channel and HostPath PVs do not support mount options.
    
    :::


{% endif %}
{% endif %}
{% if microshift %}
    ```yaml title="Mount options example"
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      annotations:
        storageclass.kubernetes.io/is-default-class: "true"
      name: topolvm-provisioner
    mountOptions:
      - uid=1500
      - gid=1500
    parameters:
      csi.storage.k8s.io/fstype: xfs
    provisioner: topolvm.io
    reclaimPolicy: Delete
    volumeBindingMode: WaitForFirstConsumer
    allowVolumeExpansion: true
    ```

    :::note

    The `mountOptions` parameter values are not validated. Incorrect values cause the mount to fail and an event to be logged to the PVC.
    
    :::

{% endif %}