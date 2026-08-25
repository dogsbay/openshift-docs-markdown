---
title: Migrating to a cluster with multi-architecture compute machines
---

# Migrating to a cluster with multi-architecture compute machines {#migrating-clusters-to-multi-payload}

You can migrate your current cluster with single-architecture compute machines to a cluster with multi-architecture compute machines by updating to a multi-architecture, manifest-listed payload. This allows you to add mixed architecture compute nodes to your cluster.

For information about configuring your multi-architecture compute machines, see "Configuring multi-architecture compute machines on an OpenShift Container Platform cluster".

Before migrating your single-architecture cluster to a cluster with multi-architecture compute machines, it is recommended to install the Multiarch Tuning Operator, and deploy a `ClusterPodPlacementConfig` custom resource. For more information, see [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator).

> [!IMPORTANT]
> Migration from a multi-architecture payload to a single-architecture payload is not supported. Once a cluster has transitioned to using a multi-architecture payload, it can no longer accept a single-architecture update payload.

**Additional resources**

- [Configuring multi-architecture compute machines on an OpenShift Container Platform cluster](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multi-architecture-configuration#multi-architecture-configuration)
- [Managing workloads on multi-architecture clusters by using the Multiarch Tuning Operator](/openshift-docs-markdown/post_installation_configuration/configuring-multi-arch-compute-machines/multiarch-tuning-operator#multiarch-tuning-operator)
- [Updating a cluster using the web console](/openshift-docs-markdown/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)
- [Updating a cluster using the CLI](/openshift-docs-markdown/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli)
- [Understanding cluster version condition types](/openshift-docs-markdown/updating/understanding_updates/intro-to-updates#understanding-clusterversion-conditiontypes_understanding-openshift-updates)
- [Understanding update channels and releases](/openshift-docs-markdown/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)
- [Selecting a cluster installation type](/openshift-docs-markdown/installing/overview/installing-preparing#installing-preparing-selecting-cluster-type_installing-preparing)
- [About machine health checks](/openshift-docs-markdown/machine_management/deploying-machine-health-checks#machine-health-checks-about_deploying-machine-health-checks)

**Additional resources**

- [Control plane configuration options for {{ aws_full }}](/openshift-docs-markdown/machine_management/control_plane_machine_management/cpmso_provider_configurations/cpmso-config-options-aws#cpmso-config-options-aws)
- [Tested instance types for AWS on 64-bit ARM infrastructures](/openshift-docs-markdown/installing/installing_aws/upi/upi-aws-installation-reqs#installation-aws-arm-tested-machine-types_upi-aws-installation-reqs)
- [Migrating to a cluster with multi-architecture compute machines using the CLI](/openshift-docs-markdown/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-arch-cli_updating-clusters-overview)

**Additional resources**

- [Tested instance types for {{ gcp_short }} on 64-bit ARM infrastructures](/openshift-docs-markdown/installing/installing_gcp/installing-gcp-customizations#installation-gcp-tested-machine-types-arm_installing-gcp-customizations)
- [Migrating to a cluster with multi-architecture compute machines using the CLI](/openshift-docs-markdown/updating/updating_a_cluster/migrating-to-multi-payload#migrating-to-multi-arch-cli_updating-clusters-overview)
