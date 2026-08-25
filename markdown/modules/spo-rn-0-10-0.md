{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.10.0 {id="spo-release-notes-0-10-0_{{ context }}"}

Release notes for Security Profiles Operator 0.10.0. {._abstract}

The following Red Hat Security Advisory (RHSA) is available for the Security Profiles Operator 0.10.0:
[RHSA-2026:2852 - OpenShift Security Profiles Operator update](http://access.redhat.com/errata/RHSA-2026:2852)

## Bug fixes {id="spo-0-10-0-bug-fixes_{{ context }}"}

*   In some instances, using Security Profiles Operator (SPO) 0.9.0 with {{ product_title }} version 4.20 and above caused SPO to create the `profilerecording` resource but the workload would fail. Failure of the workload prevented the creation of the needed container for running the Operator. With the 0.10.0 release of SPO, the `profilerecording` resource is reliably created, therefore the needed container for running the Operator is reliably created ([CMP-3537](https://issues.redhat.com/browse/CMP-3537)).
*   For version 0.9.0 of Security Profiles Operator (SPO), the `spod` pods would fail to run with the error message `fsmount:fscontext:proc/: could not get mount id: operation not permitted`. With the release of version 0.10.0, the `spod` pods run reliably. [CMP-4007](https://issues.redhat.com/browse/CMP-4007).
*   In releases of SPO 0.9.0 and earlier, there was a bug in syntax of the `selinux` usage. With this release of SPO, the change is from `<policyName>_.process` to `<policyName>.process`. The new syntax omits the `_`. Examples in the documentation now show this updated usage. [CMP-4104](https://issues.redhat.com/browse/CMP-4104)

## New features and enhancements {id="spo-0-10-0-new-features-and-enhancements_{{ context }}"}

*   With the release of SPO v0.10.0, the Operator now supports {{ op_system_first }} 10 containers. [CMP-4033](https://issues.redhat.com/browse/CMP-4033) 
*   In this release of the Security Profiles Operator, the Advanced Audit Logging Framework is available as a General Availability (GA) feature. The Advanced Audit Logging Framework uses the Audit JSON Log Enricher to capture and log terminal-based command activity in {{ op_system_first }} containers, including `oc rsh`, `oc exec`, and `oc debug` commands. For more details, see [Advanced Audit Logging Framework](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html/security_and_compliance/security-profiles-operator#spo-audit-logging_spo-advanced).