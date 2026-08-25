---
title: Heterogeneous cluster support
---

# Heterogeneous cluster support {#virt-boot-source-image-heterogeneous-clusters}

A heterogeneous cluster is a cluster where nodes have differing architectures. Heterogeneous clusters promote optimal compute resource usage by mixing different types of hardware in one cluster.

With heterogeneous clusters, you can match workloads to hardware intended for the workload task instead of general purpose compute platforms. For example, you can combine GPU and general purpose compute resources and assign workloads to the appropriate hardware.

If you have a heterogeneous cluster but do not want to enable multiple architecture support, you can modify the workloads node placement in the `HyperConverged` custom resource (CR) to include only nodes with a specific architecture.

With boot source image support, you can deploy persistent VMs with specific architectures and define custom boot images that support heterogeneous clusters.

> [!IMPORTANT]
> If you do not enable boot source image support in a heterogeneous cluster, images might not match the node architecture. As a result, virtual machines might fail to start or might not run as expected. {{ VirtProductName }} raises the `HCOMultiArchGoldenImagesDisabled` alert when this feature is not enabled.

The same image can be used with nodes of different architectures if the boot image supports the required architectures. For example, a boot image that supports both ARM and AMD architectures can be used with both types of nodes.

Boot source image support for heterogeneous clusters is not enabled by default. You can enable heterogeneous cluster support by setting the feature gate in the `HyperConverged` CR.
