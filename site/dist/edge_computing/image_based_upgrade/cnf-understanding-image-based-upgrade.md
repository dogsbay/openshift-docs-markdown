---
title: Understanding the image-based upgrade for {{ sno }} clusters
---

# Understanding the image-based upgrade for {{ sno }} clusters {#cnf-understanding-image-based-upgrade}

From OpenShift Container Platform 4.14.13, the {{ lcao }} provides you with an alternative way to upgrade the platform version of a {{ sno }} cluster. The image-based upgrade is faster than the standard upgrade method and allows you to directly upgrade from OpenShift Container Platform <4.y> to <4.y+2>, and <4.y.z> to <4.y.z+n>.

This upgrade method utilizes a generated OCI image from a dedicated seed cluster that is installed on the target {{ sno }} cluster as a new `ostree` stateroot. A seed cluster is a {{ sno }} cluster deployed with the target OpenShift Container Platform version, Day 2 Operators, and configurations that are common to all target clusters.

You can use the seed image, which is generated from the seed cluster, to upgrade the platform version on any {{ sno }} cluster that has the same combination of hardware, Day 2 Operators, and cluster configuration as the seed cluster.

> [!IMPORTANT]
> The image-based upgrade uses custom images that are specific to the hardware platform that the clusters are running on. Each different hardware platform requires a separate seed image.

The {{ lcao }} uses two custom resources (CRs) on the participating clusters to orchestrate the upgrade:

- On the seed cluster, the `SeedGenerator` CR allows for the seed image generation. This CR specifies the repository to push the seed image to.
- On the target cluster, the `ImageBasedUpgrade` CR specifies the seed image for the upgrade of the target cluster and the backup configurations for your workloads.

```yaml {title="Example SeedGenerator CR"}
apiVersion: lca.openshift.io/v1
kind: SeedGenerator
metadata:
  name: seedimage
spec:
  seedImage: <seed_image>
```

```yaml {title="Example ImageBasedUpgrade CR"}
apiVersion: lca.openshift.io/v1
kind: ImageBasedUpgrade
metadata:
  name: upgrade
spec:
  stage: Idle
  seedImageRef:
    version: <target_version>
    image: <seed_container_image>
    pullSecretRef:
      name: <seed_pull_secret>
  autoRollbackOnFailure: {}
  extraManifests:
  - name: example-extra-manifests
    namespace: openshift-lifecycle-agent
  # List of ConfigMap resources that contain the OADP Backup and Restore CRs.
  oadpContent:
  - name: oadp-cm-example
    namespace: openshift-adp
```

where

`spec.stage`
:   Defines the stage of the `ImageBasedUpgrade` CR. The value can be `Idle`, `Prep`, `Upgrade`, or `Rollback`.

`spec.seedImageRef`
:   Defines the seed image to be used, the target platform version, and the secret required to access the image.

`initMonitorTimeoutSeconds`
:   Optionally defines the time frame in seconds to roll back when the upgrade does not complete within that time frame after the first reboot. If not defined or set to `0`, the default value of `1800` seconds (30 minutes) is used.

`spec.extraManifests`
:   Optionally defines the list of `ConfigMap` resources that contain your custom catalog sources to retain after the upgrade, and your extra manifests to apply to the target cluster that are not part of the seed image.

`spec.oadpContent`
:   Defines the list of `ConfigMap` resources that contain the {{ oadp_short }} `Backup` and `Restore` CRs.

**Additional resources**

- [Configuring the automatic image cleanup of the container storage disk](/openshift-docs-markdown/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-auto-image-cleanup#cnf-image-based-upgrade-configure-auto-image-cleanup)
- [Performing an image-based upgrade for {{ sno }} clusters with {{ lcao }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/cnf-image-based-upgrade-base#cnf-image-based-upgrade)
- [Performing an image-based upgrade for {{ sno }} clusters using {{ ztp }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/ztp-image-based-upgrade#ztp-image-based-upgrade)

**Additional resources**

- [Mirroring images for a disconnected installation](/openshift-docs-markdown/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)

**Additional resources**

- [Configuring a shared container partition between ostree stateroots](/openshift-docs-markdown/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#cnf-image-based-upgrade-shared-container-partition_shared-container-partition)
- [Configuring a shared container partition between ostree stateroots when using {{ ztp }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#ztp-image-based-upgrade-shared-container-partition_shared-container-partition)
- [Seed image configuration](/openshift-docs-markdown/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-generate-seed#cnf-image-based-upgrade-seed-image-config_generate-seed)

**Additional resources**

- [Performing an image-based upgrade for {{ sno }} clusters with {{ lcao }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/cnf-image-based-upgrade-base#cnf-image-based-upgrade)
- [Preparing the hub cluster for ZTP](/openshift-docs-markdown/edge_computing/ztp-preparing-the-hub-cluster#ztp-preparing-the-hub-cluster)
- [Creating ConfigMap objects for the image-based upgrade with {{ lcao }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-prep-resources#cnf-image-based-upgrade-prep-oadp_cnf-non-gitops)
- [Creating ConfigMap objects for the image-based upgrade with {{ ztp }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/ztp-image-based-upgrade-prep-resources#ztp-image-based-upgrade-prep-resources)
- [About installing {{ oadp_short }}](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/installing/about-installing-oadp#about-installing-oadp)
