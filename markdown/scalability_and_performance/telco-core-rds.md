---
title: Telco core reference design specifications
---

{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set telco_core = true %}
# Telco core reference design specifications {id="telco-core-ref-design-specs"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "telco-core" %}

The telco core reference design specifications (RDS) configures an {{ product_title }} cluster running on commodity hardware to host telco core workloads.

{% leveloffset +1 %}{% include "./modules/telco-core-rds-product-version-use-model-overview.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-about-the-telco-core-cluster-use-model.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-ran-core-ref-design-spec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-deviations-from-the-ref-design.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-common-baseline-model.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-deployment-planning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-worker-nodes-and-machineconfigpools.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-zones.md" %}{% endleveloffset %}

**Additional resources**

*   [Performing a canary rollout update](/updating/updating_a_cluster/update-using-custom-machine-config-pools#update-using-custom-machine-config-pools)
*   [Applying MachineConfigPool labels to nodes before the update](/updating/updating_a_cluster/update-using-custom-machine-config-pools#update-using-custom-machine-config-pools)
*   [Understanding how to use pod disruption budgets to specify the number of pods that must be up](/nodes/pods/nodes-pods-configuring#nodes-pods-pod-disruption-about_nodes-pods-configuring)
*   [Placing pods relative to other pods using affinity and anti-affinity rules](/nodes/scheduling/nodes-scheduler-pod-affinity#nodes-scheduler-pod-affinity)

{% leveloffset +1 %}{% include "./modules/telco-core-cluster-common-use-model-engineering-considerations.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-application-workloads.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-signaling-workloads.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-rds-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-cpu-partitioning-and-performance-tuning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-workloads-on-schedulable-control-planes.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a performance profile](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-create-performance-profiles_cnf-tuning-low-latency-nodes-with-perf-profile)
*   [Configuring host firmware for low latency and high performance](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-du-configuring-host-firmware-requirements_sno-configure-for-vdu)

{% leveloffset +2 %}{% include "./modules/telco-core-service-mesh.md" %}{% endleveloffset %}

**Additional resources**

*   [About OpenShift Service Mesh](/service_mesh/v2x/ossm-about#ossm-about)

{% leveloffset +2 %}{% include "./modules/telco-core-networking.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding networking](/networking/networking_overview/understanding-networking#understanding-networking)

{% leveloffset +3 %}{% include "./modules/telco-core-cluster-network-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Cluster Network Operator](/networking/networking_operators/cluster-network-operator#nw-cluster-network-operator_cluster-network-operator)
*   [Configuring an egress IP address](/networking/ovn_kubernetes_network_provider/configuring-egress-ips-ovn#configuring-egress-ips-ovn)

{% leveloffset +3 %}{% include "./modules/telco-core-load-balancer.md" %}{% endleveloffset %}

**Additional resources**

*   [When to use MetalLB](/networking/networking_operators/metallb-operator/about-metallb#nw-metallb-when-metallb_about-metallb-and-metallb-operator)

{% leveloffset +3 %}{% include "./modules/telco-core-sr-iov.md" %}{% endleveloffset %}

**Additional resources**

*   [About Single Root I/O Virtualization (SR-IOV) hardware networks](/networking/hardware_networks/about-sriov#about-sriov)
*   [Red Hat certified hardware (Red Hat Ecosystem Catalog)](https://catalog.redhat.com/en/hardware)
*   [Configuring the SR-IOV Network Operator on Mellanox cards when Secure Boot is enabled](/networking/hardware_networks/configuring-sriov-device.html#nw-sriov-nic-mlx-secure-boot_configuring-sriov-device)

{% leveloffset +3 %}{% include "./modules/telco-core-nmstate-operator.md" %}{% endleveloffset %}

**Additional resources**

*   [Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)

{% leveloffset +2 %}{% include "./modules/telco-core-logging.md" %}{% endleveloffset %}

**Additional resources**

*   [Logging 6.0](https://docs.openshift.com/container-platform/4.17/observability/logging/logging-6.0/log6x-about.html)

{% leveloffset +2 %}{% include "./modules/telco-core-power-management.md" %}{% endleveloffset %}

**Additional resources**

*   [performance.openshift.io/v2 API reference](/rest_api/node_apis/performanceprofile-performance-openshift-io-v2#spec-workloadhints)
*   [Configuring power saving for nodes that run colocated high and low priority workloads](/scalability_and_performance/cnf-tuning-low-latency-nodes-with-perf-profile#cnf-configuring-power-saving-for-nodes_cnf-tuning-low-latency-nodes-with-perf-profile)

{% leveloffset +2 %}{% include "./modules/telco-core-storage.md" %}{% endleveloffset %}

**Additional resources**

*   [{{ rh_storage_first }}](/storage/persistent_storage/persistent-storage-ocs#red-hat-openshift-data-foundation)

{% leveloffset +3 %}{% include "./modules/telco-core-openshift-data-foundation.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/telco-core-additional-storage-solutions.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-deployment-components.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-red-hat-advanced-cluster-management.md" %}{% endleveloffset %}

**Additional resources**

*   [Using {{ ztp }} to provision clusters at the network far edge](/edge_computing/ztp-deploying-far-edge-clusters-at-scale#about-ztp_ztp-deploying-far-edge-clusters-at-scale)
*   [Red Hat Advanced Cluster Management for Kubernetes](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes)

{% leveloffset +2 %}{% include "./modules/telco-core-topology-aware-lifecycle-manager.md" %}{% endleveloffset %}

**Additional resources**

*   [Updating managed clusters with the {{ cgu_operator_full }}](/edge_computing/cnf-talm-for-cluster-upgrades#cnf-talm-for-cluster-updates)

{% leveloffset +2 %}{% include "./modules/telco-core-gitops-operator-and-ztp-plugins.md" %}{% endleveloffset %}

**Additional resources**

*   [Preparing the {{ ztp }} site configuration repository for version independence](/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-ztp-git-repository-ver-ind_ztp-preparing-the-hub-cluster)
*   [Adding custom content to the {{ ztp }} pipeline](/edge_computing/policygentemplate_for_ztp/ztp-advanced-policy-config#ztp-adding-new-content-to-gitops-ztp_ztp-advanced-policy-config)

{% leveloffset +2 %}{% include "./modules/telco-core-agent-based-installer.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing an {{ product_title }} cluster with the Agent-based Installer](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)

{% leveloffset +1 %}{% include "./modules/telco-core-monitoring.md" %}{% endleveloffset %}

**Additional resources**

*   [About {{ product_title }} monitoring](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/about_monitoring/about-ocp-monitoring)

{% leveloffset +1 %}{% include "./modules/telco-core-scheduling.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the NUMA Resources Operator](/scalability_and_performance/cnf-numa-aware-scheduling#installing-the-numa-resources-operator_numa-aware)
*   [Scheduling NUMA-aware workloads](/scalability_and_performance/cnf-numa-aware-scheduling#cnf-numa-aware-scheduling)
*   [Topology Manager policies](/scalability_and_performance/using-cpu-manager#topology-manager-policies_using-cpu-manager-and-topology-manager)

{% leveloffset +1 %}{% include "./modules/telco-core-node-configuration.md" %}{% endleveloffset %}

**Additional resources**

*   [Automatic kernel crash dumps with kdump](/edge_computing/ztp-reference-cluster-configuration-for-vdu#ztp-sno-du-enabling-kdump_sno-configure-for-vdu)
*   [Optimizing CPU usage with mount namespace encapsulation](/scalability_and_performance/optimization/optimizing-cpu-usage#optimizing-cpu-usage)

{% leveloffset +2 %}{% include "./modules/telco-core-host-firmware-and-boot-loader-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-kubelet-settings.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-disconnected-environment.md" %}{% endleveloffset %}

**Additional resources**

*   [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
*   [About cluster updates in a disconnected environment](/disconnected/updating/index#about-disconnected-updates)
*   [Using sysctl in containers](/nodes/containers/nodes-containers-sysctls#nodes-containers-sysctls)

{% leveloffset +1 %}{% include "./modules/telco-core-security.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring your firewall for {{ product_title }}](/installing/install_config/configuring-firewall#configuring-firewall_configuring-firewall)
*   [{{ product_title }} network flow matrix](/installing/install_config/configuring-firewall#network-flow-matrix_configuring-firewall)
*   [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies)
*   [Using node disruption policies to minimize disruption from machine config changes](/machine_configuration/machine-config-node-disruption#machine-config-node-disruption_machine-configs-configure)

{% leveloffset +1 %}{% include "./modules/telco-core-cert-manager-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-scalability.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-reference-configuration-crs.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-rds-container.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/using-cluster-compare-telco-core.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding the cluster-compare plugin](/scalability_and_performance/cluster-compare/understanding-the-cluster-compare-plugin#understanding-the-cluster-compare-plugin)

{% leveloffset +2 %}{% include "./modules/telco-core-crs-node-configuration.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-crs-cluster-infrastructure.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-crs-resource-tuning.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-crs-networking.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-crs-scheduling.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-crs-storage.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/telco-core-crs-security.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/telco-core-software-stack.md" %}{% endleveloffset %}

{%- set telco_core = false -%}