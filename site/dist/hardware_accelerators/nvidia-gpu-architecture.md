---
title: NVIDIA GPU architecture
---

# NVIDIA GPU architecture {#nvidia-gpu-architecture}

NVIDIA supports the use of graphics processing unit (GPU) resources on OpenShift Container Platform. OpenShift Container Platform is a security-focused and hardened Kubernetes platform developed and supported by Red Hat for deploying and managing Kubernetes clusters at scale. OpenShift Container Platform includes enhancements to Kubernetes so that users can easily configure and use NVIDIA GPU resources to accelerate workloads.

The NVIDIA GPU Operator uses the Operator framework within OpenShift Container Platform to manage the full lifecycle of NVIDIA software components required to run GPU-accelerated workloads.

These components include the NVIDIA drivers (to enable CUDA), the Kubernetes device plugin for GPUs, the NVIDIA Container Toolkit, automatic node tagging using GPU feature discovery (GFD), DCGM-based monitoring, and others.

> [!NOTE]
> The NVIDIA GPU Operator is only supported by NVIDIA. For more information about obtaining support from NVIDIA, see [Obtaining Support from NVIDIA](https://access.redhat.com/solutions/5174941).

**Additional resources**

- [Red Hat OpenShift on Bare Metal Stack](https://docs.nvidia.com/ai-enterprise/deployment-guide-openshift-on-bare-metal/0.1.0/on-bare-metal.html)

**Additional resources**

- [NVIDIA GPU Operator with OpenShift Virtualization](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/openshift/openshift-virtualization.html)

**Additional resources**

- [OpenShift Container Platform on VMware vSphere with NVIDIA vGPUs](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/openshift/nvaie-with-ocp.html#openshift-container-platform-on-vmware-vsphere-with-nvidia-vgpus)

**Additional resources**

- [Red Hat Openshift in the Cloud](https://docs.nvidia.com/ai-enterprise/deployment-guide-cloud/0.1.0/aws-redhat-openshift.html)

**Additional resources**

- [How to accelerate workloads with NVIDIA GPUs on Red Hat Device Edge](https://cloud.redhat.com/blog/how-to-accelerate-workloads-with-nvidia-gpus-on-red-hat-device-edge)

**Additional resources**

- [Improving GPU Utilization](https://developer.nvidia.com/blog/improving-gpu-utilization-in-kubernetes/)

**Additional resources**

- [Asynchronous Concurrent Execution](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#asynchronous-concurrent-execution)

**Additional resources**

- [CUDA MPS](https://docs.nvidia.com/deploy/mps/index.html)

**Additional resources**

- [NVIDIA Multi-Instance GPU User Guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/)

**Additional resources**

- [Virtual GPUs](https://www.nvidia.com/en-us/data-center/virtual-solutions/)

**Additional resources**

- [NVIDIA-Certified Systems](https://docs.nvidia.com/ngc/ngc-deploy-on-premises/nvidia-certified-systems/index.html)
- [NVIDIA AI Enterprise](https://docs.nvidia.com/ai-enterprise/index.html#deployment-guides)
- [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/overview.html#)
- [Enabling the GPU Monitoring Dashboard](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/enable-gpu-monitoring-dashboard.html)
- [MIG Support in OpenShift Container Platform](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/mig-ocp.html)
- [Time-slicing NVIDIA GPUs in OpenShift](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/time-slicing-gpus-in-openshift.html)
- [Deploy GPU Operators in a disconnected or airgapped environment](https://docs.nvidia.com/datacenter/cloud-native/openshift/latest/mirror-gpu-ocp-disconnected.html)
- [Node Feature Discovery Operator](#../hardware_enablement/psap-node-feature-discovery-operator.html)
