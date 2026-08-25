---
title: "Deploying {{ hcp }} on {{ VirtProductName }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Deploying {{ hcp }} on {{ VirtProductName }} {id="hcp-deploy-virt"}
{%- set context = "hcp-deploy-virt" %}

With {{ hcp }} and {{ VirtProductName }}, you can create {{ product_title }} clusters with worker nodes that are hosted by KubeVirt virtual machines. 

{{ hcp_capital }} on {{ VirtProductName }} provides several benefits:

*   Enhances resource usage by packing {{ hcp }} and hosted clusters in the same underlying bare-metal infrastructure
*   Separates {{ hcp }} and hosted clusters to provide strong isolation
*   Reduces cluster provision time by eliminating the bare-metal node bootstrapping process
*   Manages many releases under the same base {{ product_title }} cluster

The {{ hcp }} feature is enabled by default.

You can use the hosted control plane command-line interface, `hcp`, to create an {{ product_title }} hosted cluster. The hosted cluster is automatically imported as a managed cluster. If you want to disable this automatic import feature, see "Disabling the automatic import of hosted clusters into multicluster engine Operator".

**Additional resources**

*   [Disabling the automatic import of hosted clusters into {{ mce_short }}](/hosted_control_planes/hcp-import#hcp-import-disable_hcp-import)

{% leveloffset +1 %}{% include "./modules/hcp-virt-prereqs.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing OpenShift Virtualization using the web console](/virt/install/installing-virt#installing-virt-web)
*   [Postinstallation storage configuration](/post_installation_configuration/post-install-storage-configuration#post-install-storage-configuration)
*   [Install OpenShift on any x86_64 platform with user-provisioned infrastructure](https://console.redhat.com/openshift/install/platform-agnostic/user-provisioned)
*   [Configuring MetalLB](/hosted_control_planes/hcp-deploy/hcp-deploy-virt#hcp-metallb_hcp-deploy-virt)
*   [Advanced configuration ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html/clusters/cluster_mce_overview#advanced-config-engine)
*   [Recommended etcd practices](/etcd/etcd-practices#recommended-etcd-practices)
*   [Persistent storage using Logical Volume Manager Storage](/storage/persistent_storage_local/persistent-storage-using-lvms#persistent-storage-using-lvms)

{% leveloffset +2 %}{% include "./modules/hcp-virt-firewall-port.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-live-migration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-metallb.md" %}{% endleveloffset %}

**Additional resources**

*   [Installing the MetalLB Operator](/networking/networking_operators/metallb-operator/metallb-operator-install#metallb-operator-install_metallb-operator-install)

{% leveloffset +1 %}{% include "./modules/hcp-virt-create-hc.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-create-hc-cli.md" %}{% endleveloffset %}

**Additional resources**

*   [Labeling management cluster nodes](/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +2 %}{% include "./modules/hcp-virt-create-hc-ext-infra.md" %}{% endleveloffset %}

**Additional resources**

*   [Labeling management cluster nodes](/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)

{% leveloffset +2 %}{% include "./modules/hcp-virt-create-hc-console.md" %}{% endleveloffset %}

**Additional resources**

*   [Labeling management cluster nodes](/hosted_control_planes/hcp-prepare/hcp-distribute-workloads#hcp-labels-taints_hcp-distribute-workloads)
*   [Configuring a custom API server certificate in a hosted cluster](/hosted_control_planes/hcp-certificates#hcp-custom-cert_hcp-certificates)
*   [Creating a credential for an on-premises environment ({{ rh_rhacm_title }} documentation)](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/2.15/html/clusters/cluster_mce_overview#creating-a-credential-for-an-on-premises-environment)
*   [Accessing the hosted cluster](/hosted_control_planes/hcp-manage/hcp-manage-virt#hcp-virt-access_hcp-manage-virt)

{% leveloffset +1 %}{% include "./modules/hcp-cluster-capabilities.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-ref.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-cluster-capabilities-proc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-ingress-dns.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-custom-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-ingress-dns-custom.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-hc-base-domain.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-load-balancer.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-wildcard-dns.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-addl-config.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-add-networks.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/hcp-virt-addl-network.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-guaranteed-cpus.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/hcp-virt-sched-vms.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-virt-scale-nodepool.md" %}{% endleveloffset %}

**Additional resources**

*   [Scaling up and down workloads in a hosted cluster](/hosted_control_planes/hcp-machine-config#scale-up-down-autoscaler-hcp_hcp-machine-config)

{% leveloffset +2 %}{% include "./modules/hcp-virt-add-node.md" %}{% endleveloffset %}

**Additional resources**

*   [Scaling down the data plane to zero](https://access.redhat.com/documentation/en-us/openshift_container_platform/4.15/html/hosted_control_planes/troubleshooting-hosted-control-planes#scale-down-data-plane_hcp-troubleshooting)

{% leveloffset +1 %}{% include "./modules/hcp-virt-verify-hc.md" %}{% endleveloffset %}