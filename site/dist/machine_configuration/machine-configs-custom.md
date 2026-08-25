---
title: Configuring MCO-related custom resources
---

# Configuring MCO-related custom resources {#machine-configs-custom}

In addition to `MachineConfig` objects, you can use `KubeletConfig` or `ContainerRuntimeConfig` custom resources to change node-level settings that impact how the kubelet and CRI-O container runtime services behave.

The kubelet configuration is currently serialized as an Ignition configuration, so it can be directly edited. However, there is also a new `kubelet-config-controller` added to the Machine Config Controller (MCC). This lets you use a `KubeletConfig` custom resource (CR) to edit the kubelet parameters.

## Additional resources {#additional-resources_machine-configs-custom}

- [About the container engine and container runtime](/openshift-docs-markdown/nodes/containers/nodes-containers-using#nodes-containers-runtimes)
