---
title: OADP CLI plugin
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# OADP CLI plugin {id="oadp-cli-plugin"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "oadp-cli-plugin" %}

The {{ oadp_first }} command-line interface (CLI) plugin for the OpenShift CLI (`oc`) provides a kubectl-native interface for managing backup and restore operations on an {{ product_title }} cluster.

The plugin is available as `oc oadp` and supports both cluster administrator and non-administrator workflows. The administrator perspective provides cluster-wide backup and restore operations by using Velero resources. These commands are available when the {{ oadp_short }} CLI is configured in admin mode.

{% leveloffset +1 %}{% include "./modules/oadp-cli-installing.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-setup.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-client-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-completion.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-admin-backups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-admin-restores.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-admin-schedules.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-admin-bsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-admin-vsl.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-admin-nabsl-requests.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-must-gather.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-nonadmin-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-nonadmin-backups.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-nonadmin-restores.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/oadp-cli-nonadmin-bsl.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}

*   [Backing up applications](/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
*   [Velero {{ velero_version }} documentation](https://{{ velero_domain }}/docs/v{{ velero_version }}/)