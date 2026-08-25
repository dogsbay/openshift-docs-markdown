{%- set _mod_docs_content_type = "CONCEPT" %}
# LVM cluster custom resource status reporting {id="lvm-cluster-custom-resource-status-reporting_{{ context }}"}

To view a list of excluded devices and the reason for their exclusion, use the `LVMVolumeGroupNodeStatus` custom resource (CR).   {._abstract}

If static device discovery excludes a device, the status report displays the error in the following format:

```text
<device> was not part of <vg_name> at creation (static device discovery enabled)
```

The `VGStatus.DeviceDiscoveryPolicy` parameter reports the effective discovery policy as one of the following values: 

*   `Preconfigured`
*   `RuntimeDynamic`
*   `RuntimeStatic`.