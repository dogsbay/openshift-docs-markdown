---
title: Enabling Windows container workloads
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Enabling Windows container workloads {id="enabling-windows-container-workloads"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "enabling-windows-container-workloads" %}

Before adding Windows workloads to your cluster, you must install the Windows Machine Config Operator (WMCO), which is available in the {{ product_title }} software catalog. The WMCO orchestrates the process of deploying and managing Windows workloads on a cluster.


:::note

Dual NIC is not supported on WMCO-managed Windows instances.

:::


## Prerequisites {id="_prerequisites"}

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have installed the OpenShift CLI (`oc`).
*   You have installed your cluster using one of the following infrastructures: 
    *   Any installer-provisioned infrastructure 
    *   A user-provisioned infrastructure with the `platform: none` field set in your `install-config.yaml` file
*   You have configured hybrid networking with OVN-Kubernetes for your cluster. For more information, see "Configuring hybrid networking".
*   You are running an {{ product_title }} cluster version 4.6.8 or later.


:::note

Windows instances deployed by the WMCO are configured with the containerd container runtime. Because WMCO installs and manages the runtime, it is recommended that you do not manually install containerd on nodes.

:::


For the comprehensive prerequisites for the Windows Machine Config Operator, see "Windows Machine Config Operator prerequisites".

## Installing the Windows Machine Config Operator {id="installing-the-wmco"}

You can install the Windows Machine Config Operator using either the web console or OpenShift CLI (`oc`).


:::note

Due to a limitation within the Windows operating system, `clusterNetwork` CIDR addresses of class E, such as `240.0.0.0`, are not compatible with Windows nodes.

:::


{% leveloffset +2 %}{% include "./modules/installing-wmco-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installing-wmco-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-secret-for-wmco.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/wmco-configure-debug-logging.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/wmco-cluster-wide-proxy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/wmco-disconnected-cluster.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-registry-mirror.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/images-configuration-registry-mirror-configuring.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-nodes-rebooting-gracefully.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Windows Machine Config Operator prerequisites](/windows_containers/wmco_rn/windows-containers-release-notes-prereqs#windows-containers-release-notes-prereqs)
*   [Configuring hybrid networking](/networking/ovn_kubernetes_network_provider/configuring-hybrid-networking#configuring-hybrid-ovnkubernetes)
*   [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)
*   [About disconnected installation mirroring](/disconnected/index#installing-mirroring-disconnected-about)
*   [Using Windows containers with a mirror registry](/windows_containers/enabling-windows-container-workloads#wmco-disconnected-cluster_enabling-windows-container-workloads)
*   [Rebooting a {{ product_title }} node gracefully](/nodes/nodes/nodes-nodes-rebooting#nodes-nodes-rebooting-gracefully_nodes-nodes-rebooting)
*   [Backing up etcd data](/backup_and_restore/control_plane_backup_and_restore/backing-up-etcd#backup-etcd)
*   [Generating a key pair for cluster node SSH access](/installing/installing_azure/ipi/installing-azure-default#ssh-agent-using_installing-azure-default)
*   [Adding Operators to a cluster](/operators/admin/olm-adding-operators-to-cluster#olm-adding-operators-to-a-cluster)