{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing a boot order list in the YAML configuration file {id="virt-edit-boot-order-yaml-web_{{ context }}"}

You can edit the boot order list in a YAML configuration file by using the CLI. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Open the YAML configuration file for the virtual machine by running the following command:
    ```terminal
    $ oc edit vm <vm_name> -n <namespace>
    ```
1.  Edit the YAML file and modify the values for the boot order associated with a disk or network interface controller (NIC). For example:
    ```yaml
    disks:
      - bootOrder: 1
        disk:
          bus: virtio
        name: containerdisk
      - disk:
          bus: virtio
        name: cloudinitdisk
      - cdrom:
          bus: virtio
        name: cd-drive-1
    interfaces:
      - boot Order: 2
        macAddress: '02:96:c4:00:00'
        masquerade: {}
        name: default
    ```
    *   `disks.bootOrder` defines the boot order value specified for the disk.
    *   `interfaces.bootOrder` defines the boot order value specified for the network interface controller.
1.  Save the YAML file.