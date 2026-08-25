---
title: Preparing a bare-metal cluster for platform update
---

# Preparing a bare-metal cluster for platform update {#update-ocp-update-prep}

On bare-metal hardware, you often must update the firmware to take on important security fixes, take on new functionality, or maintain compatibility with the new release of OpenShift Container Platform.

## Disconnected environment considerations {#update-environment-considerations_ocp-update-prep}

To update clusters in disconnected environments, you must update your offline image repository.

**Additional resources**

- [API compatibility guidelines](/openshift-docs-markdown/rest_api/overview/understanding-compatibility-guidelines#api-compatibility-guidelines_compatibility-guidelines)
- [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/openshift-docs-markdown/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)

**Additional resources**

- [Updating the worker nodes](/openshift-docs-markdown/post_installation_configuration/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-updating-the-worker-nodes_completing-the-update)
- [Updating all the OLM Operators](/openshift-docs-markdown/post_installation_configuration/day_2_core_cnf_clusters/updating/update-completing-the-control-plane-only-update#update-updating-all-the-olm-operators_completing-the-update)

**Additional resources**

- [Node configuration management with machine config pools](/openshift-docs-markdown/machine_configuration/index#architecture-machine-config-pools_machine-config-overview)

**Additional resources**

- [Performing a Control Plane Only update](/openshift-docs-markdown/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
- [Factors affecting update duration](/openshift-docs-markdown/updating/understanding_updates/understanding-openshift-update-duration#factors-affecting-update-duration_openshift-update-duration)
- [Ensuring that CNF workloads run uninterrupted with pod disruption budgets](/openshift-docs-markdown/post_installation_configuration/day_2_core_cnf_clusters/updating/update-cnf-update-prep#update-pdb_update-cnf-update-prep)
- [Ensuring that pods do not run on the same cluster node](/openshift-docs-markdown/post_installation_configuration/day_2_core_cnf_clusters/updating/update-cnf-update-prep#update-pod-anti-affinity_update-cnf-update-prep)

**Additional resources**

- [Investigating pod issues](/openshift-docs-markdown/support/troubleshooting/investigating-pod-issues#investigating-pod-issues)
