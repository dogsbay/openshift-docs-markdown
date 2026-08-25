{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting data about virtual machines {id="virt-collecting-data-about-vms_{{ context }}"}

Collecting data about malfunctioning virtual machines (VMs) minimizes the time required to analyze and determine the root cause. {._abstract}

**Prerequisites**

*   For Linux VMs, you have installed the latest QEMU guest agent.
*   For Windows VMs, you have:
    *   Recorded the Windows patch update details.
    *   Installed the latest VirtIO drivers.
    *   Installed the latest QEMU guest agent.
    *   If Remote Desktop Protocol (RDP) is enabled, you have connected by using the desktop viewer to determine whether there is a problem with the connection software.

**Procedure**

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}
1.  Collect must-gather data for the VMs using the `/usr/bin/gather` script.
{%- endif %}
1.  Collect screenshots of VMs that have crashed before you restart them.
1.  Collect memory dumps from VMs before remediation attempts.
1.  Record factors that the malfunctioning VMs have in common. For example, the VMs have the same host or network.