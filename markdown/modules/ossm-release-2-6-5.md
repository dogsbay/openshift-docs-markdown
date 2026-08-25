{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.6.5 {id="ossm-release-2-6-5_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.6.5, and includes the following `ServiceMeshControlPlane` resource version updates: 2.6.5, 2.5.8, and 2.4.14.

This release addresses Common Vulnerabilities and Exposures (CVEs) and is supported on {{ product_title }} 4.14 and later.

You can use the most current version of the {{ KialiProduct }} with all supported versions of {{ SMProductName }}. The version of {{ SMProductShortName }} is specified by using the `ServiceMeshControlPlane` resource. The version of {{ SMProductShortName }} automatically ensures a compatible version of Kiali.

## Component updates {id="ossm-release-2-6-5-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.20.8 |
| Envoy Proxy | 1.28.7 |
| Kiali Server | 1.73.18 |

## New features {id="ossm-new-features-2-6-5_{{ context }}"}

*   {{ TempoName }} Stack is now supported on {{ ibm_z_title }}.

## Fixed issues {id="ossm-fixed-issues-2-6-5_{{ context }}"}

*   [OSSM-8608](https://issues.redhat.com/browse/OSSM-8608) Previously, terminating a Container Network Interface (CNI) pod during the installation phase while copying binaries could leave Istio-CNI temporary files on the node file system. Repeated occurrences could eventually fill up the node disk space. Now, while terminating a CNI pod during the installation phase, existing temporary files are deleted before copying the CNI binary, ensuring that only one temporary file per Istio version exists on the node file system.