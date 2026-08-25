---
title: "Handling machine configuration for {{ hcp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Handling machine configuration for {{ hcp }} {id="hcp-machine-config"}
{%- set context = "hcp-machine-config" %}

In a standalone {{ product_title }} cluster, a machine config pool manages a set of nodes. You can handle a machine configuration by using the `MachineConfigPool` custom resource (CR). {._abstract}


:::tip

You can reference any `machineconfiguration.openshift.io` resources in the `nodepool.spec.config` field of the `NodePool` CR.

:::


In {{ hcp }}, the `MachineConfigPool` CR does not exist. A node pool contains a set of compute nodes. You can handle a machine configuration by using node pools.

You can manage your workloads in your hosted cluster by using the cluster autoscaler.


:::note

In {{ product_title }} 4.18 or later, the default container runtime for worker nodes is changed from runC to crun.

:::


{% leveloffset +1 %}{% include "./modules/configuring-node-pools-for-hcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-kubeconf-nodepool.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/node-tuning-hosted-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sriov-operator-hosted-control-planes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/hcp-configure-ntp.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating machine configs with Butane](/installing/install_config/installing-customizing#installation-special-config-butane_installing-customizing)
*   [Creating a host inventory by using the command line interface](https://docs.redhat.com/en/documentation/red_hat_advanced_cluster_management_for_kubernetes/latest/html-single/clusters/index#create-host-inventory-cli)

{% leveloffset +1 %}{% include "./modules/scale-up-down-autoscaler-hcp.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Scaling the NodePool object for a hosted cluster (bare-metal platforms)](/hosted_control_planes/hcp-manage/hcp-manage-bm#hcp-bm-scale-np_hcp-manage-bm)
*   [Scaling the NodePool object for a hosted cluster (non-bare metal agent machines)](/hosted_control_planes/hcp-manage/hcp-manage-non-bm#hcp-bm-scale-np_hcp-manage-non-bm)
*   [Scaling a node pool ({{ VirtProductName }})](/hosted_control_planes/hcp-deploy/hcp-deploy-virt#hcp-virt-scale-nodpool_hcp-deploy-virt)

{% leveloffset +1 %}{% include "./modules/scale-up-autoscaler-hcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/priority-expander-autoscaler-hcp.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/balance-ignored-labels-autoscaler-hcp.md" %}{% endleveloffset %}