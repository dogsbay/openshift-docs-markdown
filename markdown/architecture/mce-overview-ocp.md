---
title: "About the {{ mce }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About the {{ mce }} {id="mce-overview-ocp"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "mce-overview-ocp" %}

Manage the lifecycle of a growing Kubernetes fleet with the {{ mce_short }}. Scale operations efficiently with full lifecycle capabilities for managed {{ product_title }} clusters and support for other Kubernetes distributions.

You can access the Operator in the following ways:

*   As a standalone Operator that you install as part of your {{ product_title }} or {{ oke }} subscription.
*   As part of Red Hat Advanced Cluster Management for Kubernetes.

When you enable multicluster engine on {{ product_title }} to manage your cluster, you gain the following capabilities:

*   {{ hcp_capital }}, which is a feature that is based on the HyperShift project. With a centralized hosted control plane, you can operate {{ product_title }} clusters in a hyperscale manner.
*   Hive, which provisions self-managed {{ product_title }} clusters to the hub and completes the initial configurations for those clusters.
*   klusterlet agent, which registers managed clusters to the hub.
*   Infrastructure Operator, which manages the deployment of the Assisted Service to orchestrate on-premises bare metal and vSphere installations of {{ product_title }}, such as {{ sno }} on bare metal. The Infrastructure Operator includes {{ ztp_first }}, which fully automates cluster creation on bare metal and vSphere provisioning with GitOps workflows to manage deployments and configuration changes.
*   Open cluster management, which provides resources to manage Kubernetes clusters.

The multicluster engine is included with your {{ product_title }} support subscription and is delivered separately from the core payload. To start to use multicluster engine, you deploy the {{ product_title }} cluster and then install the Operator. For more information, see "Installing and upgrading multicluster engine Operator".

If you need cluster management capabilities beyond what {{ product_title }} with multicluster engine can provide, consider Red Hat Advanced Cluster Management. The multicluster engine is an integral part of Red Hat Advanced Cluster Management and is enabled by default.

For the complete documentation for multicluster engine, see "Cluster lifecycle with multicluster engine Operator", which is part of the product documentation for Red Hat Advanced Cluster Management.

## Additional resources {id="additional-resources_{{ context }}"}

*   [Red Hat Advanced Cluster Management for Kubernetes](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes)
*   [{{ hcp_capital }} overview](/hosted_control_planes/index#hcp-overview)
*   [Using {{ ztp_first }} to provision clusters at the network far edge](/edge_computing/ztp-deploying-far-edge-clusters-at-scale#ztp-challenges-of-far-edge-deployments_ztp-deploying-far-edge-clusters-at-scale)
*   [Installing and upgrading multicluster engine Operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview#mce-install-intro)
*   [Cluster lifecycle with multicluster engine Operator](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.16/html/clusters/cluster_mce_overview)