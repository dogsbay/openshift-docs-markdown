{%- set _mod_docs_content_type = "CONCEPT" %}
# ReadWriteMany vSphere volume support {id="persistent-storage-csi-vsphere-rwx_{{ context }}"}

You can provision ReadWriteMany (RWX) volumes that allow multiple pods to access the same storage simultaneously when vSAN file service is configured in your vSphere environment. {._abstract}

If vSAN file service is not configured, then ReadWriteOnce (RWO) is the only access mode available. If you do not have vSAN file service configured, and you request RWX, the volume fails to get created and an error is logged.

For more information about configuring the vSAN file service in your environment, see "vSAN File Service".

You can request RWX volumes by making the following persistent volume claim (PVC):

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: myclaim
spec:
  resources:
    requests:
      storage: 1Gi
  accessModes:
     - ReadWriteMany
  storageClassName: thin-csi
```

Requesting a PVC of the RWX volume type should result in provisioning of persistent volumes (PVs) backed by the vSAN file service.