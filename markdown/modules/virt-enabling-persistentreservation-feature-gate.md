{%- set _mod_docs_content_type = "CONCEPT" %}
# Enabling the PersistentReservation feature gate {id="virt-enabling-persistentreservation-feature-gate_{{ context }}"}

You can enable the SCSI `persistentReservation` feature gate and allow a LUN-backed block mode virtual machine (VM) disk to be shared among multiple virtual machines. {._abstract}

The `persistentReservation` feature gate is disabled by default. You can enable the `persistentReservation` feature gate by using the web console or the command line.

## Prerequisites {id="virt-enabling-persistentreservation-feature-gate-prereqs_{{ context }}"}

*   Cluster administrator privileges are required.
*   The volume access mode `ReadWriteMany` (RWX) is required if the VMs that are sharing disks are running on different nodes. If the VMs that are sharing disks are running on the same node, the `ReadWriteOnce` (RWO) volume access mode is sufficient.
*   The storage provider must support a Container Storage Interface (CSI) driver that uses Fibre Channel (FC), Fibre Channel over Ethernet (FCoE), or iSCSI storage protocols.