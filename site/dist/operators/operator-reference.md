---
title: Cluster Operators reference
---

# Cluster Operators reference {#operator-reference}

This reference guide indexes the *cluster Operators* shipped by Red Hat that serve as the architectural foundation for OpenShift Container Platform. Cluster Operators are installed by default, unless otherwise noted, and are managed by the Cluster Version Operator (CVO). For more details on the control plane architecture, see [Operators in OpenShift Container Platform](/architecture/control-plane#operators-overview_control-plane).

Cluster administrators can view cluster Operators in the OpenShift Container Platform web console from the **Administration** -> **Cluster Settings** page.

> [!NOTE]
> Cluster Operators are not managed by Operator Lifecycle Manager (OLM) and the software catalog. OLM and the software catalog are part of the [Operator Framework](https://operatorframework.io/) used in OpenShift Container Platform for installing and running optional [add-on Operators](/architecture/control-plane#olm-operators_control-plane).

Some of the following cluster Operators can be disabled prior to installation. For more information see [cluster capabilities](/installing/overview/cluster-capabilities#cluster-capabilities).

**Additional resources**

- [Bare-metal capability](/installing/overview/cluster-capabilities#cluster-bare-metal-operator_cluster-capabilities)

### Additional resources {#additional-resources_cluster-op-ref-cco}

- [About the Cloud Credential Operator](/authentication/managing_cloud_provider_credentials/about-cloud-credential-operator#about-cloud-credential-operator)
- [`CredentialsRequest` custom resource](/rest_api/security_apis/credentialsrequest-cloudcredential-openshift-io-v1#credentialsrequest-cloudcredential-openshift-io-v1)

**Additional resources**

- [CSI snapshot controller capability](/installing/overview/cluster-capabilities#cluster-csi-snapshot-controller-operator_cluster-capabilities)

**Additional resources**

- [OpenShift samples capability](/installing/overview/cluster-capabilities#cluster-samples-operator_cluster-capabilities)

**Additional resources**

- [Storage capability](/installing/overview/cluster-capabilities#cluster-storage-operator_cluster-capabilities)

**Additional resources**

- [Understanding cluster version condition types](/updating/understanding_updates/intro-to-updates#understanding-clusterversion-conditiontypes_understanding-openshift-updates)

**Additional resources**

- [Web console capability](/installing/overview/cluster-capabilities#console-operator_cluster-capabilities)

### Additional resources {#additional-resources_cluster-op-ref-cpmso}

- [About control plane machine sets](/machine_management/control_plane_machine_management/cpmso-about#cpmso-about)
- [`ControlPlaneMachineSet` custom resource](/rest_api/machine_apis/controlplanemachineset-machine-openshift-io-v1#controlplanemachineset-machine-openshift-io-v1)

**Additional resources**

- [Insights capability](/installing/overview/cluster-capabilities#insights-operator_cluster-capabilities)
- [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

**Additional resources**

- [Marketplace capability](/installing/overview/cluster-capabilities#marketplace-operator_cluster-capabilities)

### Additional resources {#cluster-operators-ref-nto-addtl-resources}

- [About low latency](/scalability_and_performance/cnf-understanding-low-latency#cnf-understanding-low-latency_cnf-understanding-low-latency)

## {{ olmv0_first }} Operators {#cluster-operators-ref-olm}

> [!NOTE]
> The following sections pertain to {{ olmv0_first }} that has been included with OpenShift Container Platform 4 since its initial release. For {{ olmv1 }}, see [{{ olmv1_first }} Operators](/operators/operator-reference#cluster-operators-ref-olmv1_operator-reference).

### Cluster Operators {#_cluster_operators}

In OpenShift Container Platform, OLM functionality is provided across a set of cluster Operators:

`operator-lifecycle-manager`
:   Provides the OLM Operator. Also informs cluster administrators if there are any installed Operators blocking cluster upgrade, based on their `olm.maxOpenShiftVersion` properties. For more information, see "Controlling Operator compatibility with OpenShift Container Platform versions".

`operator-lifecycle-manager-catalog`
:   Provides the Catalog Operator.

`operator-lifecycle-manager-packageserver`
:   Represents an API extension server responsible for collecting metadata from all catalogs on the cluster and serves the user-facing `PackageManifest` API.

### Additional resources {#cluster-operators-ref-olm-addtl-resources}

- [Understanding Operator Lifecycle Manager (OLM)](/operators/understanding/olm/olm-understanding-olm#olm-understanding-olm)

### Additional resources {#cluster-operators-ref-olmv1-addtl-resources}

- [Extensions overview](/extensions/index#extensions-overview)
- [Compatibility with OpenShift Container Platform versions](/extensions/ce/update-paths#olmv1-ocp-compat_update-paths)

**Additional resources**

- [Using the vSphere Problem Detector Operator](/installing/installing_vsphere/using-vsphere-problem-detector-operator#using-vsphere-problem-detector-operator)
