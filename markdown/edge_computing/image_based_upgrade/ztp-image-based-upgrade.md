---
title: "Performing an image-based upgrade for {{ sno }} clusters using {{ ztp }}"
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Performing an image-based upgrade for {{ sno }} clusters using {{ ztp }} {id="ztp-image-based-upgrade"}
{%- set context = "ztp-gitops" %}
{% include "./_attributes/common-attributes.md" %}

You can use a single resource on the hub cluster, the `ImageBasedGroupUpgrade` custom resource (CR), to manage an imaged-based upgrade on a selected group of managed clusters through all stages.
{{ cgu_operator_first }} reconciles the `ImageBasedGroupUpgrade` CR and creates the underlying resources to complete the defined stage transitions, either in a manually controlled or a fully automated upgrade flow.

For more information about the image-based upgrade, see "Understanding the image-based upgrade for single-node OpenShift clusters".

**Additional resources**

*   [Understanding the image-based upgrade for single-node OpenShift clusters](/edge_computing/image_based_upgrade/cnf-understanding-image-based-upgrade#cnf-understanding-image-based-upgrade)

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-concept.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-procedure-steps.md" %}{% endleveloffset %}

**Additional resources**

*   [Configuring a shared container partition between ostree stateroots when using {{ ztp }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/cnf-image-based-upgrade-shared-container-partition#ztp-image-based-upgrade-shared-container-partition_shared-container-partition)
*   [Creating ConfigMap objects for the image-based upgrade with {{ lcao }} using {{ ztp }}](/edge_computing/image_based_upgrade/preparing_for_image_based_upgrade/ztp-image-based-upgrade-prep-resources#ztp-image-based-upgrade-prep-resources)
*   [About backup and snapshot locations and their secrets](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-ocs#oadp-about-backup-snapshot-locations_installing-oadp-ocs)
*   [Creating a Backup CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-cr#oadp-creating-backup-cr-doc)
*   [Creating a Restore CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#oadp-creating-restore-cr_restoring-applications)
*   [Supported action combinations](/edge_computing/image_based_upgrade/ztp-image-based-upgrade#ztp-image-based-upgrade-supported-combinations_ztp-gitops)

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-procedure-one-step.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-procedure-cancel.md" %}{% endleveloffset %}

**Additional resources**

*   [Supported action combinations](/edge_computing/image_based_upgrade/ztp-image-based-upgrade#ztp-image-based-upgrade-supported-combinations_ztp-gitops)

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-procedure-rollback.md" %}{% endleveloffset %}

**Additional resources**

*   [Supported action combinations](/edge_computing/image_based_upgrade/ztp-image-based-upgrade#ztp-image-based-upgrade-supported-combinations_ztp-gitops)
*   [Recovering from expired control plane certificates](/backup_and_restore/control_plane_backup_and_restore/disaster_recovery/scenario-3-expired-certs#dr-scenario-3-recovering-expired-certs_dr-recovering-expired-certs)

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-troubleshooting.md" %}{% endleveloffset %}