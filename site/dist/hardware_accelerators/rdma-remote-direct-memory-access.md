---
title: NVIDIA GPUDirect Remote Direct Memory Access (RDMA)
---

# NVIDIA GPUDirect Remote Direct Memory Access (RDMA) {#rdma-remote-direct-memory-access}

NVIDIA GPUDirect Remote Direct Memory Access (RDMA) allows for an application in one computer to directly access the memory of another computer without needing access through the operating system. This provides the ability to bypass kernel intervention in the process, freeing up resources and greatly reducing the CPU overhead normally needed to process network communications. This is useful for distributing GPU-accelerated workloads across clusters. And because RDMA is so suited toward high bandwidth and low latency applications, this makes it ideal for big data and machine learning applications.

There are currently three configuration methods for NVIDIA GPUDirect RDMA:

Shared device
:   This method allows for an NVIDIA GPUDirect RDMA device to be shared among multiple pods on the OpenShift Container Platform worker node where the device is exposed.

Host device
:   This method provides direct physical Ethernet access on the worker node by creating an additional host network on a pod. A plugin allows the network device to be moved from the host network namespace to the network namespace on the pod.

SR-IOV legacy device
:   The Single Root IO Virtualization (SR-IOV) method can share a single network device, such as an Ethernet adapter, with multiple pods. SR-IOV segments the device, recognized on the host node as a physical function (PF), into multiple virtual functions (VFs).  The VF is used like any other network device.

Each of these methods can be used across either the NVIDIA GPUDirect RDMA over Converged Ethernet (RoCE) or Infiniband infrastructures, providing an aggregate total of six methods of configuration.

- Install the [Node Feature Discovery Operator](/openshift-docs-markdown/hardware_enablement/psap-node-feature-discovery-operator#installing-the-node-feature-discovery-operator_node-feature-discovery-operator).
- Install the [SR-IOV Operator](/openshift-docs-markdown/networking/networking_operators/sr-iov-operator/installing-sriov-operator#installing-sriov-operator).
- Install the [NVIDIA Network Operator](https://docs.nvidia.com/networking/display/kubernetes2501/getting-started-openshift.html#network-operator-installation-using-openshift-oc-cli) (NVIDIA documentation).
- Install the [NVIDIA GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/openshift/24.9.2/install-gpu-ocp.html) (NVIDIA documentation).
