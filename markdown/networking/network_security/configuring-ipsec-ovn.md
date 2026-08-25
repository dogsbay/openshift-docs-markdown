---
title: Configuring IPsec encryption
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring IPsec encryption {id="configuring-ipsec-ovn"}
{%- set context = "configuring-ipsec-ovn" %}

By enabling IPsec, you can encrypt both internal pod-to-pod cluster traffic between nodes and external traffic between pods and IPsec endpoints external to your cluster. All pod-to-pod network traffic between nodes on the OVN-Kubernetes cluster network is encrypted with IPsec in _Transport mode_. {._abstract}

IPsec is disabled by default. You can enable IPsec either during or after installing the cluster. For information about cluster installation, see [{{ product_title }} installation overview](/installing/overview/index#ocp-installation-overview).


:::note

Upgrading your cluster to {{ product_title }} {{ product_version }} when the `libreswan` and `NetworkManager-libreswan` packages have different {{ product_title }} versions causes two consecutive compute node reboot operations. For the first reboot, the Cluster Network Operator (CNO) applies the IPsec configuration to compute nodes. For the second reboot, the Machine Config Operator (MCO) applies the latest machine configs to the cluster.

To combine the CNO and MCO updates into a single node reboot, complete the following tasks:

*   Before upgrading your cluster, set the `paused` parameter to `true` in the `MachineConfigPools` custom resource (CR) that groups compute nodes.
*   After you upgrade your cluster, set the parameter to `false`.

For more information, see [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update).

:::


The following support limitations exist for IPsec on a {{ product_title }} cluster:

*   On {{ ibm_cloud_name }}, IPsec supports only network address translation-traversal (NAT-T). Encapsulating Security Payload (ESP) is not supported on this platform.
*   If your cluster uses [{{ hcp }}](https://www.redhat.com/en/topics/containers/what-are-hosted-control-planes) for Red&#160;Hat {{ product_title }}, IPsec is not supported for IPsec encryption of either pod-to-pod or traffic to external hosts.
*   Using ESP hardware offloading on any network interface is not supported if one or more of those interfaces is attached to Open vSwitch (OVS). Enabling IPsec for your cluster triggers the use of IPsec with interfaces attached to OVS. By default, {{ product_title }} disables ESP hardware offloading on any interfaces attached to OVS.
*   If you enabled IPsec for network interfaces that are not attached to OVS, a cluster administrator must manually disable ESP hardware offloading on each interface that is not attached to OVS.

The following list outlines key tasks in the IPsec documentation:

*   Enable and disable IPsec after cluster installation.
*   Configure IPsec encryption for traffic between the cluster and external hosts.
*   Verify that IPsec encrypts traffic between pods on different nodes.

{% leveloffset +1 %}{% include "./modules/nw-own-ipsec-modes.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-ipsec-prerequisites.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_k8s-nmstate-about-the-k8s-nmstate-operator_{{ context }}" ._additional-resources}

*   [Kubernetes NMState Operator](/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)

{% leveloffset +1 %}{% include "./modules/nw-own-ipsec-required-ports.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/pod-to-pod-ipsec.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ovn-ipsec-traffic.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ovn-ipsec-encryption.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/nw-ovn-ipsec-certificates.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-ipsec-external.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-ipsec-enable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-ipsec-north-south-enable.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_nw-ovn-ipsec_{{ context }}" ._additional-resources}

*   [IPsec Encryption](https://nmstate.io/devel/yaml_api.html#ipsec-encryption)
*   [Installing Butane](/installing/install_config/installing-customizing#installation-special-config-butane-install_installing-customizing)

{% leveloffset +1 %}{% include "./modules/nw-ovn-ipsec-north-south-disable.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nw-ovn-ipsec-disable.md" %}{% endleveloffset %}

## Additional resources {id="_additional_resources" ._additional-resources}

*   [Configuring a VPN with IPsec](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/configuring_and_managing_networking/setting-up-an-ipsec-vpn)
*   [Installing Butane](/installing/install_config/installing-customizing#installation-special-config-butane-install_installing-customizing)
*   [About the OVN-Kubernetes Container Network Interface (CNI) network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
*   [Changing the MTU for the cluster network](/networking/advanced_networking/changing-cluster-network-mtu#changing-cluster-network-mtu)
*   [Network [operator.openshift.io/v1\] API](/rest_api/operator_apis/network-operator-openshift-io-v1#network-operator-openshift-io-v1)