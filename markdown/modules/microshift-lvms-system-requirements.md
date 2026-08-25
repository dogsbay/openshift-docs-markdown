{%- set _mod_docs_content_type = "CONCEPT" %}
# LVMS system requirements {id="microshift-lvms-system-requirements_{{ context }}"}

To prepare your infrastructure for storage operations, review the system specifications for using LVMS in {{ microshift_short }}. Verifying these requirements ensures your environment meets the necessary resource standards for a successful deployment. {._abstract}

## Volume group name {id="lvms-volume-group-name_{{ context }}"}

If you did not configure LVMS in an `lvmd.yaml` file placed in the `/etc/microshift/` directory, {{ microshift_short }} attempts to assign a default volume group (VG) dynamically by running the `vgs` command.

*   {{ microshift_short }} assigns a default VG when only one VG is found.
*   If more than one VG is present, the VG named `microshift` is assigned as the default.
*   If a VG named `microshift` does not exist, LVMS is not deployed.

If there are no volume groups on the {{ microshift_short }} host, LVMS is disabled.

If you want to use a specific VG, LVMS must be configured to select that VG. You can change the default name of the VG in the configuration file. For details, read the "Configuring the LVMS" section of this document.

You can change the default name of the VG in the configuration file. For details, read the "Configuring the LVMS" section of this document.

After {{ microshift_short }} starts, you can update the `lvmd.yaml` to include or remove VGs. To implement changes, you must restart {{ microshift_short }}. If the `lvmd.yaml` is deleted, {{ microshift_short }} attempts to find a default VG again.

## Volume size increments {id="lvms-volume-size-increments_{{ context }}"}

The LVMS provisions storage in increments of 1 gigabyte (GB). Storage requests are rounded up to the nearest GB. When the capacity of a VG is less than 1 GB, the `PersistentVolumeClaim` registers a `ProvisioningFailed` event, for example:

```terminal title="Example output"
Warning  ProvisioningFailed    3s (x2 over 5s)  topolvm.cybozu.com_topolvm-controller-858c78d96c-xttzp_0fa83aef-2070-4ae2-bcb9-163f818dcd9f failed to provision volume with
StorageClass "topolvm-provisioner": rpc error: code = ResourceExhausted desc = no enough space left on VG: free=(BYTES_INT), requested=(BYTES_INT)
```