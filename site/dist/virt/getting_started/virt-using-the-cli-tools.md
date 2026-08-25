---
title: Using the CLI tools
---

# Using the CLI tools {#virt-using-the-cli-tools}

You can manage OpenShift Virtualization resources by using the `virtctl` command-line tool. Virtual machine (VM) commands can also be used to manage virtual machine instances (VMIs) unless otherwise specified.

> [!NOTE]
> You can access and change VM disk images by using the `libguestfs` command-line tool. You deploy `libguestfs` by using the `virtctl libguestfs` command.

## Installing the virtctl binary on RHEL 9 or later, Linux, Windows, or macOS {#virt-installing-virtctl-binary_virt-using-the-cli-tools}

You can download the `virtctl` binary by using the OpenShift Container Platform web console and then install it on Red Hat Enterprise Linux (RHEL) 9 or later, Linux, Windows, or macOS.

**Procedure**

1. Navigate to the **Virtualization** page in the web console.
2. Click the **Question Mark (?)** icon in the top right corner of screen.
3. Select **Command Line Tools** from the menu.
4. Locate the **virtctl - KubeVirt command line interface** section of the page.
5. Click the **Download virtctl** link to download the `virtctl` binary for your operating system.
6. Install `virtctl`:

   - For RHEL and other Linux operating systems:

     1. Decompress the archive file:

        ```terminal
        $ tar -xvf <virtctl-version-distribution.arch>.tar.gz
        ```
     2. Run the following command to make the `virtctl` binary executable:

        ```terminal
        $ chmod +x <path/virtctl-file-name>
        ```
     3. Move the `virtctl` binary to a directory in your `PATH` environment variable.

        You can check your path by running the following command:

        ```terminal
        $ echo $PATH
        ```
     4. Set the `KUBECONFIG` environment variable:

        ```terminal
        $ export KUBECONFIG=/home/<user>/clusters/current/auth/kubeconfig
        ```
   - For Windows:

     1. Decompress the archive file.
     2. Navigate the extracted folder hierarchy and double-click the `virtctl` executable file to install the client.
     3. Move the `virtctl` binary to a directory in your `PATH` environment variable.

        You can check your path by running the following command:

        ```terminal
        C:\> path
        ```
   - For macOS:

     1. Decompress the archive file.
     2. Move the `virtctl` binary to a directory in your `PATH` environment variable.

        You can check your path by running the following command:

        ```terminal
        echo $PATH
        ```

## virtctl information commands {#virtctl-information-commands_virt-using-the-cli-tools}

You can use the following `virtctl` information commands to view information about the `virtctl` client.

***Information commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl version</code></td>
  <td>View the <code>virtctl</code> client and server versions.</td>
</tr>
<tr>
  <td><code>virtctl help</code></td>
  <td>View a list of <code>virtctl</code> commands.</td>
</tr>
<tr>
  <td>`virtctl <command> -h\</td>
  <td>--help`</td>
</tr>
<tr>
  <td>View a list of options for a specific command.</td>
  <td><code>virtctl options</code></td>
</tr>
<tr>
  <td>View a list of global command options for any <code>virtctl</code> command.</td>
</tr>
</tbody>
</table>

## VM information commands {#vm-information-commands_virt-using-the-cli-tools}

You can use `virtctl` to view information about virtual machines (VMs) and virtual machine instances (VMIs).

***VM information commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl fslist <vm_name></code></td>
  <td>View the file systems available on a guest machine.</td>
</tr>
<tr>
  <td><code>virtctl guestosinfo <vm_name></code></td>
  <td>View information about the operating systems on a guest machine.</td>
</tr>
<tr>
  <td><code>virtctl userlist <vm_name></code></td>
  <td>View the logged-in users on a guest machine.</td>
</tr>
</tbody>
</table>

## VM manifest creation commands {#vm-manifest-creation-commands_virt-using-the-cli-tools}

You can use the following `virtctl create` commands to create manifests for virtual machines, instance types, and preferences.

***VM manifest creation commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl create vm</code></td>
  <td>Create a <code>VirtualMachine</code> (VM) manifest.</td>
</tr>
<tr>
  <td><code>virtctl create vm --name <vm_name></code></td>
  <td>Create a VM manifest, specifying a name for the VM.</td>
</tr>
<tr>
  <td>`virtctl create vm --user <user_name> --ssh-key\</td>
  <td>password-file=<value>`</td>
</tr>
<tr>
  <td>Create a VM manifest with a cloud-init configuration to create the selected user and either add an SSH public key from the supplied string, or a password from a file.</td>
  <td><code>virtctl create vm --access-cred type:password,src:<secret></code></td>
</tr>
<tr>
  <td>Create a VM manifest with a user and password combination injected from the selected secret.</td>
  <td><code>virtctl create vm --access-cred type:ssh,src:<secret>,user:<user_name></code></td>
</tr>
<tr>
  <td>Create a VM manifest with an SSH public key injected from the selected secret.</td>
  <td><code>virtctl create vm --volume-sysprep src:<config_map></code></td>
</tr>
<tr>
  <td>Create a VM manifest, specifying a config map to use as the sysprep volume. The config map must contain a valid answer file named <code>unattend.xml</code> or <code>autounattend.xml</code>.</td>
  <td><code>virtctl create vm --instancetype <instancetype_name></code></td>
</tr>
<tr>
  <td>Create a VM manifest that uses an existing cluster-wide instance type.</td>
  <td><code>virtctl create vm --instancetype=virtualmachineinstancetype/<instancetype_name></code></td>
</tr>
<tr>
  <td>Create a VM manifest that uses an existing namespaced instance type.</td>
  <td><code>virtctl create instancetype --cpu <cpu_value> --memory <memory_value> --name <instancetype_name></code></td>
</tr>
<tr>
  <td>Create a manifest for a cluster-wide instance type.</td>
  <td><code>virtctl create instancetype --cpu <cpu_value> --memory <memory_value> --name <instancetype_name> --namespace <namespace_value></code></td>
</tr>
<tr>
  <td>Create a manifest for a namespaced instance type.</td>
  <td><code>virtctl create preference --name <preference_name></code></td>
</tr>
<tr>
  <td>Create a manifest for a cluster-wide VM preference, specifying a name for the preference.</td>
  <td><code>virtctl create preference --namespace <namespace_value></code></td>
</tr>
<tr>
  <td>Create a manifest for a namespaced VM preference.</td>
</tr>
</tbody>
</table>

## VM management commands {#vm-management-commands_virt-using-the-cli-tools}

You can use the following `virtctl` commands to manage and migrate virtual machines (VMs) and VM instances (VMIs).

***VM management commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl start <vm_name></code></td>
  <td>Start a VM.</td>
</tr>
<tr>
  <td><code>virtctl start --paused <vm_name></code></td>
  <td>Start a VM in a paused state. This option enables you to interrupt the boot process from the VNC console.</td>
</tr>
<tr>
  <td><code>virtctl stop <vm_name></code></td>
  <td>Stop a VM.</td>
</tr>
<tr>
  <td><code>virtctl stop <vm_name> --grace-period 0 --force</code></td>
  <td>Force stop a VM. This option might cause data inconsistency or data loss.</td>
</tr>
<tr>
  <td><code>virtctl pause vm <vm_name></code></td>
  <td>Pause a VM. The machine state is kept in memory.</td>
</tr>
<tr>
  <td><code>virtctl unpause vm <vm_name></code></td>
  <td>Unpause a VM.</td>
</tr>
<tr>
  <td><code>virtctl migrate <vm_name></code></td>
  <td>Migrate a VM.</td>
</tr>
<tr>
  <td><code>virtctl migrate-cancel <vm_name></code></td>
  <td>Cancel a VM migration.</td>
</tr>
<tr>
  <td><code>virtctl restart <vm_name></code></td>
  <td>Restart a VM.</td>
</tr>
</tbody>
</table>

## VM connection commands {#vm-connection-commands_virt-using-the-cli-tools}

You use can use the following `virtctl` commands to expose ports and connect to virtual machines (VMs) and VM instances (VMIs).

***VM connection commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl console <vm_name></code></td>
  <td>Connect to the serial console of a VM.</td>
</tr>
<tr>
  <td>`virtctl expose vm <vm_name> --name <service_name> --type <ClusterIP\</td>
  <td>NodePort\</td>
</tr>
<tr>
  <td>LoadBalancer> --port <port>`</td>
  <td>Create a service that forwards a designated port of a VM and expose the service on the specified port of the node.<br><br>Example: <code>virtctl expose vm rhel9_vm --name rhel9-ssh --type NodePort --port 22</code></td>
</tr>
<tr>
  <td><code>virtctl scp -i <ssh_key> <file_name> <user_name>@vm/<vm_name></code></td>
  <td>Copy a file from your machine to a VM. This command uses the private key of an SSH key pair. The VM must be configured with the public key.</td>
</tr>
<tr>
  <td><code>virtctl scp -i <ssh_key> <user_name@vm/<vm_name>:<file_name> .</code></td>
  <td>Copy a file from a VM to your machine. This command uses the private key of an SSH key pair. The VM must be configured with the public key.</td>
</tr>
<tr>
  <td><code>virtctl ssh -i <ssh_key> <user_name>@vm/<vm_name></code></td>
  <td>Open an SSH connection with a VM. This command uses the private key of an SSH key pair. The VM must be configured with the public key.</td>
</tr>
<tr>
  <td><code>virtctl vnc <vm_name></code></td>
  <td>Connect to the VNC console of a VM.<br><br>You must have <code>virt-viewer</code> installed.</td>
</tr>
<tr>
  <td><code>virtctl vnc --proxy-only=true <vm_name></code></td>
  <td>Display the port number and connect manually to a VM by using any viewer through the VNC connection.</td>
</tr>
<tr>
  <td><code>virtctl vnc --port=<port-number> <vm_name></code></td>
  <td>Specify a port number to run the proxy on the specified port, if that port is available.<br><br>If a port number is not specified, the proxy runs on a random port.</td>
</tr>
</tbody>
</table>

## VM export commands {#vm-export-commands_virt-using-the-cli-tools}

Use `virtctl vmexport` commands to create, download, or delete a volume exported from a VM, VM snapshot, or persistent volume claim (PVC). Certain manifests also contain a header secret, which grants access to the endpoint to import a disk image in a format that OpenShift Virtualization can use.

***VM export commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>`virtctl vmexport create <vmexport_name> --vm\</td>
  <td>snapshot\</td>
</tr>
<tr>
  <td>pvc=<object_name>`</td>
  <td>Create a <code>VirtualMachineExport</code> custom resource (CR) to export a volume from a VM, VM snapshot, or PVC.<br><br><ul><li><code>--vm</code>: Exports the PVCs of a VM.</li><li><code>--snapshot</code>: Exports the PVCs contained in a <code>VirtualMachineSnapshot</code> CR.</li><li><code>--pvc</code>: Exports a PVC.</li><li>Optional: <code>--ttl=1h</code> specifies the time to live. The default duration is 2 hours.</li></ul></td>
</tr>
<tr>
  <td><code>virtctl vmexport delete <vmexport_name></code></td>
  <td>Delete a <code>VirtualMachineExport</code> CR manually.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download <vmexport_name> --output=<output_file> --volume=<volume_name></code></td>
  <td>Download the volume defined in a <code>VirtualMachineExport</code> CR.<br><br><ul><li><code>--output</code> specifies the file format. Example: <code>disk.img.gz</code>.</li><li><code>--volume</code> specifies the volume to download. This flag is optional if only one volume is available.</li></ul>Optional:<br><br><ul><li><code>--keep-vme</code> retains the <code>VirtualMachineExport</code> CR after download. The default behavior is to delete the <code>VirtualMachineExport</code> CR after download.</li><li><code>--insecure</code> enables an insecure HTTP connection.</li></ul></td>
</tr>
<tr>
  <td>`virtctl vmexport download <vmexport_name> --vm\</td>
  <td>snapshot\</td>
</tr>
<tr>
  <td>pvc=<object_name> --output=<output_file> --volume=<volume_name>`</td>
  <td>Create a <code>VirtualMachineExport</code> CR and then download the volume defined in the CR.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest</code></td>
  <td>Retrieve the manifest for an existing export. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --vm=example</code></td>
  <td>Create a VM export for a VM example, and retrieve the manifest. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --snap=example</code></td>
  <td>Create a VM export for a VM snapshot example, and retrieve the manifest. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --include-secret</code></td>
  <td>Retrieve the manifest for an existing export. The manifest includes the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --manifest-output-format=json</code></td>
  <td>Retrieve the manifest for an existing export in json format. The manifest does not include the header secret.</td>
</tr>
<tr>
  <td><code>virtctl vmexport download export --manifest --include-secret --output=manifest.yaml</code></td>
  <td>Retrieve the manifest for an existing export. The manifest includes the header secret and writes it to the file specified.</td>
</tr>
</tbody>
</table>

## Hot plug and hot unplug  commands {#hot-plug-and-hot-unplug-commands_virt-using-the-cli-tools}

You can use the following `virtctl` commands to add or remove resources from running virtual machines (VMs) and VM instances (VMIs).

***Hot plug and hot unplug commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl addvolume <vm_name> --volume-name=<datavolume_or_PVC> [--persist] [--serial=<label>]</code></td>
  <td>Hot plug a data volume or persistent volume claim (PVC).<br><br>Optional:<br><br><ul><li><code>--persist</code> mounts the virtual disk permanently on a VM. <strong>This flag does not apply to VMIs.</strong></li><li><code>--serial=<label></code> adds a label to the VM. If you do not specify a label, the default label is the data volume or PVC name.</li></ul></td>
</tr>
<tr>
  <td><code>virtctl removevolume <vm_name> --volume-name=<virtual_disk></code></td>
  <td>Hot unplug a virtual disk.</td>
</tr>
</tbody>
</table>

## Image upload commands {#image-upload-commands_virt-using-the-cli-tools}

You can use the following `virtctl image-upload` commands to upload a VM image to a data volume.

***Image upload commands***

<table>
<thead>
<tr>
  <th>Command</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>virtctl image-upload dv <datavolume_name> --image-path=</path/to/image> --no-create</code></td>
  <td>Upload a VM image to a data volume that already exists.</td>
</tr>
<tr>
  <td><code>virtctl image-upload dv <datavolume_name> --size=<datavolume_size> --image-path=</path/to/image></code></td>
  <td>Upload a VM image to a new data volume of a specified requested size.</td>
</tr>
<tr>
  <td><code>virtctl image-upload dv <datavolume_name> --datasource --size=<datavolume_size> --image-path=</path/to/image></code></td>
  <td>Upload a VM image to a new data volume and create an associated <code>DataSource</code> object for it.</td>
</tr>
</tbody>
</table>

## Deploying libguestfs by using virtctl {#virt-deploying-libguestfs-with-virtctl_virt-using-the-cli-tools}

You can use the `virtctl guestfs` command to deploy an interactive container with `libguestfs-tools` and a persistent volume claim (PVC) attached to it.

**Procedure**

- To deploy a container with `libguestfs-tools`, mount the PVC, and attach a shell to it, run the following command:

  ```terminal
  $ virtctl guestfs -n <namespace> <pvc_name>
  ```

  > [!IMPORTANT]
  > The `<pvc_name>` argument is required. If you do not include it, an error message appears.

## Libguestfs and virtctl guestfs commands {#virt-about-libguestfs-tools-virtctl-guestfs_virt-using-the-cli-tools}

`Libguestfs` tools help you access and modify virtual machine (VM) disk images. You can use `libguestfs` tools to view and edit files in a guest, clone and build virtual machines, and format and resize disks.

You can also use the `virtctl guestfs` command and its sub-commands to modify, inspect, and debug VM disks on a PVC. To see a complete list of possible sub-commands, enter `virt-` on the command line and press the Tab key. For example:

| Command | Description |
| --- | --- |
| `virt-edit -a /dev/vda /etc/motd` | Edit a file interactively in your terminal. |
| `virt-customize -a /dev/vda --ssh-inject root:string:<public key example>` | Inject an ssh key into the guest and create a login. |
| `virt-df -a /dev/vda -h` | See how much disk space is used by a VM. |
| `virt-customize -a /dev/vda --run-command 'rpm -qa > /rpm-list'` | See the full list of all RPMs installed on a guest by creating an output file containing the full list. |
| `virt-cat -a /dev/vda /rpm-list` | Display the output file list of all RPMs created using the `virt-customize -a /dev/vda --run-command 'rpm -qa > /rpm-list'` command in your terminal. |
| `virt-sysprep -a /dev/vda` | Seal a virtual machine disk image to be used as a template. |

By default, `virtctl guestfs` creates a session with everything needed to manage a VM disk. However, the command also supports several flag options if you want to customize the behavior:

| Flag Option | Description |
| --- | --- |
| `--h` or `--help` | Provides help for `guestfs`. |
| `-n <namespace>` option with a `<pvc_name>` argument | To use a PVC from a specific namespace. If you do not use the `-n <namespace>` option, your current project is used. To change projects, use `oc project <namespace>`. If you do not include a `<pvc_name>` argument, an error message appears. |
| `--image string` | Lists the `libguestfs-tools` container image. You can configure the container to use a custom image by using the `--image` option. |
| `--kvm` | Indicates that `kvm` is used by the `libguestfs-tools` container. By default, `virtctl guestfs` sets up `kvm` for the interactive container, which greatly speeds up the `libguest-tools` execution because it uses QEMU. If a cluster does not have any `kvm` supporting nodes, you must disable `kvm` by setting the option `--kvm=false`. If not set, the `libguestfs-tools` pod remains pending because it cannot be scheduled on any node. |
| `--pull-policy string` | Shows the pull policy for the `libguestfs` image. You can also overwrite the image’s pull policy by setting the `pull-policy` option. |

The command also checks if a PVC is in use by another pod, in which case an error message appears. However, once the `libguestfs-tools` process starts, the setup cannot avoid a new pod using the same PVC. You must verify that there are no active `virtctl guestfs` pods before starting the VM that accesses the same PVC.

> [!NOTE]
> The `virtctl guestfs` command accepts only a single PVC attached to the interactive pod.

## Additional resources {#_additional_resources}

- [Red Hat Ansible Automation Hub](https://console.redhat.com/ansible/automation-hub)
- [`libguestfs`](https://libguestfs.org)
