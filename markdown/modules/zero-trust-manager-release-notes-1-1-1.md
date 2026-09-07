{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ zero_trust_full }} 1.1.1 {id="zero-trust-manager-release-notes-1-1-1_{{ context }}"}

Issued: 26 August 2026

This release is a bug-fix update for {{ zero_trust_full }}. It improves SPIRE controller manager stability by resolving a performance issue that can cause elevated CPU usage. {._abstract}

The following advisories are available for {{ zero_trust_full }}:

*   [RHBA-2026:59992](https://access.redhat.com/errata/RHBA-2026:59992)
*   [RHBA-2026:60037](https://access.redhat.com/errata/RHBA-2026:60037)
*   [RHBA-2026:60135](https://access.redhat.com/errata/RHBA-2026:60135)
*   [RHBA-2026:60156](https://access.redhat.com/errata/RHBA-2026:60156)
*   [RHBA-2026:60157](https://access.redhat.com/errata/RHBA-2026:60157)
*   [RHBA-2026:60158](https://access.redhat.com/errata/RHBA-2026:60158)
*   [RHBA-2026:60175](https://access.redhat.com/errata/RHBA-2026:60175)
*   [RHBA-2026:60202](https://access.redhat.com/errata/RHBA-2026:60202)

## Fixed issues {id="zero-trust-manager-1-1-1-bug-fixes_{{ context }}"}


`spire-controller-manager` container no longer experiences high CPU usage during reconciliation
:   *   Before this update, {{ zero_trust_full }} generated the `spire-controller-manager` ConfigMap without setting the `gcInterval` field, so the field value was serialized to `0`. As a consequence, reconciliation loops ran continuously with no delay, causing high CPU usage in the controller manager process even in clusters with minimal workloads. With this release, {{ zero_trust_full }} sets the `gcInterval` setting in the `spire-controller-manager` ConfigMap to 10 seconds, preventing CPU spikes and reducing CPU usage.

    ([OCPBUGS-90556](https://issues.redhat.com/browse/OCPBUGS-90556))