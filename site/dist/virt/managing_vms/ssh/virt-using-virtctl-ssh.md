---
title: Configure SSH by using the virtctl CLI tool
---

# Configure SSH by using the virtctl CLI tool {#virt-using-virtctl-ssh}

You can add a public SSH key to a virtual machine (VM) and connect to the VM by running the `virtctl ssh` command, or add the `virtctl port-foward` command to your `.ssh/config` file and connect to the VM by using OpenSSH.

> [!IMPORTANT]
> The `virtctl ssh` command method is not recommended for high traffic loads because it places a burden on the API server.

You can add public SSH keys to {{ op_system_base_full }} 9 VMs at runtime or at first boot to VMs with guest operating systems that can be configured by using a cloud-init data source.

> [!TIP]
> You can copy the `virtctl ssh` command in the web console by selecting **Copy SSH command** from the options {{ kebab }} menu beside a VM on the **VirtualMachines** page.
>
> Alternatively, right-click the VM in the tree view and select **Copy SSH command** from the menu to copy the `virtctl ssh` command.
