{%- set _newdoc_version = "2.18.5" -%}
{%- set _template_generated = "2025-09-11" -%}
{%- set _mod_docs_content_type = "PROCEDURE" %}

# Inserting a CD-ROM in a live VM by using the command line {id="virt-inserting-a-cd-rom-in-a-vm-by-using-the-command-line_{{ context }}"}

To make data on a CD-ROM storage device available to a running virtual machine (VM), create a virtual CD-ROM drive in the VM and insert the CD-ROM into the drive as an ISO image. {._abstract}

Setting up a virtual CD-ROM drive requires rebooting the VM, but afterwards, you can insert and eject ISO images in the drive while the VM is running.

**Prerequisites**

{% include "./snippets/virt-cdrom-feature-gate-requirements.md" %}

*   You have an ISO image of a CD-ROM available in the cluster.

**Procedure**

1.  Run the following command to edit the configuration of the VM in which you want to insert the CD-ROM:
    ```terminal
    $ oc edit vm <vm-name> -n <namespace>
    ```

    where:
    *   `<vm-name>` is the name of the VM
    *   `<namespace>` is the name of the project name space that contains the VM
1.  Add a `cdrom` disk to the `spec.template.spec.domains.devices.disks` section of the VM configuration. For example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
    spec:
      runStrategy: Always
      template:
        spec:
          domain:
            devices:
              disks:
              - cdrom:
                  bus: sata
                  name: cdrom
    ```
1.  If the VM is running, shut it down.
1.  Insert a CD-ROM volume in the `spec.template.spec.volumes` section of the VM configuration. For example:
    ```yaml
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: example-vm
    spec:
      template:
        spec:
          volumes:
          - dataVolume:
              name: cdrom-example
              hotpluggable: true
            name: cdrom
    ```

    You can insert a CD-ROM this way while the VM is running, but the dataVolume must have the `hotpluggable: true` parameter set.
1.  Optional: In the guest operating system, verify that the CD-ROM has been detected.
1.  Optional: Eject the CD-ROM volume. To do so, remove the `cdrom` volume from the `spec.template.spec.volumes` section of the VM configuration. You can do this while the VM is running.