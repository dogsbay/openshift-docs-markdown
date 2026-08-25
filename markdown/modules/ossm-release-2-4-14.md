{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.4.14 {id="ossm-release-2-4-14_{{ context }}"}

This release of {{ SMProductName }} is included with the {{ SMProductName }} Operator 2.6.5 and is supported on {{ product_title }} 4.14 and later. This release addresses Common Vulnerabilities and Exposures (CVEs).

## Component updates {id="ossm-release-2-4-14-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.16.7 |
| Envoy Proxy | 1.24.12 |
| Kiali Server | 1.65.19 |

## Fixed issues {id="ossm-fixed-issues-2-4-14_{{ context }}"}

*   [OSSM-8608](https://issues.redhat.com/browse/OSSM-8608) Previously, terminating a Container Network Interface (CNI) pod during the installation phase while copying binaries could leave Istio-CNI temporary files on the node file system. Repeated occurrences could eventually fill up the node disk space. Now, while terminating a CNI pod during the installation phase, existing temporary files are deleted before copying the CNI binary, ensuring that only one temporary file per Istio version exists on the node file system.