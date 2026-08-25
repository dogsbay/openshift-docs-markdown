---
title: Allocating resources for nodes in an OpenShift Container Platform cluster
---

# Allocating resources for nodes in an OpenShift Container Platform cluster {#nodes-nodes-resources-configuring}

By default, upon node start up OpenShift Container Platform automatically calculates and reserves a portion of the CPU and memory resources for use by the underlying node components, such as `kubelet` and `kube-proxy`, and the remaining system components, such as `sshd` and `NetworkManager`. Review the information in this section to determine if these automatic settings are appropriate for your cluster.

You can modify the CPU and memory resources for these node and system components, as needed, by creating a `Kubelet Config` CR.

> [!IMPORTANT]
> If you updated your cluster from a version earlier than 4.21, automatic allocation of system resources is disabled by default. To enable the feature, delete the `50-worker-auto-sizing-disabled` machine config.

## Additional resources {#nodes-nodes-resources-configuring_additional-resources}

- [Creating a KubeletConfig CR to edit kubelet parameters](/machine_configuration/machine-configs-custom#create-a-kubeletconfig-crd-to-edit-kubelet-parameters_machine-configs-custom)
- [Node metrics data (Kubernetes documentation)](https://kubernetes.io/docs/reference/instrumentation/node-metrics/)
