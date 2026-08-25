{%- set _mod_docs_content_type = "REFERENCE" %}
# `coreos-installer` and boot options for ISO and PXE installations {id="installation-user-infra-machines-coreos-installer-options_{{ context }}"}

You can install {{ op_system }} by running `coreos-installer install <options> <device>` at the command prompt, after booting into the {{ op_system }} live environment from an ISO image. {._abstract}

The following table shows the subcommands, options, and arguments you can pass to the `coreos-installer` command.

***`coreos-installer` subcommands, command-line options, and arguments***

<table>
<thead>
<tr>
  <th colspan="2"><strong>coreos-installer install subcommand</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td><strong><em>Subcommand</em></strong></td>
  <td><strong><em>Description</em></strong></td>
</tr>
<tr>
  <td><code>$ coreos-installer install <options> <device></code></td>
  <td>Embed an Ignition config in an ISO image.<br><br>2+</td>
</tr>
<tr>
  <td><strong>coreos-installer install subcommand options</strong></td>
  <td><strong><em>Option</em></strong></td>
</tr>
<tr>
  <td><strong><em>Description</em></strong></td>
  <td><code>-u</code>, <code>--image-url <url></code></td>
</tr>
<tr>
  <td>Specify the image URL manually.</td>
  <td><code>-f</code>, <code>--image-file <path></code></td>
</tr>
<tr>
  <td>Specify a local image file manually. Used for debugging.</td>
  <td><code>-i,</code> <code>--ignition-file <path></code></td>
</tr>
<tr>
  <td>Embed an Ignition config from a file.</td>
  <td><code>-I</code>, <code>--ignition-url <URL></code></td>
</tr>
<tr>
  <td>Embed an Ignition config from a URL.</td>
  <td><code>--ignition-hash <digest></code></td>
</tr>
<tr>
  <td>Digest <code>type-value</code> of the Ignition config.</td>
  <td><code>-p</code>, <code>--platform <name></code></td>
</tr>
<tr>
  <td>Override the Ignition platform ID for the installed system.</td>
  <td><code>--console <spec></code></td>
</tr>
<tr>
  <td>Set the kernel and boot loader console for the installed system. For more information about the format of <code><spec></code>, see the <a href="https://www.kernel.org/doc/html/latest/admin-guide/serial-console.html">Linux kernel serial console</a> documentation.</td>
  <td><code>--append-karg <arg>...</code></td>
</tr>
<tr>
  <td>Append a default kernel argument to the installed system.</td>
  <td><code>--delete-karg <arg>...</code></td>
</tr>
<tr>
  <td>Delete a default kernel argument from the installed system.</td>
  <td><code>-n</code>, <code>--copy-network</code></td>
</tr>
<tr>
  <td>Copy the network configuration from the install environment.<br><br><dl><dt>Important</dt><dd>The <code>--copy-network</code> option only copies networking configuration found under <code>/etc/NetworkManager/system-connections</code>. In particular, it does not copy the system hostname.</dd></dl></td>
  <td><code>--network-dir <path></code></td>
</tr>
<tr>
  <td>For use with <code>-n</code>. Default is <code>/etc/NetworkManager/system-connections/</code>.</td>
  <td><code>--save-partlabel <lx>..</code></td>
</tr>
<tr>
  <td>Save partitions with this label glob.</td>
  <td><code>--save-partindex <id>...</code></td>
</tr>
<tr>
  <td>Save partitions with this number or range.</td>
  <td><code>--insecure</code></td>
</tr>
<tr>
  <td>Skip {{ op_system }} image signature verification.</td>
  <td><code>--insecure-ignition</code></td>
</tr>
<tr>
  <td>Allow Ignition URL without HTTPS or hash.</td>
  <td><code>--architecture <name></code></td>
</tr>
<tr>
  <td>Target CPU architecture. Valid values are <code>x86_64</code> and <code>aarch64</code>.</td>
  <td><code>--preserve-on-error</code></td>
</tr>
<tr>
  <td>Do not clear partition table on error.</td>
  <td><code>-h</code>, <code>--help</code></td>
</tr>
<tr>
  <td>Print help information.<br><br>2+</td>
  <td><strong>coreos-installer install subcommand argument</strong></td>
</tr>
<tr>
  <td><strong><em>Argument</em></strong></td>
  <td><strong><em>Description</em></strong></td>
</tr>
<tr>
  <td><code><device></code></td>
  <td>The destination device.<br><br>2+</td>
</tr>
<tr>
  <td><strong>coreos-installer ISO subcommands</strong></td>
  <td><strong><em>Subcommand</em></strong></td>
</tr>
<tr>
  <td><strong><em>Description</em></strong></td>
  <td><code>$ coreos-installer iso customize <options> <ISO_image></code></td>
</tr>
<tr>
  <td>Customize a {{ op_system }} live ISO image.</td>
  <td><code>coreos-installer iso reset <options> <ISO_image></code></td>
</tr>
<tr>
  <td>Restore a {{ op_system }} live ISO image to default settings.</td>
  <td><code>coreos-installer iso ignition remove <options> <ISO_image></code></td>
</tr>
<tr>
  <td>Remove the embedded Ignition config from an ISO image.<br><br>2+</td>
  <td><strong>coreos-installer ISO customize subcommand options</strong></td>
</tr>
<tr>
  <td><strong><em>Option</em></strong></td>
  <td><strong><em>Description</em></strong></td>
</tr>
<tr>
  <td><code>--dest-ignition <path></code></td>
  <td>Merge the specified Ignition config file into a new configuration fragment for the destination system.</td>
</tr>
<tr>
  <td><code>--dest-console <spec></code></td>
  <td>Specify the kernel and boot loader console for the destination system.</td>
</tr>
<tr>
  <td><code>--dest-device <path></code></td>
  <td>Install and overwrite the specified destination device.</td>
</tr>
<tr>
  <td><code>--dest-karg-append <arg></code></td>
  <td>Add a kernel argument to each boot of the destination system.</td>
</tr>
<tr>
  <td><code>--dest-karg-delete <arg></code></td>
  <td>Delete a kernel argument from each boot of the destination system.</td>
</tr>
<tr>
  <td><code>--network-keyfile <path></code></td>
  <td>Configure networking by using the specified NetworkManager keyfile for live and destination systems.</td>
</tr>
<tr>
  <td><code>--ignition-ca <path></code></td>
  <td>Specify an additional TLS certificate authority to be trusted by Ignition.</td>
</tr>
<tr>
  <td><code>--pre-install <path></code></td>
  <td>Run the specified script before installation.</td>
</tr>
<tr>
  <td><code>--post-install <path></code></td>
  <td>Run the specified script after installation.</td>
</tr>
<tr>
  <td><code>--installer-config <path></code></td>
  <td>Apply the specified installer configuration file.</td>
</tr>
<tr>
  <td><code>--live-ignition <path></code></td>
  <td>Merge the specified Ignition config file into a new configuration fragment for the live environment.</td>
</tr>
<tr>
  <td><code>--live-karg-append <arg></code></td>
  <td>Add a kernel argument to each boot of the live environment.</td>
</tr>
<tr>
  <td><code>--live-karg-delete <arg></code></td>
  <td>Delete a kernel argument from each boot of the live environment.</td>
</tr>
<tr>
  <td><code>--live-karg-replace <k=o=n></code></td>
  <td>Replace a kernel argument in each boot of the live environment, in the form <code>key=old=new</code>.</td>
</tr>
<tr>
  <td><code>-f</code>, <code>--force</code></td>
  <td>Overwrite an existing Ignition config.</td>
</tr>
<tr>
  <td><code>-o</code>, <code>--output <path></code></td>
  <td>Write the ISO to a new output file.</td>
</tr>
<tr>
  <td><code>-h</code>, <code>--help</code></td>
  <td>Print help information.<br><br>2+</td>
</tr>
<tr>
  <td><strong>coreos-installer PXE subcommands</strong></td>
  <td><strong><em>Subcommand</em></strong></td>
</tr>
<tr>
  <td><strong><em>Description</em></strong></td>
  <td colspan="2">Note that not all of these options are accepted by all subcommands.</td>
</tr>
<tr>
  <td><code>coreos-installer pxe customize <options> <path></code></td>
  <td>Customize a {{ op_system }} live PXE boot config.</td>
</tr>
<tr>
  <td><code>coreos-installer pxe ignition wrap <options></code></td>
  <td>Wrap an Ignition config in an image.</td>
</tr>
<tr>
  <td><code>coreos-installer pxe ignition unwrap <options> <image_name></code></td>
  <td>Show the wrapped Ignition config in an image.<br><br>2+</td>
</tr>
<tr>
  <td><strong>coreos-installer PXE customize subcommand options</strong></td>
  <td><strong><em>Option</em></strong></td>
</tr>
<tr>
  <td><strong><em>Description</em></strong></td>
  <td colspan="2">Note that not all of these options are accepted by all subcommands.</td>
</tr>
<tr>
  <td><code>--dest-ignition <path></code></td>
  <td>Merge the specified Ignition config file into a new configuration fragment for the destination system.</td>
</tr>
<tr>
  <td><code>--dest-console <spec></code></td>
  <td>Specify the kernel and boot loader console for the destination system.</td>
</tr>
<tr>
  <td><code>--dest-device <path></code></td>
  <td>Install and overwrite the specified destination device.</td>
</tr>
<tr>
  <td><code>--network-keyfile <path></code></td>
  <td>Configure networking by using the specified NetworkManager keyfile for live and destination systems.</td>
</tr>
<tr>
  <td><code>--ignition-ca <path></code></td>
  <td>Specify an additional TLS certificate authority to be trusted by Ignition.</td>
</tr>
<tr>
  <td><code>--pre-install <path></code></td>
  <td>Run the specified script before installation.</td>
</tr>
<tr>
  <td><code>post-install <path></code></td>
  <td>Run the specified script after installation.</td>
</tr>
<tr>
  <td><code>--installer-config <path></code></td>
  <td>Apply the specified installer configuration file.</td>
</tr>
<tr>
  <td><code>--live-ignition <path></code></td>
  <td>Merge the specified Ignition config file into a new configuration fragment for the live environment.</td>
</tr>
<tr>
  <td><code>-o,</code> <code>--output <path></code></td>
  <td>Write the initramfs to a new output file.<br><br><dl><dt>Note</dt><dd>This option is required for PXE environments.</dd></dl></td>
</tr>
<tr>
  <td><code>-h</code>, <code>--help</code></td>
  <td>Print help information.</td>
</tr>
</tbody>
</table>

You can automatically start `coreos-installer` options at boot time by passing `coreos.inst` boot arguments to the {{ op_system }} live installer. These are provided in addition to the standard boot arguments.

*   For ISO installations, the `coreos.inst` options can be added by interrupting the automatic boot at the boot loader menu. You can interrupt the automatic boot by pressing `TAB` while the **RHEL CoreOS (Live)** menu option is highlighted.
*   For PXE or iPXE installations, the `coreos.inst` options must be added to the `APPEND` line before the {{ op_system }} live installer is booted.

The following table shows the {{ op_system }} live installer `coreos.inst` boot options for ISO and PXE installations.

***`coreos.inst` boot options***

<table>
<thead>
<tr>
  <th>Argument</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>coreos.inst.install_dev</code></td>
  <td>Required. The block device on the system to install to.<br><br><dl><dt>Note</dt><dd>It is recommended to use the full path, such as <code>/dev/sda</code>, although <code>sda</code> is allowed.</dd></dl></td>
</tr>
<tr>
  <td><code>coreos.inst.ignition_url</code></td>
  <td>Optional: The URL of the Ignition config to embed into the installed system. If no URL is specified, no Ignition config is embedded. Only HTTP and HTTPS protocols are supported.</td>
</tr>
<tr>
  <td><code>coreos.inst.save_partlabel</code></td>
  <td>Optional: Comma-separated labels of partitions to preserve during the install. Glob-style wildcards are permitted. The specified partitions do not need to exist.</td>
</tr>
<tr>
  <td><code>coreos.inst.save_partindex</code></td>
  <td>Optional: Comma-separated indexes of partitions to preserve during the install. Ranges <code>m-n</code> are permitted, and either <code>m</code> or <code>n</code> can be omitted. The specified partitions do not need to exist.</td>
</tr>
<tr>
  <td><code>coreos.inst.insecure</code></td>
  <td>Optional: Permits the OS image that is specified by <code>coreos.inst.image_url</code> to be unsigned.</td>
</tr>
<tr>
  <td><code>coreos.inst.image_url</code></td>
  <td>Optional: Download and install the specified {{ op_system }} image.<br><br><ul><li>This argument should not be used in production environments and is intended for debugging purposes only.</li><li>While this argument can be used to install a version of {{ op_system }} that does not match the live media, it is recommended that you instead use the media that matches the version you want to install.</li><li>If you are using <code>coreos.inst.image_url</code>, you must also use <code>coreos.inst.insecure</code>. This is because the bare-metal media are not GPG-signed for {{ product_title }}.</li><li>Only HTTP and HTTPS protocols are supported.</li></ul></td>
</tr>
<tr>
  <td><code>coreos.inst.skip_reboot</code></td>
  <td>Optional: The system will not reboot after installing. After the install finishes, you will receive a prompt that allows you to inspect what is happening during installation. This argument should not be used in production environments and is intended for debugging purposes only.</td>
</tr>
<tr>
  <td><code>coreos.inst.platform_id</code></td>
  <td>Optional: The Ignition platform ID of the platform the {{ op_system }} image is being installed on. Default is <code>metal</code>. This option determines whether or not to request an Ignition config from the cloud provider, such as VMware. For example: <code>coreos.inst.platform_id=vmware</code>.</td>
</tr>
<tr>
  <td><code>ignition.config.url</code></td>
  <td>Optional: The URL of the Ignition config for the live boot. For example, this can be used to customize how <code>coreos-installer</code> is invoked, or to run code before or after the installation. This is different from <code>coreos.inst.ignition_url</code>, which is the Ignition config for the installed system.</td>
</tr>
</tbody>
</table>