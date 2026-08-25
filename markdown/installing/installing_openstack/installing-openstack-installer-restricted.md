---
title: Installing a cluster on OpenStack in a disconnected environment
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing a cluster on OpenStack in a disconnected environment {id="installing-openstack-installer-restricted"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "installing-openstack-installer-restricted" -%}

{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_sr_iov = true -%}
{% endif %}
{% if context == "installing-openstack-installer-sr-iov" %}
{%- set osp_sr_iov = true -%}
{% endif %}
{% if context == "installing-openstack-installer-ovs-dpdk" %}
{%- set osp_sr_iov = true -%}
{% endif %}

In {{ product_title }} {{ product_version }}, you can install a cluster on {{ rh_openstack_first }} in a restricted network by creating an internal mirror of the installation release content.

Ensure that you meet the following prerequisites:

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You verified that {{ product_title }} {{ product_version }} is compatible with your {{ rh_openstack }} version. For more information, see "Supported platforms for {{ product_title }} clusters". You can also compare platform support across different versions by viewing the "{{ product_title }} on {{ rh_openstack }} support matrix".
*   You created a registry on your mirror host and obtained the `imageContentSources` data for your version of {{ product_title }}. Because the installation media is on the mirror host, you can use that computer to complete all installation steps.
*   You understand performance and scalability practices for cluster scaling, control plane sizing, and etcd. For more information, see "Recommended control plane practices".
*   You have the metadata service enabled in {{ rh_openstack }}.

You can complete the following configurations after you install a cluster on {{ rh_openstack_first }} in a disconnected environment:

*   Customize your cluster.
*   If the mirror registry that you used to install your cluster has a trusted CA, add it to the cluster by configuring additional trust stores.
*   Enable remote health reporting.
*   Register your disconnected cluster.
*   Configure image streams for the Cluster Samples Operator and the `must-gather` tool.
*   Learn how to use Operator Lifecycle Manager in disconnected environments.
*   If you did not configure {{ rh_openstack }} to accept application traffic over floating IP addresses, configure {{ rh_openstack }} access with floating IP addresses.

**Additional resources**

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Supported platforms for {{ product_title }} clusters](/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
*   [{{ product_title }} on {{ rh_openstack }} support matrix (Knowledgebase article)](https://access.redhat.com/articles/4679401)
*   [Mirroring images for a disconnected installation by using the `oc adm` command](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
*   [Recommended control plane practices](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-host-practices)
*   [Postinstallation cluster tasks](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Image configuration resources](/openshift_images/image-configuration#images-configuration-cas_image-configuration)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Registering your disconnected cluster](/support/remote_health_monitoring/remote-health-reporting#insights-operator-register-disconnected-cluster_remote-health-reporting)
*   [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
*   [Configuring network settings after installing {{ rh_openstack }}](/installing/installing_openstack/installing-openstack-network-config#installation-osp-configuring-api-floating-ip_installing-openstack-network-config)

{% leveloffset +1 %}{% include "./modules/installation-about-restricted-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-default-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-control-compute-machines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-compute-machines.md" %}{% endleveloffset %}

**Additional resources**

*   [huge pages](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/configuring_the_compute_service_for_instance_creation/assembly_configuring-compute-nodes-for-performance_compute-performance#proc_configuring-huge-pages-on-compute-nodes_compute-performance)
*   [Configuring Compute nodes for performance](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html-single/configuring_the_compute_service_for_instance_creation/configuring-compute-nodes-for-performance#configuring-compute-nodes-for-performance)

{% leveloffset +2 %}{% include "./modules/installation-osp-bootstrap-machine.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-enabling-swift.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-describing-cloud-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-setting-cloud-provider-options.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-creating-image-restricted.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**

*   [Installation configuration parameters for {{ rh_openstack }}](/installing/installing_openstack/installation-config-parameters-openstack#installation-config-parameters-openstack)

{% leveloffset +2 %}{% include "./modules/installation-configure-proxy.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-restricted-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-accessing-api.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-accessing-api-floating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-accessing-api-no-floating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-launching-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-verifying-cluster-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

**Additional resources**

*   [Accessing the web console](/web_console/web-console#web-console)

{% leveloffset +1 %}{% include "./modules/olm-restricted-networks-configuring-operatorhub.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)

{% if context == "installing-openstack-user-sr-iov" %}
{%- set osp_sr_iov = false -%}
{% endif %}
{% if context == "installing-openstack-installer-sr-iov" %}
{%- set osp_sr_iov = false -%}
{% endif %}
{% if context == "installing-openstack-installer-ovs-dpdk" %}
{%- set osp_sr_iov = false -%}
{% endif %}