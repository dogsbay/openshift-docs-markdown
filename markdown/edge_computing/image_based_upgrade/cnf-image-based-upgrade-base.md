---
title: "Performing an image-based upgrade for {{ sno }} clusters with the {{ lcao }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Performing an image-based upgrade for {{ sno }} clusters with the {{ lcao }} {id="cnf-image-based-upgrade"}
{%- set context = "cnf-non-gitops" %}

You can use the {{ lcao }} to do a manual image-based upgrade of a {{ sno }} cluster.

When you deploy the {{ lcao }} on a cluster, an `ImageBasedUpgrade` CR is automatically created.
You update this CR to specify the image repository of the seed image and to move through the different stages.

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-prep.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Creating ConfigMap objects for the image-based upgrade with {{ lcao }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-prep-resources#cnf-image-based-upgrade-prep-resources)
*   [Configuring image registry repository mirroring](/openshift_images/image-configuration#images-configuration-registry-mirror-configuring_image-configuration)

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-with-backup.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Moving to the Rollback stage of the image-based upgrade with {{ lcao }}](/edge_computing/image_based_upgrade/cnf-image-based-upgrade-base#cnf-image-based-upgrade-rollback_cnf-non-gitops)
*   [Deleting Operators from a cluster](/operators/admin/olm-deleting-operators-from-cluster#olm-deleting-operators-from-cluster)

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-rollback.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Recovering from expired control plane certificates](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-scenario-3-recovering-expired-certs_dr-recovering-expired-certs)

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-troubleshooting.md" %}{% endleveloffset %}