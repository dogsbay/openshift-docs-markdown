{%- set _mod_docs_content_type = "REFERENCE" %}
# System requirements for installing {{ microshift_short }} {id="microshift-install-system-requirements_{{ context }}"}

You must add the resource requirements of your specific workloads to the baseline minimums for {{ microshift_short }} and {{ op_system_base_full }}. {._abstract}

For example, if an IoT gateway solution requires 4 GB of RAM, your system needs to have at least 2 GB for {{ op_system_base }} and {{ microshift_short }}, plus 4 GB for the workloads. Thus, this example deployment requires 6 GB of RAM in total.

Allow for extra capacity for future needs if you are deploying physical devices in remote locations. If you are uncertain of the RAM required, use the maximum RAM capacity that the device can support.

The following conditions must be met before installing {{ microshift_short }}:

*   A compatible version of {{ op_system_base }}. For more information, see "Version compatibility".
*   Hardware or hypervisors that are certified for your {{ op_system_base }} version are strongly recommended. For more information, see the following links:
    *   [Red Hat certified hardware](https://catalog.redhat.com/en/hardware)
    *   [Certified hypervisors](https://access.redhat.com/articles/certified-hypervisors)
    *   For information about the support policy for non-certified hardware or hypervisors, see the following link:
        *   [How does Red Hat support me when I use non-Red Hat components?](https://access.redhat.com/articles/third-party-software-support)
*   AArch64 or x86_64 system architecture.
*   2 CPU cores.
*   2 GB RAM. Installing from the network (UEFI HTTPs or PXE boot) requires 3 GB RAM for {{ op_system_base }}.
*   10 GB of storage.
*   You have an active {{ microshift_short }} subscription on your Red Hat account. If you do not have a subscription, contact your sales representative for more information.
*   If your workload requires Persistent Volumes (PVs), you have a Logical Volume Manager (LVM) Volume Group (VG) with enough free capacity for the workloads.
*   You configure secure access to the system to be able to manage it. For more information, see the following link:
    *   [Using secure communications between two systems with OpenSSH](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/securing_networks/assembly_using-secure-communications-between-two-systems-with-openssh_securing-networks)