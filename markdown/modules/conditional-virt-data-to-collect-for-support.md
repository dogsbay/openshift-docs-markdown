{%- set _mod_docs_content_type = "REFERENCE" %}
# Data to collect before you contact support {id="conditional-virt-data-to-collect-for-support_{{ context }}"}

Collect this data before you open a support case. A complete set gathered at the outset minimizes the time that Red&#160;Hat Support needs to analyze the issue and determine its root cause. {._abstract}

Collect data at two levels: the cluster environment and the virtual machines (VMs) that the issue affects.

**Environment data**

| Data | Details |
| --- | --- |
| `must-gather` data for the cluster | Collect for the cluster as a whole. |
| `must-gather` data for Red Hat OpenShift Data Foundation | Collect only if the issue involves storage. |
| `must-gather` data for {{ VirtProductName }} | Collect in addition to the cluster data. |
| Prometheus metrics for the cluster | Requires a metrics retention time of at least seven days. |
| Number of affected nodes and VMs | Record the exact count, not an estimate. |

**Virtual machine data**

| Data | Details |
| --- | --- |
| `must-gather` data for the VMs | Collect by using the `/usr/bin/gather` script. |
| Screenshots of crashed VMs | Capture before you restart the VM. |
| VM memory dumps | Capture before you try any remediation. |
| Factors common to the affected VMs | For example, the VMs share a host or a network. |
| Windows patch update details | Record for Windows VMs only. |


:::important

Restarting a VM or attempting remediation discards the state that Red&#160;Hat Support needs. Capture screenshots and memory dumps first.

:::


Put the following configuration in place before an issue occurs. You cannot reconstruct this data afterward.

**Required configuration**

| Component | Required configuration |
| --- | --- |
| Prometheus | Retain metrics data for at least seven days. |
| Alertmanager | Capture relevant alerts and send notifications to a dedicated mailbox, so that they persist outside the cluster. |
| Linux VMs | Run the latest QEMU guest agent. |
| Windows VMs | Run the latest VirtIO drivers and the latest QEMU guest agent. |
| Windows VMs with Remote Desktop Protocol (RDP) enabled | Connect by using the desktop viewer to establish whether the connection software is the source of the problem. |