---
title: Using image pull secrets
---

# Using image pull secrets {#using-image-pull-secrets}

To authenticate with container registries and pull images across OpenShift Container Platform projects or from secured registries, you can configure and use image pull secrets. You first obtain the registry authentication credentials, which are typically found in the `~/.docker/config.json` file for Docker or the `~/.config/containers/auth.json` file for Podman, created by the {{ cluster_manager_url_pull }} process. This content is then used to create or update the global `pullSecret` object within your cluster.

> [!NOTE]
> If you are using the {{ product_registry }} and are pulling from image streams located in the same project, then your pod service account should already have the correct permissions. No additional action should be required.

**Additional resources**

- [Quay.io container registry](https://quay.io/)
- [Red Hat container registry](https://registry.redhat.io)
- [Transferring cluster ownership](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#transferring-cluster-ownership_downloading-and-updating-pull-secrets)
