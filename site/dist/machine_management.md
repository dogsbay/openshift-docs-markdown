---
title: Overview of machine management
---

# Overview of machine management {#overview-of-machine-management}

You can use machine management to flexibly work with underlying infrastructure such as Amazon Web Services (AWS), Microsoft Azure, {{ gcp_first }}, {{ rh_openstack_first }}, and VMware vSphere to manage the OpenShift Container Platform cluster. You can control the cluster and perform auto-scaling, such as scaling up and down the cluster based on specific workload policies.

It is important to have a cluster that adapts to changing workloads. The OpenShift Container Platform cluster can horizontally scale up and down when the load increases or decreases.

Machine management is implemented as a custom resource definition (CRD). A CRD object defines a new unique object `Kind` in the cluster and enables the Kubernetes API server to handle the object’s entire lifecycle.

The Machine API Operator provisions the following resources:

- `MachineSet`
- `Machine`
- `ClusterAutoscaler`
- `MachineAutoscaler`
- `MachineHealthCheck`

**Additional resources**

- [Machine phases and lifecycle](/openshift-docs-markdown/machine_management/machine-phases-lifecycle#machine-phases-lifecycle)

**Additional resources**

- [Manually updating the boot image](/openshift-docs-markdown/machine_configuration/mco-update-boot-images-manual#mco-update-boot-images-manual)
- [Boot image management](/openshift-docs-markdown/machine_configuration/mco-update-boot-images#mco-update-boot-images)

**Additional resources**

- [Adding compute machines to clusters with user-provisioned infrastructure manually](/openshift-docs-markdown/machine_management/user_infra/adding-compute-user-infra-general#adding-compute-user-infra-general)
