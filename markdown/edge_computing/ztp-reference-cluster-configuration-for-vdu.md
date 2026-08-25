---
title: "Recommended {{ sno }} cluster configuration for vDU application workloads"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Recommended {{ sno }} cluster configuration for vDU application workloads {id="sno-configure-for-vdu"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "sno-configure-for-vdu" %}

Use the following reference information to understand the {{ sno }} configurations required to deploy virtual distributed unit (vDU) applications in the cluster. Configurations include cluster optimizations for high performance workloads, enabling workload partitioning, and minimizing the number of reboots required postinstallation.

**Additional resources**

*   [Manually installing a {{ sno }} cluster with {{ ztp }}](/edge_computing/ztp-manual-install#ztp-manual-install)
*   [Deploying far edge sites with {{ ztp }}](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)

{% leveloffset +1 %}{% include "./modules/ztp-low-latency.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-install-sno-hardware-reqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities)
*   [Tuning nodes for low latency with the performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +1 %}{% include "./modules/ztp-du-host-firmware-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-managed-cluster-network-prereqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-enabling-workload-partitioning-sno.md" %}{% endleveloffset %}

**Additional resources**

*   [TPM encryption](/security/network_bound_disk_encryption/nbde-about-disk-encryption-technology#nbde-tpm-encryption_nbde-implementation)

{% leveloffset +1 %}{% include "./modules/ztp-sno-du-recommended-cluster-install-manifests.md" %}{% endleveloffset %}

**Additional resources**

*   [Advanced managed cluster configuration with ClusterInstance CRs](/edge_computing/ztp-advanced-install-ztp#ztp-advanced-install-ztp)

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-the-container-mountspace.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-enabling-sctp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-setting-rcu-normal.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-enabling-kdump.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-disabling-crio-wipe.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-crun-container-runtime.md" %}{% endleveloffset %}

**Additional resources**

{% leveloffset +1 %}{% include "./modules/ztp-sno-du-recommended-postinstallation-cluster-configurations.md" %}{% endleveloffset %}

**Additional resources**

*   [Deploying a managed cluster with ClusterInstance and {{ ztp }}](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-a-site_ztp-deploying-far-edge-sites)

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-the-operators.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-subscribing-to-the-operators-needed-for-platform-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-logging-locally-and-forwarding.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-performance-addons.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-time-sync.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-ptp.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-tuning-the-performance-patch.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-sriov.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-removing-the-console-operator.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-reducing-resource-usage-with-cluster-monitoring.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-reducing-resource-usage-with-olm-pprof.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-configuring-lvms.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/ztp-sno-du-disabling-network-diagnostics.md" %}{% endleveloffset %}

**Additional resources**

*   [Deploying far edge sites using ZTP](/edge_computing/ztp-deploying-far-edge-sites#ztp-deploying-far-edge-sites)