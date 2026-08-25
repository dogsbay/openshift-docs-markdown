{% if context == "installation-config-parameters-generic" %}
{%- set generic = true -%}
{% endif %}
{% if context == "installation-config-parameters-vsphere" %}
{%- set vsphere = true -%}
{% endif %}
{% if context == "installation-config-parameters-gcp" %}
{%- set gcp = true -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}
{% if context == "installation-config-parameters-ash" %}
{%- set ash = true -%}
{% endif %}
{% if context == "installation-config-parameters-bare-metal" %}
{%- set bare = true -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-cloud-vpc" %}
{%- set ibm_cloud = true -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-power-vs" %}
{%- set ibm_power_vs = true -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-powervc" %}
{%- set ibm_power_vc = true -%}
{% endif %}
{% if context == "installation-config-parameters-nutanix" %}
{%- set nutanix = true -%}
{% endif %}
{% if context == "installation-config-parameters-openstack" %}
{%- set osp = true -%}
{% endif %}
{% if context == "installation-config-parameters-azure" %}
{%- set azure = true -%}
{% endif %}
{% if context == "installation-config-parameters-aws" %}
{%- set aws = true -%}
{% endif %}
{% if context == "installation-config-parameters-agent" %}
{%- set agent = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{%- if not (agent or generic) %}
# Available installation configuration parameters for {{ platform }} {id="installation-configuration-parameters_{{ context }}"}

To customize your cluster installation, you can use configuration parameters in the `install-config.yaml` file. {._abstract}

The following tables specify the required, optional, and {{ platform }}-specific installation configuration parameters that you can set as part of the installation process.


:::important

After installation, you cannot change these parameters in the `install-config.yaml` file.

:::

{% endif %}

{% if generic %}
# Available installation configuration parameters {id="_available_installation_configuration_parameters"}

To customize your cluster installation, you can use configuration parameters in the `install-config.yaml` file. {._abstract}

The following tables specify the required, network, and optional installation configuration parameters that you can set as part of the installation process.

{% endif %}

{% if agent %}
# Available installation configuration parameters {id="_available_installation_configuration_parameters"}

To customize your cluster installation, you can use configuration parameters in the `install-config.yaml` file. {._abstract}

The following tables specify the required and optional installation configuration parameters that you can set as part of the Agent-based installation process.

These values are specified in the `install-config.yaml` file.


:::important

These settings are used for installation only, and cannot be changed after installation.

:::


{% endif %}

## Required configuration parameters {id="installation-configuration-parameters-required_{{ context }}"}

Required installation configuration parameters are described in the following table:

***Required parameters***

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
  <td>The API version for the <code>install-config.yaml</code> content. The current version is <code>v1</code>. The installation program might also support older API versions.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>baseDomain:</td>
  <td>The base domain of your cloud provider. The base domain is used to create routes to your {{ product_title }} cluster components. The full DNS name for your cluster is a combination of the <code>baseDomain</code> and <code>metadata.name</code> parameter values that uses the <code><metadata.name>.<baseDomain></code> format.<br><br><strong>Value:</strong> A fully-qualified domain or subdomain name, such as <code>example.com</code>.</td>
</tr>
<tr>
  <td>metadata:</td>
  <td>Kubernetes resource <code>ObjectMeta</code>, from which only the <code>name</code> parameter is consumed.<br><br><strong>Value:</strong> Object</td>
</tr>
<tr>
  <td>metadata: name:</td>
  <td>The name of the cluster. DNS records for the cluster are all subdomains of <code>{{.metadata.name}}.{{.baseDomain}}</code>.The cluster name is set to <code>agent-cluster</code> when you do not provide the <code>metadata.name</code> parameter through either the <code>install-config.yaml</code> or <code>agent-config.yaml</code> files. For example, installations that only use ZTP manifests do not provide the <code>metadata.name</code> parameter.<br><br><strong>Value:</strong> String of lowercase letters, hyphens (<code>-</code>), and periods (<code>.</code>), such as <code>dev</code>.<strong>Value:</strong> String of lowercase letters and hyphens (<code>-</code>), such as <code>dev</code>.The string must be 14 characters or fewer long.</td>
</tr>
<tr>
  <td>platform:</td>
  {% if not agent %}<td>The configuration for the specific platform upon which to perform the installation: <code>aws</code>, <code>baremetal</code>, <code>azure</code>, <code>gcp</code>, <code>ibmcloud</code>, <code>nutanix</code>, <code>openstack</code>, <code>powervs</code>, <code>vsphere</code>, or <code>{}</code>. For additional information about <code>platform.<platform></code> parameters, consult the table for your specific platform that follows.</td>{% endif %}
</tr>
<tr>
  {% if agent %}<td>The configuration for the specific platform upon which to perform the installation: <code>baremetal</code>, <code>external</code>, <code>none</code>, <code>vsphere</code>, or <code>nutanix</code>. <strong>Value:</strong> Object</td>{% endif %}
  {% if not openshift_origin %}<td>pullSecret:</td>{% endif %}
  {% if not openshift_origin %}<td>Get a {{ cluster_manager_url_pull }} to authenticate downloading container images for {{ product_title }} components from services such as Quay.io.<br><br><strong>Value:</strong><pre>{&#10;   "auths":{&#10;      "cloud.openshift.com":{&#10;         "auth":"b3Blb=",&#10;         "email":"you@example.com"&#10;      },&#10;      "quay.io":{&#10;         "auth":"b3Blb=",&#10;         "email":"you@example.com"&#10;      }&#10;   }&#10;}</pre></td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: userID:</td>{% endif %}
  {% if ibm_power_vs %}<td>The UserID is the login for the user's {{ ibm_cloud_name }} account.<br><br><strong>Value:</strong> String. For example, <code>existing_user_id</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: powervsResourceGroup:</td>{% endif %}
  {% if ibm_power_vs %}<td>The PowerVSResourceGroup is the resource group in which {{ ibm_power_server_name }} resources are created. If using an existing VPC, the existing VPC and subnets should be in this resource group.<br><br><strong>Value:</strong> String. For example, <code>existing_resource_group</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: region:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies the {{ ibm_cloud_name }} region where the cluster is created.<br><br><strong>Value:</strong> String. For example, <code>existing_region</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: zone:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies the {{ ibm_cloud_name }} colo region where the cluster is created.<br><br><strong>Value:</strong> String. For example, <code>existing_zone</code>.</td>{% endif %}
</tr>
</tbody>
</table>

{% if ibm_power_vc %}
## Additional {{ ibm_power_vc_name }} configuration parameters {id="installation-configuration-parameters-additional-powervc_{{ context }}"}

Additional {{ ibm_power_vc_name }} configuration parameters are described in the following table:

***Additional {{ ibm_power_vc_name }} parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>platform: powervc: cloud:</td>
  <td>The name of the {{ ibm_power_vc_name }} cloud to use from the list of clouds in the <code>clouds.yaml</code> file.<br><br>In the cloud configuration in the <code>clouds.yaml</code> file, if possible, use application credentials rather than a user name and password combination. Using application credentials avoids disruptions from secret propagation that follow user name and password rotation.<br><br><strong>Value:</strong> String, for example <code>MyCloud</code>.</td>
</tr>
</tbody>
</table>

## Optional {{ ibm_power_vc_name }} configuration parameters {id="installation-configuration-parameters-optional-ibm-power-vc_{{ context }}"}

Optional {{ ibm_power_vc_name }} configuration parameters are described in the following table:

***Optional {{ ibm_power_vc_name }} parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>compute: platform: powervc: zones:</td>
  <td>{{ ibm_power_vc_name }} Compute availability zones to install machines on. If this parameter is not set, the installation program relies on the default settings that the {{ ibm_power_vc_name }} administrator configured.<br><br><strong>Value:</strong> A list of strings. For example, <code>["zone-1", "zone-2"]</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: powervc: zones:</td>
  <td>{{ ibm_power_vc_name }} Compute availability zones to install machines on. If this parameter is not set, the installation program relies on the default settings that the {{ ibm_power_vc_name }} administrator configured.<br><br><strong>Value:</strong> A list of strings. For example, <code>["zone-1", "zone-2"]</code>.</td>
</tr>
<tr>
  <td>platform: powervc: clusterOSImage:</td>
  <td>The name of the existing {{ ibm_power_vc_name }} image.<br><br><strong>Value:</strong> the name of an existing {{ ibm_power_vc_name }} image, for example <code>my-rhcos</code>.</td>
</tr>
<tr>
  <td>platform: powervc: controlPlanePort: fixedIPs:</td>
  <td>Subnets for the machines to use.<br><br><strong>Value:</strong> A list of subnet names or UUIDs to use in cluster installation.</td>
</tr>
<tr>
  <td>platform: powervc: controlPlanePort: network:</td>
  <td>A network for the machines to use.<br><br><strong>Value:</strong> The UUID or name of an {{ ibm_power_vc_name }} network to use in cluster installation.</td>
</tr>
<tr>
  <td>platform: powervc: defaultMachinePlatform:</td>
  <td>The default machine pool platform configuration.<br><br><strong>Value:</strong><pre>{&#10;   "type": "my-compute-template",&#10;}</pre></td>
</tr>
<tr>
  <td>platform: powervc: externalDNS:</td>
  <td>IP addresses for external DNS servers that cluster instances use for DNS resolution.<br><br><strong>Value:</strong> A list of IP addresses as strings. For example, <code>["8.8.8.8", "192.168.1.12"]</code>.</td>
</tr>
<tr>
  <td>platform: powervc: loadbalancer:</td>
  <td>Whether or not to use the default, internal load balancer. If the value is set to <code>UserManaged</code>, this default load balancer is disabled so that you can deploy a cluster that uses an external, user-managed load balancer. If the parameter is not set, or if the value is <code>OpenShiftManagedDefault</code>, the cluster uses the default load balancer.<br><br><strong>Value:</strong> <code>UserManaged</code> or <code>OpenShiftManagedDefault</code>.</td>
</tr>
<tr>
  <td>platform: powervc: apiVIPs:</td>
  <td>Virtual IP (VIP) addresses that you configured for control plane API access.<br><br><strong>Value:</strong> A list of IP addresses as strings. For example, <code>["10.0.0.30", "10.0.0.31"]</code></td>
</tr>
<tr>
  <td>platform: powervc: ingressVIPs:</td>
  <td>Virtual IP (VIP) addresses that you configured for cluster ingress.<br><br><strong>Value:</strong> A list of IP addresses as strings. For example, <code>["10.0.0.32", "10.0.0.33"]</code></td>
</tr>
</tbody>
</table>

{% endif %}

## Network configuration parameters {id="installation-configuration-parameters-network_{{ context }}"}

You can customize your installation configuration based on the requirements of your existing network infrastructure. For example, you can expand the IP address block for the cluster network or configure different IP address blocks than the defaults.

{% if not (agent or aws or bare or ibm_power or ibm_z or vsphere or osp) %}
Only IPv4 addresses are supported.
{% endif %}

{% if agent or aws or bare or ibm_power or ibm_z or vsphere or osp %}
Consider the following information before you configure network parameters for your cluster:

*   If you use the {{ openshift_networking }} OVN-Kubernetes network plugin, both IPv4 and IPv6 address families are supported.
*   If you deployed nodes in an {{ product_title }} cluster with a network that supports both IPv4 and non-link-local IPv6 addresses, configure your cluster to use a dual-stack network.
    *   For clusters configured for dual-stack networking, both IPv4 and IPv6 traffic must use the same network interface as the default gateway. This ensures that in a multiple network interface controller (NIC) environment, a cluster can detect what NIC to use based on the available network interface. For more information, see "OVN-Kubernetes IPv6 and dual-stack limitations" in _About the OVN-Kubernetes network plugin_.
    *   To prevent network connectivity issues, do not install a single-stack IPv4 cluster on a host that supports dual-stack networking.

{% if ibm_cloud %}

:::note

{{ ibm_cloud_name }} does not support IPv6 address families.

:::

{% endif %}

{% if vsphere %}

:::note

On {{ vmw_first }}, dual-stack networking can specify either IPv4 or IPv6 as the primary address family.

:::

{% endif %}

If you configure your cluster to use both IP address families, review the following requirements:

*   Both IP families must use the same network interface for the default gateway.
*   Both IP families must have the default gateway.
*   You must specify IPv4 and IPv6 addresses in the same order for all network configuration parameters. For example, in the following configuration, IPv4 addresses are listed before IPv6 addresses:
    ```yaml
    networking:
      clusterNetwork:
      - cidr: 10.128.0.0/14
        hostPrefix: 23
      - cidr: fd00:10:128::/56
        hostPrefix: 64
      serviceNetwork:
      - 172.30.0.0/16
      - fd00:172:16::/112
    ```

    If you are installing your cluster on {{ aws_short }}, the order of address families must match the `platform.aws.ipFamily` parameter. For example, if you specified the `DualStackIPv6Primary` parameter, you must list the IPv6 address first.

{% endif %}

{% if osp %}

:::note

Globalnet is not supported with {{ rh_storage_first }} disaster recovery solutions. For regional disaster recovery scenarios, ensure that you use a non-overlapping range of private IP addresses for the cluster and service networks in each cluster.

:::

{% endif %}

***Network parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>networking:</td>
  <td>The configuration for the cluster network.<br><br><strong>Value:</strong> Object<br><br><dl><dt>Note</dt><dd>You cannot change parameters specified by the <code>networking</code> object after installation.</dd></dl></td>
</tr>
<tr>
  <td>networking: networkType:</td>
  <td>The {{ openshift_networking }} network plugin to install.<br><br><strong>Value:</strong><code>OVNKubernetes</code>.<code>OVNKubernetes</code>. <code>OVNKubernetes</code> is a Container Network Interface (CNI) plugin for Linux networks and hybrid networks that contain both Linux and Windows servers. The default value is <code>OVNKubernetes</code>.The default value is <code>OVNKubernetes</code>.</td>
</tr>
<tr>
  <td>networking: clusterNetwork:</td>
  <td>The IP address blocks for pods.<br><br>The default value is <code>10.128.0.0/14</code> with a host prefix of <code>/23</code>.<br><br>If you specify multiple IP address blocks, the blocks must not overlap.<br><br><strong>Value:</strong> An array of objects. For example:<br><br><pre>networking:&#10;  clusterNetwork:&#10;  - cidr: 10.128.0.0/14&#10;    hostPrefix: 23&#10;networking:&#10;  clusterNetwork:&#10;  - cidr: 10.128.0.0/14&#10;    hostPrefix: 23&#10;  - cidr: fd01::/48&#10;    hostPrefix: 64</pre></td>
</tr>
<tr>
  <td>networking: clusterNetwork: cidr:</td>
  <td>Required if you use <code>networking.clusterNetwork</code>. An IP address block.<br><br>An IPv4 network.<br><br>If you use the OVN-Kubernetes network plugin, you can specify IPv4 and IPv6 networks.<br><br><strong>Value:</strong> An IP address block in Classless Inter-Domain Routing (CIDR) notation. The prefix length for an IPv4 block is between <code>0</code> and <code>32</code>.The prefix length for an IPv6 block is between <code>0</code> and <code>128</code>. For example, <code>10.128.0.0/14</code> or <code>fd01::/48</code>.</td>
</tr>
<tr>
  <td>networking: clusterNetwork: hostPrefix:</td>
  <td>The subnet prefix length to assign to each individual node. For example, if <code>hostPrefix</code> is set to <code>23</code> then each node is assigned a <code>/23</code> subnet out of the given <code>cidr</code>. A <code>hostPrefix</code> value of <code>23</code> provides 510 (2^(32 - 23) - 2) pod IP addresses.<br><br><strong>Value:</strong> A subnet prefix.<br><br>The default value is <code>23</code>.<br><br>For an IPv4 network the default value is <code>23</code>. For an IPv6 network <code>hostPrefix</code> must be set to <code>64</code>, which is the default value.</td>
</tr>
<tr>
  <td>networking: serviceNetwork:</td>
  <td>The IP address block for services. The default value is <code>172.30.0.0/16</code>.<br><br>If you use the OVN-Kubernetes network plugin, you can specify an IP address block for both of the IPv4 and IPv6 address families.<br><br><strong>Value:</strong> An array with an IP address block in CIDR format. For example:<br><br><pre>networking:&#10;  serviceNetwork:&#10;   - 172.30.0.0/16&#10;networking:&#10;  serviceNetwork:&#10;   - 172.30.0.0/16&#10;   - fd02::/112</pre></td>
</tr>
<tr>
  <td>networking: machineNetwork:</td>
  <td>The IP address blocks for machines.<br><br>If you specify multiple IP address blocks, the blocks must not overlap.<br><br>If you specify multiple IP kernel arguments, the <code>machineNetwork.cidr</code> value must be the CIDR of the primary network.<br><br><strong>Value:</strong> An array of objects. For example:<br><br><pre>networking:&#10;  machineNetwork:&#10;  - cidr: 10.0.0.0/16</pre></td>
</tr>
<tr>
  <td>networking: machineNetwork: cidr:</td>
  <td>Required if you use <code>networking.machineNetwork</code>. An IP address block. The default value is <code>10.0.0.0/16</code> for all platforms other than libvirt and {{ ibm_power_server_name }}. For libvirt, the default value is <code>192.168.126.0/24</code>. For {{ ibm_power_server_name }}, the default value is <code>192.168.0.0/24</code>.<br><br>If you are deploying the cluster to an existing Virtual Private Cloud (VPC), the CIDR must contain the subnets defined in <code>platform.ibmcloud.controlPlaneSubnets</code> and <code>platform.ibmcloud.computeSubnets</code>.<br><br><strong>Value:</strong> An IP network block in CIDR notation.<br><br>For example, <code>10.0.0.0/16</code>.For example, <code>10.0.0.0/16</code> or <code>fd00::/48</code>.For example, <code>192.168.0.0/24</code>.<br><br><dl><dt>Note</dt><dd>Set the <code>networking.machineNetwork</code> to match the CIDR that the preferred NIC resides in.<br><br>If you are installing a cluster on {{ aws_short }} with dual-stack networking, consider the following distinction:<br><br><ul><li>If the installation program creates the VPC, do not specify an IPv6 entry in <code>networking.machineNetwork</code>. The installation program will assign an IPv6 address to the VPC.</li><li>If you provide existing dual-stack subnets using the <code>platform.aws.vpc.subnets</code> parameter, you must specify IPv6 entries corresponding to either the VPC CIDR or the CIDR of the subnets.</li><li>In both cases, you must provide an IPv4 CIDR entry.</li></ul></dd></dl></td>
</tr>
<tr>
  <td>networking: ovnKubernetesConfig: ipv4: internalJoinSubnet:</td>
  <td>Configures the IPv4 join subnet that is used internally by <code>ovn-kubernetes</code>. This subnet must not overlap with any other subnet that {{ product_title }} is using, including the node network. The size of the subnet must be larger than the number of nodes. You cannot change the value after installation.<br><br><strong>Value:</strong> An IP network block in CIDR notation. The default value is <code>100.64.0.0/16</code>.</td>
</tr>
</tbody>
</table>

## Optional configuration parameters {id="installation-configuration-parameters-optional_{{ context }}"}

Optional installation configuration parameters are described in the following table:

***Optional parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>additionalTrustBundle:</td>
  <td>A PEM-encoded X.509 certificate bundle that is added to the nodes' trusted certificate store. This trust bundle might also be used when a proxy has been configured.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>capabilities:</td>
  <td>Controls the installation of optional core cluster components. You can reduce the footprint of your {{ product_title }} cluster by disabling optional components. For more information, see the "Cluster capabilities" page in <em>Installing</em>.<br><br><strong>Value:</strong> String array</td>
</tr>
<tr>
  <td>capabilities: baselineCapabilitySet:</td>
  <td>Selects an initial set of optional capabilities to enable. Valid values are <code>None</code>, <code>v4.11</code>, <code>v4.12</code> and <code>vCurrent</code>. The default value is <code>vCurrent</code>.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>capabilities: additionalEnabledCapabilities:</td>
  <td>Extends the set of optional capabilities beyond what you specify in <code>baselineCapabilitySet</code>. You can specify multiple capabilities in this parameter.<br><br><strong>Value:</strong> String array</td>
</tr>
<tr>
  <td>cpuPartitioningMode:</td>
  <td>Enables workload partitioning, which isolates {{ product_title }} services, cluster management workloads, and infrastructure pods to run on a reserved set of CPUs. You can only enable workload partitioning during installation. You cannot disable it after installation. While this field enables workload partitioning, it does not configure workloads to use specific CPUs. For more information, see the <em>Workload partitioning</em> page in the <em>Scalability and Performance</em> section.<br><br><strong>Value:</strong> <code>None</code> or <code>AllNodes</code>. <code>None</code> is the default value.</td>
</tr>
<tr>
  <td>compute:</td>
  <td>The configuration for the machines that comprise the compute nodes.<br><br><strong>Value:</strong> Array of <code>MachinePool</code> objects.</td>
</tr>
<tr>
  {% if not openshift_origin %}{% if not (agent or aws or bare or gcp or ibm_power or ibm_z or azure or ibm_power_vs) %}<td>compute: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if not (agent or aws or bare or gcp or ibm_power or ibm_z or azure or ibm_power_vs) %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. Valid values are <code>amd64</code> (the default).<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if aws or azure or gcp or bare %}<td>compute: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if aws or azure or gcp or bare %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. Valid values are <code>amd64</code> and <code>arm64</code>.<br><br>Not all installation options support the 64-bit ARM architecture. To verify if your installation option is supported on your platform, see <em>Supported installation methods for different platforms</em> in <em>Selecting a cluster installation method and preparing it for users</em>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if ibm_z %}<td>compute: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if ibm_z %}<td>Determines the instruction set architecture of the machines in the pool. Currently, heterogeneous clusters are not supported, so all pools must specify the same architecture. The valid value is the default: <code>s390x</code>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if ibm_power or ibm_power_vs %}<td>compute: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if ibm_power or ibm_power_vs %}<td>Determines the instruction set architecture of the machines in the pool. Currently, heterogeneous clusters are not supported, so all pools must specify the same architecture. The valid value is the default: <code>ppc64le</code>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if agent %}<td>compute: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if agent %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. Valid values are <code>amd64</code>, <code>arm64</code>, <code>ppc64le</code>, and <code>s390x</code>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if openshift_origin %}<td>compute: architecture:</td>{% endif %}
  {% if openshift_origin %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. The valid value is the default: <code>amd64</code>.<br><br>See <em>Supported installation methods for different platforms</em> in <em>Installing</em> documentation for information about instance availability.<br><br><strong>Value:</strong> String</td>{% endif %}
</tr>
<tr>
  {% if not vsphere %}<td>compute: hyperthreading:</td>{% endif %}
  {% if not vsphere %}<td>Whether to enable or disable simultaneous multithreading, or <code>hyperthreading</code>, on compute machines. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores.<br><br><dl><dt>Important</dt><dd>If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance.</dd></dl><br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code></td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>compute: smtLevel:</td>{% endif %}
  {% if ibm_power_vs %}<td>The SMTLevel specifies the level of SMT to set to the control plane and compute machines. Valid values are <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>off</code>, and <code>on</code>.<br><br><strong>Value:</strong> String</td>{% endif %}
</tr>
<tr>
  <td>compute: name:</td>
  <td>Required if you use <code>compute</code>. The name of the machine pool.<br><br><strong>Value:</strong> <code>worker</code></td>
</tr>
<tr>
  <td>compute: platform:</td>
  <td>Required if you use <code>compute</code>. Use this parameter to specify the cloud provider to host the worker machines. This parameter value must match the <code>controlPlane.platform</code> parameter value.<br><br>Example usage, <code>compute.platform.powervs.sysType</code>.</td>
</tr>
<tr>
  {% if ibm_power_vs %}<td>compute: platform: powervs: sysType:</td>{% endif %}
  {% if ibm_power_vs %}<td>Defines the system type for the instance.<br><br><strong>Value:</strong> The available system types depend on the zone you want to target. Supported values are <code>e980</code>, <code>s922</code>, <code>e1080</code>, or <code>s1022</code>.<br><br><strong>Value:</strong><code>aws</code>, <code>azure</code>, <code>gcp</code>, <code>ibmcloud</code>, <code>nutanix</code>, <code>openstack</code>, <code>powervs</code>, <code>vsphere</code>, or <code>{}</code><code>baremetal</code>, <code>vsphere</code>, or <code>{}</code></td>{% endif %}
</tr>
<tr>
  <td>compute: replicas:</td>
  <td>The number of compute machines, which are also known as worker machines, to provision.<br><br><strong>Value:</strong> A positive integer greater than or equal to <code>2</code>. The default value is <code>3</code>.</td>
</tr>
<tr>
  <td>featureSet:</td>
  <td>Enables the cluster for a feature set. A feature set is a collection of {{ product_title }} features that are not enabled by default. For more information about enabling a feature set during installation, see "Enabling features using feature gates".<br><br><strong>Value:</strong> String. The name of the feature set to enable, such as <code>TechPreviewNoUpgrade</code>.</td>
</tr>
<tr>
  <td>controlPlane:</td>
  <td>The configuration for the machines that form the control plane.<br><br><strong>Value:</strong> Array of <code>MachinePool</code> objects.</td>
</tr>
<tr>
  {% if not openshift_origin %}{% if not (agent or aws or bare or gcp or ibm_z or ibm_power or azure or ibm_power_vs) %}<td>controlPlane: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if not (agent or aws or bare or gcp or ibm_z or ibm_power or azure or ibm_power_vs) %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. Valid values are <code>amd64</code> (the default).<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if aws or azure or gcp or bare %}<td>controlPlane: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if aws or azure or gcp or bare %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. Valid values are <code>amd64</code> and <code>arm64</code>.<br><br>Not all installation options support the 64-bit ARM architecture. To verify if your installation option is supported on your platform, see <em>Supported installation methods for different platforms</em> in <em>Selecting a cluster installation method and preparing it for users</em>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if ibm_z %}<td>controlPlane: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if ibm_z %}<td>Determines the instruction set architecture of the machines in the pool. Currently, heterogeneous clusters are not supported, so all pools must specify the same architecture. The valid value is the default: <code>s390x</code>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if ibm_power or ibm_power_vc or ibm_power_vs %}<td>controlPlane: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if ibm_power or ibm_power_vc or ibm_power_vs %}<td>Determines the instruction set architecture of the machines in the pool. Currently, heterogeneous clusters are not supported, so all pools must specify the same architecture. The valid value is the default: <code>ppc64le</code>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if not openshift_origin %}{% if agent %}<td>controlPlane: architecture:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if agent %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. Valid values are <code>amd64</code>, <code>arm64</code>, <code>ppc64le</code>, and <code>s390x</code>.<br><br><strong>Value:</strong> String</td>{% endif %}{% endif %}
</tr>
<tr>
  {% if openshift_origin %}<td>controlPlane: architecture:</td>{% endif %}
  {% if openshift_origin %}<td>Determines the instruction set architecture of the machines in the pool. Currently, clusters with varied architectures are not supported. All pools must specify the same architecture. The valid value is <code>amd64</code>.<br><br>See <em>Supported installation methods for different platforms</em> in <em>Installing</em> documentation for information about instance availability.<br><br><strong>Value:</strong> String</td>{% endif %}
</tr>
<tr>
  {% if not vsphere %}<td>controlPlane: hyperthreading:</td>{% endif %}
  {% if not vsphere %}<td>Whether to enable or disable simultaneous multithreading, or <code>hyperthreading</code>, on control plane machines. By default, simultaneous multithreading is enabled to increase the performance of your machines' cores.<br><br><dl><dt>Important</dt><dd>If you disable simultaneous multithreading, ensure that your capacity planning accounts for the dramatically decreased machine performance.</dd></dl><br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code></td>{% endif %}
</tr>
<tr>
  <td>controlPlane: name:</td>
  <td>Required if you use <code>controlPlane</code>. The name of the machine pool.<br><br><strong>Value:</strong> <code>master</code></td>
</tr>
<tr>
  <td>controlPlane: platform:</td>
  <td>Required if you use <code>controlPlane</code>. Use this parameter to specify the cloud provider that hosts the control plane machines. This parameter value must match the <code>compute.platform</code> parameter value.<br><br>Example usage, <code>controlPlane.platform.powervs.processors</code>.</td>
</tr>
<tr>
  {% if ibm_power_vs %}<td>controlPlane: platform: powervs: sysType:</td>{% endif %}
  {% if ibm_power_vs %}<td>Defines the system type for the instance.<br><br><strong>Value:</strong> The available system types depend on the zone you want to target. Supported values are <code>e980</code>, <code>s922</code>, <code>e1080</code>, or <code>s1022</code>.<br><br><strong>Value:</strong><code>aws</code>, <code>azure</code>, <code>gcp</code>, <code>ibmcloud</code>, <code>nutanix</code>, <code>openstack</code>, <code>powervs</code>, <code>vsphere</code>, or <code>{}</code><code>baremetal</code>, <code>vsphere</code>, or <code>{}</code></td>{% endif %}
</tr>
<tr>
  <td>controlPlane: replicas:</td>
  <td>The number of control plane machines to provision.<br><br><strong>Value:</strong>Supported values are <code>3</code>, or <code>1</code> when deploying {{ sno }}.Supported values are <code>3</code>, <code>4</code>, <code>5</code>, or <code>1</code> when deploying {{ sno }}.</td>
</tr>
<tr>
  <td>arbiter: name:</td>
  <td>The {{ product_title }} cluster requires a name for arbiter nodes. For example, <code>arbiter</code>.</td>
</tr>
<tr>
  <td>arbiter: replicas:</td>
  <td>The <code>replicas</code> parameter sets the number of arbiter nodes for the {{ product_title }} cluster. You cannot set this field to a value that is greater than 1.</td>
</tr>
<tr>
  <td>credentialsMode:</td>
  <td>The Cloud Credential Operator (CCO) mode. If no mode is specified, the CCO dynamically tries to determine the capabilities of the provided credentials, with a preference for mint mode on the platforms where multiple modes are supported.<br><br><dl><dt>Note</dt><dd>Not all CCO modes are supported for all cloud providers. For more information about CCO modes, see the "Managing cloud provider credentials" entry in the <em>Authentication and authorization</em> content.</dd></dl><br><br><strong>Value:</strong> <code>Mint</code>, <code>Passthrough</code>, <code>Manual</code> or an empty string (<code>""</code>).</td>
</tr>
<tr>
  {% if not (openshift_origin or ibm_power_vs) %}<td>fips:</td>{% endif %}
  {% if not (openshift_origin or ibm_power_vs) %}<td>Enable or disable FIPS mode. The default is <code>false</code> (disabled). If you enable FIPS mode, the {{ op_system_first }} machines that {{ product_title }} runs on bypass the default Kubernetes cryptography suite and use the cryptography modules that {{ op_system }} provides instead.<br><br>{% include "./snippets/fips-snippet.md" %}<br><br><dl><dt>Important</dt><dd>If you are using Azure File storage, you cannot enable FIPS mode.</dd></dl><br><br><strong>Value:</strong> <code>false</code> or <code>true</code></td>{% endif %}
</tr>
<tr>
  {% if not (openshift_origin or ibm_power_vs) %}<td>endpoint: name: <endpoint_name> clusterUseOnly: <code>true</code> or <code>false</code></td>{% endif %}
  {% if not (openshift_origin or ibm_power_vs) %}<td>The <code>name</code> parameter contains the name of the Private Service Connect (PSC) endpoints.<br><br><dl><dt>Important</dt><dd>When <code>clusterUseOnly</code> is <code>false</code>, its default setting, you must run the installation program from a bastion host that is within the same VPC where you want to deploy the cluster.</dd></dl><br><br>When you want the installation program to use the public API endpoints and cluster Operators to use the API endpoint overrides, set <code>clusterUseOnly</code> to <code>true</code>. When you want both the installation program and the cluster Operators to use the API endpoint overrides, for example if you are running the installation program from a bastion host that is within the same VPC where you want to deploy the cluster, set <code>clusterUseOnly</code> to <code>false</code> . The parameter is optional and defaults to <code>false</code>.<br><br><strong>Value:</strong> String or boolean</td>{% endif %}
</tr>
<tr>
  <td>imageContentSources:</td>
  <td>Sources and repositories for the release-image content.<br><br><strong>Value:</strong> Array of objects. Includes a <code>source</code> and, optionally, <code>mirrors</code>, as described in the following rows of this table.</td>
</tr>
<tr>
  <td>imageContentSources: source:</td>
  <td>Required if you use <code>imageContentSources</code>. Specify the repository that users refer to, for example, in image pull specifications.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>imageContentSources: mirrors:</td>
  <td>Specify one or more repositories that might also contain the same images.<br><br><strong>Value:</strong> Array of strings</td>
</tr>
<tr>
  <td>osImageStream:</td>
  <td>Specifies the image stream that will be used for all machines in the cluster. <code>osImageStream</code> is a Technology Preview feature. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.<br><br><strong>Value:</strong> String. Valid values are <code>rhel-9</code> or <code>rhel-10</code>.</td>
</tr>
<tr>
  {% if not openshift_origin %}{% if aws %}<td>platform: aws: lbType:</td>{% endif %}{% endif %}
  {% if not openshift_origin %}{% if aws %}<td>Required to set the NLB load balancer type in {{ aws_short }}. Valid values are <code>Classic</code> or <code>NLB</code>. If no value is specified, the installation program defaults to <code>Classic</code>. The installation program sets the value provided here in the ingress cluster configuration object. If you do not specify a load balancer type for other Ingress Controllers, they use the type set in this parameter.<br><br>If you installed your cluster using the <code>DualStackIPv4Primary</code> or <code>DualStackIPv6Primary</code> values for the <code>platform.aws.ipFamily</code> parameter, any services that have IPv6 addresses must use the NLB load balancer type. The classic load balancer (CLB) does not support IPv6.<br><br><strong>Value:</strong> <code>Classic</code> or <code>NLB</code>. If you do not set the <code>platform.aws.ipFamily</code> parameter or set it to <code>IPv4</code>, the default value is <code>Classic</code>. If you set the <code>platform.aws.ipFamily</code> parameter to <code>DualStackIPv4Primary</code> or <code>DualStackIPv6Primary</code>, the default value is <code>NLB</code>.</td>{% endif %}{% endif %}
</tr>
<tr>
  <td>publish:</td>
  <td>How to publish or expose the user-facing endpoints of your cluster, such as the Kubernetes API, OpenShift routes.<br><br><strong>Value:</strong><code>Internal</code> or <code>External</code>. To deploy a private cluster that cannot be accessed from the internet, set the <code>publish</code> parameter to <code>Internal</code>. The default value is <code>External</code>.<code>Internal</code>, <code>External</code>, or <code>Mixed</code>. To deploy a private cluster that cannot be accessed from the internet, set the <code>publish</code> parameter to <code>Internal</code>. The default value is <code>External</code>. To deploy a cluster where the API and the ingress server have different publishing strategies, set <code>publish</code> to <code>Mixed</code> and use the <code>operatorPublishingStrategy</code> parameter.<code>Internal</code> or <code>External</code>. The default value is <code>External</code>.<br><br>Setting this field to <code>Internal</code> is not supported on non-cloud platforms.</td>
</tr>
<tr>
  <td>sshKey:</td>
  <td>The SSH key to authenticate access to your cluster machines.<br><br><dl><dt>Note</dt><dd>For production {{ product_title }} clusters on which you want to perform installation debugging or disaster recovery, specify an SSH key that your <code>ssh-agent</code> process uses.</dd></dl><br><br><strong>Value:</strong> For example, <code>sshKey: ssh-ed25519 AAAA..</code>.</td>
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: vpcRegion:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies the {{ ibm_cloud_name }} region in which to create VPC resources.<br><br><strong>Value:</strong> String. For example, <code>existing_vpc_region</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: vpcSubnets:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies existing subnets by name where cluster resources are created.<br><br><strong>Value:</strong> String. For example, <code>powervs_region_example_subnet</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: vpcName:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies the {{ ibm_cloud_name }} name.<br><br><strong>Value:</strong> String. For example, <code>existing_vpcName</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: serviceInstanceGUID:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies the ID of the Power IAAS instance created from the {{ ibm_cloud_name }} Catalog.<br><br><strong>Value:</strong> String. For example, <code>existing_service_instance_GUID</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: clusterOSImage:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies a pre-created {{ ibm_power_server_name }} boot image that overrides the default image for cluster nodes.<br><br><strong>Value:</strong> String. For example, <code>existing_cluster_os_image</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: defaultMachinePlatform:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies the default configuration used when installing on {{ ibm_power_server_name }} for machine pools that do not define their own platform configuration.<br><br><strong>Value:</strong> String. For example, <code>existing_machine_platform</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: memoryGiB:</td>{% endif %}
  {% if ibm_power_vs %}<td>Specifies the size of a virtual machine's memory, in GB.<br><br><strong>Value:</strong> The valid integer must be an integer number of GB that is at least <code>2</code> and no more than <code>64</code>, depending on the machine type.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: procType:</td>{% endif %}
  {% if ibm_power_vs %}<td>Defines the processor sharing model for the instance.<br><br><strong>Value:</strong> The valid values are <code>Capped</code>, <code>Dedicated</code>, and <code>Shared</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: processors:</td>{% endif %}
  {% if ibm_power_vs %}<td>Defines the processing units for the instance.<br><br><strong>Value:</strong> The number of processors must be from <code>.5</code> to <code>32</code> cores. The processors must be in increments of <code>.25</code>.</td>{% endif %}
</tr>
<tr>
  {% if ibm_power_vs %}<td>platform: powervs: tgName:</td>{% endif %}
  {% if ibm_power_vs %}<td>Defines the name of an existing Transit Gateway.<br><br><strong>Value:</strong> String. For example, <code>existing_tgName</code>.</td>{% endif %}
</tr>
</tbody>
</table>

{% if aws or gcp %}


:::note

{% if aws %}
If your AWS account has service control policies (SCP) enabled, you must configure the `credentialsMode` parameter to `Mint`, `Passthrough`, or `Manual`.
{% endif %}
{% if gcp %}
If you are installing on {{ gcp_short }} into a shared virtual private cloud (VPC), `credentialsMode` must be set to `Passthrough` or `Manual`.
{% endif %}

:::

{% endif %}
{% if aws or gcp or azure %}


:::important

Setting this parameter to `Manual` enables alternatives to storing administrator-level secrets in the `kube-system` project, which require additional configuration steps. For more information, see "Alternatives to storing administrator-level secrets in the kube-system project".

:::

{% endif %}

{% if aws %}
## Optional AWS configuration parameters {id="installation-configuration-parameters-optional-aws_{{ context }}"}

Optional AWS configuration parameters are described in the following table:

***Optional AWS parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>compute: platform: aws: amiID:</td>
  <td>The AWS AMI used to boot compute machines for the cluster. This is required for regions that require a custom {{ op_system }} AMI.<br><br><strong>Value:</strong> Any published or custom {{ op_system }} AMI that belongs to the set AWS region. See _{{ op_system }} AMIs for AWS infrastructure_ for available AMI IDs.</td>
</tr>
<tr>
  <td>compute: platform: aws: iamProfile:</td>
  <td>The name of the IAM instance profile that you use for the machine. If you want the installation program to create the IAM instance profile for you, do not use the <code>iamProfile</code> parameter. You can specify either the <code>iamProfile</code> or <code>iamRole</code> parameter, but you cannot specify both.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: aws: iamRole:</td>
  <td>The name of the IAM instance role that you use for the machine. When you specify an IAM role, the installation program creates an instance profile. If you want the installation program to create the IAM instance role for you, do not select the <code>iamRole</code> parameter. You can specify either the <code>iamRole</code> or <code>iamProfile</code> parameter, but you cannot specify both.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: aws: rootVolume: iops:</td>
  <td>The Input/Output Operations Per Second (IOPS) that is reserved for the root volume.<br><br><strong>Value:</strong> Integer, for example <code>4000</code>.</td>
</tr>
<tr>
  <td>compute: platform: aws: rootVolume: size:</td>
  <td>The size in GiB of the root volume.<br><br><strong>Value:</strong> Integer, for example <code>500</code>.</td>
</tr>
<tr>
  <td>compute: platform: aws: rootVolume: type:</td>
  <td>The type of the root volume.<br><br><strong>Value:</strong> Valid <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">AWS EBS volume type</a>, such as <code>io1</code>.</td>
</tr>
<tr>
  <td>compute: platform: aws: rootVolume: throughput:</td>
  <td>The maximum throughput of the root volume. This throughput can be customized only for the gp3 volume type. The minimum value is 125 MiB/s and the maximum value is 2000 MiB/s.<br><br><strong>Value:</strong> Integer, for example <code>1000</code>.</td>
</tr>
<tr>
  <td>compute: platform: aws: rootVolume: kmsKeyARN:</td>
  <td>The Amazon Resource Name (key ARN) of a KMS key. This is required to encrypt operating system volumes of worker nodes with a specific KMS key.<br><br><strong>Value:</strong> Valid <a href="https://docs.aws.amazon.com/kms/latest/developerguide/find-cmk-id-arn.html">key ID or the key ARN</a>.</td>
</tr>
<tr>
  <td>compute: platform: aws: type:</td>
  <td>The EC2 instance type for the compute machines.<br><br><strong>Value:</strong> Valid {{ aws_short }} instance type, such as <code>m4.2xlarge</code>. See the "Tested instance types for AWS" table on the "Installing a cluster on AWS with customizations" page.</td>
</tr>
<tr>
  <td>compute: platform: aws: zones:</td>
  <td>The availability zones where the installation program creates machines for the compute machine pool. If you provide your own VPC, you must provide a subnet in that availability zone.<br><br><strong>Value:</strong> A list of valid AWS availability zones, such as <code>us-east-1c</code>, in a <a href="https://yaml.org/spec/1.2/spec.html#sequence//">YAML sequence</a>.</td>
</tr>
<tr>
  <td>compute: platform: aws: hostPlacement: affinity:</td>
  <td>Specifies the affinity setting for placing compute machines on {{ aws_short }} Dedicated Hosts. When set to <code>DedicatedHost</code>, machines are pinned to the specific Dedicated Hosts listed in the <code>dedicatedHost</code> field. If a machine is stopped and restarted, the machine returns to the same physical host. When set to <code>AnyAvailable</code>, machines are not pinned to specific Dedicated Hosts. If a machine is stopped and restarted, {{ aws_short }} can place the machine on any available Dedicated Host that matches the instance type and availability zone.<br><br><dl><dt>Important</dt><dd>{{ aws_short }} Dedicated Host support is a Technology Preview feature only. Technology Preview features are not supported with Red&#160;Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.<br><br>For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl><br><br><strong>Value:</strong> <code>DedicatedHost</code> or <code>AnyAvailable</code>.</td>
</tr>
<tr>
  <td>compute: platform: aws: hostPlacement: dedicatedHost:</td>
  <td>A list of {{ aws_short }} Dedicated Host entries for compute machines. Required when <code>hostPlacement.affinity</code> is set to <code>DedicatedHost</code>. Must be omitted when <code>hostPlacement.affinity</code> is set to <code>AnyAvailable</code>.<br><br><dl><dt>Important</dt><dd>{{ aws_short }} Dedicated Host support is a Technology Preview feature only. Technology Preview features are not supported with Red&#160;Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.<br><br>For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl><br><br><strong>Value:</strong> A list of objects.</td>
</tr>
<tr>
  <td>compute: platform: aws: hostPlacement: dedicatedHost: - id:</td>
  <td>The ID of the {{ aws_short }} Dedicated Host. The value must start with <code>h-</code> followed by 17 lowercase hexadecimal characters.<br><br><dl><dt>Important</dt><dd>{{ aws_short }} Dedicated Host support is a Technology Preview feature only. Technology Preview features are not supported with Red&#160;Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.<br><br>For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl><br><br><strong>Value:</strong> String, for example <code>h-015c6d3ffa1d43d38</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: amiID:</td>
  <td>The AWS AMI used to boot control plane machines for the cluster. This is required for regions that require a custom {{ op_system }} AMI.<br><br><strong>Value:</strong> Any published or custom {{ op_system }} AMI that belongs to the set AWS region. See _{{ op_system }} AMIs for AWS infrastructure_ for available AMI IDs.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: iamProfile:</td>
  <td>The name of the IAM instance profile that you use for the machine. If you want the installation program to create the IAM instance profile for you, do not use the <code>iamProfile</code> parameter. You can specify either the <code>iamProfile</code> or <code>iamRole</code> parameter, but you cannot specify both.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: iamRole:</td>
  <td>The name of the IAM instance role that you use for the machine. When you specify an IAM role, the installation program creates an instance profile. If you want the installation program to create the IAM instance role for you, do not use the <code>iamRole</code> parameter. You can specify either the <code>iamRole</code> or <code>iamProfile</code> parameter, but you cannot specify both.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: rootVolume: iops:</td>
  <td>The Input/Output Operations Per Second (IOPS) that is reserved for the root volume on control plane machines.<br><br><strong>Value:</strong> Integer, for example <code>4000</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: rootVolume: size:</td>
  <td>The size in GiB of the root volume for control plane machines.<br><br><strong>Value:</strong> Integer, for example <code>500</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: rootVolume: type:</td>
  <td>The type of the root volume for control plane machines.<br><br><strong>Value:</strong> Valid <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">AWS EBS volume type</a>, such as <code>io1</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: rootVolume: throughput:</td>
  <td>The maximum throughput of the root volume. This throughput can be customized only for the gp3 volume type. The minimum value is 125 MiB/s and the maximum value is 2000 MiB/s.<br><br><strong>Value:</strong> Integer, for example <code>1000</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: rootVolume: kmsKeyARN:</td>
  <td>The Amazon Resource Name (key ARN) of a KMS key. This is required to encrypt operating system volumes of control plane nodes with a specific KMS key.<br><br><strong>Value:</strong> Valid <a href="https://docs.aws.amazon.com/kms/latest/developerguide/find-cmk-id-arn.html">key ID and the key ARN</a>.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: type:</td>
  <td>The EC2 instance type for the control plane machines.<br><br><strong>Value:</strong> Valid {{ aws_short }} instance type, such as <code>m6i.xlarge</code>. See the "Tested instance types for AWS" table on the "Installing a cluster on AWS with customizations" page.</td>
</tr>
<tr>
  <td>controlPlane: platform: aws: zones:</td>
  <td>The availability zones where the installation program creates machines for the control plane machine pool.<br><br><strong>Value:</strong> A list of valid AWS availability zones, such as <code>us-east-1c</code>, in a <a href="https://yaml.org/spec/1.2/spec.html#sequence//">YAML sequence</a>.</td>
</tr>
<tr>
  <td>platform: aws: amiID:</td>
  <td>The AWS AMI used to boot all machines for the cluster. If set, the AMI must belong to the same region as the cluster. This is required for regions that require a custom {{ op_system }} AMI.<br><br><strong>Value:</strong> Any published or custom {{ op_system }} AMI that belongs to the set AWS region. See _{{ op_system }} AMIs for AWS infrastructure_ for available AMI IDs.</td>
</tr>
<tr>
  <td>platform: aws: hostedZone:</td>
  <td>An existing Route 53 private hosted zone for the cluster. You can only use a pre-existing hosted zone when also supplying your own VPC. The hosted zone must already be associated with the user-provided VPC before installation. Also, the domain of the hosted zone must be the cluster domain or a parent of the cluster domain. If undefined, the installation program creates a new hosted zone.<br><br><strong>Value:</strong> String, for example <code>Z3URY6TWQ91KVV</code>.</td>
</tr>
<tr>
  <td>platform: aws: hostedZoneRole:</td>
  <td>An Amazon Resource Name (ARN) for an existing IAM role in the account containing the specified hosted zone. The installation program and cluster operators assume this role when performing operations on the hosted zone. Use this parameter only when you are installing a cluster into a shared VPC.<br><br><strong>Value:</strong> String, for example <code>arn:aws:iam::1234567890:role/shared-vpc-role</code>.</td>
</tr>
<tr>
  <td>platform: aws: userProvisionedDNS:</td>
  <td>Enables user-provisioned DNS instead of the default cluster-provisioned DNS solution. If you use this feature, you must provide your own DNS solution that includes records for <code>api.<cluster_name>.<base_domain>.</code> and <code>*.apps.<cluster_name>.<base_domain>.</code>. <code>userProvisionedDNS</code> is a Technology Preview feature.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: aws: region:</td>
  <td>The AWS region that the installation program creates all cluster resources in.<br><br><strong>Value:</strong> Any valid <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">AWS region</a>, such as <code>us-east-1</code>. You can use the AWS CLI to access the regions available based on your selected instance type by running the following command:<br><br><pre>$ aws ec2 describe-instance-type-offerings --filters Name=instance-type,Values=c7g.xlarge</pre><br><br><dl><dt>Important</dt><dd>When running on ARM based AWS instances, ensure that you enter a region where AWS Graviton processors are available. See <a href="https://aws.amazon.com/ec2/graviton/#Global_availability">Global availability</a> map in the AWS documentation. Currently, AWS Graviton3 processors are only available in some regions.</dd></dl></td>
</tr>
<tr>
  <td>platform: aws: serviceEndpoints: - name: url:</td>
  <td>The AWS service endpoint name and URL. Custom endpoints are only required for cases where alternative AWS endpoints, such as FIPS, must be used. Custom API endpoints can be specified for EC2, S3, IAM, Elastic Load Balancing, Tagging, Route 53, and STS AWS services.<br><br><strong>Value:</strong> Valid <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">AWS service endpoint</a> name and valid <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">AWS service endpoint</a> URL.</td>
</tr>
<tr>
  <td>platform: aws: userTags:</td>
  <td>A map of keys and values that the installation program adds as tags to all resources that it creates.<br><br><strong>Value:</strong> Any valid YAML map, such as key value pairs in the <code><key>: <value></code> format. For more information about AWS tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging Your Amazon EC2 Resources</a> in the AWS documentation.<br><br><dl><dt>Note</dt><dd>You can add up to 25 user-defined tags during installation. The remaining 25 tags are reserved for {{ product_title }}.</dd></dl></td>
</tr>
<tr>
  <td>platform: aws: propagateUserTags:</td>
  <td>A flag that directs in-cluster Operators to include the specified user tags in the tags of the AWS resources that the Operators create.<br><br><strong>Value:</strong> Boolean values, for example <code>true</code> or <code>false</code>.</td>
</tr>
<tr>
  <td>platform: aws: publicIpv4Pool:</td>
  <td>The public IPv4 pool ID that is used to allocate Elastic IPs (EIPs) when <code>publish</code> is set to <code>External</code>. You must provision and advertise the pool in the same {{ aws_short }} account and region of the cluster. You must ensure that you have 2n + 1 IPv4 addresses available in the pool where <em>n</em> is the total number of {{ aws_short }} zones used to deploy the Network Load Balancer (NLB) for API, NAT gateways, and bootstrap node. For more information about bring your own IP addresses (BYOIP) in {{ aws_short }}, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html#byoip-onboard">Onboard your BYOIP</a>.<br><br><strong>Value:</strong> A valid <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-public-ipv4-pools.html">public IPv4 pool id</a><br><br><dl><dt>Note</dt><dd>You can enable BYOIP only for customized installations that do not have any network restrictions.</dd></dl></td>
</tr>
<tr>
  <td>platform: aws: bestEffortDeleteIgnition:</td>
  <td>An optional flag that determines whether to ignore errors when deleting Ignition objects from the S3 bucket. By default, the installation program fails if it cannot delete the Ignition objects.<br><br><strong>Value:</strong> <code>true</code> or <code>false</code>. The default value is <code>false</code>, which causes the installation program to fail on S3 Ignition deletion errors.</td>
</tr>
<tr>
  <td>platform: aws: ipFamily:</td>
  <td>The IP address family for networks used by the cluster. Specify <code>IPv4</code> for IPv4-only networking, <code>DualStackIPv4Primary</code> for dual-stack networking with IPv4 as the primary address family, or <code>DualStackIPv6Primary</code> for dual-stack networking with IPv6 as the primary address family. When using dual-stack, the VPC and subnets must be configured with both IPv4 and IPv6 CIDR blocks.<br><br>Consider the following requirements if you use dual-stack networking:<br><br><ul><li>All API and Ingress load balancers must be Network Load Balancers (NLB). Classic Load Balancers (CLB) do not support IPv6 addressing.</li><li>All machines in a dual-stack cluster must be Nitro-based and support IPv6 addressing.</li><li>If you are installing a cluster using existing subnets, all provided subnets must be configured with dual-stack address pools.</li><li>If you are installing a cluster using Local Zones, you must provide dual-stack subnets. The installation program cannot automatically provision dual-stack subnets in Local Zones.</li><li>Installing a cluster using dual-stack networking is not supported in Wavelength Zones.</li></ul><dl><dt>Important</dt><dd>Dual-stack networking on {{ aws_short }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl><br><br><strong>Value:</strong> "IPv4", "DualStackIPv4Primary", or "DualStackIPv6Primary". The default value is "IPv4".</td>
</tr>
<tr>
  <td>platform: aws: vpc: subnets:</td>
  <td>A list of subnets in an existing VPC to be used in place of automatically created subnets. You specify a subnet by providing the subnet ID and an optional list of roles that apply to that subnet. If you specify subnet IDs but do not specify roles for any subnet, the subnets' roles are decided automatically. If you do not specify any roles, you must ensure that any other subnets in your VPC have the <code>kubernetes.io/cluster/.<strong>: .</strong></code> or <code>kubernetes.io/cluster/unmanaged: true</code> tags.<br><br>The subnets must be part of the same <code>networking.machineNetwork[].cidr</code> ranges that you specify. If you provide dual-stack subnets using this parameter, you must specify IPv6 entries in the <code>networking.machineNetwork[].cidr</code> parameter.<br><br>For a public cluster, specify a public and a private subnet for each availability zone.<br><br>For a private cluster, specify a private subnet for each availability zone.<br><br>For clusters that use AWS Local Zones, you must add AWS Local Zone subnets to this list to ensure edge machine pool creation.<br><br><strong>Value:</strong> List of pairs of <code>id</code> and <code>roles</code> parameters.</td>
</tr>
<tr>
  <td>platform: aws: vpc: subnets: - id:</td>
  <td>The ID of an existing subnet to be used in place of a subnet created by the installation program.<br><br><strong>Value:</strong> String. The subnet ID must be a unique ID containing only alphanumeric characters, beginning with "subnet-". The ID must be exactly 24 characters long.</td>
</tr>
<tr>
  <td>platform: aws: vpc: subnets: - id: roles: - type:</td>
  <td>One or more roles that apply to the subnet specified by <code>platform.aws.vpc.subnets.id</code>. If you specify a role for any subnet, each subnet must have at least one assigned role, and the <code>ClusterNode</code>, <code>IngressControllerLB</code>, <code>ControlPlaneExternalLB</code>, <code>BootstrapNode</code>, and <code>ControlPlaneInternalLB</code> roles must be assigned to at least one subnet. However, if the cluster scope is internal, then the <code>ControlPlaneExternalLB</code> role is not required.<br><br>You can only assign the <code>EdgeNode</code> role to subnets in {{ aws_short }} Local Zones.<br><br><strong>Value:</strong> List of one or more role types. Valid values include <code>ClusterNode</code>, <code>EdgeNode</code>, <code>BootstrapNode</code>, <code>IngressControllerLB</code>, <code>ControlPlaneExternalLB</code>, and <code>ControlPlaneInternalLB</code>.</td>
</tr>
</tbody>
</table>

{% endif %}

{% if osp %}
## Additional {{ rh_openstack_first }} configuration parameters {id="installation-configuration-parameters-additional-osp_{{ context }}"}

Additional {{ rh_openstack }} configuration parameters are described in the following table:

***Additional {{ rh_openstack }} parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>compute: platform: openstack: rootVolume: size:</td>
  <td>For compute machines, the size in gigabytes of the root volume. If you do not set this value, machines use ephemeral storage.<br><br><strong>Value:</strong> Integer, for example <code>30</code>.</td>
</tr>
<tr>
  <td>compute: platform: openstack: rootVolume: types:</td>
  <td>For compute machines, the root volume types.<br><br><strong>Value:</strong> A list of strings, for example, {<code>performance-host1</code>, <code>performance-host2</code>, <code>performance-host3</code>}. ^[1]^</td>
</tr>
<tr>
  <td>compute: platform: openstack: rootVolume: type:</td>
  <td>For compute machines, the root volume's type. This property is deprecated and is replaced by <code>compute.platform.openstack.rootVolume.types</code>.<br><br><strong>Value:</strong> String, for example, <code>performance</code>. ^[2]^</td>
</tr>
<tr>
  <td>compute: platform: openstack: rootVolume: zones:</td>
  <td>For compute machines, the Cinder availability zone to install root volumes on. If you do not set a value for this parameter, the installation program selects the default availability zone. This parameter is mandatory when <code>compute.platform.openstack.zones</code> is defined.<br><br><strong>Value:</strong> A list of strings, for example <code>["zone-1", "zone-2"]</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: rootVolume: size:</td>
  <td>For control plane machines, the size in gigabytes of the root volume. If you do not set this value, machines use ephemeral storage.<br><br><strong>Value:</strong> Integer, for example <code>30</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: rootVolume: types:</td>
  <td>For control plane machines, the root volume types.<br><br><strong>Value:</strong> A list of strings, for example, {<code>performance-host1</code>, <code>performance-host2</code>, <code>performance-host3</code>}. ^[1]^</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: rootVolume: type:</td>
  <td>For control plane machines, the root volume's type. This property is deprecated and is replaced by <code>compute.platform.openstack.rootVolume.types</code>.<br><br><strong>Value:</strong> String, for example, <code>performance</code>. ^[2]^</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: rootVolume: zones:</td>
  <td>For control plane machines, the Cinder availability zone to install root volumes on. If you do not set this value, the installation program selects the default availability zone. This parameter is mandatory when <code>controlPlane.platform.openstack.zones</code> is defined.<br><br><strong>Value:</strong> A list of strings, for example <code>["zone-1", "zone-2"]</code>.</td>
</tr>
<tr>
  <td>platform: openstack: cloud:</td>
  <td>The name of the {{ rh_openstack }} cloud to use from the list of clouds in the <code>clouds.yaml</code> file.<br><br>In the cloud configuration in the <code>clouds.yaml</code> file, if possible, use application credentials rather than a user name and password combination. Using application credentials avoids disruptions from secret propagation that follow user name and password rotation.<br><br><strong>Value:</strong> String, for example <code>MyCloud</code>.</td>
</tr>
<tr>
  <td>platform: openstack: externalNetwork:</td>
  <td>The {{ rh_openstack }} external network name to be used for installation.<br><br><strong>Value:</strong> String, for example <code>external</code>.</td>
</tr>
<tr>
  <td>platform: openstack: computeFlavor:</td>
  <td>The {{ rh_openstack }} flavor to use for control plane and compute machines.<br><br>This property is deprecated. To use a flavor as the default for all machine pools, add it as the value of the <code>type</code> key in the <code>platform.openstack.defaultMachinePlatform</code> property. You can also set a flavor value for each machine pool individually.<br><br><strong>Value:</strong> String, for example <code>m1.xlarge</code>.</td>
</tr>
</tbody>
</table>

1.  If the machine pool defines `zones`, the count of types can either be a single item or match the number of items in `zones`. For example, the count of types cannot be 2 if there are 3 items in `zones`.
1.  If you have any existing reference to this property, the installation program populates the corresponding value in the `controlPlane.platform.openstack.rootVolume.types` field.

## Optional {{ rh_openstack }} configuration parameters {id="installation-configuration-parameters-optional-osp_{{ context }}"}

Optional {{ rh_openstack }} configuration parameters are described in the following table:

***Optional {{ rh_openstack }} parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>compute: platform: openstack: additionalNetworkIDs:</td>
  <td>Additional networks that are associated with compute machines. Allowed address pairs are not created for additional networks.<br><br><strong>Value:</strong> A list of one or more UUIDs as strings. For example, <code>fa806b2f-ac49-4bce-b9db-124bc64209bf</code>.</td>
</tr>
<tr>
  <td>compute: platform: openstack: additionalSecurityGroupIDs:</td>
  <td>Additional security groups that are associated with compute machines.<br><br><strong>Value:</strong> A list of one or more UUIDs as strings. For example, <code>7ee219f3-d2e9-48a1-96c2-e7429f1b0da7</code>.</td>
</tr>
<tr>
  <td>compute: platform: openstack: zones:</td>
  <td>{{ rh_openstack }} Compute (Nova) availability zones (AZs) to install machines on. If this parameter is not set, the installation program relies on the default settings for Nova that the {{ rh_openstack }} administrator configured.<br><br><strong>Value:</strong> A list of strings. For example, <code>["zone-1", "zone-2"]</code>.</td>
</tr>
<tr>
  <td>compute: platform: openstack: serverGroupPolicy:</td>
  <td>The server group policy to apply to the group that contains the compute machines in the pool. You cannot change server group policies or affiliations after creation. Supported options include <code>anti-affinity</code>, <code>soft-affinity</code>, and <code>soft-anti-affinity</code>. The default value is <code>soft-anti-affinity</code>.<br><br>An <code>affinity</code> policy prevents migrations and therefore affects {{ rh_openstack }} upgrades. The <code>affinity</code> policy is not supported.<br><br>If you use a strict <code>anti-affinity</code> policy, an additional {{ rh_openstack }} host is required during instance migration.<br><br><strong>Value:</strong> A server group policy to apply to the machine pool. For example, <code>soft-affinity</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: additionalNetworkIDs:</td>
  <td>Additional networks that are associated with control plane machines. Allowed address pairs are not created for additional networks.<br><br>Additional networks that are attached to a control plane machine are also attached to the bootstrap node.<br><br><strong>Value:</strong> A list of one or more UUIDs as strings. For example, <code>fa806b2f-ac49-4bce-b9db-124bc64209bf</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: additionalSecurityGroupIDs:</td>
  <td>Additional security groups that are associated with control plane machines.<br><br><strong>Value:</strong> A list of one or more UUIDs as strings. For example, <code>7ee219f3-d2e9-48a1-96c2-e7429f1b0da7</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: zones:</td>
  <td>{{ rh_openstack }} Compute (Nova) availability zones (AZs) to install machines on. If this parameter is not set, the installation program relies on the default settings for Nova that the {{ rh_openstack }} administrator configured.<br><br><strong>Value:</strong> A list of strings. For example, <code>["zone-1", "zone-2"]</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: openstack: serverGroupPolicy:</td>
  <td>Server group policy to apply to the group that contains the control plane machines in the pool. You cannot change server group policies or affiliations after creation. Supported options include <code>anti-affinity</code>, <code>soft-affinity</code>, and <code>soft-anti-affinity</code>. The default value is <code>soft-anti-affinity</code>.<br><br>An <code>affinity</code> policy prevents migrations, and therefore affects {{ rh_openstack }} upgrades. The <code>affinity</code> policy is not supported.<br><br>If you use a strict <code>anti-affinity</code> policy, an additional {{ rh_openstack }} host is required during instance migration.<br><br><strong>Value:</strong> A server group policy to apply to the machine pool. For example, <code>soft-affinity</code>.</td>
</tr>
<tr>
  <td>platform: openstack: apiVIPs:</td>
  <td>IP address on the machine network to assign to the API VIP. If multiple addresses are present, they must consist of exactly one IPv4 and one IPv6 address.<br><br><strong>Value:</strong> An array of strings. For example, <code>[ "192.168.1.10", "2001:db8::10" ]</code>.</td>
</tr>
<tr>
  <td>platform: openstack: clusterOSImage:</td>
  <td>The location from which the installation program downloads the {{ op_system }} image.<br><br>You must set this parameter to perform an installation in a restricted network.<br><br><strong>Value:</strong> An HTTP or HTTPS URL, optionally with an SHA-256 checksum.<br><br>For example, <code>\http://mirror.example.com/images/rhcos-43.81.201912131630.0-openstack.x86_64.qcow2.gz?sha256=ffebbd68e8a1f2a245ca19522c16c86f67f9ac8e4e0c1f0a812b068b16f7265d</code>.The value can also be the name of an existing Glance image, for example <code>my-rhcos</code>.</td>
</tr>
<tr>
  <td>platform: openstack: clusterOSImageProperties:</td>
  <td>Properties to add to the installation program-uploaded ClusterOSImage in Glance. This property is ignored if <code>platform.openstack.clusterOSImage</code> is set to an existing Glance image.<br><br>You can use this property to exceed the default persistent volume (PV) limit for {{ rh_openstack }} of 26 PVs per node. To exceed the limit, set the <code>hw_scsi_model</code> property value to <code>virtio-scsi</code> and the <code>hw_disk_bus</code> value to  <code>scsi</code>.<br><br>You can also use this property to enable the QEMU guest agent by including the <code>hw_qemu_guest_agent</code> property with a value of <code>yes</code>.<br><br><strong>Value:</strong> A set of string properties. For example:<br><br><pre>clusterOSImageProperties:&#10;    hw_scsi_model: "virtio-scsi"&#10;    hw_disk_bus: "scsi"&#10;    hw_qemu_guest_agent: "yes"</pre></td>
</tr>
<tr>
  <td>platform: openstack: controlPlanePort: fixedIPs:</td>
  <td>Subnets for the machines to use.<br><br><strong>Value:</strong> A list of subnet names or UUIDs to use in cluster installation.</td>
</tr>
<tr>
  <td>platform: openstack: controlPlanePort: network:</td>
  <td>A network for the machines to use.<br><br><strong>Value:</strong> The UUID or name of an {{ rh_openstack }} network to use in cluster installation.</td>
</tr>
<tr>
  <td>platform: openstack: defaultMachinePlatform:</td>
  <td>The default machine pool platform configuration.<br><br><strong>Value:</strong><pre>{&#10;   "type": "ml.large",&#10;   "rootVolume": {&#10;      "size": 30,&#10;      "type": "performance"&#10;   }&#10;}</pre></td>
</tr>
<tr>
  <td>platform: openstack: ingressFloatingIP:</td>
  <td>An existing floating IP address to associate with the Ingress port. To use this property, you must also define the <code>platform.openstack.externalNetwork</code> property.<br><br><strong>Value:</strong> An IP address, for example <code>128.0.0.1</code>.</td>
</tr>
<tr>
  <td>platform: openstack: ingressVIPs:</td>
  <td>An IP address or addresses on the machine network to assign to the ingress VIP. If multiple addresses are provided, they must consist of exactly one IPv4 and one IPv6 address.<br><br><strong>Value:</strong> An array of strings. For example, <code>[ "192.168.1.11", "2001:db8::11" ]</code>.</td>
</tr>
<tr>
  <td>platform: openstack: apiFloatingIP:</td>
  <td>An existing floating IP address to associate with the API load balancer. To use this property, you must also define the <code>platform.openstack.externalNetwork</code> property.<br><br><strong>Value:</strong> An IP address, for example <code>128.0.0.1</code>.</td>
</tr>
<tr>
  <td>platform: openstack: externalDNS:</td>
  <td>IP addresses for external DNS servers that cluster instances use for DNS resolution.<br><br><strong>Value:</strong> A list of IP addresses as strings. For example, <code>["8.8.8.8", "192.168.1.12"]</code>.</td>
</tr>
<tr>
  <td>platform: openstack: loadbalancer:</td>
  <td>Whether or not to use the default, internal load balancer. If the value is set to <code>UserManaged</code>, this default load balancer is disabled so that you can deploy a cluster that uses an external, user-managed load balancer. If the parameter is not set, or if the value is <code>OpenShiftManagedDefault</code>, the cluster uses the default load balancer.<br><br><strong>Value:</strong> <code>UserManaged</code> or <code>OpenShiftManagedDefault</code>.</td>
</tr>
<tr>
  <td>platform: openstack: machinesSubnet:</td>
  <td>The UUID of a {{ rh_openstack }} subnet that the cluster's nodes use. Nodes and virtual IP (VIP) ports are created on this subnet.<br><br>The first item in <code>networking.machineNetwork</code> must match the value of <code>machinesSubnet</code>.<br><br>If you deploy to a custom subnet, you cannot specify an external DNS server to the {{ product_title }} installer. Instead, <a href="https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.0/html/command_line_interface_reference/subnet">add DNS to the subnet in {{ rh_openstack }}</a>.<br><br><strong>Value:</strong> A UUID as a string. For example, <code>fa806b2f-ac49-4bce-b9db-124bc64209bf</code>.</td>
</tr>
</tbody>
</table>

{% endif %}

{% if azure %}
## Additional Azure configuration parameters {id="installation-configuration-parameters-additional-azure_{{ context }}"}

Additional Azure configuration parameters are described in the following table.


:::note

By default, if you specify availability zones in the `install-config.yaml` file, the installation program distributes the control plane machines and the compute machines across [these availability zones](https://azure.microsoft.com/en-us/global-infrastructure/availability-zones/)
within [a region](https://azure.microsoft.com/en-us/global-infrastructure/regions). To ensure high availability for your cluster, select a region with at least three availability zones. If your region contains fewer than three availability zones, the installation program places more than one control plane machine in the available zones.

:::


***Additional Azure parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>compute: platform: azure: bootDiagnostics: type:</td>
  <td>Enables boot diagnostics collection for compute machines. The <code>type</code> field specifies the {{ azure_short }} boot diagnostics type for the created compute machines.<br><br>The following values are associated with the boot diagnostics type:<br><br><code>UserManaged</code>:: When you set <code>type</code> to <code>UserManaged</code>, you must provide values for <code>resourceGroup</code> and <code>storageAccountName</code>. For <code>storageAccountName</code> and  {{ product_title }} cluster nodes, use the same region and subscription.<br><br><code>Managed</code>:: When you set <code>type</code> to <code>Managed</code>, {{ azure_short }} stores the boot diagnostics data blobs  in a managed storage account.<br><br><code>Disabled</code>:: When you set <code>type</code> to <code>Disabled</code>, you turn off the parameter.<br><br><strong>Value:</strong> String, for example <code>Enabled</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: bootDiagnostics: resourceGroup:</td>
  <td>Specifies the name of the {{ azure_short }} resource group that contains the diagnostic storage account for compute machines. Use <code>resourceGroup</code> only when you set <code>type</code> to <code>UserManaged</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>compute: platform: azure: bootDiagnostics: storageAccountName:</td>
  <td>Specifies the {{ azure_short }} storage account to store the diagnostic logs for compute machines. Use <code>storageAccountName</code> only when you set<code>type</code> to <code>UserManaged</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>compute: platform: azure: encryptionAtHost:</td>
  <td>Enables host-level encryption for compute machines. You can enable this encryption alongside user-managed server-side encryption. This feature encrypts temporary, ephemeral, cached, and un-managed disks on the VM host. This is not a prerequisite for user-managed server-side encryption.<br><br><strong>Value:</strong> <code>true</code> or <code>false</code>. The default is <code>false</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osDisk: diskSizeGB:</td>
  <td>The Azure disk size for the VM.<br><br><strong>Value:</strong> Integer that represents the size of the disk in GB. The default is <code>128</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osDisk: diskType:</td>
  <td>Defines the type of disk.<br><br><strong>Value:</strong> <code>standard_LRS</code>, <code>premium_LRS</code>, or <code>standardSSD_LRS</code>. The default is <code>premium_LRS</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: ultraSSDCapability:</td>
  <td>Enables the use of Azure ultra disks for persistent storage on compute nodes. This requires that your Azure region and zone have ultra disks available.<br><br><strong>Value:</strong> <code>Enabled</code>, <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osDisk: diskEncryptionSet: resourceGroup:</td>
  <td>The name of the Azure resource group that contains the disk encryption set from the installation prerequisites. This resource group should be different from the resource group where you install the cluster to avoid deleting your Azure encryption key when the cluster is destroyed. This value is only necessary if you intend to install the cluster with user-managed disk encryption.<br><br><strong>Value:</strong> String, for example <code>production_encryption_resource_group</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osDisk: diskEncryptionSet: name:</td>
  <td>The name of the disk encryption set that contains the encryption key from the installation prerequisites.<br><br><strong>Value:</strong> String, for example <code>production_disk_encryption_set</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osDisk: diskEncryptionSet: subscriptionId:</td>
  <td>Defines the Azure subscription of the disk encryption set where the disk encryption set resides. This secondary disk encryption set is used to encrypt compute machines.<br><br><strong>Value:</strong> String, in the format <code>00000000-0000-0000-0000-000000000000</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osImage: publisher:</td>
  <td>Optional. By default, the installation program downloads and installs the {{ op_system_first }} image that is used to boot compute machines. You can override the default behavior by using a custom {{ op_system }} image that is available from the Azure Marketplace. The installation program uses this image for compute machines only.<br><br><strong>Value:</strong> String. The name of the image publisher.</td>
</tr>
<tr>
  <td>compute: platform: azure: osImage: offer:</td>
  <td>The name of Azure Marketplace offer that is associated with the custom {{ op_system }} image. If you use <code>compute.platform.azure.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The name of the image offer.</td>
</tr>
<tr>
  <td>compute: platform: azure: osImage: sku:</td>
  <td>An instance of the Azure Marketplace offer. If you use <code>compute.platform.azure.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The SKU of the image offer.</td>
</tr>
<tr>
  <td>compute: platform: azure: osImage: version:</td>
  <td>The version number of the image SKU. If you use <code>compute.platform.azure.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The version of the image to use.</td>
</tr>
<tr>
  <td>compute: platform: azure: identity: type:</td>
  <td>The type of identity used for compute virtual machines.The <code>UserAssigned</code> identity is a standalone Azure resource provided by the user and assigned to compute virtual machines.If you specify <code>identity.type</code> as <code>UserAssigned</code>, but do not provide a user-assigned identity, the installation program creates the identity.If you provide a user-assigned identity, the Azure account that you use to create the identity must have either the "User Access Administrator" or "RBAC Access Admin" roles.<br><br><strong>Value:</strong> <code>UserAssigned</code> or <code>None</code>. If you do not specify a value, the installation program generates a user-assigned identity.</td>
</tr>
<tr>
  <td>compute: platform: azure: identity: userAssignedIdentities: - name: resourceGroup: subscription:</td>
  <td>A group of parameters that specify the name of the user-assigned identity, and the resource group and subscription that contain the identity. All three values must be provided to specify a user-assigned identity.Only one user-assigned identity can be supplied.Supplying more than one user-assigned identity is an experimental feature, which may be enabled with the <code>MachineAPIMigration</code> feature gate.<br><br><strong>Value:</strong> Array of strings.</td>
</tr>
<tr>
  <td>compute: platform: azure: vmNetworkingType:</td>
  <td>Enables accelerated networking. Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, improving its networking performance. If instance type of compute machines support <code>Accelerated</code> networking, by default, the installation program enables <code>Accelerated</code> networking, otherwise the default networking type is <code>Basic</code>.<br><br><strong>Value:</strong> <code>Accelerated</code> or <code>Basic</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: type:</td>
  <td>Defines the Azure instance type for compute machines.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: azure: zones:</td>
  <td>The availability zones where the installation program creates compute machines.<br><br><strong>Value:</strong> String list</td>
</tr>
<tr>
  <td>compute: platform: azure: settings: securityType:</td>
  <td>Enables confidential VMs or trusted launch for compute nodes. This option is not enabled by default.<br><br><strong>Value:</strong> <code>ConfidentialVM</code> or <code>TrustedLaunch</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: settings: confidentialVM: uefiSettings: secureBoot:</td>
  <td>Enables secure boot on compute nodes if you are using confidential VMs.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: settings: confidentialVM: uefiSettings: virtualizedTrustedPlatformModule:</td>
  <td>Enables the virtualized Trusted Platform Module (vTPM) feature on compute nodes if you are using confidential VMs.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: settings: trustedLaunch: uefiSettings: secureBoot:</td>
  <td>Enables secure boot on compute nodes if you are using trusted launch.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: settings: trustedLaunch: uefiSettings: virtualizedTrustedPlatformModule:</td>
  <td>Enables the vTPM feature on compute nodes if you are using trusted launch.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osDisk: securityProfile: securityEncryptionType:</td>
  <td>Enables the encryption of the virtual machine guest state for compute nodes. This parameter can only be used if you use Confidential VMs.<br><br><strong>Value:</strong> <code>VMGuestStateOnly</code> is the only supported value.</td>
</tr>
<tr>
  <td>controlPlane: diskSetup:</td>
  <td>Specifies node component information for dedicated disk configuration.<br><br><strong>Value:</strong> Array of objects. Each object includes the <code>type</code> and <code>etcd</code> parameters as described in the following rows of the table.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: diskSetup: - type:</td>
  <td>Specifies which node component type to assign a dedicated disk.<br><br><strong>Value:</strong> <code>etcd</code> is the only supported value.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: diskSetup: - etcd:</td>
  <td>Specifies parameters for an <code>etcd</code> dedicated disk.<br><br><strong>Value</strong>: The <code>platformDiskID</code> object is the only supported value.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: diskSetup: - etcd: platformDiskID:</td>
  <td>Specifies a name to identify the dedicated disk.<br><br><strong>Value:</strong> String. Must not exceed 12 characters.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: platform: azure: identity: type:</td>
  <td>The type of identity used for control plane virtual machines.The <code>UserAssigned</code> identity is a standalone Azure resource provided by the user and assigned to control plane virtual machines.If you specify <code>identity.type</code> as <code>UserAssigned</code>, but do not provide a user-assigned identity, the installation program creates the identity.If you provide a user-assigned identity, the Azure account that you use to create the identity must have either the "User Access Administrator" or "RBAC Access Admin" roles.<br><br><strong>Value:</strong> <code>UserAssigned</code> or <code>None</code>. If you do not specify a value, the installation program generates a user-assigned identity.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: bootDiagnostics: type:</td>
  <td>Enables boot diagnostics collection for control plane machines. The <code>type</code> field specifies the {{ azure_short }} boot diagnostics type for the created control plane machines.<br><br>The following values are associated with the boot diagnostics type:<br><br><code>UserManaged</code>:: When you set <code>type</code> to <code>UserManaged</code>, you must provide the values for <code>resourceGroup</code> and <code>storageAccountName</code>. For <code>storageAccountName</code> and {{ product_title }} cluster nodes, ensure that you use the same region and subscription.<br><br><code>Managed</code>:: When you set <code>type</code> to <code>Managed</code>, {{ azure_short }} stores the boot diagnostics data blobs in a managed storage account.<br><br><code>Disabled</code>:: When you set <code>type</code> to <code>Disabled</code>, you turn off the parameter.<br><br><strong>Value:</strong> String. For control plane machines, the default value is <code>Managed</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: identity: userAssignedIdentities: - name: resourceGroup: subscription:</td>
  <td>A group of parameters that specify the name of the user-assigned identity, and the resource group and subscription that contain the identity. All three values must be provided to specify a user-assigned identity.Only one user-assigned identity can be supplied.Supplying more than one user-assigned identity is an experimental feature, which may be enabled with the <code>MachineAPIMigration</code> feature gate.<br><br><strong>Value:</strong> Array of strings.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: bootDiagnostics: resourceGroup:</td>
  <td>Specifies the name of the {{ azure_short }} resource group that contains the diagnostic storage account for control plane machines. Use <code>resourceGroup</code> only when you set <code>type</code> to <code>UserManaged</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: bootDiagnostics: storageAccountName:</td>
  <td>Specifies the {{ azure_short }} storage account to store the diagnostic logs for control plane machines. Use <code>storageAccountName</code> only when you set <code>type</code> to <code>UserManaged</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: dataDisks:</td>
  <td>Specifies dedicated disk parameters.<br><br><strong>Value:</strong> Array of objects. Each object includes <code>nameSuffix</code>, <code>cachingType</code>, <code>diskSizeGB</code>, and <code>lun</code> as described in the following rows of the table.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: platform: azure: dataDisks: - nameSuffix:</td>
  <td>Specifies the same value you defined for <code>platformDiskID</code>.<br><br><strong>Value:</strong> String.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: platform: azure: dataDisks: - cachingType:</td>
  <td>Specifies the caching requirements for the disk.<br><br><strong>Value:</strong> <code>None</code> is the only value currently supported.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: platform: azure: dataDisks: - diskSizeGB:</td>
  <td>Specifies a dedicated disk size in GB.<br><br><strong>Value:</strong> Integer greater than <code>0</code>.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: platform: azure: dataDisks: - lun:</td>
  <td>Specifies a logical unit number (LUN) for the dedicated disk.<br><br><strong>Value:</strong> Integer from <code>0</code> through <code>63</code> that is not used by another disk.<br><br><dl><dt>Important</dt><dd>Dedicated disk for <code>etcd</code> on {{ azure_full }} is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: platform: azure: settings: securityType:</td>
  <td>Enables confidential VMs or trusted launch for control plane nodes. This option is not enabled by default.<br><br><strong>Value:</strong> <code>ConfidentialVM</code> or <code>TrustedLaunch</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: settings: confidentialVM: uefiSettings: secureBoot:</td>
  <td>Enables secure boot on control plane nodes if you are using confidential VMs.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: settings: confidentialVM: uefiSettings: virtualizedTrustedPlatformModule:</td>
  <td>Enables the vTPM feature on control plane nodes if you are using confidential VMs.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: settings: trustedLaunch: uefiSettings: secureBoot:</td>
  <td>Enables secure boot on control plane nodes if you are using trusted launch.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: settings: trustedLaunch: uefiSettings: virtualizedTrustedPlatformModule:</td>
  <td>Enables the vTPM feature on control plane nodes if you are using trusted launch.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: securityProfile: securityEncryptionType:</td>
  <td>Enables the encryption of the virtual machine guest state for control plane nodes. This parameter can only be used if you use Confidential VMs.<br><br><strong>Value:</strong> <code>VMGuestStateOnly</code> is the only supported value.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: type:</td>
  <td>Defines the Azure instance type for control plane machines.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: zones:</td>
  <td>The availability zones where the installation program creates control plane machines.<br><br><strong>Value:</strong> String list</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: bootDiagnostics: type:</td>
  <td>Enables boot diagnostics collection for all machines. The <code>type</code> field specifies the {{ azure_short }} boot diagnostics type for all the created machines.<br><br>The following values are associated with the boot diagnostics type:<br><br><code>UserManaged</code>:: When you set <code>type</code> to <code>UserManaged</code>, you must provide the values for <code>resourceGroup</code> and <code>storageAccountName</code>. For <code>storageAccountName</code> and {{ product_title }} cluster nodes, ensure that you use the same region and subscription.<br><br><code>Managed</code>:: When you set <code>type</code> to <code>Managed</code>, {{ azure_short }} stores the boot diagnostics data blobs in a managed storage account.<br><br><code>Disabled</code>:: When you set <code>type</code> to <code>Disabled</code>, you turn off the parameter.<br><br><strong>Value:</strong> String, for example <code>Enabled</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: bootDiagnostics: resourceGroup:</td>
  <td>Specifies the name of the {{ azure_short }} resource group that contains the diagnostic storage account for all machines. Use <code>resourceGroup</code> only when you set <code>type</code> to <code>UserManaged</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: bootDiagnostics: storageAccountName:</td>
  <td>Specifies the {{ azure_short }} storage account to store the diagnostic logs for all machines. Use <code>storageAccountName</code> only when you set <code>type</code> to <code>UserManaged</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: settings: securityType:</td>
  <td>Enables confidential VMs or trusted launch for all nodes. This option is not enabled by default.<br><br><strong>Value:</strong> <code>ConfidentialVM</code> or <code>TrustedLaunch</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: settings: confidentialVM: uefiSettings: secureBoot:</td>
  <td>Enables secure boot on all nodes if you are using confidential VMs.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: settings: confidentialVM: uefiSettings: virtualizedTrustedPlatformModule:</td>
  <td>Enables the virtualized Trusted Platform Module (vTPM) feature on all nodes if you are using confidential VMs.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: settings: trustedLaunch: uefiSettings: secureBoot:</td>
  <td>Enables secure boot on all nodes if you are using trusted launch.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: settings: trustedLaunch: uefiSettings: virtualizedTrustedPlatformModule:</td>
  <td>Enables the vTPM feature on all nodes if you are using trusted launch.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: identity: type:</td>
  <td>The type of identity used for all virtual machines.The <code>UserAssigned</code> identity is a standalone Azure resource provided by the user and assigned to all virtual machines.If you specify <code>identity.type</code> as <code>UserAssigned</code>, but do not provide a user-assigned identity, the installation program creates the identity.If you provide a user-assigned identity, the Azure account that you use to create the identity must have either the "User Access Administrator" or "RBAC Access Admin" roles.<br><br><strong>Value:</strong> <code>UserAssigned</code> or <code>None</code>. If you do not specify a value, the installation program generates a user-assigned identity.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: identity: userAssignedIdentities: - name: resourceGroup: subscription:</td>
  <td>A group of parameters that specify the name of the user-assigned identity, and the resource group and subscription that contain the identity. All three values must be provided to specify a user-assigned identity.Only one user-assigned identity can be supplied.Supplying more than one user-assigned identity is an experimental feature, which may be enabled with the <code>MachineAPIMigration</code> feature gate.<br><br><strong>Value:</strong> Array of strings.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: securityProfile: securityEncryptionType:</td>
  <td>Enables the encryption of the virtual machine guest state for all nodes. This parameter can only be used if you use Confidential VMs.<br><br><strong>Value:</strong> <code>VMGuestStateOnly</code> is the only supported value.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: encryptionAtHost:</td>
  <td>Enables host-level encryption for compute machines. You can enable this encryption alongside user-managed server-side encryption. This feature encrypts temporary, ephemeral, cached, and un-managed disks on the VM host. This parameter is not a prerequisite for user-managed server-side encryption.<br><br><strong>Value:</strong> <code>true</code> or <code>false</code>. The default is <code>false</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: diskEncryptionSet: name:</td>
  <td>The name of the disk encryption set that contains the encryption key from the installation prerequisites.<br><br><strong>Value:</strong> String, for example, <code>production_disk_encryption_set</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: diskEncryptionSet: resourceGroup:</td>
  <td>The name of the Azure resource group that contains the disk encryption set from the installation prerequisites. To avoid deleting your Azure encryption key when the cluster is destroyed, this resource group must be different from the resource group where you install the cluster. This value is necessary only if you intend to install the cluster with user-managed disk encryption.<br><br><strong>Value:</strong> String, for example, <code>production_encryption_resource_group</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: diskEncryptionSet: subscriptionId:</td>
  <td>Defines the Azure subscription of the disk encryption set where the disk encryption set resides. This secondary disk encryption set is used to encrypt compute machines.<br><br><strong>Value:</strong> String, in the format <code>00000000-0000-0000-0000-000000000000</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: diskSizeGB:</td>
  <td>The Azure disk size for the VM.<br><br><strong>Value:</strong> Integer that represents the size of the disk in GB. The default is <code>128</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: diskType:</td>
  <td>Defines the type of disk.<br><br><strong>Value:</strong> <code>premium_LRS</code> or <code>standardSSD_LRS</code>. The default is <code>premium_LRS</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osImage: publisher:</td>
  <td>Optional. By default, the installation program downloads and installs the {{ op_system_first }} image that is used to boot control plane and compute machines. You can override the default behavior by using a custom {{ op_system }} image that is available from the Azure Marketplace. The installation program uses this image for both types of machines. Control plane machines do not contribute to licensing costs when using the default image. But, if you apply an Azure Marketplace image for a control plane machine, usage costs do apply.<br><br><strong>Value:</strong> String. The name of the image publisher.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osImage: offer:</td>
  <td>The name of Azure Marketplace offer that is associated with the custom {{ op_system }} image. If you use <code>platform.azure.defaultMachinePlatform.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The name of the image offer.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osImage: sku:</td>
  <td>An instance of the Azure Marketplace offer. If you use <code>platform.azure.defaultMachinePlatform.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The SKU of the image offer.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osImage: version:</td>
  <td>The version number of the image SKU. If you use <code>platform.azure.defaultMachinePlatform.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The version of the image to use.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: type:</td>
  <td>The Azure instance type for control plane and compute machines.<br><br><strong>Value:</strong> The Azure instance type.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: zones:</td>
  <td>The availability zones where the installation program creates compute and control plane machines.<br><br><strong>Value:</strong> String list.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: encryptionAtHost:</td>
  <td>Enables host-level encryption for control plane machines. You can enable this encryption alongside user-managed server-side encryption. This feature encrypts temporary, ephemeral, cached, and un-managed disks on the VM host. This is not a prerequisite for user-managed server-side encryption.<br><br><strong>Value:</strong> <code>true</code> or <code>false</code>. The default is <code>false</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: diskEncryptionSet: resourceGroup:</td>
  <td>The name of the Azure resource group that contains the disk encryption set from the installation prerequisites. This resource group should be different from the resource group where you install the cluster to avoid deleting your Azure encryption key when the cluster is destroyed. This value is only necessary if you intend to install the cluster with user-managed disk encryption.<br><br><strong>Value:</strong> String, for example <code>production_encryption_resource_group</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: diskEncryptionSet: name:</td>
  <td>The name of the disk encryption set that contains the encryption key from the installation prerequisites.<br><br><strong>Value:</strong> String, for example <code>production_disk_encryption_set</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: diskEncryptionSet: subscriptionId:</td>
  <td>Defines the Azure subscription of the disk encryption set where the disk encryption set resides. This secondary disk encryption set is used to encrypt control plane machines.<br><br><strong>Value:</strong> String, in the format <code>00000000-0000-0000-0000-000000000000</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: diskSizeGB:</td>
  <td>The Azure disk size for the VM.<br><br><strong>Value:</strong> Integer that represents the size of the disk in GB. The default is <code>1024</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: diskType:</td>
  <td>Defines the type of disk.<br><br><strong>Value:</strong> <code>premium_LRS</code> or <code>standardSSD_LRS</code>. The default is <code>premium_LRS</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osImage: publisher:</td>
  <td>Optional. By default, the installation program downloads and installs the {{ op_system_first }} image that is used to boot control plane machines. You can override the default behavior by using a custom {{ op_system }} image that is available from the Azure Marketplace. The installation program uses this image for control plane machines only. Control plane machines do not contribute to licensing costs when using the default image. But, if you apply an Azure Marketplace image for a control plane machine, usage costs do apply.<br><br><strong>Value:</strong> String. The name of the image publisher.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osImage: offer:</td>
  <td>The name of Azure Marketplace offer that is associated with the custom {{ op_system }} image. If you use <code>controlPlane.platform.azure.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The name of the image offer.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osImage: sku:</td>
  <td>An instance of the Azure Marketplace offer. If you use <code>controlPlane.platform.azure.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The SKU of the image offer.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osImage: version:</td>
  <td>The version number of the image SKU. If you use <code>controlPlane.platform.azure.osImage.publisher</code>, this field is required.<br><br><strong>Value:</strong> String. The version of the image to use.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: ultraSSDCapability:</td>
  <td>Enables the use of Azure ultra disks for persistent storage on control plane machines. This requires that your Azure region and zone have ultra disks available.<br><br><strong>Value:</strong> <code>Enabled</code>, <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: vmNetworkingType:</td>
  <td>Enables accelerated networking. Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, improving its networking performance. If instance type of control plane machines support <code>Accelerated</code> networking, by default, the installation program enables <code>Accelerated</code> networking, otherwise the default networking type is <code>Basic</code>.<br><br><strong>Value:</strong> <code>Accelerated</code> or <code>Basic</code>.</td>
</tr>
<tr>
  <td>platform: azure: baseDomainResourceGroupName:</td>
  <td>The name of the resource group that contains the DNS zone for your base domain.<br><br><strong>Value:</strong> String, for example <code>production_cluster</code>.</td>
</tr>
<tr>
  <td>platform: azure: resourceGroupName:</td>
  <td>The name of an already existing resource group to install your cluster to. This resource group must be empty and only used for this specific cluster; the cluster components assume ownership of all resources in the resource group. If you limit the service principal scope of the installation program to this resource group, you must ensure all other resources used by the installation program in your environment have the necessary permissions, such as the public DNS zone and virtual network. Destroying the cluster by using the installation program deletes this resource group.<br><br><strong>Value:</strong> String, for example <code>existing_resource_group</code>.</td>
</tr>
<tr>
  <td>platform: azure: outboundType:</td>
  <td>The outbound routing strategy used to connect your cluster to the internet. The following strategies are available:<br><br><code>UserDefinedRouting</code>:: Specifies to the installation program that you will provide and configure your own networking infrastructure for outbound access. The outbound routing must be configured before installing a cluster. The installation program does not configure user-defined routing.<code>LoadBalancer</code>:: Specifies that a single load balancer will be provisioned to provide outbound access for your cluster. This is the default value.<code>NATGatewaySingleZone</code>:: Specifies that the installation program will create one NAT Gateway. If you provide your own subnets via the <code>platform.azure.subnets</code> parameter, the installation program will attach the NAT Gateway to the compute subnet you specify. If you do not provide your own subnets, the installation program will create a subnet for the control plane and a subnet for the compute plane, and attach the NAT Gateway to the compute subnet.<code>NATGatewayMultiZone</code>:: Specifies that the installation program will create multiple NAT Gateways. If you provide your own subnets via the <code>platform.azure.subnets</code> parameter, the installation program creates a NAT Gateway for each subnet with the <code>node</code> role, assigns a zone to each NAT Gateway, and associates a NAT Gateway to each subnet. If you do not provide your own subnets, the installation program creates a compute subnet and NAT Gateway for each zone in the region, then attaches them to each other.<br><br>If you specify either the <code>NATGatewaySingleZone</code> or the <code>NATGatewayMultiZone</code> routing strategy, your account must have the <code>Microsoft.Network/natGateways/read</code> and <code>Microsoft.Network/natGateways/write</code> permissions. NAT Gateways can only be used for compute machines.<br><br><strong>Value:</strong> <code>LoadBalancer</code>, <code>UserDefinedRouting</code>, <code>NATGatewaySingleZone</code>, or <code>NATGatewayMultiZone</code>. The default is <code>LoadBalancer</code>.</td>
</tr>
<tr>
  <td>platform: azure: region:</td>
  <td>The name of the Azure region that hosts your cluster.<br><br><strong>Value:</strong> Any valid region name, such as <code>centralus</code>.</td>
</tr>
<tr>
  <td>platform: azure: subnets: - name: role:</td>
  <td>A list of one or more pairs of parameters which specify the name and role of a pre-existing subnet. The installation program will use the provided subnets for the specified roles. You can only specify one subnet with the <code>control-plane</code> role. If you specify pre-existing subnets, you must also set the <code>platform.azure.networkResourceGroupName</code> and <code>platform.azure.virtualNetwork</code> parameters. Pre-existing subnets that you provide must use the same region as you specified in the <code>platform.azure.region</code> parameter. If you use the <code>NATGatewaySingleZone</code> outbound routing strategy, you can only specify one subnet with the <code>node</code> role.<br><br><strong>Value:</strong> <code>name</code> specifies the name of the subnet. Valid <code>role</code> values are <code>node</code> or <code>control-plane</code>.</td>
</tr>
<tr>
  <td>platform: azure: userProvisionedDNS:</td>
  <td>Enables user-provisioned DNS instead of the default cluster-provisioned DNS solution. If you use this feature, you must provide your own DNS solution that includes records for <code>api.<cluster_name>.<base_domain>.</code> and <code>*.apps.<cluster_name>.<base_domain>.</code>.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: azure: zone:</td>
  <td>List of availability zones to place machines in. For high availability, specifyat least two zones.<br><br><strong>Value:</strong> List of zones, for example <code>["1", "2", "3"]</code>.</td>
</tr>
<tr>
  <td>platform: azure: customerManagedKey: keyVault: name:</td>
  <td>Specifies the name of the key vault that contains the encryption key that is used to encrypt Azure storage.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: customerManagedKey: keyVault: keyName:</td>
  <td>Specifies the name of the user-managed encryption key that is used to encrypt Azure storage.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: customerManagedKey: keyVault: resourceGroup:</td>
  <td>Specifies the name of the resource group that contains the key vault and managed identity.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: customerManagedKey: userAssignedIdentityKey:</td>
  <td>Specifies the name of the user-assigned managed identity that resides in the resource group with the key vault and has access to the user-managed key.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: ultraSSDCapability:</td>
  <td>Enables the use of Azure ultra disks for persistent storage on control plane and compute machines. This requires that your Azure region and zone have ultra disks available.<br><br><strong>Value:</strong> <code>Enabled</code>, <code>Disabled</code>. The default is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: azure: networkResourceGroupName:</td>
  <td>The name of the resource group that contains the existing VNet that you want to deploy your cluster to. This name cannot be the same as the <code>platform.azure.baseDomainResourceGroupName</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: virtualNetwork:</td>
  <td>The name of the existing VNet that you want to deploy your cluster to.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: azure: controlPlaneSubnet:</td>
  <td>The name of the existing subnet in your VNet that you want to deploy your control plane machines to.<br><br><strong>Value:</strong> Valid CIDR, for example <code>10.0.0.0/16</code>.</td>
</tr>
<tr>
  <td>platform: azure: computeSubnet:</td>
  <td>The name of the existing subnet in your VNet that you want to deploy your compute machines to.<br><br><strong>Value:</strong> Valid CIDR, for example <code>10.0.0.0/16</code>.</td>
</tr>
<tr>
  <td>platform: azure: cloudName:</td>
  <td>The name of the Azure cloud environment that is used to configure the Azure SDK with the appropriate Azure API endpoints. If empty, the default value <code>AzurePublicCloud</code> is used.<br><br><strong>Value:</strong> Any valid cloud environment, such as <code>AzurePublicCloud</code> or <code>AzureUSGovernmentCloud</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: vmNetworkingType:</td>
  <td>Enables accelerated networking. Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, improving its networking performance.<br><br><strong>Value:</strong> <code>Accelerated</code> or <code>Basic</code>. If instance type of control plane and compute machines support <code>Accelerated</code> networking, by default, the installation program enables <code>Accelerated</code> networking, otherwise the default networking type is <code>Basic</code>.</td>
</tr>
<tr>
  <td>operatorPublishingStrategy: apiserver:</td>
  <td>Determines whether the load balancers that service the API are public or private. Set this parameter to <code>Internal</code> to prevent the API server from being accessible outside of your VNet. Set this parameter to <code>External</code> to make the API server accessible outside of your VNet. If you set this parameter, you must set the <code>publish</code> parameter to <code>Mixed</code>.<br><br><strong>Value:</strong> <code>External</code> or <code>Internal</code>. The default value is <code>External</code>.</td>
</tr>
<tr>
  <td>operatorPublishingStrategy: ingress:</td>
  <td>Determines whether the DNS resources that the cluster creates for ingress traffic are publicly visible. Set this parameter to <code>Internal</code> to prevent the ingress VIP from being publicly accessible. Set this parameter to <code>External</code> to make the ingress VIP publicly accessible. If you set this parameter, you must set the <code>publish</code> parameter to <code>Mixed</code>.<br><br><strong>Value:</strong> <code>External</code> or <code>Internal</code>. The default value is <code>External</code>.</td>
</tr>
</tbody>
</table>


:::note

You cannot customize
[Azure Availability Zones](https://azure.microsoft.com/en-us/global-infrastructure/availability-zones/)
or
[Use tags to organize your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags)
with an Azure cluster.

:::

{% endif %}

{% if agent %}
## Additional bare metal configuration parameters for the Agent-based Installer {id="installation-configuration-parameters-additional-bare_{{ context }}"}

Additional bare metal installation configuration parameters for the Agent-based Installer are described in the following table:


:::note

These fields are not used during the initial provisioning of the cluster, but they are available to use once the cluster has been installed.
Configuring these fields at install time eliminates the need to set them as a Day 2 operation.

:::


***Additional bare metal parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>platform: baremetal: clusterProvisioningIP:</td>
  <td>The IP address within the cluster where the provisioning services run.Defaults to the third IP address of the provisioning subnet.For example, <code>172.22.0.3</code> or <code>2620:52:0:1307::3</code>.<br><br><strong>Value:</strong> IPv4 or IPv6 address.</td>
</tr>
<tr>
  <td>platform: baremetal: provisioningNetwork:</td>
  <td>The <code>provisioningNetwork</code> configuration setting determines whether the cluster uses the provisioning network.If it does, the configuration setting also determines if the cluster manages the network.<br><br><code>Managed</code>: Default. Set this parameter to <code>Managed</code> to fully manage the provisioning network, including DHCP, TFTP, and so on.<br><br><code>Disabled</code>: Set this parameter to <code>Disabled</code> to disable the requirement for a provisioning network.When set to <code>Disabled</code>, you can use only virtual media based provisioning on Day 2.If <code>Disabled</code> and using power management, BMCs must be accessible from the bare-metal network.If Disabled, you must provide two IP addresses on the bare-metal network that are used for the provisioning services.<br><br><strong>Value:</strong> <code>Managed</code> or <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: baremetal: provisioningMACAddress:</td>
  <td>The MAC address within the cluster where provisioning services run.<br><br><strong>Value:</strong> MAC address.</td>
</tr>
<tr>
  <td>platform: baremetal: provisioningNetworkCIDR:</td>
  <td>The CIDR for the network to use for provisioning.This option is required when not using the default address range on the provisioning network.<br><br><strong>Value:</strong> Valid CIDR, for example <code>10.0.0.0/16</code>.</td>
</tr>
<tr>
  <td>platform: baremetal: provisioningNetworkInterface:</td>
  <td>The name of the network interface on nodes connected to the provisioning network.Use the <code>bootMACAddress</code> configuration setting to enable Ironic to identify the IP address of the NIC instead of using the <code>provisioningNetworkInterface</code> configuration setting to identify the name of the NIC.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: baremetal: provisioningDHCPRange:</td>
  <td>Defines the IP range for nodes on the provisioning network, for example <code>172.22.0.10,172.22.0.254</code>.<br><br><strong>Value:</strong> IP address range.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts:</td>
  <td>Configuration for bare metal hosts.<br><br><strong>Value:</strong> Array of host configuration objects.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts: name:</td>
  <td>The name of the host.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts: bootMACAddress:</td>
  <td>The MAC address of the NIC used for provisioning the host.<br><br><strong>Value:</strong> MAC address.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts: bmc:</td>
  <td>Configuration for the host to connect to the baseboard management controller (BMC).<br><br><strong>Value:</strong> Dictionary of BMC configuration objects.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts: bmc: username:</td>
  <td>The username for the BMC.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts: bmc: password:</td>
  <td>Password for the BMC.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts: bmc: address:</td>
  <td>The URL for communicating with the host's BMC controller.The address configuration setting specifies the protocol.For example, <code>redfish+http://10.10.10.1:8000/redfish/v1/Systems/1234</code> enables Redfish.For more information, see "BMC addressing" in the "Deploying installer-provisioned clusters on bare metal" section.<br><br><strong>Value:</strong> URL.</td>
</tr>
<tr>
  <td>platform: baremetal: hosts: bmc: disableCertificateVerification:</td>
  <td><code>redfish</code> and <code>redfish-virtualmedia</code> need this parameter to manage BMC addresses.The value should be <code>True</code> when using a self-signed certificate for BMC addresses.<br><br><strong>Value:</strong> Boolean.</td>
</tr>
</tbody>
</table>

{% endif %}

{% if gcp %}
## Additional {{ gcp_first }} configuration parameters {id="installation-configuration-parameters-additional-gcp_{{ context }}"}

Additional {{ gcp_short }} configuration parameters are described in the following table:

***Additional {{ gcp_short }} parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>controlPlane: platform: gcp: osImage: project:</td>
  <td>Optional. By default, the installation program downloads and installs the {{ op_system_first }} image that is used to boot control plane machines. You can override the default behavior by specifying the location of a custom {{ op_system }} image that the installation program is to use for control plane machines only. Control plane machines do not contribute to licensing costs when using the default image. But, if you apply a {{ gcp_short }} Marketplace image for a control plane machine, usage costs do apply.<br><br><strong>Value:</strong> String. The name of {{ gcp_short }} project where the image is located.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osImage: name:</td>
  <td>The name of the custom {{ op_system }} image that the installation program is to use to boot control plane machines. If you use <code>controlPlane.platform.gcp.osImage.project</code>, this field is required.<br><br><strong>Value:</strong> String. The name of the {{ op_system }} image.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osImage: project:</td>
  <td>Optional. By default, the installation program downloads and installs the {{ op_system }} image that is used to boot compute machines. You can override the default behavior by specifying the location of a custom {{ op_system }} image that the installation program is to use for compute machines only.<br><br><strong>Value:</strong> String. The name of {{ gcp_short }} project where the image is located.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osImage: name:</td>
  <td>The name of the custom {{ op_system }} image that the installation program is to use to boot compute machines. If you use <code>compute.platform.gcp.osImage.project</code>, this field is required.<br><br><strong>Value:</strong> String. The name of the {{ op_system }} image.</td>
</tr>
<tr>
  <td>compute: platform: gcp: serviceAccount:</td>
  <td>Specifies the email address of a {{ gcp_short }} service account to be used during installations. This service account is used to provision compute machines.<br><br><strong>Value:</strong> String. The email address of the service account.</td>
</tr>
<tr>
  <td>platform: gcp: firewallRulesManagement:</td>
  <td>Specifies the firewall management policy for the cluster. <code>Managed</code> indicates that the firewall rules will be created and destroyed by the cluster. <code>Unmanaged</code> indicates that the user should create and destroy the firewall rules. For shared VPC installation, if the credential you provided the installation program doesn't have firewall rules management permissions, the <code>firewallRulesManagement</code> parameter can be absent or set to <code>Unmanaged</code>. For non-shared VPC installation, if the credential you provided the installation program doesn't have firewall rules management permissions, the <code>firewallRulesManagement</code> parameter must be set to <code>Unmanaged</code>. If you manage your own firewall rules, you must pre-configure the VPC network and the firewall rules before the installation.<br><br><strong>Value:</strong> String. <code>Managed</code> or <code>Unmanaged</code>. The default value is <code>Managed</code>.</td>
</tr>
<tr>
  <td>platform: gcp: network:</td>
  <td>The name of the existing Virtual Private Cloud (VPC) where you want to deploy your cluster. If you want to deploy your cluster into a shared VPC, you must set <code>platform.gcp.networkProjectID</code> with the name of the {{ gcp_short }} project that contains the shared VPC.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: gcp: networkProjectID:</td>
  <td>Optional. The name of the {{ gcp_short }} project that contains the shared VPC where you want to deploy your cluster.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: gcp: projectID:</td>
  <td>The name of the {{ gcp_short }} project where the installation program installs the cluster.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: gcp: dns: privateZone: name:</td>
  <td>The name of the private DNS zone. This parameter is only used during shared VPC installations. You can use a private DNS zone in a service project that is distinct from the projects specified by the <code>projectID</code> or <code>networkProjectID</code> parameters.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: gcp: dns: privateZone: projectID:</td>
  <td>The ID of the project that contains the private zone from the <code>privateZone.name</code> parameter.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: gcp: userProvisionedDNS:</td>
  <td>Enables user-provisioned DNS instead of the default cluster-provisioned DNS solution. If you use this feature, you must provide your own DNS solution that includes records for <code>api.<cluster_name>.<base_domain>.</code> and <code>*.apps.<cluster_name>.<base_domain>.</code>.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: gcp: region:</td>
  <td>The name of the {{ gcp_short }} region that hosts your cluster.<br><br><strong>Value:</strong> Any valid region name, such as <code>us-central1</code>.</td>
</tr>
<tr>
  <td>platform: gcp: controlPlaneSubnet:</td>
  <td>The name of the existing subnet where you want to deploy your control plane machines.<br><br><strong>Value:</strong> The subnet name.</td>
</tr>
<tr>
  <td>platform: gcp: computeSubnet:</td>
  <td>The name of the existing subnet where you want to deploy your compute machines.<br><br><strong>Value:</strong> The subnet name.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: zones:</td>
  <td>The availability zones where the installation program creates machines.<br><br><strong>Value:</strong> A list of valid <a href="https://cloud.google.com/compute/docs/regions-zones#available">{{ gcp_short }} availability zones</a>, such as <code>us-central1-a</code>, in a<a href="https://yaml.org/spec/1.2/spec.html#sequence//">YAML sequence</a>.<dl><dt>Important</dt><dd>When running your cluster on {{ gcp_short }} 64-bit ARM infrastructures, ensure that you use a zone where Ampere Altra Arm CPU's are available. You can find which zones are compatible with 64-bit ARM processors in the "{{ gcp_short }} availability zones" link.</dd></dl></td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osDisk: diskSizeGB:</td>
  <td>The size of the disk in gigabytes (GB).<br><br><strong>Value:</strong> Any size between 16 GB and 65536 GB.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osDisk: diskType:</td>
  <td>The <a href="https://cloud.google.com/compute/docs/disks#disk-types">{{ gcp_short }} disk type</a>.<br><br><strong>Value:</strong> The default disk type for all machines. Valid values are <code>pd-balanced</code>, <code>pd-ssd</code>, <code>pd-standard</code>, or <code>hyperdisk-balanced</code>. The default value is <code>pd-ssd</code>. Control plane machines cannot use the <code>pd-standard</code> disk type, so if you specify <code>pd-standard</code> as the default machine platform disk type, you must specify a different disk type using the <code>controlPlane.platform.gcp.osDisk.diskType</code> parameter.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osImage: project:</td>
  <td>Optional. By default, the installation program downloads and installs the {{ op_system }} image that is used to boot control plane and compute machines. You can override the default behavior by specifying the location of a custom {{ op_system }} image that the installation program is to use for both types of machines.<br><br><strong>Value:</strong> String. The name of {{ gcp_short }} project where the image is located.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osImage: name:</td>
  <td>The name of the custom {{ op_system }} image that the installation program is to use to boot control plane and compute machines. If you use <code>platform.gcp.defaultMachinePlatform.osImage.project</code>, this field is required.<br><br><strong>Value:</strong> String. The name of the RHCOS image.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: tags:</td>
  <td>Optional. Additional network tags to add to the control plane and compute machines.<br><br><strong>Value:</strong> One or more strings, for example <code>network-tag1</code>.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: type:</td>
  <td>The <a href="https://cloud.google.com/compute/docs/machine-types">{{ gcp_short }} machine type</a> for control plane and compute machines.<br><br><strong>Value:</strong> The {{ gcp_short }} machine type, for example <code>n1-standard-4</code>.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osDisk: encryptionKey: kmsKey: name:</td>
  <td>The name of the customer managed encryption key to be used for machine disk encryption.<br><br><strong>Value:</strong> The encryption key name.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osDisk: encryptionKey: kmsKey: keyRing:</td>
  <td>The name of the Key Management Service (KMS) key ring to which the KMS key belongs.<br><br><strong>Value:</strong> The KMS key ring name.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osDisk: encryptionKey: kmsKey: location:</td>
  <td>The <a href="https://cloud.google.com/kms/docs/locations">{{ gcp_short }} location</a> in which the KMS key ring exists.<br><br><strong>Value:</strong> The {{ gcp_short }} location.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osDisk: encryptionKey: kmsKey: projectID:</td>
  <td>The ID of the project in which the KMS key ring exists. This value defaults to the value of the <code>platform.gcp.projectID</code> parameter if it is not set.<br><br><strong>Value:</strong> The {{ gcp_short }} project ID.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: osDisk: encryptionKey: kmsKeyServiceAccount:</td>
  <td>The {{ gcp_short }} service account used for the encryption request for control plane and compute machines. If absent, the Compute Engine default service account is used. For more information about {{ gcp_short }} service accounts, see Google's documentation on <a href="https://cloud.google.com/compute/docs/access/service-accounts#compute_engine_service_account">service accounts</a>.<br><br><strong>Value:</strong> The {{ gcp_short }} service account email, for example <code><service_account_name>@<project_id>.iam.gserviceaccount.com</code>.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: secureBoot:</td>
  <td>Whether to enable Shielded VM secure boot for all machines in the cluster. Shielded VMs have additional security protocols such as secure boot, firmware and integrity monitoring, and rootkit protection. For more information on Shielded VMs, see Google's documentation on <a href="https://cloud.google.com/shielded-vm">Shielded VMs</a>.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: confidentialCompute:</td>
  <td>Whether to use Confidential VMs for all machines in the cluster. Confidential VMs provide encryption for data during processing. For more information on Confidential computing, see Google's documentation about <a href="https://cloud.google.com/confidential-computing">Confidential Computing</a>.<br><br>Supported values are:<br><br><ul><li><code>Enabled</code>, which automatically selects a Confidential Computing platform</li></ul>+<dl><dt>Important</dt><dd>The <code>Enabled</code> value selects Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV), which is deprecated.</dd></dl><ul><li><code>Disabled</code>, which disables Confidential Computing</li><li><code>AMDEncryptedVirtualizationNestedPaging</code>, which enables Confidential Computing with AMD Secure Encrypted Virtualization Secure Nested Paging (AMD SEV-SNP)</li><li><code>AMDEncryptedVirtualization</code>, which enables Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV)</li></ul>+<dl><dt>Important</dt><dd>The use of Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV) has been deprecated and will be removed in a future release.</dd></dl><ul><li><code>IntelTrustedDomainExtensions</code>, which enables Confidential Computing with Intel Trusted Domain Extensions (Intel TDX)</li></ul>If you specify any value other than <code>Disabled</code>, you must set <code>platform.gcp.defaultMachinePlatform.onHostMaintenance</code> to <code>Terminate</code>, and you must specify a region and machine type that support Confidential Computing. For more information, see Google's documentation about <a href="https://cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations#machine-type-cpu-zone">Supported configurations</a>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: gcp: defaultMachinePlatform: onHostMaintenance:</td>
  <td>Specifies the behavior of all VMs during a host maintenance event, such as a software or hardware update. For Confidential VMs, this parameter must be set to <code>Terminate</code>. Confidential VMs do not support live VM migration.<br><br><strong>Value:</strong> <code>Terminate</code> or <code>Migrate</code>. The default value is <code>Migrate</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osDisk: encryptionKey: kmsKey: name:</td>
  <td>The name of the customer managed encryption key to be used for control plane machine disk encryption.<br><br><strong>Value:</strong> The encryption key name.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osDisk: encryptionKey: kmsKey: keyRing:</td>
  <td>For control plane machines, the name of the KMS key ring to which the KMS key belongs.<br><br><strong>Value:</strong> The KMS key ring name.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osDisk: encryptionKey: kmsKey: location:</td>
  <td>For control plane machines, the {{ gcp_short }} location in which the key ring exists. For more information about KMS locations, see Google's documentation on <a href="https://cloud.google.com/kms/docs/locations">Cloud KMS locations</a>.<br><br><strong>Value:</strong> The {{ gcp_short }} location for the key ring.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osDisk: encryptionKey: kmsKey: projectID:</td>
  <td>For control plane machines, the ID of the project in which the KMS key ring exists. This value defaults to the VM project ID if not set.<br><br><strong>Value:</strong> The {{ gcp_short }} project ID.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osDisk: encryptionKey: kmsKeyServiceAccount:</td>
  <td>The {{ gcp_short }} service account used for the encryption request for control plane machines. If absent, the Compute Engine default service account is used. For more information about {{ gcp_short }} service accounts, see Google's documentation on <a href="https://cloud.google.com/compute/docs/access/service-accounts#compute_engine_service_account">service accounts</a>.<br><br><strong>Value:</strong> The {{ gcp_short }} service account email, for example <code><service_account_name>@<project_id>.iam.gserviceaccount.com</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osDisk: diskSizeGB:</td>
  <td>The size of the disk in gigabytes (GB). This value applies to control plane machines.<br><br><strong>Value:</strong> Any integer between 16 and 65536.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: osDisk: diskType:</td>
  <td>The <a href="https://cloud.google.com/compute/docs/disks#disk-types">{{ gcp_short }} disk type</a> for control plane machines.<br><br><strong>Value:</strong> Valid values are <code>pd-balanced</code>, <code>pd-ssd</code>, or <code>hyperdisk-balanced</code>. The default value is <code>pd-ssd</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: tags:</td>
  <td>Optional. Additional network tags to add to the control plane machines. If set, this parameter overrides the <code>platform.gcp.defaultMachinePlatform.tags</code> parameter for control plane machines.<br><br><strong>Value:</strong> One or more strings, for example <code>control-plane-tag1</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: type:</td>
  <td>The <a href="https://cloud.google.com/compute/docs/machine-types">{{ gcp_short }} machine type</a> for control plane machines. If set, this parameter overrides the <code>platform.gcp.defaultMachinePlatform.type</code> parameter.<br><br><strong>Value:</strong> The {{ gcp_short }} machine type, for example <code>n1-standard-4</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: zones:</td>
  <td>The availability zones where the installation program creates control plane machines.<br><br><strong>Value:</strong> A list of valid <a href="https://cloud.google.com/compute/docs/regions-zones#available">{{ gcp_short }} availability zones</a>, such as <code>us-central1-a</code>, in a<a href="https://yaml.org/spec/1.2/spec.html#sequence//">YAML sequence</a>.<dl><dt>Important</dt><dd>When running your cluster on {{ gcp_short }} 64-bit ARM infrastructures, ensure that you use a zone where Ampere Altra Arm CPU's are available. You can find which zones are compatible with 64-bit ARM processors in the "{{ gcp_short }} availability zones" link.</dd></dl></td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: secureBoot:</td>
  <td>Whether to enable Shielded VM secure boot for control plane machines. Shielded VMs have additional security protocols such as secure boot, firmware and integrity monitoring, and rootkit protection. For more information on Shielded VMs, see Google's documentation on <a href="https://cloud.google.com/shielded-vm">Shielded VMs</a>.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: confidentialCompute:</td>
  <td>Whether to use Confidential VMs for control plane machines. Confidential VMs provide encryption for data during processing. For more information on Confidential computing, see Google's documentation about <a href="https://cloud.google.com/confidential-computing">Confidential Computing</a>.<br><br>Supported values are:<br><br><ul><li><code>Enabled</code>, which automatically selects a Confidential Computing platform</li></ul>+<dl><dt>Important</dt><dd>The <code>Enabled</code> value selects Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV), which is deprecated.</dd></dl><ul><li><code>Disabled</code>, which disables Confidential Computing</li><li><code>AMDEncryptedVirtualizationNestedPaging</code>, which enables Confidential Computing with AMD Secure Encrypted Virtualization Secure Nested Paging (AMD SEV-SNP)</li><li><code>AMDEncryptedVirtualization</code>, which enables Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV)</li></ul>+<dl><dt>Important</dt><dd>The use of Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV) has been deprecated and will be removed in a future release.</dd></dl><ul><li><code>IntelTrustedDomainExtensions</code>, which enables Confidential Computing with Intel Trusted Domain Extensions (Intel TDX)</li></ul>If you specify any value other than <code>Disabled</code>, you must set <code>controlPlane.platform.gcp.defaultMachinePlatform.onHostMaintenance</code> to <code>Terminate</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: onHostMaintenance:</td>
  <td>Specifies the behavior of control plane VMs during a host maintenance event, such as a software or hardware update. For Confidential VMs, this parameter must be set to <code>Terminate</code>. Confidential VMs do not support live VM migration.<br><br><strong>Value:</strong> <code>Terminate</code> or <code>Migrate</code>. The default value is <code>Migrate</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: gcp: serviceAccount:</td>
  <td>Specifies the email address of a {{ gcp_short }} service account to be used during installations. This service account is used to provision control plane machines.<dl><dt>Important</dt><dd>In the case of shared VPC installations, when the service account is not provided, the installation program service account must have the <code>resourcemanager.projects.getIamPolicy</code> and <code>resourcemanager.projects.setIamPolicy</code> permissions in the host project.</dd></dl><br><br><strong>Value:</strong> String. The email address of the service account.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osDisk: encryptionKey: kmsKey: name:</td>
  <td>The name of the customer managed encryption key to be used for compute machine disk encryption.<br><br><strong>Value:</strong> The encryption key name.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osDisk: encryptionKey: kmsKey: keyRing:</td>
  <td>For compute machines, the name of the KMS key ring to which the KMS key belongs.<br><br><strong>Value:</strong> The KMS key ring name.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osDisk: encryptionKey: kmsKey: location:</td>
  <td>For compute machines, the {{ gcp_short }} location in which the key ring exists. For more information about KMS locations, see Google's documentation on <a href="https://cloud.google.com/kms/docs/locations">Cloud KMS locations</a>.<br><br><strong>Value:</strong> The {{ gcp_short }} location for the key ring.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osDisk: encryptionKey: kmsKey: projectID:</td>
  <td>For compute machines, the ID of the project in which the KMS key ring exists. This value defaults to the VM project ID if not set.<br><br><strong>Value:</strong> The {{ gcp_short }} project ID.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osDisk: encryptionKey: kmsKeyServiceAccount:</td>
  <td>The {{ gcp_short }} service account used for the encryption request for compute machines. If this value is not set, the Compute Engine default service account is used. For more information about {{ gcp_short }} service accounts, see Google's documentation on <a href="https://cloud.google.com/compute/docs/access/service-accounts#compute_engine_service_account">service accounts</a>.<br><br><strong>Value:</strong> The {{ gcp_short }} service account email, for example <code><service_account_name>@<project_id>.iam.gserviceaccount.com</code>.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osDisk: diskSizeGB:</td>
  <td>The size of the disk in gigabytes (GB). This value applies to compute machines.<br><br><strong>Value:</strong> Any integer between 16 and 65536.</td>
</tr>
<tr>
  <td>compute: platform: gcp: osDisk: diskType:</td>
  <td>The <a href="https://cloud.google.com/compute/docs/disks#disk-types">{{ gcp_short }} disk type</a> for compute machines.<br><br><strong>Value:</strong> Valid values are <code>pd-balanced</code>, <code>pd-ssd</code>, <code>pd-standard</code>, or <code>hyperdisk-balanced</code>. The default value is <code>pd-ssd</code>.</td>
</tr>
<tr>
  <td>compute: platform: gcp: tags:</td>
  <td>Optional. Additional network tags to add to the compute machines. If set, this parameter overrides the <code>platform.gcp.defaultMachinePlatform.tags</code> parameter for compute machines.<br><br><strong>Value:</strong> One or more strings, for example <code>compute-network-tag1</code>.</td>
</tr>
<tr>
  <td>compute: platform: gcp: type:</td>
  <td>The <a href="https://cloud.google.com/compute/docs/machine-types">{{ gcp_short }} machine type</a> for compute machines. If set, this parameter overrides the <code>platform.gcp.defaultMachinePlatform.type</code> parameter.<br><br><strong>Value:</strong> The {{ gcp_short }} machine type, for example <code>n1-standard-4</code>.</td>
</tr>
<tr>
  <td>compute: platform: gcp: zones:</td>
  <td>The availability zones where the installation program creates compute machines.<br><br><strong>Value:</strong> A list of valid <a href="https://cloud.google.com/compute/docs/regions-zones#available">{{ gcp_short }} availability zones</a>, such as <code>us-central1-a</code>, in a<a href="https://yaml.org/spec/1.2/spec.html#sequence//">YAML sequence</a>.<dl><dt>Important</dt><dd>When running your cluster on {{ gcp_short }} 64-bit ARM infrastructures, ensure that you use a zone where Ampere Altra Arm CPU's are available. You can find which zones are compatible with 64-bit ARM processors in the "{{ gcp_short }} availability zones" link.</dd></dl></td>
</tr>
<tr>
  <td>compute: platform: gcp: secureBoot:</td>
  <td>Whether to enable Shielded VM secure boot for compute machines. Shielded VMs have additional security protocols such as secure boot, firmware and integrity monitoring, and rootkit protection. For more information on Shielded VMs, see Google's documentation on <a href="https://cloud.google.com/shielded-vm">Shielded VMs</a>.<br><br><strong>Value:</strong> <code>Enabled</code> or <code>Disabled</code>. The default value is <code>Disabled</code>.</td>
</tr>
<tr>
  <td>compute: platform: gcp: confidentialCompute:</td>
  <td>Whether to use Confidential VMs for compute machines. Confidential VMs provide encryption for data during processing. For more information on Confidential computing, see Google's documentation on <a href="https://cloud.google.com/confidential-computing">Confidential computing</a>.<br><br>Supported values are:<br><br><ul><li><code>Enabled</code>, which automatically selects a Confidential Computing platform</li></ul>+<dl><dt>Important</dt><dd>The <code>Enabled</code> value selects Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV), which is deprecated.</dd></dl><ul><li><code>Disabled</code>, which disables Confidential Computing</li><li><code>AMDEncryptedVirtualizationNestedPaging</code>, which enables Confidential Computing with AMD Secure Encrypted Virtualization Secure Nested Paging (AMD SEV-SNP)</li><li><code>AMDEncryptedVirtualization</code>, which enables Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV)</li></ul>+<dl><dt>Important</dt><dd>The use of Confidential Computing with AMD Secure Encrypted Virtualization (AMD SEV) has been deprecated and will be removed in a future release.</dd></dl><ul><li><code>IntelTrustedDomainExtensions</code>, which enables Confidential Computing with Intel Trusted Domain Extensions (Intel TDX)</li></ul>If you specify any value other than <code>Disabled</code>, you must set <code>compute.platform.gcp.onHostMaintenance</code> to <code>Terminate</code>.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>compute: platform: gcp: onHostMaintenance:</td>
  <td>Specifies the behavior of compute VMs during a host maintenance event, such as a software or hardware update. For Confidential VMs, this parameter must be set to <code>Terminate</code>. Confidential VMs do not support live VM migration.<br><br><strong>Value:</strong> <code>Terminate</code> or <code>Migrate</code>. The default value is <code>Migrate</code>.</td>
</tr>
</tbody>
</table>

{% endif %}
{% if ibm_cloud %}
## Additional {{ ibm_cloud_title }} configuration parameters {id="installation-configuration-parameters-additional-ibm-cloud_{{ context }}"}

Additional {{ ibm_cloud_name }} configuration parameters are described in the following table:

***Additional {{ ibm_cloud_name }} parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>controlPlane: platform: ibmcloud: bootVolume: encryptionKey:</td>
  <td>An {{ ibm_name }} Key Protect for {{ ibm_cloud_name }} (Key Protect) root key that should be used to encrypt the root (boot) volume of only control plane machines.<br><br><strong>Value:</strong> The Cloud Resource Name (CRN) of the root key.<br><br>The CRN must be enclosed in quotes ("").</td>
</tr>
<tr>
  <td>compute: platform: ibmcloud: bootVolume: encryptionKey:</td>
  <td>A Key Protect root key that should be used to encrypt the root (boot) volume of only compute machines.<br><br><strong>Value:</strong> The CRN of the root key.<br><br>The CRN must be enclosed in quotes ("").</td>
</tr>
<tr>
  <td>platform: ibmcloud: defaultMachinePlatform: bootvolume: encryptionKey:</td>
  <td>A Key Protect root key that should be used to encrypt the root (boot) volume of all of the cluster's machines.<br><br>When specified as part of the default machine configuration, all managed storage classes are updated with this key. Data volumes that are provisioned after the installation are also encrypted using this key.<br><br><strong>Value:</strong> The CRN of the root key.<br><br>The CRN must be enclosed in quotes ("").</td>
</tr>
<tr>
  <td>platform: ibmcloud: resourceGroupName:</td>
  <td>The name of an existing resource group.By default, an installer-provisioned VPC and cluster resources are created and placed in this resource group. The installation program creates the resource group for the cluster if you do not specify these parameters.<br><br>If you are deploying the cluster into an existing VPC, the installation-program-provisioned cluster resources are placed in this resource group. The installation program creates the resource group for the cluster if you do not specify these parameters. The VPC resources that you have provisioned must exist in a resource group that you specify using the <code>networkResourceGroupName</code> parameter.<br><br>In either case, this resource group must only be used for a single cluster installation, as the cluster components assume ownership of all of the resources in the resource group. [^1^]<br><br><strong>Value:</strong> String, for example <code>existing_resource_group</code>.</td>
</tr>
<tr>
  <td>platform: ibmcloud: serviceEndpoints: - name: url:</td>
  <td>A list of service endpoint names and URIs.<br><br>By default, the installation program and cluster components use public service endpoints to access the required {{ ibm_cloud_name }} services.<br><br>If network restrictions limit access to public service endpoints, you can specify an alternate service endpoint to override the default behavior.<br><br>You can specify only one alternate service endpoint for each of the following services:<br><br><ul><li>Cloud Object Storage</li><li>DNS Services</li><li>Global Search</li><li>Global Tagging</li><li>Identity Services</li><li>Key Protect</li><li>Resource Controller</li><li>Resource Manager</li><li>VPC</li></ul><strong>Value:</strong> A valid service endpoint name and fully qualified URI.<br><br>Valid names include:<br><br><ul><li><code>COS</code></li><li><code>DNSServices</code></li><li><code>GlobalServices</code></li><li><code>GlobalTagging</code></li><li><code>IAM</code></li><li><code>KeyProtect</code></li><li><code>ResourceController</code></li><li><code>ResourceManager</code></li><li><code>VPC</code></li></ul></td>
</tr>
<tr>
  <td>platform: ibmcloud: networkResourceGroupName:</td>
  <td>The name of an existing resource group. This resource contains the existing VPC and subnets to which the cluster is deployed. This parameter is required when deploying the cluster to a VPC that you have provisioned.<br><br><strong>Value:</strong> String, for example <code>existing_network_resource_group</code>.</td>
</tr>
<tr>
  <td>platform: ibmcloud: dedicatedHosts: profile:</td>
  <td>The new dedicated host to create. If you specify a value for <code>platform.ibmcloud.dedicatedHosts.name</code>, this parameter is not required.<br><br><strong>Value:</strong> Valid {{ ibm_cloud_name }} dedicated host profile, such as <code>cx2-host-152x304</code>. [^2^]</td>
</tr>
<tr>
  <td>platform: ibmcloud: dedicatedHosts: name:</td>
  <td>An existing dedicated host. If you specify a value for <code>platform.ibmcloud.dedicatedHosts.profile</code>, this parameter is not required.<br><br><strong>Value:</strong> String, for example <code>my-dedicated-host-name</code>.</td>
</tr>
<tr>
  <td>platform: ibmcloud: type:</td>
  <td>The instance type for all {{ ibm_cloud_name }} machines.<br><br><strong>Value:</strong> Valid {{ ibm_cloud_name }} instance type, such as <code>bx2-8x32</code>. [^2^]</td>
</tr>
<tr>
  <td>platform: ibmcloud: vpcName:</td>
  <td>The name of the existing VPC that you want to deploy your cluster to.<br><br><strong>Value:</strong> String.</td>
</tr>
<tr>
  <td>platform: ibmcloud: controlPlaneSubnets:</td>
  <td>The name(s) of the existing subnet(s) in your VPC that you want to deploy your control plane machines to. Specify a subnet for each availability zone.<br><br><strong>Value:</strong> String array</td>
</tr>
<tr>
  <td>platform: ibmcloud: computeSubnets:</td>
  <td>The name(s) of the existing subnet(s) in your VPC that you want to deploy your compute machines to. Specify a subnet for each availability zone. Subnet IDs are not supported.<br><br><strong>Value:</strong> String array</td>
</tr>
</tbody>
</table>

1.  Whether you define an existing resource group, or if the installation program creates one, determines how the resource group is treated when the cluster is uninstalled. If you define a resource group, the installation program removes all of the installer-provisioned resources, but leaves the resource group alone; if a resource group is created as part of the installation, the installation program removes all of the installer-provisioned resources and the resource group.
1.  To determine which profile best meets your needs, see [Instance Profiles](https://cloud.ibm.com/docs/vpc?topic=vpc-profiles&interface=ui) in the {{ ibm_name }} documentation.
{% endif %}

{% if agent or vsphere %}
## Additional VMware vSphere configuration parameters {id="installation-configuration-parameters-additional-vsphere_{{ context }}"}

Additional VMware vSphere configuration parameters are described in the following table:

***Additional VMware vSphere cluster parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>platform: vsphere:</td>
  <td>Describes your account on the cloud platform that hosts your cluster. You can use the parameter to customize the platform. If you provide additional configuration settings for compute and control plane machines in the machine pool, the parameter is not required.<br><br><strong>Value:</strong> A dictionary of vSphere configuration objects</td>
</tr>
<tr>
  {% if vsphere %}<td>platform: vsphere: apiVIPs:</td>{% endif %}
  {% if vsphere %}<td>Virtual IP (VIP) addresses that you configured for control plane API access.<dl><dt>Note</dt><dd>This parameter applies only to installer-provisioned infrastructure without an external load balancer configured. You must not specify this parameter in user-provisioned infrastructure.<br><br>The <code>apiVIP</code> and <code>ingressVIP</code> parameters must come from the same network segment as the <code>networking.machineNetwork</code> parameter. If the <code>networking.machineNetwork</code> parameter is set to <code>10.0.0.0/16</code> then the API and Ingress VIPs must be in one of the <code>10.0.0.0/16</code> machine networks.</dd></dl><br><br><strong>Value:</strong> Multiple IP addresses</td>{% endif %}
</tr>
<tr>
  {% if vsphere %}<td>platform: vsphere: diskType:</td>{% endif %}
  {% if vsphere %}<td>Optional: The disk provisioning method. This value defaults to the vSphere default storage policy if not set.<br><br><strong>Value:</strong> Valid values are <code>thin</code>, <code>thick</code>, or <code>eagerZeroedThick</code>.</td>{% endif %}
</tr>
<tr>
  <td>platform: vsphere: failureDomains:</td>
  <td>Establishes the relationships between a region and zone. You define a failure domain by using vCenter objects, such as a <code>datastore</code> object. A failure domain defines the vCenter location for {{ product_title }} cluster nodes.<br><br><strong>Value:</strong> An array of failure domain configuration objects.</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: name:</td>
  <td>The name of the failure domain.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: region:</td>
  <td>If you define multiple failure domains for your cluster, you must attach the tag to each vCenter data center. To define a region, use a tag from the <code>openshift-region</code> tag category. For a single vSphere data center environment, you do not need to attach a tag, but you must enter an alphanumeric value, such as <code>datacenter</code>, for the parameter.If you want to base your failure domains on host groups, attach these tags to your vSphere clusters instead of your data centers.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: regionType:</td>
  <td>Specifies the <code>ComputeCluster</code> region type to enable host groups.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: server:</td>
  <td>Specifies the fully-qualified hostname or IP address of the VMware vCenter server, so that a client can access failure domain resources. You must apply the <code>server</code> role to the vSphere vCenter server location.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: zone:</td>
  <td>If you define multiple failure domains for your cluster, you must attach a tag to each vCenter cluster. To define a zone, use a tag from the <code>openshift-zone</code> tag category. For a single vSphere data center environment, you do not need to attach a tag, but you must enter an alphanumeric value, such as <code>cluster</code>, for the parameter.If you want to base your failure domains on host groups, define zones that correspond to your host groups instead of your clusters. Use these tags to associate each ESXi host with its host group.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: zoneType:</td>
  <td>Specifies the <code>HostGroup</code> zone type to enable host groups.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: computeCluster:</td>
  <td>The path to the vSphere compute cluster.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: datacenter:</td>
  <td>Lists and defines the data centers where {{ product_title }} virtual machines (VMs) operate.The list of data centers must match the list of data centers specified in the <code>vcenters</code> field.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  {% if vsphere %}<td>platform: vsphere: failureDomains: topology: datastore:</td>{% endif %}
  {% if vsphere %}<td>Specifies the path to a vSphere datastore that stores virtual machines files for a failure domain. You must apply the <code>datastore</code> role to the vSphere vCenter datastore location.<br><br><dl><dt>Important</dt><dd>You can specify the path of any datastore that exists in a datastore cluster. By default, Storage vMotion is automatically enabled for a datastore cluster. Red Hat does not support Storage vMotion, so you must disable Storage vMotion to avoid data loss issues for your {{ product_title }} cluster.<br><br>If you must specify VMs across multiple datastores, use a <code>datastore</code> object to specify a failure domain in your cluster's <code>install-config.yaml</code> configuration file. For more information, see "VMware vSphere region and zone enablement".</dd></dl><br><br><strong>Value:</strong> String</td>{% endif %}
</tr>
<tr>
  {% if agent %}<td>platform: vsphere: failureDomains: topology: datastore:</td>{% endif %}
  {% if agent %}<td>The path to the vSphere datastore that holds virtual machine files, templates, and ISO images.<dl><dt>Important</dt><dd>You can specify the path of any datastore that exists in a datastore cluster.By default, Storage vMotion is automatically enabled for a datastore cluster.Red&#160;Hat does not support Storage vMotion, so you must disable Storage vMotion to avoid data loss issues for your {{ product_title }} cluster.<br><br>If you must specify VMs across multiple datastores, use a <code>datastore</code> object to specify a failure domain in your cluster's <code>install-config.yaml</code> configuration file. For more information, see "VMware vSphere region and zone enablement".</dd></dl><br><br><strong>Value:</strong> String</td>{% endif %}
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: folder:</td>
  <td>Optional: The absolute path of an existing folder where the user creates the virtual machines, for example, <code>/<data_center_name>/vm/<folder_name>/<subfolder_name></code>.If you do not provide this value, the installation program creates a top-level folder in the data center virtual machine folder that is named with the infrastructure ID. If you are providing the infrastructure for the cluster and you do not want to use the default <code>StorageClass</code> object, named <code>thin</code>, you can omit the <code>folder</code> parameter from the <code>install-config.yaml</code> file.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: hostGroup:</td>
  <td>Specifies the vSphere host group to associate with the failure domain.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: networks:</td>
  <td>Lists any network in the vCenter instance that contains the virtual IP addresses and DNS records that you configured.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: resourcePool:</td>
  <td>Optional: The absolute path of an existing resource pool where the installation program creates the virtual machines, for example, <code>/<data_center_name>/host/<cluster_name>/Resources/<resource_pool_name>/<optional_nested_resource_pool_name></code>.If you do not specify a value, the installation program installs the resources in the root of the cluster under <code>/<data_center_name>/host/<cluster_name>/Resources</code>.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: tagIDs:</td>
  <td>Optional: Specifies the ID of the tag to be associated by the installation program. Each VM created by {{ product_title }} is assigned a unique tag that is specific to the cluster. The assigned tag enables the installation program to identify and remove the associated VMs when a cluster is decommissioned. You can list up to ten additional tag IDs to be attached to the VMs provisioned by the installation program. For more information about determining the tag ID, see the <a href="https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-E8E854DD-AA97-4E0C-8419-CE84F93C4058.html">vSphere Tags and Attributes documentation</a>.<br><br><strong>Value:</strong> String, for example <code>urn:vmomi:InventoryServiceTag:208e713c-cae3-4b7f-918e-4051ca7d1f97:GLOBAL</code>.</td>
</tr>
<tr>
  <td>platform: vsphere: failureDomains: topology: template:</td>
  <td>Specifies the absolute path to a pre-existing {{ op_system_first }} image template or virtual machine. The installation program can use the image template or virtual machine to quickly install {{ op_system }} on vSphere hosts. Consider using this parameter as an alternative to uploading an {{ op_system }} image on vSphere hosts. This parameter is available for use only on installer-provisioned infrastructure.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  {% if vsphere %}<td>platform: vsphere: ingressVIPs:</td>{% endif %}
  {% if vsphere %}<td>Virtual IP (VIP) addresses that you configured for cluster Ingress.<dl><dt>Note</dt><dd>This parameter applies only to installer-provisioned infrastructure without an external load balancer configured. You must not specify this parameter in user-provisioned infrastructure.<br><br>The <code>apiVIP</code> and <code>ingressVIP</code> parameters must come from the same network segment as the <code>networking.machineNetwork</code> parameter. If the <code>networking.machineNetwork</code> parameter is set to <code>10.0.0.0/16</code> then the API and Ingress VIPs must be in one of the <code>10.0.0.0/16</code> machine networks.</dd></dl><br><br><strong>Value:</strong> Multiple IP addresses</td>{% endif %}
</tr>
<tr>
  <td>platform: vsphere: vcenters:</td>
  <td>Configures the connection details so that services can communicate with a vCenter server.<br><br><strong>Value:</strong> An array of vCenter configuration objects.</td>
</tr>
<tr>
  <td>platform: vsphere: vcenters: datacenters:</td>
  <td>Lists and defines the data centers where {{ product_title }} virtual machines (VMs) operate. The list of data centers must match the list of data centers specified in the <code>failureDomains</code> field.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: vcenters: password:</td>
  <td>The password associated with the vSphere user.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: vcenters: port:</td>
  <td>The port number used to communicate with the vCenter server.<br><br><strong>Value:</strong> Integer</td>
</tr>
<tr>
  <td>platform: vsphere: vcenters: server:</td>
  <td>The fully qualified host name (FQHN) or IP address of the vCenter server.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: vcenters: user:</td>
  <td>The username associated with the vSphere user.<br><br><strong>Value:</strong> String</td>
</tr>
</tbody>
</table>

## Deprecated VMware vSphere configuration parameters {id="deprecated-parameters-vsphere_{{ context }}"}

In {{ product_title }} 4.13, the following vSphere configuration parameters are deprecated. You can continue to use these parameters, but the installation program does not automatically specify these parameters in the `install-config.yaml` file.

The following table lists each deprecated vSphere configuration parameter:

***Deprecated VMware vSphere cluster parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  {% if vsphere %}<td>platform: vsphere: apiVIP:</td>{% endif %}
  {% if vsphere %}<td>The virtual IP (VIP) address that you configured for control plane API access.<br><br><dl><dt>Note</dt><dd>In {{ product_title }} 4.12 and later, the <code>apiVIP</code> configuration setting is deprecated. Instead, use a <code>List</code> format to enter a value in the <code>apiVIPs</code> configuration setting.</dd></dl><br><br><strong>Value:</strong> An IP address, for example <code>128.0.0.1</code>.</td>{% endif %}
</tr>
<tr>
  <td>platform: vsphere: cluster:</td>
  <td>The vCenter cluster to install the {{ product_title }} cluster in.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: datacenter:</td>
  <td>Defines the data center where {{ product_title }} virtual machines (VMs) operate.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: defaultDatastore:</td>
  <td>The name of the default datastore to use for provisioning volumes.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: folder:</td>
  <td>Optional: The absolute path of an existing folder where the installation program creates the virtual machines. If you do not provide this value, the installation program creates a folder that is named with the infrastructure ID in the data center virtual machine folder.<br><br><strong>Value:</strong> String, for example, <code>/<data_center_name>/vm/<folder_name>/<subfolder_name></code>.</td>
</tr>
<tr>
  {% if vsphere %}<td>platform: vsphere: ingressVIP:</td>{% endif %}
  {% if vsphere %}<td>Virtual IP (VIP) addresses that you configured for cluster Ingress.<dl><dt>Note</dt><dd>In {{ product_title }} 4.12 and later, the <code>ingressVIP</code> configuration setting is deprecated. Instead, use a <code>List</code> format to enter a value in the <code>ingressVIPs</code> configuration setting.</dd></dl><br><br><strong>Value:</strong> An IP address, for example <code>128.0.0.1</code>.</td>{% endif %}
</tr>
<tr>
  {% if vsphere %}<td>platform: vsphere: network:</td>{% endif %}
  {% if vsphere %}<td>The network in the vCenter instance that contains the virtual IP addresses and DNS records that you configured.<br><br><strong>Value:</strong> String</td>{% endif %}
</tr>
<tr>
  <td>platform: vsphere: password:</td>
  <td>The password for the vCenter user name.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: resourcePool:</td>
  <td>Optional: The absolute path of an existing resource pool where the installation program creates the virtual machines. If you do not specify a value, the installation program installs the resources in the root of the cluster under <code>/<data_center_name>/host/<cluster_name>/Resources</code>.<br><br><strong>Value:</strong> String, for example, <code>/<data_center_name>/host/<cluster_name>/Resources/<resource_pool_name>/<optional_nested_resource_pool_name></code>.</td>
</tr>
<tr>
  <td>platform: vsphere: username:</td>
  <td>The user name to use to connect to the vCenter instance with. This user must have at least the roles and privileges that are required for <a href="https://github.com/vmware-archive/vsphere-storage-for-kubernetes/blob/master/documentation/vcp-roles.md">static or dynamic persistent volume provisioning</a> in vSphere.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: vCenter:</td>
  <td>The fully-qualified hostname or IP address of a vCenter server.<br><br><strong>Value:</strong> String</td>
</tr>
</tbody>
</table>

{% endif %}

{% if vsphere %}
## Optional VMware vSphere machine pool configuration parameters {id="installation-configuration-parameters-optional-vsphere_{{ context }}"}

Optional VMware vSphere machine pool configuration parameters are described in the following table:

***Optional VMware vSphere machine pool parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>platform: vsphere: clusterOSImage:</td>
  <td>The location from which the installation program downloads the {{ op_system_first }} image. Before setting a path value for this parameter, ensure that the default {{ op_system }} boot image in the {{ product_title }} release matches the {{ op_system }} image template or virtual machine version; otherwise, cluster installation might fail. As an alternative to this configuration, you can use the <code>topology.template</code> parameter to point to the path in your vCenter environment that includes an {{ op_system }} image in Open Virtual Appliance (OVA) format.<br><br><strong>Value:</strong> An HTTP or HTTPS URL, optionally with a SHA-256 checksum. For example, <code>\https://mirror.openshift.com/images/rhcos-<version>-vmware.<architecture>.ova</code>.</td>
</tr>
<tr>
  <td>platform: vsphere: osDisk: diskSizeGB:</td>
  <td>The size of the disk in gigabytes.<br><br><strong>Value:</strong> Integer</td>
</tr>
<tr>
  <td>platform: vsphere: cpus:</td>
  <td>The total number of virtual processor cores to assign a virtual machine. The value of <code>platform.vsphere.cpus</code> must be a multiple of <code>platform.vsphere.coresPerSocket</code> value.<br><br><strong>Value:</strong> Integer</td>
</tr>
<tr>
  <td>platform: vsphere: coresPerSocket:</td>
  <td>The number of cores per socket in a virtual machine, where <code>platform.vsphere.cpus</code> divided by <code>platform.vsphere.coresPerSocket</code> determines the number of virtual sockets on a virtual machine. Control plane nodes and compute nodes default to <code>4</code> virtual sockets on a virtual machine.<br><br><strong>Value:</strong> Integer</td>
</tr>
<tr>
  <td>platform: vsphere: memoryMB:</td>
  <td>The size of a virtual machine's memory in megabytes.<br><br><strong>Value:</strong> Integer</td>
</tr>
<tr>
  <td>platform: vsphere: dataDisks: name:</td>
  <td>The name of the data disk to add to the virtual machines. The maximum name length is 80 characters.<br><br><dl><dt>Important</dt><dd>Installing {{ product_title }} on {{ vmw_full }} using multiple data disks is a Technology Preview feature only. Technology Preview features are not supported with Red Hat production service level agreements (SLAs) and might not be functionally complete. Red Hat does not recommend using them in production. These features provide early access to upcoming product features, enabling customers to test functionality and provide feedback during the development process.<br><br>For more information about the support scope of Red Hat Technology Preview features, see <a href="https://access.redhat.com/support/offerings/techpreview/">Technology Preview Features Support Scope</a>.</dd></dl><br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: vsphere: dataDisks: sizeGiB:</td>
  <td>The size of the data disk to add to the virtual machines. The maximum size is 16384 GiB.<br><br><strong>Value:</strong> Integer</td>
</tr>
<tr>
  <td>platform: vsphere: dataDisks: provisioningMode:</td>
  <td>Optional: The data disk provisioning method. This value defaults to the vSphere default storage policy, if not set.<br><br><strong>Value:</strong> Valid values are <code>Thin</code>, <code>Thick</code>, or <code>EagerlyZeroed</code>.</td>
</tr>
</tbody>
</table>

{% endif %}

{% if ash %}
## Additional Azure Stack Hub configuration parameters {id="installation-configuration-parameters-additional-azure-stack-hub_{{ context }}"}

Additional Azure configuration parameters are described in the following table:

***Additional Azure Stack Hub parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>compute: platform: azure: osDisk: diskSizeGB:</td>
  <td>The Azure disk size for the VM.<br><br><strong>Value:</strong> Integer that represents the size of the disk in GB. The default is <code>128</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: osDisk: diskType:</td>
  <td>Defines the type of disk.<br><br><strong>Value:</strong> <code>standard_LRS</code> or <code>premium_LRS</code>. The default is <code>premium_LRS</code>.</td>
</tr>
<tr>
  <td>compute: platform: azure: type:</td>
  <td>Defines the azure instance type for compute machines.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: diskSizeGB:</td>
  <td>The Azure disk size for the VM.<br><br><strong>Value:</strong> Integer that represents the size of the disk in GB. The default is <code>1024</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: osDisk: diskType:</td>
  <td>Defines the type of disk.<br><br><strong>Value:</strong> <code>premium_LRS</code>.</td>
</tr>
<tr>
  <td>controlPlane: platform: azure: type:</td>
  <td>Defines the azure instance type for control plane machines.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: diskSizeGB:</td>
  <td>The Azure disk size for the VM.<br><br><strong>Value:</strong> Integer that represents the size of the disk in GB. The default is <code>128</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: osDisk: diskType:</td>
  <td>Defines the type of disk.<br><br><strong>Value:</strong> <code>standard_LRS</code> or <code>premium_LRS</code>. The default is <code>premium_LRS</code>.</td>
</tr>
<tr>
  <td>platform: azure: defaultMachinePlatform: type:</td>
  <td>The Azure instance type for control plane and compute machines.<br><br><strong>Value:</strong> The Azure instance type.</td>
</tr>
<tr>
  <td>platform: azure: armEndpoint:</td>
  <td>The URL of the Azure Resource Manager endpoint that your Azure Stack Hub operator provides.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: azure: baseDomainResourceGroupName:</td>
  <td>The name of the resource group that contains the DNS zone for your base domain.<br><br><strong>Value:</strong> String, for example <code>production_cluster</code>.</td>
</tr>
<tr>
  <td>platform: azure: region:</td>
  <td>The name of your Azure Stack Hub local region.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: azure: resourceGroupName:</td>
  <td>The name of an already existing resource group to install your cluster to. This resource group must be empty and only used for this specific cluster; the cluster components assume ownership of all resources in the resource group. If you limit the service principal scope of the installation program to this resource group, you must ensure all other resources used by the installation program in your environment have the necessary permissions, such as the public DNS zone and virtual network. Destroying the cluster by using the installation program deletes this resource group.<br><br><strong>Value:</strong> String, for example <code>existing_resource_group</code>.</td>
</tr>
<tr>
  <td>platform: azure: outboundType:</td>
  <td>The outbound routing strategy used to connect your cluster to the internet. If you are using user-defined routing, you must have pre-existing networking available. The outbound routing must be configured before installing a cluster. The installation program does not configure user-defined routing.<br><br><strong>Value:</strong> <code>LoadBalancer</code> or <code>UserDefinedRouting</code>. The default is <code>LoadBalancer</code>.</td>
</tr>
<tr>
  <td>platform: azure: cloudName:</td>
  <td>The name of the Azure cloud environment that is used to configure the Azure SDK with the appropriate Azure API endpoints.<br><br><strong>Value:</strong> <code>AzureStackCloud</code></td>
</tr>
<tr>
  <td>clusterOSImage:</td>
  <td>The URL of a storage blob in the Azure Stack environment that contains an {{ op_system }} VHD.<br><br><strong>Value:</strong> String, for example, \https://vhdsa.blob.example.example.com/vhd/rhcos-410.84.202112040202-0-azurestack.x86_64.vhd</td>
</tr>
</tbody>
</table>

{% endif %}

{% if nutanix %}
## Additional Nutanix configuration parameters {id="installation-configuration-parameters-additional-nutanix_{{ context }}"}

Additional Nutanix configuration parameters are described in the following table:

***Additional Nutanix cluster parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>compute: platform: nutanix: categories: key:</td>
  <td>The name of a prism category key to apply to compute VMs. This parameter must be accompanied by the <code>value</code> parameter, and both <code>key</code> and <code>value</code> parameters must exist in Prism Central. For more information on categories, see <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2022_6:ssp-ssp-categories-manage-pc-c.html">Category management</a>.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: categories: value:</td>
  <td>The value of a prism category key-value pair to apply to compute VMs. This parameter must be accompanied by the <code>key</code> parameter, and both <code>key</code> and <code>value</code> parameters must exist in Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: failureDomains:</td>
  <td>The failure domains that apply to only compute machines.<br><br>Failure domains are specified in <code>platform.nutanix.failureDomains</code>.<br><br><strong>Value:</strong> List.<br><br>The name of one or more failures domains.</td>
</tr>
<tr>
  <td>compute: platform: nutanix: gpus: type:</td>
  <td>The type of identifier used to attach a GPU to a compute machine. Valid values are "Name" or "DeviceID".<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: gpus: name:</td>
  <td>The name of the GPU device to attach to a compute machine. This parameter is required if the GPU <code>type</code> is "Name".<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: gpus: deviceID:</td>
  <td>The device identifier of the GPU device to attach to a compute machine. This information is available in Prism Central. This parameter is required if the GPU <code>type</code> is "DeviceID".<br><br><strong>Value:</strong> Integer</td>
</tr>
<tr>
  <td>compute: platform: nutanix: project: type:</td>
  <td>The type of identifier you use to select a project for compute VMs.  Projects define logical groups of user roles for managing permissions, networks, and other parameters. For more information on projects, see <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2022_9:ssp-app-mgmt-project-env-c.html">Projects Overview</a>.<br><br><strong>Value:</strong> <code>name</code> or <code>uuid</code></td>
</tr>
<tr>
  <td>compute: platform: nutanix: project: name: or uuid:</td>
  <td>The name or UUID of a project with which compute VMs are associated. This parameter must be accompanied by the <code>type</code> parameter.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: bootType:</td>
  <td>The boot type that the compute machines use. You must use the <code>Legacy</code> boot type in {{ product_title }} {{ product_version }}. For more information on boot types, see <a href="https://portal.nutanix.com/page/documents/kbs/details?targetId=kA07V000000H3K9SAK">Understanding UEFI, Secure Boot, and TPM in the Virtualized Environment</a>.<br><br><strong>Value:</strong> <code>Legacy</code>, <code>SecureBoot</code> or <code>UEFI</code>. The default is <code>Legacy</code>.</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: dataSourceImage: name:</td>
  <td>Optional. The name of the data source image for the virtual machine disk in Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: dataSourceImage: referenceName:</td>
  <td>Optional. The reference name of the data source image in the failure domain. If you use this parameter, you must configure a matching <code>dataSourceImage</code> with the same <code>referenceName</code> in each failure domain that the compute nodes occupy. For more information about configuring failure domains, see <em>Configuring failure domains</em> in the <em>Installing a cluster on Nutanix</em> page.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: dataSourceImage: uuid:</td>
  <td>The UUID of the data source image in Prism Central. This value is required.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: deviceProperties: adapterType:</td>
  <td>The adapter type of the disk address. If the disk type is "Disk", valid values are "SCSI", "IDE", "PCI", "SATA" or "SPAPR".If the disk type is "CDRom", valid values are "IDE" or "SATA".<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: deviceProperties: deviceIndex:</td>
  <td>The index of the disk address. Valid values are non-negative integers including <code>0</code>. The device index for disks that share the same adapter type should start at 0 and increase consecutively. The default value is <code>0</code>. For each virtual machine, the <code>Disk.SCSI.0</code> and <code>CDRom.IDE.0</code> indices are reserved. If you use the <code>Disk.SCSI</code> or <code>CDRom.IDE</code> disk and adapter types, the <code>deviceIndex</code> should start at <code>1</code>.<br><br><strong>Value:</strong> Non-negative integer, including <code>0</code>.</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: deviceProperties: deviceType:</td>
  <td>The disk device type. Valid values are "Disk" and "CDRom".<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: diskSize:</td>
  <td>The size of the disk to attach to the virtual machine. The minimum size is 1Gb.<br><br><strong>Value:</strong> Quantity format, such as 100G or 100Gi. For more information on this format, see link:https://pkg.go.dev/k8s.io/apimachinery/pkg/api/resource#Format.</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: storageConfig: diskMode:</td>
  <td>The disk mode. Valid values are <code>Standard</code> or <code>Flash</code>, and the default is <code>Standard</code>.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: storageConfig: storageContainer: name:</td>
  <td>Optional. The name of the storage container object used by the virtual machine disk in Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: storageConfig: storageContainer: referenceName:</td>
  <td>Optional. The reference name of the storage container in the failure domain. If you use this, you must configure a matching <code>storageContainer</code> with the same <code>referenceName</code> in each failure domain the compute nodes occupy. For more information about configuring failure domains, see <em>Configuring failure domains</em> in the <em>Installing a cluster on Nutanix</em> page.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>compute: platform: nutanix: dataDisks: storageConfig: storageContainer: uuid:</td>
  <td>The UUID of the storage container in Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>controlPlane: platform: nutanix: categories: key:</td>
  <td>The name of a prism category key to apply to control plane VMs. This parameter must be accompanied by the <code>value</code> parameter, and both <code>key</code> and <code>value</code> parameters must exist in Prism Central. For more information on categories, see <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2022_6:ssp-ssp-categories-manage-pc-c.html">Category management</a>.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>controlPlane: platform: nutanix: categories: value:</td>
  <td>The value of a prism category key-value pair to apply to control plane VMs. This parameter must be accompanied by the <code>key</code> parameter, and both <code>key</code> and <code>value</code> parameters must exist in Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>controlPlane: platform: nutanix: failureDomains:</td>
  <td>The failure domains that apply to only control plane machines.<br><br>Failure domains are specified in <code>platform.nutanix.failureDomains</code>.<br><br><strong>Value:</strong> List.<br><br>The name of one or more failures domains.</td>
</tr>
<tr>
  <td>controlPlane: platform: nutanix: project: type:</td>
  <td>The type of identifier you use to select a project for control plane VMs.  Projects define logical groups of user roles for managing permissions, networks, and other parameters. For more information on projects, see <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2022_9:ssp-app-mgmt-project-env-c.html">Projects Overview</a>.<br><br><strong>Value:</strong> <code>name</code> or <code>uuid</code></td>
</tr>
<tr>
  <td>controlPlane: platform: nutanix: project: name: or uuid:</td>
  <td>The name or UUID of a project with which control plane VMs are associated. This parameter must be accompanied by the <code>type</code> parameter.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: defaultMachinePlatform: categories: key:</td>
  <td>The name of a prism category key to apply to all VMs. This parameter must be accompanied by the <code>value</code> parameter, and both <code>key</code> and <code>value</code> parameters must exist in Prism Central. For more information on categories, see <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2022_6:ssp-ssp-categories-manage-pc-c.html">Category management</a>.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: defaultMachinePlatform: categories: value:</td>
  <td>The value of a prism category key-value pair to apply to all VMs. This parameter must be accompanied by the <code>key</code> parameter, and both <code>key</code> and <code>value</code> parameters must exist in Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: defaultMachinePlatform: failureDomains:</td>
  <td>The failure domains that apply to both control plane and compute machines.<br><br>Failure domains are specified in <code>platform.nutanix.failureDomains</code>.<br><br><strong>Value:</strong> List.<br><br>The name of one or more failures domains.</td>
</tr>
<tr>
  <td>platform: nutanix: defaultMachinePlatform: project: type:</td>
  <td>The type of identifier you use to select a project for all VMs. Projects define logical groups of user roles for managing permissions, networks, and other parameters. For more information on projects, see <a href="https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-vpc_2022_9:ssp-app-mgmt-project-env-c.html">Projects Overview</a>.<br><br><strong>Value:</strong> <code>name</code> or <code>uuid</code>.</td>
</tr>
<tr>
  <td>platform: nutanix: defaultMachinePlatform: project: name: or uuid:</td>
  <td>The name or UUID of a project with which all VMs are associated. This parameter must be accompanied by the <code>type</code> parameter.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: defaultMachinePlatform: bootType:</td>
  <td>The boot type for all machines. You must use the <code>Legacy</code> boot type in {{ product_title }} {{ product_version }}. For more information on boot types, see <a href="https://portal.nutanix.com/page/documents/kbs/details?targetId=kA07V000000H3K9SAK">Understanding UEFI, Secure Boot, and TPM in the Virtualized Environment</a>.<br><br><strong>Value:</strong> <code>Legacy</code>, <code>SecureBoot</code> or <code>UEFI</code>. The default is <code>Legacy</code>.</td>
</tr>
<tr>
  <td>platform: nutanix: apiVIP:</td>
  <td>The virtual IP (VIP) address that you configured for control plane API access.<br><br><strong>Value:</strong> IP address</td>
</tr>
<tr>
  <td>platform: nutanix: failureDomains: - name: prismElement: name: uuid: subnetUUIDs: -</td>
  <td>By default, the installation program installs cluster machines to a single Prism Element instance. A maximum of 32 subnets for each failure domain (Prism Element) in an {{ product_title }} cluster is supported. All <code>subnetUUID</code> values must be unique. You can specify additional Prism Element instances for fault tolerance, and then apply them to:<br><br><ul><li>The cluster's default machine configuration</li><li>Only control plane or compute machine pools</li></ul><strong>Value:</strong> A list of configured failure domains.<br><br>For more information on usage, see "Configuring a failure domain" in "Installing a cluster on Nutanix".</td>
</tr>
<tr>
  <td>platform: nutanix: ingressVIP:</td>
  <td>The virtual IP (VIP) address that you configured for cluster ingress.<br><br><strong>Value:</strong> IP address</td>
</tr>
<tr>
  <td>platform: nutanix: prismCentral: endpoint: address:</td>
  <td>The Prism Central domain name or IP address.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: prismCentral: endpoint: port:</td>
  <td>The port that is used to log into Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: prismCentral: password:</td>
  <td>The password for the Prism Central user name.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: preloadedOSImageName:</td>
  <td>Instead of creating and uploading a {{ op_system }} image object for each {{ product_title }} cluster, this parameter uses the named, preloaded {{ op_system }} image object from the Prism Elements to which the {{ product_title }} cluster is deployed.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: prismCentral: username:</td>
  <td>The user name that is used to log into Prism Central.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: prismElements: endpoint: address:</td>
  <td>The Prism Element domain name or IP address. [^1^]<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: prismElements: endpoint: port:</td>
  <td>The port that is used to log into Prism Element.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: prismElements: uuid:</td>
  <td>The universally unique identifier (UUID) for Prism Element.<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: subnetUUIDs:</td>
  <td>The UUID of the Prism Element network that contains the virtual IP addresses and DNS records that you configured. [^2^]<br><br><strong>Value:</strong> String</td>
</tr>
<tr>
  <td>platform: nutanix: clusterOSImage:</td>
  <td>Optional: By default, the installation program downloads and installs the {{ op_system_first }} image. If Prism Central does not have internet access, you can override the default behavior by hosting the {{ op_system }} image on any HTTP server and pointing the installation program to the image.<br><br><strong>Value:</strong> An HTTP or HTTPS URL, optionally with a SHA-256 checksum. For example, \http://example.com/images/rhcos-47.83.202103221318-0-nutanix.x86_64.qcow2</td>
</tr>
</tbody>
</table>

1.  The `prismElements` section holds a list of Prism Elements (clusters). A Prism Element encompasses all of the Nutanix resources, for example virtual machines and subnets, that are used to host the {{ product_title }} cluster.
1.  A maximum of 32 subnets for each Prism Element in an {{ product_title }} cluster is supported. All `subnetUUID` values must be unique.
{% endif %}

{% if context == "installation-config-parameters-vsphere" %}
{%- set vsphere = false -%}
{% endif %}
{% if context == "installation-config-parameters-gcp" %}
{%- set gcp = false -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}
{% if context == "installation-config-parameters-ash" %}
{%- set ash = false -%}
{% endif %}
{% if context == "installation-config-parameters-bare-metal" %}
{%- set bare = false -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-cloud-vpc" %}
{%- set ibm_cloud = false -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-power-vs" %}
{%- set ibm_power_vs = false -%}
{% endif %}
{% if context == "installation-config-parameters-ibm-powervc" %}
{%- set ibm_power_vc = false -%}
{% endif %}
{% if context == "installation-config-parameters-nutanix" %}
{%- set nutanix = false -%}
{% endif %}
{% if context == "installation-config-parameters-openstack" %}
{%- set osp = false -%}
{% endif %}
{% if context == "installation-config-parameters-azure" %}
{%- set azure = false -%}
{% endif %}
{% if context == "installation-config-parameters-aws" %}
{%- set aws = false -%}
{% endif %}
{% if context == "installation-config-parameters-agent" %}
{%- set agent = false -%}
{% endif %}
{%- set platform = false -%}
{% if context == "installation-config-parameters-generic" %}
{%- set generic = false -%}
{% endif %}