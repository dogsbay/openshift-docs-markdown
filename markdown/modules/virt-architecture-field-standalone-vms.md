{%- set _mod_docs_content_type = "REFERENCE" %}
# Architecture field for standalone virtual machines {id="virt-architecture-field-standalone-vms_{{ context }}"}

To run a standalone VM on a specific architecture in a heterogeneous cluster, set the `spec.template.spec.architecture` field in the `VirtualMachine` manifest. If you do not set this field, the VM defaults to the control-plane architecture. {._abstract}

This field applies to VMs created from container disks, HTTP sources, uploads, or clones. For VMs based on boot source images, the `DataSource` object resolves the architecture automatically.

```yaml title="Example VirtualMachine manifest with the architecture field"
apiVersion: kubevirt.io/v1
kind: VirtualMachine
metadata:
  name: my-vm
spec:
  template:
    spec:
      architecture: <architecture>
      domain:
        devices: {}
        memory:
          guest: 512Mi
        resources: {}
      volumes:
      - name: my-volume
        containerDisk:
          image: <container_disk_image>
# ...
```

where:


`<architecture>`
:   Specifies the target architecture for the VM, for example `arm64`. If not specified, defaults to the control-plane architecture.

`<container_disk_image>`
:   Specifies the container disk image to use for the VM.