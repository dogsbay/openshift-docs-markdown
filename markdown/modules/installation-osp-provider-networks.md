{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster deployment on {{ rh_openstack }} provider networks {id="installation-osp-provider-networks_{{ context }}"}

You can deploy your {{ product_title }} clusters on {{ rh_openstack_first }} with a primary network interface on a provider network. Provider networks are commonly used to give projects direct access to a public network that can be used to reach the internet. You can also share provider networks among projects as part of the network creation process. {._abstract}

{{ rh_openstack }} provider networks map directly to an existing physical network in the data center. A {{ rh_openstack }} administrator must create them.

In the following example, {{ product_title }} workloads are connected to a data center by using a provider network:

![A diagram that depicts four OpenShift workloads on OpenStack. Each workload is connected by its NIC to an external data center by using a provider network.](/images/openshift-on-openstack-provider-network.png)

{{ product_title }} clusters that are installed on provider networks do not require tenant networks or floating IP addresses. The installer does not create these resources during installation.

Example provider network types include flat (untagged) and VLAN (802.1Q tagged).


:::note

A cluster can support as many provider network connections as the network type allows. For example, VLAN networks typically support up to 4096 connections.

:::


You can learn more about provider and tenant networks in the {{ rh_openstack }} documentation.