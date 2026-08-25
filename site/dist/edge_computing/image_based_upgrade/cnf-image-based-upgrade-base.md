---
title: Performing an image-based upgrade for {{ sno }} clusters with the {{ lcao }}
---

# Performing an image-based upgrade for {{ sno }} clusters with the {{ lcao }} {#cnf-image-based-upgrade}

You can use the {{ lcao }} to do a manual image-based upgrade of a {{ sno }} cluster.

When you deploy the {{ lcao }} on a cluster, an `ImageBasedUpgrade` CR is automatically created. You update this CR to specify the image repository of the seed image and to move through the different stages.

**Additional resources**

- [Creating ConfigMap objects for the image-based upgrade with {{ lcao }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-prep-resources#cnf-image-based-upgrade-prep-resources)
- [Configuring image registry repository mirroring](/openshift-docs-markdown/openshift_images/image-configuration#images-configuration-registry-mirror-configuring_image-configuration)

**Additional resources**

- [Moving to the Rollback stage of the image-based upgrade with {{ lcao }}](/openshift-docs-markdown/edge_computing/image_based_upgrade/cnf-image-based-upgrade-base#cnf-image-based-upgrade-rollback_cnf-non-gitops)
- [Deleting Operators from a cluster](/openshift-docs-markdown/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-cluster)

**Additional resources**

- [Recovering from expired control plane certificates](/openshift-docs-markdown/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-scenario-3-recovering-expired-certs_dr-recovering-expired-certs)
