{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure virtual machine settings {id="conditional-virt-configure-virtual-machine-settings_{{ context }}"}

Update the configuration of a virtual machine (VM) after you create it so that its compute resources, storage, boot sequence, and devices match the requirements of the workload it runs. {._abstract}

You can change VM configuration details such as CPU, memory, disks, and networking by using the command line or the {{ product_title }} web console. In the web console, change settings on the **VirtualMachine details** page or edit the YAML file directly. You can add or remove memory and CPU sockets while the VM is running. Other changes take effect when the VM restarts.

Boot order determines which disks and network interface controllers (NICs) the VM attempts to boot from, and in what sequence. From **Boot Order** on the **VirtualMachine details** page, you can add a disk or NIC to the boot order list, change the order of the items in the list, or remove an item and return it to the inventory of bootable sources.

Workloads that require a Trusted Platform Module, such as Windows 11, need a virtual Trusted Platform Module (vTPM) device. You add a vTPM device to a new or existing VM by editing the `VirtualMachine` or `VirtualMachineInstance` manifest.

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Configuring shared volumes for virtual machines](/virt/managing_vms/virtual_disks/virt-configuring-shared-volumes-for-vms#virt-configuring-shared-volumes-for-vms)
*   [Understanding config maps](/nodes/pods/nodes-pods-configmaps#nodes-pods-configmap-overview_builds-configmaps)
*   [Providing sensitive data to pods](/nodes/pods/nodes-pods-secrets#nodes-pods-secrets-about)
*   [Understanding and creating service accounts](/authentication/understanding-and-creating-service-accounts#service-accounts-overview)