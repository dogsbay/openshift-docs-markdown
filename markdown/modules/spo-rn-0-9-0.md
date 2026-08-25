{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for Security Profiles Operator 0.9.0 {id="spo-release-notes-0-9-0_{{ context }}"}

Release notes for Security Profiles Operator 0.9.0. {._abstract}

The following Red Hat Bug Fix Advisory (RHBA) is available for the Security Profiles Operator 0.9.0:
[RHBA-2025:15655 - OpenShift Security Profiles Operator update](http://access.redhat.com/errata/RHBA-2025:15655)

This update manages security profiles as cluster-wide resources rather than namespace resources. To update Security Profiles Operator to a version later than 0.8.6 requires manual migration. For migration instructions, see [Security Profiles Operator 0.9.0 Update Migration Guide](http://access.redhat.com/articles/7130594).

## Bug fixes {id="spo-0-9-0-bug-fixes_{{ context }}"}

*   Before this update, the spod pods could fail to start and enter into a `CrashLoopBackOff` state due to an error in parsing the semanage configuration file. A change to the RHEL 9 image naming convention beginning in {{ product_title }} 4.19 causes this issue. ([OCPBUGS-55829](http://issues.redhat.com/browse/OCPBUGS-55829))
*   Before this update, the Security Profiles Operator would fail to apply a `RawSelinuxProfile` to newly added nodes due to a reconciler type mismatch error. With this update, the Operator now correctly handles `RawSelinuxProfile` objects and applies policies to all nodes as expected. ([OCPBUGS-33718](http://issues.redhat.com/browse/OCPBUGS-33718))