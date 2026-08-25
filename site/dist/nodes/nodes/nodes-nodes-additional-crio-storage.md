---
title: Additional CRI-O storage locations for faster container startup
---

# Additional CRI-O storage locations for faster container startup {#nodes-nodes-additional-crio-storage}

To reduce application startup time, make your applications run more efficiently, and configure lazy pulling, you can configure additional storage locations for the CRI-O container engine.

Fields in the `ContainerRuntimeConfig` custom resource (CR) let you specify where CRI-O stores and resolves container image layers, complete container images, and OCI artifacts.

## Additional resources {#_additional_resources}

- [Stargz Store plugin](https://github.com/containerd/stargz-snapshotter)
- [Install Stargz Snapshotter and Stargz Store](https://github.com/containerd/stargz-snapshotter/blob/main/docs/INSTALL.md)
- [Nydus Storage Plugin](https://github.com/containers/nydus-storage-plugin)
- [eStargz format](https://github.com/containerd/stargz-snapshotter/blob/main/docs/estargz.md)
- [Nydus format](https://nydus.dev/)
- [Running background tasks on nodes automatically with daemon sets](/openshift-docs-markdown/nodes/jobs/nodes-pods-daemonsets#nodes-pods-daemonsets)
- [Using machine config objects to configure nodes](/openshift-docs-markdown/machine_configuration/machine-configs-configure#machine-configs-configure)
- [Image mode for OpenShift](/openshift-docs-markdown/machine_configuration/mco-coreos-layering#mco-coreos-layering)
