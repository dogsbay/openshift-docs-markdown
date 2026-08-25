{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring disk sharing by using LUN and the CLI {id="virt-configuring-disk-sharing-lun-cli_{{ context }}"}

You can use the command line to configure disk sharing by using LUN. {._abstract}

**Procedure**

1.  Edit or create the `VirtualMachine` manifest for your VM to set the required values, as shown in the following example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: vm-0
    spec:
      template:
        spec:
          domain:
            devices:
              disks:
              - disk:
                  bus: sata
                name: rootdisk
              - errorPolicy: report
                lun:
                  bus: scsi
                  reservation: true
                name: na-shared
                serial: shared1234
          volumes:
          - dataVolume:
              name: vm-0
            name: rootdisk
          - name: na-shared
            persistentVolumeClaim:
              claimName: pvc-na-share
    ```
    *   `spec.template.spec.domain.devices.disks.errorPolicy` defines how the hypervisor should behave when an IO error occurs.
    *   `spec.template.spec.domain.devices.disks.lun` defines a volume exposed as a LUN device.
    *   `spec.template.spec.domain.devices.disks.lun.reservation` defines whether the persistent reservation is enabled.
1.  Save the `VirtualMachine` manifest file to apply your changes.