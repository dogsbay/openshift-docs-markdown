---
title: Installing Operators for the image-based upgrade
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Installing Operators for the image-based upgrade {id="cnf-image-based-upgrade-install-operators"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "install-operators" %}

Prepare your clusters for the upgrade by installing the {{ lcao }} and the {{ oadp_short }} Operator.

To install the {{ oadp_short }} Operator with the non-GitOps method, see "Installing the {{ oadp_short }} Operator".

**Additional resources**

*   [Installing the {{ oadp_short }} Operator](/backup_and_restore/application_backup_and_restore/installing/oadp-installing-operator#oadp-installing-operator-doc)
*   [About backup and snapshot locations and their secrets](/backup_and_restore/application_backup_and_restore/installing/installing-oadp-ocs#oadp-about-backup-snapshot-locations_installing-oadp-ocs)
*   [Creating a Backup CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/oadp-creating-backup-cr#oadp-creating-backup-cr-doc)
*   [Creating a Restore CR](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/restoring-applications#oadp-creating-restore-cr_restoring-applications)

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-installing-lifecycle-agent-using-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/cnf-image-based-upgrade-installing-lifecycle-agent-using-web-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-installing-lca.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/ztp-image-based-upgrade-installing-oadp.md" %}{% endleveloffset %}