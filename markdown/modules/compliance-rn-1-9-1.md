{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for OpenShift Compliance Operator 1.9.1 {id="compliance-operator-release-notes-1-9-1_{{ context }}"}

Release notes for OpenShift Compliance Operator 1.9.1. {._abstract}

The following Red Hat Security Advisory (RHSA) is available for the OpenShift Compliance Operator 1.9.1:

*   [RHSA-2026:26571 - OpenShift Compliance Operator 1.9.1 bug fix and enhancement update](https://access.redhat.com/errata/RHSA-2026:26571)

## Bug fixes {id="compliance-operator-1-9-1-bug-fixes_{{ context }}"}

*   Before this release, when you created a `TailoredProfile` object that extended a base profile, you could only enable rules that were available in the XCCDF groups in the base profile. With this release, `TailoredProfile` objects can enable any rule available. For more information, see ([CMP-4283](https://redhat.atlassian.net/browse/CMP-4283)).
*   Before this release, the Compliance Operator rule, `ocp4-cis-file-permissions-cni-conf`, checked file permissions for every file under the `/etc/cni/net.d/` directory, including the runtime `cni.lock` file, which could cause incorrect fail results. With this release, the rule checks permissions only for CNI configuration files (`.conf`, `.conflist`, `.json`). For more information, see ([CMP-4323](https://redhat.atlassian.net/browse/CMP-4323)).
*   Before this release, the Compliance Operator defaulted to an `imagePullPolicy` of `Always`, which could cause unnecessary container image pulls from the registry on every pod start. With this release, the default is `IfNotPresent`. For more information, see ([CMP-4313](https://redhat.atlassian.net/browse/CMP-4313)).
*   Before this release, updated DISA STIG reference URLs caused the profile parser to omit STIG reference annotations on `Rule` custom resources. With this release, the parser recognizes the updated URLs and restores those annotations. For more information, see ([CMP-4333](https://redhat.atlassian.net/browse/CMP-4333)).
*   Before this release, updated NERC-CIP reference URLs caused the profile parser to omit NERC-CIP annotations on `Rule` custom resources. With this release, the parser recognizes the updated URLs and restores those annotations. For more information, see ([CMP-4349](https://redhat.atlassian.net/browse/CMP-4349)).