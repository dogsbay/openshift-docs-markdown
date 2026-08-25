{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 0.1.24 {id="file-integrity-operator-release-notes-0-1-24_{{ context }}"}

Release notes for OpenShift File Integrity Operator 0.1.24. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 0.1.24:

*   [RHBA-2022:1331 OpenShift File Integrity Operator Bug Fix](https://access.redhat.com/errata/RHBA-2022:1331)

## New features and enhancements {id="file-integrity-operator-0-1-24-new-features-and-enhancements_{{ context }}"}

*   You can now configure the maximum number of backups stored in the `FileIntegrity` Custom Resource (CR) with the `config.maxBackups` attribute. This attribute specifies the number of AIDE database and log backups left over from the `re-init` process to keep on the node. Older backups beyond the configured number are automatically pruned. The default is set to five backups.

## Bug fixes {id="openshift-file-integrity-operator-0-1-24-bug-fixes_{{ context }}"}

*   Before this update, upgrading the Operator from versions older than 0.1.21 to 0.1.22 could cause the `re-init` feature to fail. This was a result of the Operator failing to update `configMap` resource labels. Now, upgrading to the latest version fixes the resource labels. ([**BZ#2049206**](https://bugzilla.redhat.com/show_bug.cgi?id=2049206))
*   Before this update, when enforcing the default `configMap` script contents, the wrong data keys were compared. This resulted in the `aide-reinit` script not being updated properly after an Operator upgrade, and caused the `re-init` process to fail. Now,`daemonSets` run to completion and the AIDE database `re-init` process executes successfully. ([**BZ#2072058**](https://bugzilla.redhat.com/show_bug.cgi?id=2072058))