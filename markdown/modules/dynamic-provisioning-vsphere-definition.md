{%- set _mod_docs_content_type = "REFERENCE" %}
# VMware vSphere object definition {id="vsphere-definition_{{ context }}"}

This VMware vSphere storage class example demonstrates the basic structure and Container Storage Interface (CSI) provisioner configuration required to enable dynamic storage provisioning on vSphere infrastructure. This minimal definition provides the foundation for vSphere storage integration, which you can extend with storage policies, datastore preferences, and other vSphere-specific parameters. {._abstract}

```yaml title="Example vSphere storage class YAML file"
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: <storage-class-name> (1)
provisioner: csi.vsphere.vmware.com (2)
```
*   `metadata.name`: Name of the storage class. The persistent volume claim uses this storage class for provisioning the associated persistent volumes.
*   `provisioner`: The name of the provisioner for the storage class. For vSphere, this is `csi.vsphere.vmware.com`.