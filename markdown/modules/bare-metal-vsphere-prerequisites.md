{%- set _mod_docs_content_type = "CONCEPT" %}
# Prerequisites for adding bare-metal compute machines to a vSphere cluster {id="bare-metal-vsphere-prerequisites_{{ context }}"}

Before you add bare-metal compute machines to your {{ vmw_first }} cluster, you must meet the following infrastructure and network requirements. {._abstract}

*   You have an existing {{ product_title }} cluster installed on {{ vmw_short }}.
*   You have bare-metal hardware with network connectivity to the existing cluster’s machine network.
*   You have configured the network for the new bare-metal compute machines, including:
    *   DHCP: Persistent IP addresses and hostname reservations.
    *   DNS: Forward and reverse DNS resolution for the new hostnames.
*   You have obtained the {{ op_system_first }} ISO image that matches your cluster version. You can download this from the **Cluster Details** page on the {{ hybrid_console }} or extract it from the cluster payload.


:::warning

To use this feature, you must explicitly disable the native {{ vmw_short }} Container Storage Interface (CSI) driver for the entire cluster. This means existing {{ vmw_short }} virtual machines will lose the ability to provision or attach {{ vmw_short }} volumes. You must ensure that all workloads (virtual and physical) are migrated to an alternative storage solution before proceeding.

:::