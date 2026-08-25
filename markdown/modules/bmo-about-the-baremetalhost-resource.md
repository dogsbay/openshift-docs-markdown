{%- set _mod_docs_content_type = "REFERENCE" %}
# About the `BareMetalHost` resource {id="bmo-about-the-baremetalhost-resource_{{ context }}"}

You can use the `BareMetalHost` resource to define physical hosts and their properties, including deployment specifications, hardware information, and provisioning state. {._abstract}

The `BareMetalHost` resource contains two sections:

1.  The `BareMetalHost` spec
1.  The `BareMetalHost` status

Hardware data is available in the `status.hardware` section of the `BareMetalHost` object and in the `HardwareData` object. You can access the `HardwareData` object by running the following command:

```terminal
$ oc get hardwaredata <machine_name> -n openshift-machine-api
```

where:


`<machine_name>`
:   Specifies the name of a bare-metal host.

## The `BareMetalHost` spec {id="_the_baremetalhost_spec"}

The `spec` section of the `BareMetalHost` resource defines the desired state of the host.

***BareMetalHost spec***

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>architecture</code></td>
  <td>Specifies the CPU architecture of the underlying machine. Supported values are <code>aarch64</code> and <code>x86_64</code>. If this value is not specified, it will default to the architecture of the control plane. You can add <code>aarch64</code> machines to a cluster with <code>x86_64</code> control plane machines, but you cannot add <code>x86_64</code> machines to a cluster with <code>aarch64</code> control plane machines.</td>
</tr>
<tr>
  <td><code>automatedCleaningMode</code></td>
  <td>An interface to enable or disable automated cleaning during provisioning and de-provisioning. When set to <code>disabled</code>, it skips automated cleaning. When set to <code>metadata</code>, automated cleaning is enabled. The default setting is <code>metadata</code>.</td>
</tr>
<tr>
  <td><pre>bmc:&#10;  address:&#10;  credentialsName:&#10;  disableCertificateVerification:</pre></td>
  <td>The <code>bmc</code> configuration setting contains the connection information for the baseboard management controller (BMC) on the host. The fields are:<br><br><ul><li><code>address</code>: The URL for communicating with the host's BMC controller.</li><li><code>credentialsName</code>: A reference to a secret containing the username and password for the BMC.</li><li><code>disableCertificateVerification</code>: A boolean to skip certificate validation when set to <code>true</code>.</li></ul></td>
</tr>
<tr>
  <td><code>bootMACAddress</code></td>
  <td>The MAC address of the network interface controller (NIC) used for provisioning the host.</td>
</tr>
<tr>
  <td><code>bootMode</code></td>
  <td>The boot mode of the host. It defaults to <code>UEFI</code>, but it can also be set to <code>legacy</code> for BIOS boot, or <code>UEFISecureBoot</code>.</td>
</tr>
<tr>
  <td><code>consumerRef</code></td>
  <td>A reference to another resource that is using the host. It could be empty if another resource is not currently using the host. For example, a <code>Machine</code> resource might use the host when the <code>machine-api</code> is using the host.</td>
</tr>
<tr>
  <td><code>description</code></td>
  <td>A human-provided string to help identify the host.</td>
</tr>
<tr>
  <td><code>externallyProvisioned</code></td>
  <td>A boolean indicating whether the host provisioning and deprovisioning are managed externally. When set:<br><br><ul><li>Power status can still be managed using the online field.</li><li>Hardware inventory will be monitored, but no provisioning or deprovisioning operations are performed on the host.</li></ul></td>
</tr>
<tr>
  <td><code>firmware</code></td>
  <td>Contains information about the BIOS configuration of bare-metal hosts. Currently, <code>firmware</code> is only supported by iRMC, iDRAC, iLO4 and iLO5 BMCs. The sub fields are:<br><br><ul><li><ul><li><code>simultaneousMultithreadingEnabled</code>: Allows a single physical processor core to appear as several logical processors. Valid settings are <code>true</code> or <code>false</code>.</li><li><code>sriovEnabled</code>: SR-IOV support enables a hypervisor to create virtual instances of a PCI-express device, potentially increasing performance. Valid settings are <code>true</code> or <code>false</code>.</li><li><code>virtualizationEnabled</code>: Supports the virtualization of platform hardware. Valid settings are <code>true</code> or <code>false</code>.</li></ul></li></ul></td>
</tr>
<tr>
  <td><pre>image:&#10;  url:&#10;  checksum:&#10;  checksumType:&#10;  format:</pre></td>
  <td>The <code>image</code> configuration setting holds the details for the image to be deployed on the host. Ironic requires the image fields. However, when the <code>externallyProvisioned</code> configuration setting is set to <code>true</code> and the external management does not require power control, the fields can be empty. The setting supports the following fields:<br><br><ul><li><code>url</code>: The URL of an image to deploy to the host.</li><li><code>checksum</code>: The actual checksum or a URL to a file containing the checksum for the image at <code>image.url</code>.</li><li><code>checksumType</code>: You can specify checksum algorithms. Currently <code>image.checksumType</code> only supports <code>md5</code>, <code>sha256</code>, and <code>sha512</code>. The default checksum type is <code>md5</code>.</li><li><code>format</code>: This is the disk format of the image. It can be one of <code>raw</code>, <code>qcow2</code>, <code>vdi</code>, <code>vmdk</code>, <code>live-iso</code> or be left unset. Setting it to <code>raw</code> enables raw image streaming in the Ironic agent for that image. Setting it to <code>live-iso</code> enables ISO images to live boot without deploying to disk, and it ignores the <code>checksum</code> fields.</li></ul></td>
</tr>
<tr>
  <td><code>networkData</code></td>
  <td>A reference to the secret containing the network configuration data and its namespace, so that it can be attached to the host before the host boots to set up the network.</td>
</tr>
<tr>
  <td><code>online</code></td>
  <td>A boolean indicating whether the host should be powered on (<code>true</code>) or off (<code>false</code>). Changing this value will trigger a change in the power state of the physical host.</td>
</tr>
<tr>
  <td><pre>raid:&#10;  hardwareRAIDVolumes:&#10;  softwareRAIDVolumes:</pre></td>
  <td>(Optional) Contains the information about the RAID configuration for bare-metal hosts. If not specified, it retains the current configuration.<br><br><dl><dt>Note</dt><dd>{{ product_title }} {{ product_version }} supports hardware RAID on the installation drive for BMCs, including:<br><br><ul><li>Fujitsu iRMC with support for RAID levels 0, 1, 5, 6, and 10</li><li>Dell iDRAC using the Redfish API with firmware version 6.10.30.20 or later and RAID levels 0, 1, and 5</li></ul>{{ product_title }} {{ product_version }} does not support software RAID on the installation drive.</dd></dl><br><br>See the following configuration settings:<br><br><ul><li><code>hardwareRAIDVolumes</code>: Contains the list of logical drives for hardware RAID, and defines the desired volume configuration in the hardware RAID. If you do not specify <code>rootDeviceHints</code>, the first volume is the root volume. The sub-fields are:<ul><li><code>level</code>: The RAID level for the logical drive. The following levels are supported: <code>0</code>,<code>1</code>,<code>2</code>,<code>5</code>,<code>6</code>,<code>1+0</code>,<code>5+0</code>,<code>6+0</code>.</li><li><code>name</code>: The name of the volume as a string. It should be unique within the server. If not specified, the volume name will be autogenerated.</li><li><code>numberOfPhysicalDisks</code>: The number of physical drives as an integer to use for the logical drove. Defaults to the minimum number of disk drives required for the particular RAID level.</li><li><code>physicalDisks</code>: The list of names of physical disk drives as a string. This is an optional field. If specified, the controller field must be specified too.</li><li><code>controller</code>: (Optional) The name of the RAID controller as a string to use in the hardware RAID volume.</li><li><code>rotational</code>: If set to <code>true</code>, it will only select rotational disk drives. If set to <code>false</code>, it will only select solid-state and NVMe drives. If not set, it selects any drive types, which is the default behavior.</li><li><code>sizeGibibytes</code>: The size of the logical drive as an integer to create in GiB. If unspecified or set to <code>0</code>, it will use the maximum capacity of physical drive for the logical drive.</li></ul></li><li><code>softwareRAIDVolumes</code>: {{ product_title }} {{ product_version }} does not support software RAID on the installation drive. This configuration contains the list of logical disks for software RAID. If you do not specify <code>rootDeviceHints</code>, the first volume is the root volume. If you set <code>HardwareRAIDVolumes</code>, this item will be invalid. Software RAIDs will always be deleted. The number of created software RAID devices must be <code>1</code> or <code>2</code>. If there is only one software RAID device, it must be <code>RAID-1</code>. If there are two RAID devices, the first device must be <code>RAID-1</code>, while the RAID level for the second device can be <code>0</code>, <code>1</code>, or <code>1+0</code>. The first RAID device will be the deployment device, which cannot be a software RAID volume. Enforcing <code>RAID-1</code> reduces the risk of a non-booting node in case of a device failure. The <code>softwareRAIDVolume</code> field defines the desired configuration of the volume in the software RAID. The sub-fields are:<ul><li><code>level</code>: The RAID level for the logical drive. The following levels are supported: <code>0</code>,<code>1</code>,<code>1+0</code>.</li><li><code>physicalDisks</code>: A list of device hints. The number of items should be greater than or equal to <code>2</code>.</li><li><code>sizeGibibytes</code>: The size of the logical disk drive as an integer to be created in GiB. If unspecified or set to <code>0</code>, it will use the maximum capacity of physical drive for logical drive.</li></ul></li></ul>You can set the <code>hardwareRAIDVolume</code> as an empty slice to clear the hardware RAID configuration. For example:<br><br><pre>spec:&#10;   raid:&#10;     hardwareRAIDVolume: []</pre><br><br>If you receive an error message indicating that the driver does not support RAID, set the <code>raid</code>, <code>hardwareRAIDVolumes</code> or <code>softwareRAIDVolumes</code> to nil. You might need to ensure the host has a RAID controller.</td>
</tr>
<tr>
  <td><pre>rootDeviceHints:&#10;  deviceName:&#10;  hctl:&#10;  model:&#10;  vendor:&#10;  serialNumber:&#10;  minSizeGigabytes:&#10;  wwn:&#10;  wwnWithExtension:&#10;  wwnVendorExtension:&#10;  rotational:</pre></td>
  <td>The <code>rootDeviceHints</code> parameter enables provisioning of the {{ op_system }} image to a particular device. It examines the devices in the order it discovers them, and compares the discovered values with the hint values. It uses the first discovered device that matches the hint value. The configuration can combine multiple hints, but a device must match all hints to get selected. The fields are:<br><br><ul><li><code>deviceName</code>: A string containing a Linux device name like <code>/dev/vda</code>. The hint must match the actual value exactly.</li><li><code>hctl</code>: A string containing a SCSI bus address like <code>0:0:0:0</code>. The hint must match the actual value exactly.</li><li><code>model</code>: A string containing a vendor-specific device identifier. The hint can be a substring of the actual value.</li><li><code>vendor</code>: A string containing the name of the vendor or manufacturer of the device. The hint can be a sub-string of the actual value.</li><li><code>serialNumber</code>: A string containing the device serial number. The hint must match the actual value exactly.</li><li><code>minSizeGigabytes</code>: An integer representing the minimum size of the device in gigabytes.</li><li><code>wwn</code>: A string containing the unique storage identifier. The hint must match the actual value exactly.</li><li><code>wwnWithExtension</code>: A string containing the unique storage identifier with the vendor extension appended. The hint must match the actual value exactly.</li><li><code>wwnVendorExtension</code>: A string containing the unique vendor storage identifier. The hint must match the actual value exactly.</li><li><code>rotational</code>: A boolean indicating whether the device should be a rotating disk (true) or not (false).</li></ul></td>
</tr>
</tbody>
</table>

## The `BareMetalHost` status {id="_the_baremetalhost_status"}

The `BareMetalHost` status represents the host’s current state, and includes tested credentials, current hardware details, and other information.

***BareMetalHost status***

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>goodCredentials</code></td>
  <td>A reference to the secret and its namespace holding the last set of baseboard management controller (BMC) credentials the system was able to validate as working.</td>
</tr>
<tr>
  <td><code>errorMessage</code></td>
  <td>Details of the last error reported by the provisioning backend, if any.</td>
</tr>
<tr>
  <td><code>errorType</code></td>
  <td>Indicates the class of problem that has caused the host to enter an error state. The error types are:<br><br><ul><li><code>provisioned registration error</code>: Occurs when the controller is unable to reregister an already provisioned host.</li><li><code>registration error</code>: Occurs when the controller is unable to connect to the host's baseboard management controller.</li><li><code>inspection error</code>: Occurs when an attempt to obtain hardware details from the host fails.</li><li><code>preparation error</code>: Occurs when cleaning fails.</li><li><code>provisioning error</code>: Occurs when the controller fails to provision or deprovision the host.</li><li><code>power management error</code>: Occurs when the controller is unable to modify the power state of the host.</li><li><code>detach error</code>: Occurs when the controller is unable to detach the host from the provisioner.</li></ul></td>
</tr>
<tr>
  <td><pre>hardware:&#10;  cpu&#10;    arch:&#10;    model:&#10;    clockMegahertz:&#10;    flags:&#10;    count:</pre></td>
  <td>The <code>hardware.cpu</code> field details of the CPU(s) in the system. The fields include:<br><br><ul><li><code>arch</code>: The architecture of the CPU.</li><li><code>model</code>: The CPU model as a string.</li><li><code>clockMegahertz</code>: The speed in MHz of the CPU.</li><li><code>flags</code>: The list of CPU flags. For example, <code>'mmx','sse','sse2','vmx'</code> etc.</li><li><code>count</code>: The number of CPUs available in the system.</li></ul></td>
</tr>
<tr>
  <td><pre>hardware:&#10;  firmware:</pre></td>
  <td>Contains BIOS firmware information. For example, the hardware vendor and version.</td>
</tr>
<tr>
  <td><pre>hardware:&#10;  nics:&#10;  - ip:&#10;    name:&#10;    mac:&#10;    speedGbps:&#10;    vlans:&#10;    vlanId:&#10;    pciAddress:&#10;    pxe:</pre></td>
  <td>The <code>hardware.nics</code> field contains a list of network interfaces for the host. The fields include:<br><br><ul><li><code>ip</code>: The IP address of the network interface controller (NIC), if one was assigned when the discovery agent ran.</li><li><code>name</code>: A string identifying the network device. For example, <code>nic-1</code>.</li><li><code>mac</code>: The MAC address of the NIC.</li><li><code>speedGbps</code>: The speed of the device in Gbps.</li><li><code>vlans</code>: A list holding all the VLANs available for this NIC.</li><li><code>vlanId</code>: The untagged VLAN ID.</li><li><code>pciAddress</code>: The PCI address of the NIC. For example, <code>0000:00:03.0</code>.</li><li><code>pxe</code>: Whether the NIC is able to boot using PXE.</li></ul></td>
</tr>
<tr>
  <td><pre>hardware:&#10;  ramMebibytes:</pre></td>
  <td>The host's amount of memory in Mebibytes (MiB).</td>
</tr>
<tr>
  <td><pre>hardware:&#10;  storage:&#10;  - name:&#10;    rotational:&#10;    sizeBytes:&#10;    serialNumber:</pre></td>
  <td>The <code>hardware.storage</code> field contains a list of storage devices available to the host. The fields include:<br><br><ul><li><code>name</code>: A string identifying the storage device. For example, <code>disk 1 (boot)</code>.</li><li><code>rotational</code>: Indicates whether the disk is rotational, and returns either <code>true</code> or <code>false</code>.</li><li><code>sizeBytes</code>: The size of the storage device.</li><li><code>serialNumber</code>: The device's serial number.</li></ul></td>
</tr>
<tr>
  <td><pre>hardware:&#10;  systemVendor:&#10;    manufacturer:&#10;    productName:&#10;    serialNumber:</pre></td>
  <td>Contains information about the host's <code>manufacturer</code>, the <code>productName</code>, and the <code>serialNumber</code>.</td>
</tr>
<tr>
  <td><code>lastUpdated</code></td>
  <td>The timestamp of the last time the status of the host was updated.</td>
</tr>
<tr>
  <td><code>operationalStatus</code></td>
  <td>The status of the server. The status is one of the following:<br><br><ul><li><code>OK</code>: Indicates all the details for the host are known, correctly configured, working, and manageable.</li><li><code>discovered</code>: Implies some of the host's details are either not working correctly or missing. For example, the BMC address is known but the login credentials are not.</li><li><code>error</code>: Indicates the system found some sort of unrecoverable error. Refer to the <code>errorMessage</code> field in the status section for more details.</li><li><code>delayed</code>: Indicates that provisioning is delayed to limit simultaneous provisioning of multiple hosts.</li><li><code>detached</code>: Indicates the host is marked <code>unmanaged</code>.</li></ul></td>
</tr>
<tr>
  <td><code>poweredOn</code></td>
  <td>Boolean indicating whether the host is powered on.</td>
</tr>
<tr>
  <td><pre>provisioning:&#10;  state:&#10;  id:&#10;  image:&#10;  raid:&#10;  firmware:&#10;  rootDeviceHints:</pre></td>
  <td>The <code>provisioning</code> field contains values related to deploying an image to the host. The sub-fields include:<br><br><ul><li><code>state</code>: The current state of any ongoing provisioning operation. The states include:<ul><li><code><empty string></code>: There is no provisioning happening at the moment.</li><li><code>unmanaged</code>: There is insufficient information available to register the host.</li><li><code>registering</code>: The agent is checking the host's BMC details.</li><li><code>match profile</code>: The agent is comparing the discovered hardware details on the host against known profiles.</li><li><code>available</code>: The host is available for provisioning. This state was previously known as <code>ready</code>.</li><li><code>preparing</code>: The existing configuration will be removed, and the new configuration will be set on the host.</li><li><code>provisioning</code>: The provisioner is writing an image to the host's storage.</li><li><code>provisioned</code>: The provisioner wrote an image to the host's storage.</li><li><code>externally provisioned</code>: Metal^3^ does not manage the image on the host.</li><li><code>deprovisioning</code>: The provisioner is wiping the image from the host's storage.</li><li><code>inspecting</code>: The agent is collecting hardware details for the host.</li><li><code>deleting</code>: The agent is deleting the from the cluster.</li></ul></li><li><code>id</code>: The unique identifier for the service in the underlying provisioning tool.</li><li><code>image</code>: The image most recently provisioned to the host.</li><li><code>raid</code>: The list of hardware or software RAID volumes recently set.</li><li><code>firmware</code>: The BIOS configuration for the bare-metal server.</li><li><code>rootDeviceHints</code>: The root device selection instructions used for the most recent provisioning operation.</li></ul></td>
</tr>
<tr>
  <td><code>triedCredentials</code></td>
  <td>A reference to the secret and its namespace holding the last set of BMC credentials that were sent to the provisioning backend.</td>
</tr>
</tbody>
</table>