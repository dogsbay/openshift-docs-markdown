---
title: Preparing to install a two-node OpenShift cluster with fencing
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Preparing to install a two-node OpenShift cluster with fencing {id="installing-two-node-fencing"}
{%- set context = "installing-two-node-fencing" %}

A two-node {{ product_title }} cluster with fencing provides high availability (HA) with a reduced hardware footprint. This configuration is designed for distributed or edge environments where deploying a full three-node control plane cluster is not practical. {._abstract}

A two-node cluster does not include compute nodes. The two control plane machines run user workloads in addition to managing the cluster.

Fencing is managed by Pacemaker, which can isolate an unresponsive node by using the Baseboard Management Console (BMC) of the node. After the unresponsive node is fenced, the remaining node can safely continue operating the cluster without the risk of resource corruption.


:::note

You can deploy a two-node {{ product_title }} cluster with fencing by using either the user-provisioned infrastructure method or the installer-provisioned infrastructure method.

:::


The two-node OpenShift cluster with fencing requires the following hosts:

**Minimum required hosts**

| Hosts | Description |
| --- | --- |
| Two control plane machines | The control plane machines run the Kubernetes and {{ product_title }} services that form the control plane. |
| One temporary bootstrap machine | You need a bootstrap machine to deploy the {{ product_title }} cluster on the control plane machines. You can remove the bootstrap machine after you install the cluster. |

The bootstrap and control plane machines must use Red Hat Enterprise Linux CoreOS (RHCOS) as the operating system. For instructions on installing RHCOS and starting the bootstrap process, see "Installing RHCOS and starting the {{ product_title }} bootstrap process".


:::note

The requirement to use RHCOS applies only to user-provisioned infrastructure deployments. For installer-provisioned infrastructure deployments, the bootstrap and control plane machines are provisioned automatically by the installation program, and you do not need to manually install RHCOS.

:::


{% leveloffset +1 %}{% include "./modules/installation-two-node-cluster-min-resource-reqs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-dns-user-infra.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-dns-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-dns-installer-infra.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-two-node-creating-manifest-custom-br-ex.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}

*   [Installing RHCOS and starting the {{ product_title }} bootstrap process](/installing/installing_bare_metal/upi/installing-bare-metal-network-customizations#creating-machines-bare-metal_installing-bare-metal-network-customizations)
*   [Creating a manifest file for a customized br-ex bridge](/installing/installing_bare_metal/ipi/ipi-install-installation-workflow#creating-manifest-file-customized-br-ex-bridge_ipi-install-installation-workflow)
*   [Configuring and managing high availability clusters in RHEL](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_high_availability_clusters/index)