{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.6.1 {id="ossm-release-2-6-1_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.6.1, and includes the following `ServiceMeshControlPlane` resource version updates: 2.6.1, 2.5.4 and 2.4.10.
This release addresses Common Vulnerabilities and Exposures (CVEs), contains a bug fix, and is supported on {{ product_title }} 4.14 and later.

The most current version of the {{ KialiProduct }} can be used with all supported versions of {{ SMProductName }}. The version of {{ SMProductShortName }} is specified by using the `ServiceMeshControlPlane` resource.  The version of {{ SMProductShortName }} automatically ensures a compatible version of Kiali.

## Component updates {id="ossm-release-2-6-1-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.20.8 |
| Envoy Proxy | 1.28.5 |
| Kiali Server | 1.73.14 |

## Fixed issues {id="ossm-fixed-issues-2-6-1_{{ context }}"}

*   [OSSM-6766](https://issues.redhat.com/browse/OSSM-6766) Previously, the {{ SMPlugin }} failed if the user wanted to update a namespace (for example, enabling or disabling injection), or create any Istio object (for example, creating traffic policies). Now, the {{ SMPlugin }} does not fail if the user  updates a namespace or creates any Istio object.