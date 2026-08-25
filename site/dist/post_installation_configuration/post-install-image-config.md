---
title: Configuring image streams and image registries
---

# Configuring image streams and image registries {#post-install-image-config}

You can configure image streams, image registries, and pull secrets after installation to control how your cluster accesses, imports, and stores container images.

You can update the global pull secret for your cluster by either replacing the current pull secret or appending a new pull secret. The procedure is required when users use a separate registry to store images than the registry used during installation. For more information, see "Using image pull secrets".

For information about images and configuring image streams or image registries, see the following documentation:

- Overview of images
- Image Registry Operator in OpenShift Container Platform
- Configuring image registry settings

## Configuring image streams for a disconnected cluster {#post-install-image-config-disconnected}

After installing OpenShift Container Platform in a disconnected environment, configure the image streams for the Cluster Samples Operator and the `must-gather` image stream.

## Additional resources {#additional-resources_post-install-image-config}

- [Using image pull secrets](/openshift_images/managing_images/using-image-pull-secrets#using-image-pull-secrets)
- [Overview of images](/openshift_images/index#overview-of-images)
- [Image Registry Operator in OpenShift Container Platform](/registry/configuring-registry-operator#configuring-registry-operator)
- [Configuring image registry settings](/openshift_images/image-configuration#image-configuration)
