{%- set _mod_docs_content_type = "REFERENCE" %}
# Root device hints {id="root-device-hints_{{ context }}"}

The `rootDeviceHints` parameter enables the installer to provision the {{ op_system_first }} image to a particular device. The installer examines the devices in the order it discovers them, and compares the discovered values with the hint values. The installer uses the first discovered device that matches the hint value. The configuration can combine multiple hints, but a device must match all hints for the installer to select it. {._abstract}

**Subfields**

<table>
<thead>
<tr>
  <th>Subfield</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>deviceName</code></td>
  <td>A string containing a Linux device name such as <code>/dev/vda</code> or <code>/dev/disk/by-path/</code>.<dl><dt>Note</dt><dd>It is recommended to use the <code>/dev/disk/by-path/<device_path></code> link to the storage location.</dd></dl><br><br>The hint must match the actual value exactly.</td>
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
  <td><code>wwnWithExtension</code></td>
  <td>A string containing the unique storage identifier with the vendor extension appended. The hint must match the actual value exactly.</td>
</tr>
<tr>
  <td><code>wwnVendorExtension</code></td>
  <td>A string containing the unique vendor storage identifier. The hint must match the actual value exactly.</td>
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
       bmc:
         address: ipmi://10.10.0.3:6203
         username: admin
         password: redhat
       bootMACAddress: de:ad:be:ef:00:40
       rootDeviceHints:
         deviceName: "/dev/sda"
```