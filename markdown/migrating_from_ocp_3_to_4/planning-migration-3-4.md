---
title: Differences between OpenShift Container Platform 3 and 4
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Differences between {{ product_title }} 3 and 4 {id="planning-migration-3-4"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "planning-migration-3-4" %}

{{ product_title }} {{ product_version }} introduces architectural changes and enhancements/ The procedures that you used to manage your {{ product_title }} 3 cluster might not apply to {{ product_title }} 4.

{% if not openshift_origin %}
For information on configuring your {{ product_title }} 4 cluster, review the appropriate sections of the {{ product_title }} documentation. For information on new features and other notable technical changes, review the [OpenShift Container Platform {{ product_version }} release notes](/release_notes/ocp-4-22-release-notes#ocp-4-21-release-notes).
{% endif %}

It is not possible to upgrade your existing {{ product_title }} 3 cluster to {{ product_title }} 4. You must start with a new {{ product_title }} 4 installation. Tools are available to assist in migrating your control plane settings and application workloads.

## Architecture {id="migration-differences-architecture"}

With {{ product_title }} 3, administrators individually deployed {{ op_system_base_full }} hosts, and then installed {{ product_title }} on top of these hosts to form a cluster. Administrators were responsible for properly configuring these hosts and performing updates.

{{ product_title }} 4 represents a significant change in the way that {{ product_title }} clusters are deployed and managed. {{ product_title }} 4 includes new technologies and functionality, such as Operators, machine sets, and {{ op_system_first }}, which are core to the operation of the cluster. This technology shift enables clusters to self-manage some functions previously performed by administrators. This also ensures platform stability and consistency, and simplifies installation and scaling.

Beginning with {{ product_title }} 4.13, {{ op_system }} now uses {{ op_system_base_full }} 9.2 packages. This enhancement enables the latest fixes and features as well as the latest hardware support and driver updates. For more information about how this upgrade to RHEL 9.2 might affect your options configuration and services as well as driver and container support, see the [RHCOS now uses RHEL 9.2](https://docs.openshift.com/container-platform/4.13/release_notes/ocp-4-13-release-notes.html#ocp-4-13-rhel-9-considerations) in the _OpenShift Container Platform 4.13 release notes_.

For more information, see [OpenShift Container Platform architecture](/architecture/architecture#architecture).

### Immutable infrastructure {id="_immutable_infrastructure"}

{{ product_title }} 4 uses {{ op_system_first }}, which is designed to run containerized applications, and provides efficient installation, Operator-based management, and simplified upgrades. {{ op_system }} is an immutable container host, rather than a customizable operating system like {{ op_system_base }}. {{ op_system }} enables {{ product_title }} 4 to manage and automate the deployment of the underlying container host. {{ op_system }} is a part of {{ product_title }}, which means that everything runs inside a container and is deployed using {{ product_title }}.

In {{ product_title }} 4, control plane nodes must run {{ op_system }}, ensuring that full-stack automation is maintained for the control plane. This makes rolling out updates and upgrades a much easier process than in {{ product_title }} 3.

For more information, see [{{ op_system_first }}](/architecture/architecture-rhcos#architecture-rhcos).

### Operators {id="_operators"}

Operators are a method of packaging, deploying, and managing a Kubernetes application. Operators ease the operational complexity of running another piece of software. They watch over your environment and use the current state to make decisions in real time. Advanced Operators are designed to upgrade and react to failures automatically.

For more information, see [Understanding Operators](/operators/understanding/olm-what-operators-are#olm-what-operators-are).

## Installation and upgrade {id="migration-differences-install"}

### Installation process {id="_installation_process"}

To install {{ product_title }} 3.11, you prepared your {{ op_system_base_full }} hosts, set all of the configuration values your cluster needed, and then ran an Ansible playbook to install and set up your cluster.

In {{ product_title }} {{ product_version }}, you use the OpenShift installation program to create a minimum set of resources required for a cluster. After the cluster is running, you use Operators to further configure your cluster and to install new services. After first boot, {{ op_system_first }} systems are managed by the Machine Config Operator (MCO) that runs in the {{ product_title }} cluster.

For more information, see [Installation process](/architecture/architecture-installation#installation-process_architecture-installation).

### Infrastructure options {id="_infrastructure_options"}

In {{ product_title }} 3.11, you installed your cluster on infrastructure that you prepared and maintained. In addition to providing your own infrastructure, {{ product_title }} 4 offers an option to deploy a cluster on infrastructure that the {{ product_title }} installation program provisions and the cluster maintains.

For more information, see [OpenShift Container Platform installation overview](/architecture/architecture-installation#installation-overview_architecture-installation).

### Upgrading your cluster {id="_upgrading_your_cluster"}

In {{ product_title }} 3.11, you upgraded your cluster by running Ansible playbooks. In {{ product_title }} {{ product_version }}, the cluster manages its own updates, including updates to {{ op_system_first }} on cluster nodes. You can easily upgrade your cluster by using the web console or by using the `oc adm upgrade` command from the OpenShift CLI and the Operators will automatically upgrade themselves. If your {{ product_title }} {{ product_version }} cluster has {{ op_system_base }} worker machines, then you will still need to run an Ansible playbook to upgrade those worker machines.

For more information, see [Updating clusters](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console).

## Migration considerations {id="migration-considerations"}

Review the changes and other considerations that might affect your transition from {{ product_title }} 3.11 to {{ product_title }} 4.

### Storage considerations {id="migration-preparing-storage"}

Review the following storage changes to consider when transitioning from {{ product_title }} 3.11 to {{ product_title }} {{ product_version }}.

#### Local volume persistent storage {id="_local_volume_persistent_storage"}

Local storage is only supported by using the Local Storage Operator in {{ product_title }} {{ product_version }}. It is not supported to use the local provisioner method from {{ product_title }} 3.11.

For more information, see [Persistent storage using local volumes](/storage/persistent_storage_local/persistent-storage-local#persistent-storage-using-local-volume).

#### FlexVolume persistent storage {id="_flexvolume_persistent_storage"}

The FlexVolume plugin location changed from {{ product_title }} 3.11. The new location in {{ product_title }} {{ product_version }} is `/etc/kubernetes/kubelet-plugins/volume/exec`. Attachable FlexVolume plugins are no longer supported.

For more information, see [Persistent storage using FlexVolume](/storage/persistent_storage/persistent-storage-flexvolume#persistent-storage-using-flexvolume).

#### Container Storage Interface (CSI) persistent storage {id="_container_storage_interface_csi_persistent_storage"}

Persistent storage using the Container Storage Interface (CSI) was [Technology Preview](https://access.redhat.com/support/offerings/techpreview) in {{ product_title }} 3.11. {{ product_title }} {{ product_version }} includes with [several CSI drivers](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-csi-drivers-supported_persistent-storage-csi). You can also install your own driver.

For more information, see [Persistent storage using the Container Storage Interface (CSI)](/storage/container_storage_interface/persistent-storage-csi#persistent-storage-using-csi).

#### Red Hat OpenShift Data Foundation {id="_red_hat_openshift_data_foundation"}

OpenShift Container Storage 3, which is available for use with {{ product_title }} 3.11, uses Red Hat Gluster Storage as the backing storage.

{{ rh_storage_first }} 4, which is available for use with {{ product_title }} 4, uses Red Hat Ceph Storage as the backing storage.

For more information, see [Persistent storage using Red Hat OpenShift Data Foundation](/storage/persistent_storage/persistent-storage-ocs#red-hat-openshift-data-foundation) and the [interoperability matrix](https://access.redhat.com/articles/4731161) article.

#### Unsupported persistent storage options {id="_unsupported_persistent_storage_options"}

Support for the following persistent storage options from {{ product_title }} 3.11 has changed in {{ product_title }} {{ product_version }}:

*   GlusterFS is no longer supported.
*   CephFS as a standalone product is no longer supported.
*   Ceph RBD as a standalone product is no longer supported.

If you used one of these in {{ product_title }} 3.11, you must choose a different persistent storage option for full support in {{ product_title }} {{ product_version }}.

For more information, see [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage).

#### Migration of in-tree volumes to CSI drivers {id="_migration_of_in-tree_volumes_to_csi_drivers"}

{{ product_title }} 4 is migrating in-tree volume plugins to their Container Storage Interface (CSI) counterparts. In {{ product_title }} {{ product_version }}, CSI drivers are the new default for the following in-tree volume types:

*   Amazon Web Services (AWS) Elastic Block Storage (EBS)
*   Azure Disk
*   Azure File
*   {{ gcp_full }} Persistent Disk (GCP PD)
*   OpenStack Cinder
*   VMware vSphere

    :::note

    As of {{ product_title }} 4.13, VMware vSphere is not available by default. However, you can opt into VMware vSphere.
    
    :::


All aspects of volume lifecycle, such as creation, deletion, mounting, and unmounting, is handled by the CSI driver.

For more information, see [CSI automatic migration](/storage/container_storage_interface/persistent-storage-csi-migration#persistent-storage-csi-migration).

### Networking considerations {id="migration-preparing-networking"}

Review the following networking changes to consider when transitioning from {{ product_title }} 3.11 to {{ product_title }} {{ product_version }}.

#### Network isolation mode {id="_network_isolation_mode"}

The default network isolation mode for {{ product_title }} 3.11 was `ovs-subnet`, though users frequently switched to use `ovn-multitenant`. The default network isolation mode for {{ product_title }} {{ product_version }} is controlled by a network policy.

If your {{ product_title }} 3.11 cluster used the `ovs-subnet` or `ovs-multitenant` mode, it is recommended to switch to a network policy for your {{ product_title }} {{ product_version }} cluster. Network policies are supported upstream, are more flexible, and they provide the functionality that `ovs-multitenant` does. If you want to maintain the `ovs-multitenant` behavior while using a network policy in {{ product_title }} {{ product_version }}, follow the steps to [configure multitenant isolation using network policy](/networking/network_security/network_policy/multitenant-network-policy#multitenant-network-policy).

For more information, see [About network policy](/networking/network_security/network_policy/about-network-policy#about-network-policy).

#### OVN-Kubernetes as the default networking plugin in Red Hat OpenShift Networking {id="_ovn-kubernetes_as_the_default_networking_plugin_in_red_hat_openshift_networking"}

In {{ product_title }} 3.11, OpenShift SDN was the default networking plugin in Red Hat OpenShift Networking. In {{ product_title }} {{ product_version }}, OVN-Kubernetes is now the default networking plugin.

For more information on the removal of the OpenShift SDN network plugin and why it has been removed see [OpenShiftSDN CNI removal in OCP 4.17](https://access.redhat.com/articles/7065170).

For information on OVN-Kubernetes features that are similar to features in the OpenShift SDN plugin see:

*   [Configuring an egress IP address](/networking/ovn_kubernetes_network_provider/configuring-egress-ips-ovn#configuring-egress-ips)
*   [Configuring an egress firewall for a project](/networking/network_security/egress_firewall/configuring-egress-firewall-ovn#configuring-egress-firewall-ovn)
*   [Enabling multicast for a project](/networking/ovn_kubernetes_network_provider/enabling-multicast#enabling-multicast)
*   [Deploying an egress router pod in redirect mode](/networking/ovn_kubernetes_network_provider/deploying-egress-router-ovn-redirection#deploying-egress-router-ovn-redirection)
*   [Configuring multitenant isolation with network policy](/networking/network_security/network_policy/multitenant-network-policy#multitenant-network-policy)


:::warning

You should install {{ product_title }} 4 with the OVN-Kubernetes network plugin because it is not possible to upgrade a cluster to {{ product_title }} 4.17 or later if it is using the OpenShift SDN network plugin.

:::


### Logging considerations {id="migration-preparing-logging"}

Review the following logging changes to consider when transitioning from {{ product_title }} 3.11 to {{ product_title }} {{ product_version }}.

#### Deploying OpenShift Logging {id="_deploying_openshift_logging"}

{{ product_title }} 4 provides a simple deployment mechanism for OpenShift Logging, by using a Cluster Logging custom resource.

#### Aggregated logging data {id="_aggregated_logging_data"}

You cannot transition your aggregate logging data from {{ product_title }} 3.11 into your new {{ product_title }} 4 cluster.

#### Unsupported logging configurations {id="_unsupported_logging_configurations"}

Some logging configurations that were available in {{ product_title }} 3.11 are no longer supported in {{ product_title }} {{ product_version }}.

### Security considerations {id="migration-preparing-security"}

Review the following security changes to consider when transitioning from {{ product_title }} 3.11 to {{ product_title }} {{ product_version }}.

#### Unauthenticated access to discovery endpoints {id="_unauthenticated_access_to_discovery_endpoints"}

In {{ product_title }} 3.11, an unauthenticated user could access the discovery endpoints (for example, `/api/**` and `/apis/**`). For security reasons, unauthenticated access to the discovery endpoints is no longer allowed in {{ product_title }} {{ product_version }}. If you do need to allow unauthenticated access, you can configure the RBAC settings as necessary; however, be sure to consider the security implications as this can expose internal cluster components to the external network.

#### Identity providers {id="_identity_providers"}

Configuration for identity providers has changed for {{ product_title }} 4, including the following notable changes:

*   The request header identity provider in {{ product_title }} {{ product_version }} requires mutual TLS, where in {{ product_title }} 3.11 it did not.
*   The configuration of the OpenID Connect identity provider was simplified in {{ product_title }} {{ product_version }}. It now obtains data, which previously had to specified in {{ product_title }} 3.11, from the provider’s `/.well-known/openid-configuration` endpoint.

For more information, see [Understanding identity provider configuration](/authentication/understanding-identity-provider#understanding-identity-provider).

#### OAuth token storage format {id="_oauth_token_storage_format"}

Newly created OAuth HTTP bearer tokens no longer match the names of their OAuth access token objects. The object names are now a hash of the bearer token and are no longer sensitive. This reduces the risk of leaking sensitive information.

#### Default security context constraints {id="_default_security_context_constraints"}

The `restricted` security context constraints (SCC) in {{ product_title }} 4 can no longer be accessed by any authenticated user as the `restricted` SCC in {{ product_title }} 3.11. The broad authenticated access is now granted to the `restricted-v2` SCC, which is more restrictive than the old `restricted` SCC. The `restricted` SCC still exists; users that want to use it must be specifically given permissions to do it.

For more information, see [Managing security context constraints](/authentication/managing-security-context-constraints#managing-pod-security-policies).

### Monitoring considerations {id="migration-preparing-monitoring"}

Review the following monitoring changes when transitioning from {{ product_title }} 3.11 to {{ product_title }} {{ product_version }}. You cannot migrate Hawkular configurations and metrics to Prometheus.

#### Alert for monitoring infrastructure availability {id="_alert_for_monitoring_infrastructure_availability"}

The default alert that triggers to ensure the availability of the monitoring structure was called `DeadMansSwitch` in {{ product_title }} 3.11. This was renamed to `Watchdog` in {{ product_title }} 4. If you had PagerDuty integration set up with this alert in {{ product_title }} 3.11, you must set up the PagerDuty integration for the `Watchdog` alert in {{ product_title }} 4.

For more information, see [Configuring alert routing for default platform alerts](https://docs.redhat.com/en/documentation/monitoring_stack_for_red_hat_openshift/latest/html/configuring_core_platform_monitoring/configuring-alerts-and-notifications#configuring-alert-routing-default-platform-alerts_configuring-alerts-and-notifications).