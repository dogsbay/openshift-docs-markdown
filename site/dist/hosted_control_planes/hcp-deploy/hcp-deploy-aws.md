---
title: Deploying {{ hcp }} on {{ aws_short }}
---

# Deploying {{ hcp }} on {{ aws_short }} {#hcp-deploy-aws}

To reduce infrastructure costs and improve cluster management efficiency, you can deploy {{ hcp }} on {{ aws_short }}. This configuration decouples the control plane from the data plane so that you can manage multiple clusters from a central management service.

A *hosted cluster* is an OpenShift Container Platform cluster with its API endpoint and control plane that are hosted on the management cluster. The hosted cluster includes the control plane and its corresponding data plane. To configure {{ hcp }} on premises, you must install {{ mce }} in a management cluster. By deploying the HyperShift Operator on an existing managed cluster by using the `hypershift-addon` managed cluster add-on, you can enable that cluster as a management cluster and start to create the hosted cluster. The `hypershift-addon` managed cluster add-on is enabled by default for the `local-cluster` managed cluster.

You can use the {{ mce_short }} console or the hosted control plane command-line interface (CLI), `hcp`, to create a hosted cluster. The hosted cluster is automatically imported as a managed cluster. However, you can disable this automatic import feature into {{ mce_short }}. For more information, see "Disabling the automatic import of hosted clusters into {{ mce_short }}".

**Additional resources**

- [Configuring Ansible Automation Platform jobs to run on hosted clusters](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#ansible-config-hosted-cluster)
- [Advanced configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
- [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)
- [Manually enabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-enable-manual_hcp-enable-disable)
- [Disabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-disable-feature_hcp-enable-disable)
- [Deploying the SR-IOV Operator for {{ hcp }}](/networking/networking_operators/sr-iov-operator/configuring-sriov-operator#sriov-operator-hosted-control-planes_configuring-sriov-operator)

**Additional resources**

- [Disabling the automatic import of hosted clusters into {{ mce_short }}](/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)
- [Running hosted clusters on an ARM64 architecture](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-enable-arm-amd_hcp-deploy-aws)

**Additional resources**

- [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

**Additional resources**

- [Extracting the release image digest](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)
- [Create an OpenShift Container Platform Cluster: {{ aws_short }} (ARM)](https://console.redhat.com/openshift/install/aws/arm)
- [Creating an {{ aws_short }} IAM role and STS credentials](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-aws-create-role-sts-creds_hcp-deploy-aws)

**Additional resources**

- [Multi-architecture nightly images](https://multi.ocp.releases.ci.openshift.org/)

**Additional resources**

- [Enabling {{ aws_short }} PrivateLink for {{ hcp }}](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-aws-enable-private-link_hcp-deploy-aws)
- [Creating an {{ aws_short }} IAM role and STS credentials](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-aws-create-role-sts-creds_hcp-deploy-aws)
- [Identity and Access Management (IAM) permissions](/hosted_control_planes/hcp-manage/hcp-manage-aws#hcp-manage-aws-infra-req_hcp-managing-aws)
- [Tutorial: Configuring private network access using a Linux Bastion Host](https://docs.aws.amazon.com/mwaa/latest/userguide/tutorials-private-network-bastion.html)
