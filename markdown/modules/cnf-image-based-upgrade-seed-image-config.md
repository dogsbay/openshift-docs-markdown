{% if context == "ibi-preparing-image-based-install" %}
{%- set ibi = true -%}
{% endif %}

{% if context == "generate-seed" %}
{%- set ibu = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Seed image configuration {id="cnf-image-based-upgrade-seed-image-config_{{ context }}"}

{%- if ibu %}
The seed image targets a set of {{ sno }} clusters with the same hardware and similar configuration.
This means that the seed image must have all of the components and configuration that the seed cluster shares with the target clusters.
Therefore, the seed image generated from the seed cluster cannot contain any cluster-specific configuration.
{% endif %} {._abstract}

{% if ibi %}
You can create a seed image from a {{ sno }} cluster with the same hardware as your bare-metal host, and with a similar target cluster configuration. However, the seed image generated from the seed cluster cannot contain any cluster-specific configuration.
{% endif %}

The following table lists the components, resources, and configurations that you must and must not include in your seed image:

***Seed image configuration***

<table>
<thead>
<tr>
  <th>Cluster configuration</th>
  <th>Include in seed image</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Performance profile</td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>MachineConfig</code> resources for the target cluster</td>
  <td>Yes</td>
</tr>
<tr>
  <td>IP version configuration, either IPv4, IPv6, or dual-stack networking</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Set of Day 2 Operators, including the {{ lcao }} and the {{ oadp_short }} Operator</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Disconnected registry configuration ^[2]^</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Valid proxy configuration ^[3]^</td>
  <td>Yes</td>
</tr>
<tr>
  <td>FIPS configuration</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Dedicated partition on the primary disk for container storage that matches the size of the target clusters</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Local volumes<br><br><ul><li><code>StorageClass</code> used in <code>LocalVolume</code> for LSO</li><li><code>LocalVolume</code> for LSO</li><li><code>LVMCluster</code> CR for LVMS</li></ul></td>
  <td>No</td>
</tr>
<tr>
  {% if ibu %}<td>{{ oadp_short }} <code>DataProtectionApplication</code> CR</td>{% endif %}
  {% if ibu %}<td>No</td>{% endif %}
</tr>
</tbody>
</table>

1.  If the seed cluster is installed in a disconnected environment, the target clusters must also be installed in a disconnected environment.
1.  The proxy configuration must be either enabled or disabled in both the seed and target clusters. However, the proxy servers configured on the clusters does not have to match.

## Seed image configuration using the RAN DU profile {id="ztp-image-based-upgrade-seed-image-config-ran_{{ context }}"}

The following table lists the components, resources, and configurations that you must and must not include in the seed image when using the RAN DU profile:

**Seed image configuration with RAN DU profile**

| Resource | Include in seed image |
| --- | --- |
| All extra manifests that are applied as part of Day 0 installation | Yes |
| All Day 2 Operator subscriptions | Yes |
| `DisableOLMPprof.yaml` | Yes |
| `TunedPerformancePatch.yaml` | Yes |
| `PerformanceProfile.yaml` | Yes |
| `SriovOperatorConfig.yaml` | Yes |
| `DisableSnoNetworkDiag.yaml` | Yes |
| `StorageClass.yaml` | No, if it is used in `StorageLV.yaml` |
| `StorageLV.yaml` | No |
| `StorageLVMCluster.yaml` | No |
| `SriovFecClusterConfig.yaml` | No |
| `SriovVrbClusterConfig.yaml` | No |

{% if ibu %}
***Seed image configuration with RAN DU profile for extra manifests***

<table>
<thead>
<tr>
  <th>Resource</th>
  <th>Apply as extra manifest</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>ClusterLogForwarder.yaml</code></td>
  <td>Yes<br><br><dl><dt>Note</dt><dd>The DU profile includes the Cluster Logging Operator, but the profile does not configure or apply any Cluster Logging Operator CRs. To enable log forwarding, include the <code>ClusterLogForwarder.yaml</code> CR as an extra manifest. The extra manifest is applied to the target {{ sno }} cluster during the image-based upgrade process.</dd></dl></td>
</tr>
<tr>
  <td><code>ReduceMonitoringFootprint.yaml</code></td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>PtpOperatorConfigForEvent.yaml</code></td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>DefaultCatsrc.yaml</code></td>
  <td>Yes</td>
</tr>
<tr>
  <td><code>PtpConfig.yaml</code></td>
  <td>If the interfaces of the target cluster are common with the seed cluster, you can include them in the seed image. Otherwise, apply it as extra manifests.</td>
</tr>
<tr>
  <td><code>SriovNetwork.yaml</code><code>SriovNetworkNodePolicy.yaml</code></td>
  <td>If the configuration, including namespaces, is exactly the same on both the seed and target cluster, you can include them in the seed image. Otherwise, apply them as extra manifests.</td>
</tr>
</tbody>
</table>

{% endif %}

{% if ibi %}
The following list of resources and configurations can be applied as extra manifests or by using {{ rh_rhacm }} policies:

*   `ClusterLogForwarder.yaml`
*   `ReduceMonitoringFootprint.yaml`
*   `PtpOperatorConfigForEvent.yaml`
*   `DefaultCatsrc.yaml`
*   `PtpConfig.yaml`
*   `SriovNetwork.yaml`


:::important

If you are using {{ ztp }}, enable these resources by using {{ rh_rhacm }} policies to ensure configuration changes can be applied throughout the cluster lifecycle.

:::

{% endif %}

{% if context == "ibi-preparing-image-based-install" %}
{%- set ibi = false -%}
{% endif %}

{% if context == "generate-seed" %}
{%- set ibu = false -%}
{% endif %}