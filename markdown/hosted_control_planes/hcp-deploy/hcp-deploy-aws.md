---
title: "Deploying {{ hcp }} on {{ aws_short }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on {{ aws_short }} {id="hcp-deploy-aws"}
{%- set context = "hcp-deploy-aws" %}

To reduce infrastructure costs and improve cluster management efficiency, you can deploy {{ hcp }} on {{ aws_short }}. This configuration decouples the control plane from the data plane so that you can manage multiple clusters from a central management service. {._abstract}

A _hosted cluster_ is an {{ product_title }} cluster with its API endpoint and control plane that are hosted on the management cluster. The hosted cluster includes the control plane and its corresponding data plane. To configure {{ hcp }} on premises, you must install {{ mce }} in a management cluster. By deploying the HyperShift Operator on an existing managed cluster by using the `hypershift-addon` managed cluster add-on, you can enable that cluster as a management cluster and start to create the hosted cluster. The `hypershift-addon` managed cluster add-on is enabled by default for the `local-cluster` managed cluster.

You can use the {{ mce_short }} console or the hosted control plane command-line interface (CLI), `hcp`, to create a hosted cluster. The hosted cluster is automatically imported as a managed cluster. However, you can disable this automatic import feature into {{ mce_short }}. For more information, see "Disabling the automatic import of hosted clusters into {{ mce_short }}".

{% leveloffset +1 %}{% include "./modules/hcp-aws-prepare.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-prereqs.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring Ansible Automation Platform jobs to run on hosted clusters](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#ansible-config-hosted-cluster)
*   [Advanced configuration](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
*   [Enabling the central infrastructure management service](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#enable-cim)
*   [Manually enabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-enable-manual_hcp-enable-disable)
*   [Disabling the {{ hcp }} feature](/hosted_control_planes/hcp-prepare/hcp-enable-disable#hcp-disable-feature_hcp-enable-disable)
*   [Deploying the SR-IOV Operator for {{ hcp }}](/networking/networking_operators/sr-iov-operator/configuring-sriov-operator#sriov-operator-hosted-control-planes_configuring-sriov-operator)

{% leveloffset +2 %}{% include "./modules/hcp-aws-create-secret-s3.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-create-public-zone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-create-role-sts-creds.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-enable-private-link.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-aws-enable-ext-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-set-up-ext-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-create-dns-hosted-zone.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-aws-hc-ext-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-custom-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-create-hc-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Disabling the automatic import of hosted clusters into {{ mce_short }}](/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)
*   [Running hosted clusters on an ARM64 architecture](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-enable-arm-amd_hcp-deploy-aws)

{% leveloffset +2 %}{% include "./modules/hcp-aws-deploy-hc.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +2 %}{% include "./modules/hcp-create-hc-multi-zone-aws-creds.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hc-create-aws-multi-zones.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-ref.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-access-hc-aws.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-enable-arm-amd.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-create-hc-arm64-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Extracting the release image digest](/hosted_control_planes/hcp-disconnected/hcp-deploy-dc-bm#hcp-dc-extract_hcp-deploy-dc-bm)
*   [Create an {{ product_title }} Cluster: {{ aws_short }} (ARM)](https://console.redhat.com/openshift/install/aws/arm)
*   [Creating an {{ aws_short }} IAM role and STS credentials](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-aws-create-role-sts-creds_hcp-deploy-aws)

{% leveloffset +2 %}{% include "./modules/hcp-create-np-arm64-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Multi-architecture nightly images](https://multi.ocp.releases.ci.openshift.org/)

{% leveloffset +1 %}{% include "./modules/hcp-create-private-hc-aws.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Enabling {{ aws_short }} PrivateLink for {{ hcp }}](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-aws-enable-private-link_hcp-deploy-aws)
*   [Creating an {{ aws_short }} IAM role and STS credentials](/hosted_control_planes/hcp-deploy/hcp-deploy-aws#hcp-aws-create-role-sts-creds_hcp-deploy-aws)
*   [Identity and Access Management (IAM) permissions](/hosted_control_planes/hcp-manage/hcp-manage-aws#hcp-manage-aws-infra-req_hcp-managing-aws)
*   [Tutorial: Configuring private network access using a Linux Bastion Host](https://docs.aws.amazon.com/mwaa/latest/userguide/tutorials-private-network-bastion.html)

{% leveloffset +2 %}{% include "./modules/hcp-access-priv-mgmt-aws.md" %}{% endleveloffset %}