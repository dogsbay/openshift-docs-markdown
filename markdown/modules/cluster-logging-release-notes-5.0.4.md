# OpenShift Logging 5.0.4 {id="cluster-logging-release-notes-5-0-4"}

This release includes [RHSA-2021:2136 - Security Advisory. Moderate: Openshift Logging security and bugs update (5.0.4)](https://access.redhat.com/errata/RHSA-2021:2136).

## Security fixes {id="openshift-logging-5-0-4-security-fixes"}

*   gogo/protobuf: plugin/unmarshal/unmarshal.go lacks certain index
validation. ([**CVE-2021-3121**](https://access.redhat.com/security/cve/CVE-2021-3121))

The following Jira issues contain the above CVEs:

*   LOG-1364 CVE-2021-3121 cluster-logging-operator-container: gogo/protobuf: plugin/unmarshal/unmarshal.go lacks certain index validation [openshift-logging-5]. ([**LOG-1364**](https://issues.redhat.com/browse/LOG-1364))

## Bug fixes {id="openshift-logging-5-0-4-bug-fixes"}

This release also includes the following bug fixes:

*   LOG-1328 Port fix to 5.0.z for BZ-1945168. ([**LOG-1364**](https://issues.redhat.com/browse/LOG-1364))