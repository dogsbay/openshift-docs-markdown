---
title: About Single Root I/O Virtualization (SR-IOV) hardware networks
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# About Single Root I/O Virtualization (SR-IOV) hardware networks {id="about-sriov"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "about-sriov" %}

To share a single physical device with multiple pods, implement the Single Root I/O Virtualization (SR-IOV) specification. This standard enables flexible PCI device assignment, allowing a device to show as multiple separate physical devices for efficient resource allocation.


:::note

As of {{ product_title }} 4.21, the SR-IOV Operator can support ARM hardware.

:::


You can configure a Single Root I/O Virtualization (SR-IOV) device in your cluster by using the [SR-IOV Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).

SR-IOV can segment a compliant network device, recognized on the host node as a physical function (PF), into multiple virtual functions (VFs). The VF is used like any other network device. The SR-IOV network device driver for the device determines how the VF is exposed in the container:

*   `netdevice` driver: A regular kernel network device in the `netns` of the container
*   `vfio-pci` driver: A character device mounted in the container

You can use SR-IOV network devices with additional networks on your {{ product_title }} cluster installed on bare metal or {{ rh_openstack_first }} infrastructure for applications that require high bandwidth or low latency.

The SR-IOV Network Operator is supported on the following platforms:

*   Bare metal
*   {{ rh_openstack_first }}


:::note

For a list of devices, such as network interface controllers (NICs) that {{ product_title }} supports, see [Red Hat certified hardware](https://catalog.redhat.com/en/hardware) on the Red Hat Ecosystem Catalog. The following example, finds the Intel X710 network adapter:

1.  From the Red Hat certified hardware webpage, click **Explore** from the **Components** tile. 
1.  From the **Provider** drop-down menu, click the **Intel Corporation** checkbox.
1.  From the **Platform** drop-down menu, click the **Red Hat OpenShift Container Platform** checkbox.
1.  Find the **Intel® Ethernet Server Adapter X710** network adapter from the list and then click on its tile. A new webpage opens that shows information for the network adapter. 

:::


You can configure multi-network policies for SR-IOV networks. The support for this is technology preview and SR-IOV additional networks are only supported with kernel NICs. They are not supported for Data Plane Development Kit (DPDK) applications.


:::note

Creating multi-network policies on SR-IOV networks might not deliver the same performance to applications compared to SR-IOV networks without a multi-network policy configured.

:::


{%- set FeatureName = "Multi-network policies for SR-IOV network" %}
{% leveloffset +2 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

You can enable SR-IOV on a node by using the following command:
```terminal
$ oc label node <node_name> feature.node.kubernetes.io/network-sriov.capable="true"
```

## Additional resources {id="additional-resources-about-sr-iov_{{ context }}"}

*   [Installing the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator)

## Components that manage SR-IOV network devices {id="components-sr-iov-network-devices"}

The SR-IOV Network Operator creates and manages the components of the SR-IOV stack. The Operator performs the following functions:

*   Orchestrates discovery and management of SR-IOV network devices
*   Generates `NetworkAttachmentDefinition` custom resources for the SR-IOV Container Network Interface (CNI)
*   Creates and updates the configuration of the SR-IOV network device plugin
*   Creates node specific `SriovNetworkNodeState` custom resources
*   Updates the `spec.interfaces` field in each `SriovNetworkNodeState` custom resource

The Operator provisions the following components:


SR-IOV network configuration daemon
:   A daemon set that is deployed on worker nodes when the SR-IOV Network Operator starts. The daemon is responsible for discovering and initializing SR-IOV network devices in the cluster.


SR-IOV Network Operator webhook
:   A dynamic admission controller webhook that validates the Operator custom resource and sets appropriate default values for unset fields.


SR-IOV Network resources injector
:   A dynamic admission controller webhook that provides functionality for patching Kubernetes pod specifications with requests and limits for custom network resources such as SR-IOV VFs. The SR-IOV network resources injector adds the `resource` field to only the first container in a pod automatically.


SR-IOV network device plugin
:   A device plugin that discovers, advertises, and allocates SR-IOV network virtual function (VF) resources. Device plugins are used in Kubernetes to enable the use of limited resources, typically in physical devices. Device plugins give the Kubernetes scheduler awareness of resource availability, so that the scheduler can schedule pods on nodes with sufficient resources.


SR-IOV CNI plugin
:   A CNI plugin that attaches VF interfaces allocated from the SR-IOV network device plugin directly into a pod.


SR-IOV InfiniBand CNI plugin
:   A CNI plugin that attaches InfiniBand (IB) VF interfaces allocated from the SR-IOV network device plugin directly into a pod.


:::note

The SR-IOV Network resources injector and SR-IOV Network Operator webhook are enabled by default and can be disabled by editing the `default` `SriovOperatorConfig` CR.
Use caution when disabling the SR-IOV Network Operator Admission Controller webhook. You can disable the webhook under specific circumstances, such as troubleshooting, or if you want to use unsupported devices.

:::


## Additional resources {id="configure-multi-networks-additional-resources"}

*   [Configuring multi-network policy](/networking/multiple_networks/secondary_networks/configuring-multi-network-policy#configuring-multi-network-policy)

## Next steps {id="about-sriov-next-steps"}

*   [Configuring the SR-IOV Network Operator](/networking/networking_operators/sr-iov-operator/configuring-sriov-operator#configuring-sriov-operator)
*   [Configuring an SR-IOV network device](/networking/hardware_networks/configuring-sriov-device#configuring-sriov-device)
*   If you use {{ VirtProductName }}: [Connecting a virtual machine to an SR-IOV network](/virt/vm_networking/virt-connecting-vm-to-sriov#virt-connecting-vm-to-sriov)
*   [Configuring an SR-IOV network attachment](/networking/hardware_networks/configuring-sriov-net-attach#configuring-sriov-net-attach)
*   [Ethernet network attachement: Adding a pod to an SR-IOV additional network](/networking/hardware_networks/configuring-sriov-net-attach#configuring-sriov-net-attach)
*   [InfiniBand network attachement: Adding a pod to an SR-IOV additional network](/networking/hardware_networks/configuring-sriov-ib-attach#configuring-sriov-ib-attach)