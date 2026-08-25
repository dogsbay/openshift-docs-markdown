---
title: Installing a cluster on OpenStack on your own infrastructure
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Installing a cluster on OpenStack on your own infrastructure {id="installing-openstack-user"}
{%- set context = "installing-openstack-user" %}

In {{ product_title }} version {{ product_version }}, you can install a cluster on {{ rh_openstack_first }} that runs on user-provisioned infrastructure. {._abstract}

By using your own infrastructure, you can integrate your cluster with existing infrastructure and modifications. The process requires more effort on your part than installer-provisioned installations, because you must create all {{ rh_openstack }} resources, like Nova servers, Neutron ports, and security groups. However, Red Hat provides Ansible playbooks to help you in the deployment process.

Ensure that you meet the following prerequisites:

*   You reviewed details about the {{ product_title }} installation and update processes.
*   You read the documentation on selecting a cluster installation method and preparing it for users.
*   You verified that {{ product_title }} {{ product_version }} is compatible with your {{ rh_openstack }} version by using the "Supported platforms for {{ product_title }} clusters" section. You can also compare platform support across different versions by viewing the {{ product_title }} on {{ rh_openstack }} support matrix.
*   You have an {{ rh_openstack }} account where you want to install {{ product_title }}.
*   You understand performance and scalability practices for cluster scaling, control plane sizing, and etcd. For more information, see "Recommended control plane practices".
*   On the machine from which you run the installation program, you have:
    *   A single directory in which you can keep the files you create during the installation process
    *   Python 3

You can complete the following configurations after you install a cluster on {{ rh_openstack }} on your own infrastructure:

*   Customize your cluster.
*   If necessary, you can use remote health reporting.
*   If you need to enable external access to node ports, configure ingress cluster traffic by using a node port.
*   If you did not configure {{ rh_openstack }} to accept application traffic over floating IP addresses, configure {{ rh_openstack }} access with floating IP addresses.

**Additional resources**
{._additional-resources}

*   [Installation and update](/architecture/architecture-installation#architecture-installation)
*   [Selecting a cluster installation method and preparing it for users](/installing/overview/installing-preparing#installing-preparing)
*   [Supported platforms for {{ product_title }} clusters](/architecture/architecture-installation#supported-platforms-for-openshift-clusters_architecture-installation)
*   [{{ product_title }} on {{ rh_openstack }} support matrix](https://access.redhat.com/articles/4679401)
*   [Recommended control plane practices](/scalability_and_performance/recommended-performance-scale-practices/recommended-control-plane-practices#recommended-host-practices)
*   [Postinstallation cluster tasks](/post_installation_configuration/cluster-tasks#available_cluster_customizations)
*   [Remote health reporting](/support/remote_health_monitoring/remote-health-reporting#remote-health-reporting)
*   [Configuring ingress cluster traffic by using a NodePort](/networking/ingress_load_balancing/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-nodeport#nw-using-nodeport_configuring-ingress-cluster-traffic-nodeport)
*   [Configuring network settings after installing {{ rh_openstack }}](/installing/installing_openstack/installing-openstack-network-config#installation-osp-configuring-api-floating-ip_installing-openstack-network-config)

{% leveloffset +1 %}{% include "./modules/cluster-entitlements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-default-deployment.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-control-compute-machines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-compute-machines.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-bootstrap-machine.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-downloading-modules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-downloading-playbooks.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-obtaining-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ssh-agent-using.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-creating-image.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-verifying-external-network.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-accessing-api.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-accessing-api-floating.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-accessing-api-no-floating.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-describing-cloud-parameters.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-creating-network-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-initializing.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Installation configuration parameters for OpenStack](/installing/installing_openstack/installation-config-parameters-openstack#installation-config-parameters-openstack)

{% leveloffset +2 %}{% include "./modules/installation-osp-custom-subnet.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-config-yaml.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-fixing-subnet.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-emptying-worker-pools.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-provider-networks.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [The {{ rh_openstack }} documentation](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/networking-overview_rhosp-network#tenant-provider-networks_network-overview)

{% leveloffset +3 %}{% include "./modules/installation-osp-provider-network-preparation.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [The provider networks documentation](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/networking-overview_rhosp-network#tenant-provider-networks_network-overview)
*   [role-based access control (RBAC)](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/networking_guide/config-rbac-policies_rhosp-network#proc_create-rbac-policies_config-rbac-policies)

{% leveloffset +3 %}{% include "./modules/installation-osp-deploying-provider-networks-installer.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-user-infra-generate-k8s-manifest-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-converting-ignition-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-creating-control-plane-ignition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-updating-network-resources.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/installation-osp-deploying-bare-metal-machines.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Bare Metal service (Ironic)](https://access.redhat.com/documentation/en-us/red_hat_openstack_platform/16.1/html/bare_metal_provisioning/index)
*   [A {{ rh_openstack }} flavor](https://docs.redhat.com/en/documentation/red_hat_openstack_platform/17.1/html/configuring_the_bare_metal_provisioning_service/assembly_configuring-the-bare-metal-provisioning-service-after-deployment#proc_creating-flavors-for-launching-bare-metal-instances_bare-metal-post-deployment)

{% leveloffset +1 %}{% include "./modules/installation-osp-creating-bootstrap-machine.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-creating-control-plane.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cli-logging-in-kubeadmin.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-deleting-bootstrap-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-creating-compute-machines.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-approve-csrs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/installation-osp-verifying-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cluster-telemetry.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [About remote health monitoring](/support/remote_health_monitoring/about-remote-health-monitoring#about-remote-health-monitoring)