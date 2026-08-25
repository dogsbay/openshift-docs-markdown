{%- set _mod_docs_content_type = "CONCEPT" %}
# Storage classes {id="microshift-storage-classes_{{ context }}"}

To configure the workload layer interface for device class selection, review the supported storage class parameters in {{ microshift_short }}. By understanding these parameters, you can define how storage is provisioned and managed for your specific workload requirements. {._abstract}

The following storage class parameters are supported in {{ microshift_short }}:

*   The `csi.storage.k8s.io/fstype` parameter selects the file system types. Both `xfs` and `ext4` file system types are supported.
*   The `topolvm.io/device-class` parameter is the name of the device class. If a device class is not provided, the default device class is assumed.

Multiple storage classes can refer to the same device class. You can provide varying sets of parameters for the same backing device class, such as `xfs` and `ext4` variants.

```yaml title="Example {{ microshift_short }} default storage class resource"
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
  name: topolvm-provisioner
parameters:
  "csi.storage.k8s.io/fstype": "xfs"
provisioner: topolvm.io
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion:
# ...
```

where:


`storageclass.kubernetes.io/is-default-class`
:   Specifies an example of the default storage class. If a PVC does not specify a storage class, this class is assumed. There can only be one default storage class in a {{ microshift_short }} node. Having no value assigned to this annotation is also supported.


`csi.storage.k8s.io/fstype`
:   Specifies what file system to provision on the volume. Options are "xfs" and "ext4".


`provisioner`
:   Specifies what provisioner should manage this class.


`volumeBindingMode`
:   Specifies whether to provision the volume before a client pod is present or immediately. Options are `WaitForFirstConsumer` and `Immediate`. `WaitForFirstConsumer` is recommended to ensure that storage is only provisioned for pods that can be scheduled.


`allowVolumeExpansion`
:   Specifies if PVCs provisioned from the `StorageClass` permit expansion. The {{ microshift_short }} LVMS CSI plugin does support volume expansion, but if this value is set to `false`, expansion is blocked.