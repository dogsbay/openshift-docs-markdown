{%- set _mod_docs_content_type = "REFERENCE" %}
# Additional installation configuration parameters {id="additional-install-config-parameters_{{ context }}"}

Some parameters, such as the cluster domain name, are required in the `install-config.yaml` file when installing a cluster on bare metal. Others, such as the provisioning network CIDR, are optional. {._abstract}

**Required parameters**

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Default</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>baseDomain</code></td>
  <td></td>
  <td>The domain name for the cluster. For example, <code>example.com</code>.</td>
</tr>
<tr>
  <td><code>bootMode</code></td>
  <td><code>UEFI</code></td>
  <td>The boot mode for a node. Options are <code>legacy</code>, <code>UEFI</code>, and <code>UEFISecureBoot</code>. If <code>bootMode</code> is not set, Ironic sets it while inspecting the node.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>For hardware that implements <code>BootMode</code> read-only, such as HP or Cisco, do not leave this parameter blank. You must manually set the system to UEFI mode before installation and explicitly set this parameter to UEFI.</dd></dl></td>
</tr>
<tr>
  <td><pre>platform:&#10;  baremetal:&#10;    bootstrapExternalStaticDNS</pre></td>
  <td></td>
  <td>The static network DNS of the bootstrap node. You must set this value when deploying a cluster with static IP addresses when there is no Dynamic Host Configuration Protocol (DHCP) server on the bare-metal network. If you do not set this value, the installation program will use the value from <code>bootstrapExternalStaticGateway</code>, which causes problems when the IP address values of the gateway and DNS are different.</td>
</tr>
<tr>
  <td><pre>platform:&#10;  baremetal:&#10;    bootstrapExternalStaticIP</pre></td>
  <td></td>
  <td>The static IP address for the bootstrap VM. You must set this value when deploying a cluster with static IP addresses when there is no DHCP server on the bare metal network.</td>
</tr>
<tr>
  <td><pre>platform:&#10;  baremetal:&#10;    bootstrapExternalStaticGateway</pre></td>
  <td></td>
  <td>The static IP address of the gateway for the bootstrap VM. You must set this value when deploying a cluster with static IP addresses when there is no DHCP server on the bare metal network.</td>
</tr>
<tr>
  <td><code>sshKey</code></td>
  <td></td>
  <td>The <code>sshKey</code> parameter sets the key in the <code>~/.ssh/id_rsa.pub</code> file required to access the control plane nodes and compute nodes. Typically, this key is from the <code>provisioner</code> node.</td>
</tr>
<tr>
  <td><code>pullSecret</code></td>
  <td></td>
  <td>The <code>pullSecret</code> parameter sets a copy of the pull secret downloaded from the <a href="https://console.redhat.com/openshift/install/metal/user-provisioned">Install OpenShift on Bare Metal</a> page when preparing the provisioner node.</td>
</tr>
<tr>
  <td><pre>metadata:&#10;    name:</pre></td>
  <td></td>
  <td>The {{ product_title }} cluster name. For example, <code>openshift</code>.</td>
</tr>
<tr>
  <td><pre>networking:&#10;    machineNetwork:&#10;    - cidr:</pre></td>
  <td></td>
  <td>The public CIDR (Classless Inter-Domain Routing) of the external network. For example, <code>10.0.0.0/24</code>.</td>
</tr>
<tr>
  <td><pre>compute:&#10;  - name: worker</pre></td>
  <td></td>
  <td>The {{ product_title }} cluster requires a name for each compute node even if there are zero nodes.</td>
</tr>
<tr>
  <td><pre>compute:&#10;    replicas: 2</pre></td>
  <td></td>
  <td>Replicas sets the number of compute nodes in the {{ product_title }} cluster.</td>
</tr>
<tr>
  <td><pre>controlPlane:&#10;    name: master</pre></td>
  <td></td>
  <td>The {{ product_title }} cluster requires a name for control plane nodes.</td>
</tr>
<tr>
  <td><pre>controlPlane:&#10;    replicas: 3</pre></td>
  <td></td>
  <td>Replicas sets the number of control plane nodes included as part of the {{ product_title }} cluster.</td>
</tr>
<tr>
  <td><code>provisioningNetworkInterface</code></td>
  <td></td>
  <td>The name of the network interface on nodes connected to the provisioning network. For {{ product_title }} 4.9 and later releases, use the <code>bootMACAddress</code> parameter to enable Ironic to identify the IP address of the NIC instead of using the <code>provisioningNetworkInterface</code> parameter to identify the name of the NIC.</td>
</tr>
<tr>
  <td><code>defaultMachinePlatform</code></td>
  <td></td>
  <td>The default configuration used for machine pools without a platform configuration.</td>
</tr>
<tr>
  <td><code>apiVIPs</code></td>
  <td>(Optional) The virtual IP address for Kubernetes API communication.<br><br>You must either provide this setting in the <code>install-config.yaml</code> file as a reserved IP from the <code>MachineNetwork</code> parameter or preconfigured in the DNS so that the default name resolves correctly. Use the virtual IP address and not the FQDN when adding a value to the <code>apiVIPs</code> configuration setting in the <code>install-config.yaml</code> file. For dual-stack networking, the primary IP address can be either an IPv4 network or an IPv6 network. If not set, the installation program uses <code>api.&lt;cluster_name&gt;.&lt;base_domain&gt;</code> to derive the IP address from the DNS.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Before {{ product_title }} 4.12, the cluster installation program only accepted an IPv4 address or an IPv6 address for the <code>apiVIP</code> parameter. From {{ product_title }} 4.12 or later, the <code>apiVIP</code> parameter is deprecated. Instead, use a list format for the <code>apiVIPs</code> parameter to specify an IPv4 address, an IPv6 address or both IP address formats.</dd></dl></td>
  <td><code>bmcCACert</code></td>
</tr>
<tr>
  <td></td>
  <td><code>redfish</code> and <code>redfish-virtualmedia</code> need this parameter to manage BMC addresses when using self-signed certificates with <code>disableCertificateVerification</code> set to <code>False</code>.</td>
  <td><code>ingressVIPs</code></td>
</tr>
<tr>
  <td>(Optional) The virtual IP address for ingress traffic.<br><br>You must either provide this setting in the <code>install-config.yaml</code> file as a reserved IP from the <code>MachineNetwork</code> parameter or preconfigured in the DNS so that the default name resolves correctly. Use the virtual IP address and not the FQDN when adding a value to the <code>ingressVIPs</code> configuration setting in the <code>install-config.yaml</code> file. For dual-stack networking, the primary IP address can be either an IPv4 network or an IPv6 network. If not set, the installation program uses <code>test.apps.&lt;cluster_name&gt;.&lt;base_domain&gt;</code> to derive the IP address from the DNS.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>Before {{ product_title }} 4.12, the cluster installation program only accepted an IPv4 address or an IPv6 address for the <code>ingressVIP</code> parameter. In {{ product_title }} 4.12 and later, the <code>ingressVIP</code> parameter is deprecated. Instead, use a list format for the <code>ingressVIPs</code> parameter to specify an IPv4 addresses, an IPv6 addresses or both IP address formats.</dd></dl></td>
</tr>
</tbody>
</table>

**Optional Parameters**

<table>
<thead>
<tr>
  <th>Parameters</th>
  <th>Default</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><pre>platform:&#10;  baremetal:&#10;    additionalNTPServers:&#10;    - &lt;ip_address_or_domain_name&gt;</pre></td>
  <td></td>
  <td>An optional list of additional NTP servers to add to each host. You can use an IP address or a domain name to specify each NTP server. Additional NTP servers are user-defined NTP servers that enable preinstallation clock synchronization when the cluster host clocks are out of synchronization.</td>
</tr>
<tr>
  <td><code>provisioningDHCPRange</code></td>
  <td><code>172.22.0.10,172.22.0.100</code></td>
  <td>Defines the IP range for nodes on the provisioning network.</td>
</tr>
<tr>
  <td><code>provisioningNetworkCIDR</code></td>
  <td><code>172.22.0.0/24</code></td>
  <td>The CIDR for the network to use for provisioning. When not using the default address range on the provisioning network, you must set this configuration parameter.</td>
</tr>
<tr>
  <td><code>clusterProvisioningIP</code></td>
  <td>The third IP address of the <code>provisioningNetworkCIDR</code>.</td>
  <td>The IP address within the cluster where the provisioning services run. Defaults to the third IP address of the provisioning subnet. For example, <code>172.22.0.3</code>.</td>
</tr>
<tr>
  <td><code>bootstrapProvisioningIP</code></td>
  <td>The second IP address of the <code>provisioningNetworkCIDR</code>.</td>
  <td>The IP address on the bootstrap VM where the provisioning services run while the installation program is deploying the control plane nodes. Defaults to the second IP address of the provisioning subnet. For example, <code>172.22.0.2</code> or <code>2620:52:0:1307::2</code>.</td>
</tr>
<tr>
  <td><code>externalBridge</code></td>
  <td><code>baremetal</code></td>
  <td>The name of the bare metal bridge of the hypervisor attached to the bare metal network.</td>
</tr>
<tr>
  <td><code>provisioningBridge</code></td>
  <td><code>provisioning</code></td>
  <td>The name of the provisioning bridge on the <code>provisioner</code> host attached to the provisioning network.</td>
</tr>
<tr>
  <td><code>architecture</code></td>
  <td></td>
  <td>Defines the host architecture for your cluster. Valid values are <code>amd64</code> or <code>arm64</code>.</td>
</tr>
<tr>
  <td><code>defaultMachinePlatform</code></td>
  <td></td>
  <td>The default configuration used for machine pools without a platform configuration.</td>
</tr>
<tr>
  <td><code>bootstrapOSImage</code></td>
  <td></td>
  <td>A URL to override the default operating system image for the bootstrap node. The URL must contain a SHA-256 hash of the image. For example: <code>https://mirror.openshift.com/rhcos-&lt;version&gt;-qemu.qcow2.gz?sha256=&lt;uncompressed_sha256&gt;</code>.</td>
</tr>
<tr>
  <td><code>provisioningNetwork</code></td>
  <td></td>
  <td>The <code>provisioningNetwork</code> parameter determines whether the cluster uses the provisioning network. If it does, the parameter also determines if the cluster manages the network.<br><br><code>Disabled</code>: Set this parameter to <code>Disabled</code> to disable the requirement for a provisioning network. When set to <code>Disabled</code>, you must only use virtual media based provisioning, or install the cluster by using the Assisted Installer. If <code>Disabled</code> and using power management, BMCs must be accessible from the bare metal network. If <code>Disabled</code>, you must provide two IP addresses on the bare metal network for the provisioning services to use.<br><br><code>Managed</code>: Set this parameter to <code>Managed</code>, which is the default, to fully manage the provisioning network, including DHCP, TFTP, and so on.<br><br><code>Unmanaged</code>: Set this parameter to <code>Unmanaged</code> to enable the provisioning network but take care of manual configuration of DHCP. Virtual media provisioning is recommended but PXE is still available if required.</td>
</tr>
<tr>
  <td><code>httpProxy</code></td>
  <td></td>
  <td>Set this parameter to the appropriate HTTP proxy used within your environment.</td>
</tr>
<tr>
  <td><code>httpsProxy</code></td>
  <td></td>
  <td>Set this parameter to the appropriate HTTPS proxy used within your environment.</td>
</tr>
<tr>
  <td><code>noProxy</code></td>
  <td></td>
  <td>Set this parameter to the appropriate list of exclusions for proxy usage within your environment.</td>
</tr>
</tbody>
</table>

## Hosts {id="_hosts"}

The `hosts` parameter is a list of separate bare metal assets used to build the cluster.

**Hosts**

<table>
<thead>
<tr>
  <th>Name</th>
  <th>Default</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>name</code></td>
  <td></td>
  <td>The name of the <code>BareMetalHost</code> resource to associate with the details. For example, <code>openshift-master-0</code>.</td>
</tr>
<tr>
  <td><code>role</code></td>
  <td></td>
  <td>The role of the bare metal node. Either <code>master</code> (control plane node) or <code>worker</code> (compute node).</td>
</tr>
<tr>
  <td><code>bmc</code></td>
  <td></td>
  <td>Connection details for the baseboard management controller. See the BMC addressing section for additional details.</td>
</tr>
<tr>
  <td><pre>bmc:&#10;    address:</pre></td>
  <td></td>
  <td>The protocol and address of the BMC as a URL.</td>
</tr>
<tr>
  <td><pre>bmc:&#10;    username:</pre></td>
  <td></td>
  <td>The username of the BMC.</td>
</tr>
<tr>
  <td><pre>bmc:&#10;    password:</pre></td>
  <td></td>
  <td>The password of the BMC.</td>
</tr>
<tr>
  <td><pre>bmc:&#10;    disableCertificateVerification:</pre></td>
  <td><code>False</code></td>
  <td><code>redfish</code> and <code>redfish-virtualmedia</code> need this parameter to manage BMC addresses. For {{ product_title }} 4.16 and earlier, the value should be <code>True</code> when using a self-signed certificate. {{ product_title }} supports self-signed certificates with certificate verification when used with the <code>bmcVerifyCA</code> parameter.</td>
</tr>
<tr>
  <td><pre>platform:&#10;  baremetal:&#10;    bmcVerifyCA:</pre></td>
  <td></td>
  <td>A local or self-signed CA certificate that the installation program will use to secure communication with the BMC. If you specify your own CA certificate, ensure that <code>disableCertificateVerification</code> is set to <code>False</code> so that the user-provided CA certificate is validated.</td>
</tr>
<tr>
  <td><code>bootMACAddress</code></td>
  <td></td>
  <td>The MAC address of the NIC that the host uses for the provisioning network. Ironic retrieves the IP address by using the <code>bootMACAddress</code> parameter. Then, it binds to the host.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>You must provide a valid MAC address from the host if you disabled the provisioning network.</dd></dl></td>
</tr>
<tr>
  <td><code>networkConfig</code></td>
  <td></td>
  <td>Set this optional parameter to configure the network interface of a host. See "(Optional) Configuring host network interfaces" for additional details.</td>
</tr>
</tbody>
</table>