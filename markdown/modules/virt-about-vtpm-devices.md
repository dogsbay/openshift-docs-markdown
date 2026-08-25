{%- set _mod_docs_content_type = "CONCEPT" %}
# About vTPM devices {id="virt-about-vtpm-devices_{{ context }}"}

A virtual Trusted Platform Module (vTPM) device functions like a
physical Trusted Platform Module (TPM) hardware chip.
You can use a vTPM device with any operating system, but Windows 11 requires
the presence of a TPM chip to install or boot. {._abstract}

A vTPM device allows VMs created
from a Windows 11 image to function without a physical TPM chip.

{{ VirtProductName }} supports persisting vTPM device state by using Persistent Volume Claims (PVCs) for VMs. If you do not specify the storage class for this PVC, {{ VirtProductName }} uses the default storage class for virtualization workloads. If the default storage class for virtualization workloads is not set, {{ VirtProductName }} uses the default storage class for the cluster.


:::note

The storage class that is marked as default for virtualization workloads has the annotation `storageclass.kubevirt.io/is-default-virt-class` set to "true". You can find this storage class by running the following command:

```terminal
$ oc get sc -o jsonpath='{range .items[?(.metadata.annotations.storageclass\.kubevirt\.io/is-default-virt-class=="true")]}{.metadata.name}{"\n"}{end}'
```

Similarly, the default storage class for the cluster has the annotation `storageclass.kubernetes.io/is-default-class` set to "true". To find this storage class, run the following command:

```terminal
$ oc get sc -o jsonpath='{range .items[?(.metadata.annotations.storageclass\.kubernetes\.io/is-default-class=="true")]}{.metadata.name}{"\n"}{end}'
```

To ensure consistent behavior, configure only one storage class as the default for virtualization workloads and for the cluster respectively.

:::


It is recommended that you specify the storage class explicitly by setting the `vmStateStorageClass` attribute in the `HyperConverged` custom resource (CR):

```yaml
kind: HyperConverged
metadata:
  name: kubevirt-hyperconverged
spec:
  vmStateStorageClass: <storage_class_name>

# ...
```

If you do not enable vTPM, then the VM does not recognize a TPM device, even if
the node has one.