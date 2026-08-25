---
title: Configuring IPsec encryption
---

# Configuring IPsec encryption {#configuring-ipsec-ovn}

By enabling IPsec, you can encrypt both internal pod-to-pod cluster traffic between nodes and external traffic between pods and IPsec endpoints external to your cluster. All pod-to-pod network traffic between nodes on the OVN-Kubernetes cluster network is encrypted with IPsec in *Transport mode*.

IPsec is disabled by default. You can enable IPsec either during or after installing the cluster. For information about cluster installation, see [OpenShift Container Platform installation overview](/openshift-docs-markdown/installing/overview/index#ocp-installation-overview).

> [!NOTE]
> Upgrading your cluster to OpenShift Container Platform 4.22 when the `libreswan` and `NetworkManager-libreswan` packages have different OpenShift Container Platform versions causes two consecutive compute node reboot operations. For the first reboot, the Cluster Network Operator (CNO) applies the IPsec configuration to compute nodes. For the second reboot, the Machine Config Operator (MCO) applies the latest machine configs to the cluster.
>
> To combine the CNO and MCO updates into a single node reboot, complete the following tasks:
>
> - Before upgrading your cluster, set the `paused` parameter to `true` in the `MachineConfigPools` custom resource (CR) that groups compute nodes.
> - After you upgrade your cluster, set the parameter to `false`.
>
> For more information, see [Performing a Control Plane Only update](/openshift-docs-markdown/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update).

The following support limitations exist for IPsec on a OpenShift Container Platform cluster:

- On {{ ibm_cloud_name }}, IPsec supports only network address translation-traversal (NAT-T). Encapsulating Security Payload (ESP) is not supported on this platform.
- If your cluster uses [{{ hcp }}](https://www.redhat.com/en/topics/containers/what-are-hosted-control-planes) for Red Hat OpenShift Container Platform, IPsec is not supported for IPsec encryption of either pod-to-pod or traffic to external hosts.
- Using ESP hardware offloading on any network interface is not supported if one or more of those interfaces is attached to Open vSwitch (OVS). Enabling IPsec for your cluster triggers the use of IPsec with interfaces attached to OVS. By default, OpenShift Container Platform disables ESP hardware offloading on any interfaces attached to OVS.
- If you enabled IPsec for network interfaces that are not attached to OVS, a cluster administrator must manually disable ESP hardware offloading on each interface that is not attached to OVS.

The following list outlines key tasks in the IPsec documentation:

- Enable and disable IPsec after cluster installation.
- Configure IPsec encryption for traffic between the cluster and external hosts.
- Verify that IPsec encrypts traffic between pods on different nodes.

## Additional resources {#additional-resources_k8s-nmstate-about-the-k8s-nmstate-operator_configuring-ipsec-ovn}

- [Kubernetes NMState Operator](/openshift-docs-markdown/networking/networking_operators/k8s-nmstate-about-the-k8s-nmstate-operator#k8s-nmstate-about-the-k8s-nmstate-operator)

## Additional resources {#additional-resources_nw-ovn-ipsec_configuring-ipsec-ovn}

- [IPsec Encryption](https://nmstate.io/devel/yaml_api.html#ipsec-encryption)
- [Installing Butane](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-butane-install_installing-customizing)

## Additional resources {#_additional_resources}

- [Configuring a VPN with IPsec](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/configuring_and_managing_networking/setting-up-an-ipsec-vpn)
- [Installing Butane](/openshift-docs-markdown/installing/install_config/installing-customizing#installation-special-config-butane-install_installing-customizing)
- [About the OVN-Kubernetes Container Network Interface (CNI) network plugin](/openshift-docs-markdown/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
- [Changing the MTU for the cluster network](/openshift-docs-markdown/networking/advanced_networking/changing-cluster-network-mtu#changing-cluster-network-mtu)
- \[Network [operator.openshift.io/v1\] API](/openshift-docs-markdown/rest_api/operator_apis/network-operator-openshift-io-v1#network-operator-openshift-io-v1)
