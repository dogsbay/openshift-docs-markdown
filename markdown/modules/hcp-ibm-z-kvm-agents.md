{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding {{ ibm_z_title }} KVM as agents {id="hcp-ibm-z-kvm-agents_{{ context }}"}

To attach compute nodes to a hosted control plane, create agents that help you to scale the node pool.  {._abstract}

Adding agents in an {{ ibm_z_title }} environment requires additional steps, which are described in detail in this section.

Unless stated otherwise, this procedure applies to both z/VM and RHEL KVM installations on {{ ibm_z_title }} and {{ ibm_linuxone_title }}.

For {{ ibm_z_title }} with KVM, run the following command to start your {{ ibm_z_title }} environment with the downloaded PXE images from the `InfraEnv` resource. After the Agents are created, the host communicates with the Assisted Service and registers in the same namespace as the `InfraEnv` resource on the management cluster.

**Procedure**

1.  Run the following command:
    ```terminal
    virt-install \
       --name "<vm_name>" \
       --autostart \
       --ram=16384 \
       --cpu host \
       --vcpus=4 \
       --location "<path_to_kernel_initrd_image>,kernel=kernel.img,initrd=initrd.img" \
       --disk <qcow_image_path> \
       --network network:macvtap-net,mac=<mac_address> \
       --graphics none \
       --noautoconsole \
       --wait=-1
       --extra-args "rd.neednet=1 nameserver=<nameserver>   coreos.live.rootfs_url=http://<http_server>/rootfs.img random.trust_cpu=on rd.luks.options=discard ignition.firstboot ignition.platform.id=metal console=tty1 console=ttyS1,115200n8 coreos.inst.persistent-kargs=console=tty1 console=ttyS1,115200n8"
    ```
    *   `--name` specifies the name of the virtual machine.
    *   `--location` specifies the location of the `kernel_initrd_image` file.
    *   `--disk` specifies the disk image path.
    *   `--network` specifies the Mac address.
    *   `--extra-args` specifies the server name of the agents.
1.  For ISO boot, download ISO from the `InfraEnv` resource and boot the nodes by running the following command:
    ```terminal
    virt-install \
      --name "<vm_name>" \
      --autostart \
      --memory=16384 \
      --cpu host \
      --vcpus=4 \
      --network network:macvtap-net,mac=<mac_address> \
      --cdrom "<path_to_image.iso>" \
      --disk <qcow_image_path> \
      --graphics none \
      --noautoconsole \
      --os-variant <os_version> \
      --wait=-1
    ```
    *   `--name` specifies the name of the virtual machine.
    *   `--network` specifies the Mac address.
    *   `--cdrom` specifies the location of the `image.iso` file.
    *   `--os-variant` specifies the operating system version that you are using.