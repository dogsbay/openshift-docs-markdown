{%- set _mod_docs_content_type = "REFERENCE" %}
[id="virt-nw-overview-connect-vm-to-physical-nw_{{ context }}"]                                
= Connect to the provider’s physical network

To give virtual machines (VMs) access to the internet or other physical devices, you configure the node network, define the secondary network, and attach the VM to the secondary network. {._abstract}


Connect a VM to the physical network by using an Open vSwitch bridge
:   You can connect a VM to the physical network infrastructure by configuring an OVN-Kubernetes secondary user-defined network (UDN) with the localnet topology.

    A localnet topology connects the secondary network to the physical underlay. This enables both east-west cluster traffic and access to services running outside the cluster, but it requires additional configuration of the underlying Open vSwitch (OVS) bridge on cluster nodes.

    Cluster administrators can use the following steps to configure the localnet UDN:

1.  Install the Kubernetes NMState Operator which provides a state-driven network configuration across cluster nodes.
1.  Use the `NodeNetworkConfigurationPolicy` custom resource (CR) to configure OVS bridges and add the appropriate bridge mappings on the nodes.
1.  Use the `ClusterUserDefinedNetwork` CR from the UDN API to attach their workload to the underlay network through the OVS bridges configured in the previous step.

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

Connect a VM to the physical network by using a Linux bridge
:   Install the Kubernetes NMState Operator to configure Linux bridges, VLANs, and bonding for your secondary networks. The OVN-Kubernetes `localnet` topology is the recommended way of connecting a VM to the underlying physical network, but {{ VirtProductName }} also supports Linux bridge networks.

    :::note


    You cannot directly attach to the default machine network when using Linux bridge networks.
    
    :::


    You can create a Linux bridge network and attach a VM to the network by performing the following steps:

1.  Prepare the node network by creating a Linux bridge node network configuration policy (NNCP).
1.  Define the secondary Linux bridge network by creating a network attachment definition (NAD).
1.  Attach the VM to the Linux bridge network.
{% endif %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

Connect a VM to the physical network by using an SR-IOV device
:   You can use Single Root I/O Virtualization (SR-IOV) network devices with additional networks on your {{ product_title }} cluster installed on bare metal or {{ rh_openstack_first }} infrastructure for applications that require high bandwidth or low latency.

    You must install the SR-IOV Network Operator on your cluster to manage SR-IOV network devices and network attachments.

    You can connect a VM to an SR-IOV network by performing the following steps:

1.  Configure an SR-IOV physical network device by creating a `SriovNetworkNodePolicy` CR.
1.  Define the SR-IOV secondary network by creating an `SriovNetwork` object.
1.  Connect the VM to the SR-IOV network by including the network details in the VM configuration.
{% endif %}

{%- if not (openshift_rosa or openshift_dedicated or openshift_rosa_hcp) %}

Connect a VM to the physical network by using DPDK drivers with SR-IOV hardware
:   The Data Plane Development Kit (DPDK) provides a set of libraries and drivers for fast packet processing. You can configure clusters and VMs to run DPDK workloads over SR-IOV networks by performing the following steps:

1.  Configure the node hardware.
1.  Configure the VM namespace for DPDK.
1.  Configure the VM and guest OS to run DPDK applications.
{% endif %}