---
title: Scheduling Windows container workloads
---

# Scheduling Windows container workloads {#scheduling-windows-workloads}

You can use the Windows Machine Config Operator (WMCO) to schedule Windows workloads to Windows compute nodes.

## Prerequisites {#_prerequisites}

- You installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
- You are using a Windows container as the OS image.
- You have created a Windows compute machine set.

## Additional resources {#additional-resources_scheduling-windows-workloads}

- [Host and container version compatibility (Microsoft Windows documentation)](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/update-containers#host-and-container-version-compatibility)
- [Pod OS (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/pods/#pod-os)
- [Windows container version compatibility (Microsoft Windows documentation)](https://learn.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/version-compatibility?tabs=windows-server-2022%2Cwindows-11-21H2)
- [CSI Proxy (Kubernetes GitHub)](https://github.com/kubernetes-csi/csi-proxy)
- [Production Drivers (Kubernetes CSI Developer Documentation)](https://kubernetes-csi.github.io/docs/drivers.html#production-drivers)
- [Controlling pod placement using the scheduler](/nodes/scheduling/nodes-scheduler-about#nodes-scheduler-about)
- [Controlling pod placement using node taints](/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations)
- [Placing pods on specific nodes using node selectors](/nodes/scheduling/nodes-scheduler-node-selectors#nodes-scheduler-node-selectors)
