{%- set _mod_docs_content_type = "CONCEPT" %}
# Available Agent configuration parameters {id="agent-configuration-parameters_{{ context }}"}

To customize your cluster installation, configuration parameters are available to use in the `agent-config.yaml` file. {._abstract}

The following tables specify the required and optional Agent configuration parameters that you can set as part of the Agent-based installation process.


:::note

These settings are used for installation only, and cannot be modified after installation.

:::


## Required configuration parameters {id="agent-configuration-parameters-required_{{ context }}"}

Required Agent configuration parameters are described in the following table:

**Required parameters**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>apiVersion:</td>
  <td>The API version for the <code>agent-config.yaml</code> content. The current version is <code>v1beta1</code>. The installation program might also support older API versions.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>metadata:</td>
  <td>Kubernetes resource <code>ObjectMeta</code>, from which only the <code>name</code> parameter is consumed.<br><br><strong>Value:</strong> Object</td>
</tr>
<tr>
  <td>metadata: name:</td>
  <td>The name of the cluster. DNS records for the cluster are all subdomains of <code>{{.metadata.name}}.{{.baseDomain}}</code>. The value entered in the <code>agent-config.yaml</code> file is ignored, and instead the value specified in the <code>install-config.yaml</code> file is used. When you do not provide <code>metadata.name</code> through either the <code>install-config.yaml</code> or <code>agent-config.yaml</code> files, for example when you use only ZTP manifests, the cluster name is set to <code>agent-cluster</code>.<br><br><strong>Value:</strong> String of lowercase letters and hyphens (<code>-</code>), such as <code>dev</code>.</td>
</tr>
</tbody>
</table>

## Optional configuration parameters {id="agent-configuration-parameters-optional_{{ context }}"}

Optional Agent configuration parameters are described in the following table:

**Optional parameters**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>rendezvousIP:</td>
  <td>The IP address of the node that performs the bootstrapping process as well as running the <code>assisted-service</code> component. You must provide the rendezvous IP address when you do not specify at least one host's IP address in the <code>networkConfig</code> parameter. If this address is not provided, one IP address is selected from the provided hosts' <code>networkConfig</code>.<br><br><strong>Value:</strong> IPv4 or IPv6 address.</td>
</tr>
<tr>
  <td>bootArtifactsBaseURL:</td>
  <td>When you use the Agent-based Installer to generate a minimal ISO image, this parameter specifies a URL where the rootfs image file can be retrieved from during cluster installation. This parameter is optional for booting minimal ISO images in connected environments.<br><br>When you use the Agent-based Installer to generate an iPXE script, this parameter specifies the URL of the server to upload Preboot Execution Environment (PXE) assets to. For more information, see "Preparing PXE assets for {{ product_title }}".<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>additionalNTPSources:</td>
  <td>A list of Network Time Protocol (NTP) sources to be added to all cluster hosts, which are added to any NTP sources that are configured through other means.<br><br><strong>Value:</strong> List of hostnames or IP addresses.</td>
</tr>
<tr>
  <td>hosts:</td>
  <td>Host configuration. An optional list of hosts. The number of hosts defined must not exceed the total number of hosts defined in the <code>install-config.yaml</code> file, which is the sum of the values of the <code>compute.replicas</code> and <code>controlPlane.replicas</code> parameters.<br><br><strong>Value:</strong> An array of host configuration objects.</td>
</tr>
<tr>
  <td>hosts: hostname:</td>
  <td>Hostname. Overrides the hostname obtained from either the Dynamic Host Configuration Protocol (DHCP) or a reverse DNS lookup. Each host must have a unique hostname supplied by one of these methods, although configuring a hostname through this parameter is optional.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>hosts: interfaces:</td>
  <td>Provides a table of the name and MAC address mappings for the interfaces on the host. If a <code>NetworkConfig</code> section is provided in the <code>agent-config.yaml</code> file, this table must be included and the values must match the mappings provided in the <code>NetworkConfig</code> section.<br><br><strong>Value:</strong> An array of host configuration objects.</td>
</tr>
<tr>
  <td>hosts: interfaces: name:</td>
  <td>The name of an interface on the host.<dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>This value does not need to match the device name.</dd></dl><br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>hosts: interfaces: macAddress:</td>
  <td>The MAC address of an interface on the host.<br><br><strong>Value:</strong> A MAC address such as the following example: <code>00-B0-D0-63-C2-26</code>.</td>
</tr>
<tr>
  <td>hosts: role:</td>
  <td>Defines whether the host is a <code>master</code> or <code>worker</code> node. If no role is defined in the <code>agent-config.yaml</code> file, roles will be assigned at random during cluster installation.<br><br><strong>Value:</strong> <code>master</code> or <code>worker</code>.</td>
</tr>
<tr>
  <td>hosts: rootDeviceHints:</td>
  <td>Enables provisioning of the {{ op_system_first }} image to a particular device. The installation program examines the devices in the order it discovers them, and compares the discovered values with the hint values. It uses the first discovered device that matches the hint value. This is the device that the operating system is written on during installation.<br><br><strong>Value:</strong> A dictionary of key-value pairs. For more information, see "Root device hints" in the "Setting up the environment for an OpenShift installation" page.</td>
</tr>
<tr>
  <td>hosts: rootDeviceHints: deviceName:</td>
  <td>The name of the device the {{ op_system }} image is provisioned to.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>hosts: networkConfig:</td>
  <td>The host network definition. The configuration must match the Host Network Management API defined in the "Declarative Network API (nmstate documentation)".<br><br><strong>Value:</strong> A dictionary of host network configuration objects.</td>
</tr>
<tr>
  <td>minimalISO:</td>
  <td>Defines whether the Agent-based Installer generates a full ISO or a minimal ISO image. When this parameter is set to <code>True</code>, the Agent-based Installer generates an ISO without a rootfs image file, and instead contains details about where to pull the rootfs file from.<br><br>When you generate a minimal ISO, if you do not specify a rootfs URL through the <code>bootArtifactsBaseURL</code> parameter, the Agent-based Installer embeds a default URL that is accessible in environments with an internet connection.<br><br>The default value is <code>False</code>.<br><br><strong>Value:</strong> Boolean.</td>
</tr>
</tbody>
</table>