{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift File Integrity Operator 1.4.0 {id="file-integrity-operator-release-notes-1-4-0_{{ context }}"}

Release notes for OpenShift File Integrity Operator 1.4.0. {._abstract}

The following Red Hat Security Advisory (RHSA) is available for the OpenShift File Integrity Operator 1.4.0:

*   [RHSA-2026:22627 OpenShift File Integrity Operator Update](https://access.redhat.com/errata/RHSA-2026:22627)

## New features and enhancements {id="file-integrity-operator-1-4-0-new-features-and-enhancements_{{ context }}"}

*   With this release, you can optionally set `priorityClassName` in the `FileIntegrity` custom resource (CR) to assign a `PriorityClass` to file integrity daemon pods. On nodes under resource pressure, the scheduler can preempt lower-priority workloads to make room for those pods, helping ensure nodes continue to receive integrity checks. ([RFE-9047](https://issues.redhat.com/browse/RFE-9047))

## Bug fixes {id="file-integrity-operator-1-4-0-bug-fixes_{{ context }}"}

*   Before this update, `aide-worker-fileintegrity` pods could use increasing CPU and memory during hourly Advanced Intrusion Detection Environment (AIDE) scan cycles, often approaching DaemonSet resource limits and disrupting integrity checks on affected nodes. With this release, AIDE worker pods use CPU and memory more consistently during scans. ([CMP-4006](https://issues.redhat.com/browse/CMP-4006))

This update includes upgraded dependencies in the underlying base images.