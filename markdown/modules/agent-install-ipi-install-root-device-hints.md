{%- set _mod_docs_content_type = "REFERENCE" %}
# About root device hints {id="root-device-hints_{{ context }}"}

The `rootDeviceHints` parameter enables the installation program to provision the {{ op_system_first }} image to a particular device. {._abstract}

The installation program examines the devices in the order it discovers them, and compares the discovered values with the hint values. The installation program uses the first discovered device that matches the hint value. The configuration can combine multiple hints, but a device must match all hints for the installation program to select it.

**Subfields**

<table>
<tbody>
<tr>
  <td>Subfield</td>
  <td>Description</td>
</tr>
<tr>
  <td><code>deviceName</code></td>
  <td>A string containing a Linux device name such as <code>/dev/vda</code> or <code>/dev/disk/by-path/</code>.</td>
</tr>
<tr>
  <td><code>hctl</code></td>
  <td>A string containing a SCSI bus address like <code>0:0:0:0</code>. The hint must match the actual value exactly.</td>
</tr>
<tr>
  <td><code>model</code></td>
  <td>A string containing a vendor-specific device identifier. The hint can be a substring of the actual value.</td>
</tr>
<tr>
  <td><code>vendor</code></td>
  <td>A string containing the name of the vendor or manufacturer of the device. The hint can be a sub-string of the actual value.</td>
</tr>
<tr>
  <td><code>serialNumber</code></td>
  <td>A string containing the device serial number. The hint must match the actual value exactly.</td>
</tr>
<tr>
  <td><code>minSizeGigabytes</code></td>
  <td>An integer representing the minimum size of the device in gigabytes.</td>
</tr>
<tr>
  <td><code>wwn</code></td>
  <td>A string containing the unique storage identifier. The hint must match the actual value exactly.</td>
</tr>
<tr>
  <td><code>rotational</code></td>
  <td>A boolean indicating whether the device should be a rotating disk (true) or not (false).</td>
</tr>
</tbody>
</table>

```yaml title="Example usage"
     - name: master-0
       role: master
       rootDeviceHints:
         deviceName: "/dev/sda"
```