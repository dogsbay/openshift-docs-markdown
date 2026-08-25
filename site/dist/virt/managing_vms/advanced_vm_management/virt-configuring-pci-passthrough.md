---
title: Configuring PCI passthrough
---

# Configuring PCI passthrough {#virt-configuring-pci-passthrough}

The Peripheral Component Interconnect (PCI) passthrough feature enables you to access and manage hardware devices from a virtual machine (VM). When PCI passthrough is configured, the PCI devices function as if they were physically attached to the guest operating system.

Cluster administrators can expose and manage host devices that are permitted to be used in the cluster by using the `oc` command-line interface (CLI).

> [!IMPORTANT]
> For `vfio-pci` to allocate a PCI device, no other kernel driver can manage that device. If a driver already manages the device, you must add the specific kernel module to a blocklist.
>
> Adding a kernel module to a blocklist makes all devices handled by that module unavailable to the host.

The following example shows a `MachineConfig` CR that adds the `enic` network driver to a blocklist by creating a configuration file in `/etc/modprobe.d/` and adding kernel arguments:

```yaml
apiVersion: machineconfiguration.openshift.io/v1
kind: MachineConfig
metadata:
  labels:
    machineconfiguration.openshift.io/role: worker
  name: 100-blacklist-enic
spec:
  config:
    ignition:
      version: 3.4.0
    storage:
      files:
      - contents:
          source: data:,blacklist%20enic%0A
        mode: 420
        overwrite: true
        path: /etc/modprobe.d/blacklist-enic.conf
  kernelArguments:
    - enic.blacklist=1
    - rd.driver.blacklist=enic
```

## Preparing nodes for GPU passthrough {#virt-preparing-nodes-for-gpu-passthrough}

You can prevent GPU operands from deploying on worker nodes that you designated for GPU passthrough.

## Preparing host devices for PCI passthrough {#virt-preparing-host-devices-for-pci-passthrough}

## Configuring virtual machines for PCI passthrough {#virt-configuring-vms-for-pci-passthrough}

After the PCI devices have been added to the cluster, you can assign them to virtual machines. The PCI devices are now available as if they are physically connected to the virtual machines.

## Additional resources {#additional-resources_configuring-pci-passthrough}

- [Enabling Intel VT-X and AMD-V Virtualization Hardware Extensions in BIOS](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-troubleshooting-enabling_intel_vt_x_and_amd_v_virtualization_hardware_extensions_in_bios)
- [Managing file permissions](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_basic_system_settings/assembly_managing-file-permissions_configuring-basic-system-settings)
- [Machine Config Overview](/machine_configuration/index#machine-config-overview)
- [{{ ibm_name }} Spyre Accelerator User’s Guide](https://www.ibm.com/docs/en/systems-hardware/linuxone/9175-ML1?topic=library-spyre-accelerator-users-guide)
