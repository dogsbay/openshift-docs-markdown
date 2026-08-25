---
title: OADP CLI plugin
---

# OADP CLI plugin {#oadp-cli-plugin}

The {{ oadp_first }} command-line interface (CLI) plugin for the OpenShift CLI (`oc`) provides a kubectl-native interface for managing backup and restore operations on an OpenShift Container Platform cluster.

The plugin is available as `oc oadp` and supports both cluster administrator and non-administrator workflows. The administrator perspective provides cluster-wide backup and restore operations by using Velero resources. These commands are available when the {{ oadp_short }} CLI is configured in admin mode.

## Additional resources {#additional-resources_oadp-cli-plugin}

- [Backing up applications](/openshift-docs-markdown/backup_and_restore/application_backup_and_restore/backing_up_and_restoring/backing-up-applications#backing-up-applications)
- \[Velero {{ velero_version }} documentation\](https://{{ velero_domain }}/docs/v{{ velero_version }}/)
