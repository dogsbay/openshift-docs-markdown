{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 0.1.21 {id="file-integrity-operator-release-notes-0-1-21_{{ context }}"}

Release notes for OpenShift File Integrity Operator 0.1.21. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 0.1.21:

*   [RHBA-2021:4631 OpenShift File Integrity Operator Bug Fix and Enhancement Update](https://access.redhat.com/errata/RHBA-2021:4631)

## New features and enhancements {id="file-integrity-operator-0-1-21-new-features-and-enhancements_{{ context }}"}

*   The metrics related to `FileIntegrity` scan results and processing metrics are displayed on the monitoring dashboard on the web console. The results are labeled with the prefix of `file_integrity_operator_`.
*   If a node has an integrity failure for more than 1 second, the default `PrometheusRule` provided in the operator namespace alerts with a warning.
*   The following dynamic Machine Config Operator and Cluster Version Operator related filepaths are excluded from the default AIDE policy to help prevent false positives during node updates:
    *   /etc/machine-config-daemon/currentconfig
    *   /etc/pki/ca-trust/extracted/java/cacerts
    *   /etc/cvo/updatepayloads
    *   /root/.kube
*   The AIDE daemon process has stability improvements over v0.1.16, and is more resilient to errors that might occur when the AIDE database is initialized.

## Bug fixes {id="openshift-file-integrity-operator-0-1-21-bug-fixes_{{ context }}"}

*   Before this update, when the Operator automatically upgraded, outdated daemon sets were not removed. With this release, outdated daemon sets are removed during the automatic upgrade.