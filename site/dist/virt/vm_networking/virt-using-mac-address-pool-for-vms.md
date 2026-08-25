---
title: Managing MAC address pools for network interfaces
---

# Managing MAC address pools for network interfaces {#virt-using-mac-address-pool-for-vms}

KubeMacPool allocates MAC addresses for virtual machine (VM) network interfaces from a shared MAC address pool. This ensures that each network interface is assigned a unique MAC address.

A virtual machine instance created from that VM retains the assigned MAC address across reboots.

> [!NOTE]
> KubeMacPool does not handle virtual machine instances created independently from a virtual machine.
