{%- set _mod_docs_content_type = "REFERENCE" %}
# GCE PersistentDisk (gcePD) object definition {id="gce-persistentdisk-storage-class_{{ context }}"}

This Google Compute Engine Persistent Disk (GCE PD) storage class example shows how to configure disk performance tiers (SSD, standard, or hyperdisk-balanced), enable volume expansion, and use delayed binding to optimize zone placement for your workloads. {._abstract}

```yaml title="Example GCE PD storage class YAML file"
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: <storage-class-name>
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd
  replication-type: none
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
reclaimPolicy: Delete
```
*   `metadata.name`: The name of the storage class. The persistent volume claim uses this storage class for provisioning the associated persistent volumes.
*   `parameters.type`: Select `pd-ssd`, `pd-standard`, or `hyperdisk-balanced`. The default is `pd-ssd`.