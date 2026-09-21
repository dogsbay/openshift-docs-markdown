{%- set _mod_docs_content_type = "PROCEDURE" %}
# Hot plug and hot unplug a disk by using the CLI {id="virt-hot-plugging-disk-cli_{{ context }}"}

You can hot plug and hot unplug a disk while a virtual machine (VM) is running by using the command line. {._abstract}

The hot plugged disk remains attached to the VM until you unplug it.

**Prerequisites**

*   You must have at least one data volume or persistent volume claim (PVC) available for hot plugging.

**Procedure**

*   Hot plug a disk by running the following command:
    ```terminal
    $ virtctl addvolume <virtual-machine|virtual-machine-instance> \
      --volume-name=<datavolume|PVC> \
      [--bus <bus_type>] [--persist] [--serial=<label_name>]
    ```

    where:

    `--bus <bus_type>`
    :   Optional: Specifies the bus type of the added disk. Supported values are `virtio` and `scsi`. The default bus type is `virtio`.

    `--persist`
    :   Optional: Specifies that the virtual disk is permanently mounted on a virtual machine. This flag does not apply to virtual machine instances.

    `--serial=<label_name>`
    :   Optional: Specifies an alphanumeric string label of your choice to identify the hot plugged disk in a guest virtual machine. If you do not specify this option, the label defaults to the name of the hot plugged data volume or PVC.

*   Hot unplug a disk by running the following command:
    ```terminal
    $ virtctl removevolume <virtual-machine|virtual-machine-instance> \
      --volume-name=<datavolume|PVC>
    ```