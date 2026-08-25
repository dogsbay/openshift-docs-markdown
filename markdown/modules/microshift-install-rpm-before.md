{%- set _mod_docs_content_type = "CONCEPT" %}
# Before you install {{ microshift_short }} from an RPM package {id="microshift-install-rpm-before_{{ context }}"}

Before installing {{ microshift_short }} for memory configuration and FIPS mode, you must prepare the host. {._abstract}

## Configuring volume groups {id="microshift-configuring-volume-groups_{{ context }}"}

{{ microshift_short }} uses the logical volume manager storage (LVMS) Container Storage Interface (CSI) plugin for providing storage to persistent volumes (PVs). LVMS relies on the Linux logical volume manager (LVM) to dynamically manage the backing logical volumes (LVs) for PVs. For this reason, your machine must have an LVM volume group (VG) with unused space in which LVMS can create the LVs for your workload’s PVs.

To configure a volume group (VG) that allows LVMS to create the LVs for your workload’s PVs, lower the **Desired Size** of your root volume during the installation of {{ op_system_base }}. Lowering the size of your root volume allows unallocated space on the disk for additional LVs created by LVMS at runtime.

## Prepare for FIPS mode {id="microshift-prepare-for-fips-mode_{{ context }}"}

If your use case requires running {{ microshift_short }} containers in FIPS mode, you must install {{ op_system_base }} with FIPS enabled. After the worker machine is configured to run in FIPS mode, your {{ microshift_short }} containers are automatically configured to also run in FIPS mode.


:::important

Because FIPS must be enabled before the operating system that your node uses starts for the first time, you cannot enable FIPS after you deploy a node.

:::