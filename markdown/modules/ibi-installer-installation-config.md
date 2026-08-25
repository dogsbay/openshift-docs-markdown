{%- set _mod_docs_content_type = "REFERENCE" %}
# Reference specifications for the image-based-installation-config.yaml manifest {id="ibi-installer-installation-config_{{ context }}"}

The following content describes the specifications for the `image-based-installation-config.yaml` manifest.  {._abstract}

The `openshift-install` program uses the `image-based-installation-config.yaml` manifest to create a live installation ISO for image-based installations of {{ sno }}. 

**Required specifications**

<table>
<tbody>
<tr>
  <td>Specification</td>
  <td>Type</td>
  <td>Description</td>
</tr>
<tr>
  <td><code>seedImage</code></td>
  <td><code>string</code></td>
  <td>Specifies the seed image to use in the ISO generation process.</td>
</tr>
<tr>
  <td><code>seedVersion</code></td>
  <td><code>string</code></td>
  <td>Specifies the {{ product_title }} release version of the seed image. The release version in the seed image must match the release version that you specify in the <code>seedVersion</code> field.</td>
</tr>
<tr>
  <td><code>installationDisk</code></td>
  <td><code>string</code></td>
  <td>Specifies the disk that will be used for the installation process.<br><br>Because the disk discovery order is not guaranteed, the kernel name of the disk can change across booting options for machines with multiple disks. For example, <code>/dev/sda</code> becomes <code>/dev/sdb</code> and vice versa. To avoid this issue, you must use a persistent disk attribute, such as the disk World Wide Name (WWN), for example: <code>/dev/disk/by-id/wwn-&lt;disk-id&gt;</code>.</td>
</tr>
<tr>
  <td><code>pullSecret</code></td>
  <td><code>string</code></td>
  <td>Specifies the pull secret to use during the precache process. The pull secret contains authentication credentials for pulling the release payload images from the container registry.<br><br>If the seed image requires a separate private registry authentication, add the authentication details to the pull secret.</td>
</tr>
</tbody>
</table>

**Optional specifications**

<table>
<tbody>
<tr>
  <td>Specification</td>
  <td>Type</td>
  <td>Description</td>
</tr>
<tr>
  <td><code>shutdown</code></td>
  <td><code>boolean</code></td>
  <td>Specifies if the host shuts down after the installation process completes. The default value is <code>false</code>.</td>
</tr>
<tr>
  <td><code>extraPartitionStart</code></td>
  <td><code>string</code></td>
  <td>Specifies the start of the extra partition used for <code>/var/lib/containers</code>. The default value is <code>-40G</code>, which means that the partition will be exactly 40GiB in size and uses the space 40GiB from the end of the disk. If you specify a positive value, the partition will start at that position of the disk and extend to the end of the disk.</td>
</tr>
<tr>
  <td><code>extraPartitionLabel</code></td>
  <td><code>string</code></td>
  <td>The label of the extra partition you use for <code>/var/lib/containers</code>. The default partition label is <code>var-lib-containers</code>.<br><br>[NOTE] ==== You must ensure that the partition label in the installation ISO matches the partition label set in the machine configuration for the seed image. If the partition labels are different, the partition mount fails during installation on the host. For more information, see "Configuring a shared container partition between ostree stateroots". ====</td>
</tr>
<tr>
  <td><code>extraPartitionNumber</code></td>
  <td><code>unsigned integer</code></td>
  <td>The number of the extra partition you use for <code>/var/lib/containers</code>. The default number is <code>5</code>.</td>
</tr>
<tr>
  <td><code>skipDiskCleanup</code></td>
  <td><code>boolean</code></td>
  <td>The installation process formats the disk on the host. Set this specification to 'true' to skip this step. The default is <code>false</code>.</td>
</tr>
<tr>
  <td><code>networkConfig</code></td>
  <td><code>string</code></td>
  <td>Specifies networking configurations for the host, for example: [source,yaml] ---- networkConfig: interfaces: - name: ens1f0 type: ethernet state: up ... ---- If you require static networking, you must install the <code>nmstatectl</code> library on the host that creates the live installation ISO. For further information about defining network configurations by using <code>nmstate</code>, see <a href="https://nmstate.io/">nmstate.io</a>. [IMPORTANT] ==== The name of the interface must match the actual NIC name as shown in the operating system. ====</td>
</tr>
<tr>
  <td><code>proxy</code></td>
  <td><code>string</code></td>
  <td>Specifies proxy settings to use during the installation ISO generation, for example: [source,yaml] ---- proxy: httpProxy: "http://proxy.example.com:8080" httpsProxy: "http://proxy.example.com:8080" noProxy: "no_proxy.example.com" ----</td>
</tr>
<tr>
  <td><code>imageDigestSources</code></td>
  <td><code>string</code></td>
  <td>Specifies the sources or repositories for the release-image content, for example: [source,yaml] ---- imageDigestSources: - mirrors: - "registry.example.com:5000/ocp4/openshift4" source: "quay.io/openshift-release-dev/ocp-release" ----</td>
</tr>
<tr>
  <td><code>additionalTrustBundle</code></td>
  <td><code>string</code></td>
  <td>Specifies the PEM-encoded X.509 certificate bundle. The installation program adds this to the <code>/etc/pki/ca-trust/source/anchors/</code> directory in the installation ISO. [source,yaml] ---- additionalTrustBundle:  -----BEGIN CERTIFICATE----- MTICLDCCAdKgAwfBAgIBAGAKBggqhkjOPQRDAjB9MQswCQYRVEQGE ... l2wOuDwKQa+upc4GftXE7C//4mKBNBC6Ty01gUaTIpo= -----END CERTIFICATE----- ----</td>
</tr>
<tr>
  <td><code>sshKey</code></td>
  <td><code>string</code></td>
  <td>Specifies the SSH key to authenticate access to the host.</td>
</tr>
<tr>
  <td><code>ignitionConfigOverride</code></td>
  <td><code>string</code></td>
  <td>Specifies a JSON string containing the user overrides for the Ignition config. The configuration merges with the Ignition config file generated by the installation program. This feature requires Ignition version is 3.2 or later.</td>
</tr>
<tr>
  <td><code>coreosInstallerArgs</code></td>
  <td><code>string</code></td>
  <td>Specifies custom arguments for the <code>coreos-install</code> command that you can use to configure kernel arguments and disk partitioning options.</td>
</tr>
</tbody>
</table>