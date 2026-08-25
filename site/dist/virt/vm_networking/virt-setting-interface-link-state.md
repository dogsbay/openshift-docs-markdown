---
title: Managing the link state of a virtual machine interface
---

# Managing the link state of a virtual machine interface {#virt-setting-interface-link-state}

You can manage the link state of a primary or secondary virtual machine (VM) interface by using the OpenShift Container Platform web console or the CLI. By specifying the link state, you can logically connect or disconnect the virtual network interface controller (vNIC) from a network.

> [!NOTE]
> {{ VirtProductName }} does not support link state management for Single Root I/O Virtualization (SR-IOV) secondary network interfaces and their link states are not reported.

You can specify the desired link state when you first create a VM, by editing the configuration of an existing VM that is stopped or running, or when you hot plug a new network interface to a running VM. If you edit a running VM, you do not need to restart or migrate the VM for the changes to be applied. The current link state of a VM interface is reported in the `status.interfaces.linkState` field of the `VirtualMachineInstance` manifest.
