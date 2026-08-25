---
title: Installing a cluster on OpenStack with customizations
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on OpenStack with customizations {id="installing-openstack-installer-custom"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-openstack-installer-custom" %}

In {{ product_title }} version {{ product_version }}, you can install a customized cluster on {{ rh_openstack_first }}. To customize the installation, modify parameters in the `install-config.yaml` before you install the cluster.

Ensure that you meet the following prerequisites:

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You verified that {{ product_title }} {{ product_version }} is compatible with your {{ rh_openstack }} version by using the supported platforms for {{ product_title }} clusters section. You can also compare platform support across different versions by viewing the {{ product_title }} on {{ rh_openstack }} support matrix.
*   You have a storage service installed in {{ rh_openstack }}, such as block storage (Cinder) or object storage (Swift). Object storage is the recommended storage technology for {{ product_title }} registry cluster deployment. For more information, see "Optimizing storage".
*   You understand performance and scalability practices for cluster scaling, control plane sizing, and etcd. For more information, see "Recommended practices for scaling the cluster".
*   You have the metadata service enabled in {{ rh_openstack }}.

You can complete the following configurations after you install a cluster on {{ rh_openstack }} with customizations:

*   Customize your cluster.
*   Enable remote health reporting.
*   Configure ingress cluster traffic by using a node port.
*   If you did not configure {{ rh_openstack }} to accept application traffic over floating IP addresses, configure {{ rh_openstack }} access with floating IP addresses.

**Additional resources**

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Supported platforms for {{ product_title }} clusters](/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
*   [{{ product_title }} on {{ rh_openstack }} support matrix (Red Hat Knowledgebase)](https://access.redhat.com/articles/4679401)
*   [Optimizing storage](/scalability_and_performance/optimization/optimizing-storage#optimizing-storage)
*   [Recommended practices for scaling the cluster](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-host-practices)

{% leveloffset +1 %}{% include "./modules/installation-osp-default-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-control-compute-machines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-compute-machines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-bootstrap-machine.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-load-balancing-user-infra.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-load-balancing-user-infra-example.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-enabling-swift.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-registry-osp-creating-custom-pvc.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-verifying-external-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-describing-cloud-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-setting-cloud-provider-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ rh_openstack }}](/installing/installing_openstack/installation-config-parameters-openstack#installation-config-parameters-openstack)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-custom-subnet.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-deploying-bare-metal-machines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-provider-networks.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-osp-provider-network-preparation.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/installation-osp-deploying-provider-networks-installer.md" %}{% endleveloffset %}

**Additional resources**

*   [Understanding multiple networks](/networking/multiple_networks/understanding-multiple-networks#understanding-multiple-networks)

{% leveloffset +2 %}{% include "./modules/installation-osp-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/install-osp-dualstack.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/install-osp-deploy-dualstack.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-configuring-shiftstack-single-ipv6.md" %}{% endleveloffset %}

**Additional resources**

*   [Creating a mirror registry with mirror registry for Red Hat OpenShift](/disconnected/installing-mirroring-creating-registry#installing-mirroring-creating-registry)

{% leveloffset +2 %}{% include "./modules/installation-osp-external-lb-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-accessing-api.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-accessing-api-floating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-accessing-api-no-floating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-verifying-cluster-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

## Additional resources {id="additional-resources_{{ context }}"}

*   [Postinstallation cluster tasks](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Configuring ingress cluster traffic by using a NodePort](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#nw-using-nodeport_configuring-ingress-cluster-traffic-nodeport)
*   [Configuring network settings after installing {{ rh_openstack }}](/installing/installing_openstack/installing-openstack-network-config#installation-osp-configuring-api-floating-ip_installing-openstack-network-config)