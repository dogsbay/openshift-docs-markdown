{%- set _mod_docs_content_type = "CONCEPT" %}
# About removing devices and device classes from a volume group {id="about-removing-devices-deviceclasses-from-a-vg_{{ context }}"}

You can remove devices and device classes from a Logical Volume Manager (LVM) volume group to decommission storage hardware or reorganize your storage configuration by updating the `deviceSelector` field in the `LVMCluster` CR. {._abstract}

## Removing the device paths in the deviceSelector.paths field {id="removing-device-paths-in-deviceselectorpaths-field_{{ context }}"}
You can remove the device paths in the `deviceSelector.paths` field.


:::important

Ensure that the following criteria are met before removing device paths: 

*   The device that you want to remove is empty. You can use the `pvdisplay` command to see attributes of physical volumes (PVs) used in LVM. 
*   At least one additional device is specified in the `deviceSelector.paths` field.

:::


## Removing the deviceClass from the LVMCluster {id="removing-device-classes-from-lvmcluster_{{ context }}"}
You can also remove the `deviceClass` object from the `LVMCluster` resource. For device class deletion, there is no need to delete `deviceSelector.paths` object.


:::important

Ensure that the following criteria are met before removing a device class: 

*   The `deviceClasses.default` field is set to `false`.
*   The disks specified in the `deviceSelector.paths` field are empty.
*   At least one additional device class is specified in the `storage` field.

:::