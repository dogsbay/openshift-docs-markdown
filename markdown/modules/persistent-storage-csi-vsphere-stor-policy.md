{%- set _mod_docs_content_type = "CONCEPT" %}
# vSphere storage policy {id="persistent-storage-csi-vsphere-stor-policy_{{ context }}"}

The vSphere CSI Driver Operator storage class uses vSphere’s storage policy. {{ product_title }} automatically creates a storage policy that targets datastore configured in cloud configuration. {._abstract}

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: thin-csi
provisioner: csi.vsphere.vmware.com
parameters:
  StoragePolicyName: "$openshift-storage-policy-xxxx"
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: false
reclaimPolicy: Delete
```