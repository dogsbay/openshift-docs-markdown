{%- set _mod_docs_content_type = "CONCEPT" %}
# Kernel module blocklist for PCI passthrough {id="virt-about-pci-passthrough-blocklist_{{ context }}"}

For `vfio-pci` to allocate a PCI device, no other kernel driver can manage that device. If a driver already manages the device, you must add the specific kernel module to a blocklist. Adding a kernel module to a blocklist makes all devices handled by that module unavailable to the host. {._abstract}

Cluster administrators can expose and manage host devices that are permitted to be used in the cluster by using the `oc` command-line interface (CLI).

You can add a kernel module to the blocklist by creating a `MachineConfig` object that generates a configuration file in `/etc/modprobe.d/` and adds kernel arguments.

The following example shows a `MachineConfig` object that adds the `enic` network driver to the blocklist:

```yaml
apiVersion: machineconfiguration.openshift.io/v1
kind: MachineConfig
metadata:
  labels:
    machineconfiguration.openshift.io/role: worker
  name: 100-blocklist-enic
spec:
  config:
    ignition:
      version: 3.4.0
    storage:
      files:
      - contents:
          source: data:,blocklist%20enic%0A
        mode: 420
        overwrite: true
        path: /etc/modprobe.d/blocklist-enic.conf
  kernelArguments:
    - enic.blocklist=1
    - rd.driver.blocklist=enic
```