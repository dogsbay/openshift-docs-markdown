{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 0.1.22 {id="file-integrity-operator-release-notes-0-1-22_{{ context }}"}

Release notes for OpenShift File Integrity Operator 0.1.22. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the OpenShift File Integrity Operator 0.1.22:

*   [RHBA-2022:0142 OpenShift File Integrity Operator Bug Fix](https://access.redhat.com/errata/RHBA-2022:0142)

## Bug fixes {id="openshift-file-integrity-operator-0-1-22-bug-fixes_{{ context }}"}

*   Before this update, a system with a File Integrity Operator installed might interrupt the {{ product_title }} update, due to the  `/etc/kubernetes/aide.reinit` file. This occurred if the `/etc/kubernetes/aide.reinit` file was present, but later removed before the `ostree` validation. With this update, `/etc/kubernetes/aide.reinit` is moved to the `/run` directory so that it does not conflict with the {{ product_title }} update. ([**BZ#2033311**](https://bugzilla.redhat.com/show_bug.cgi?id=2033311))