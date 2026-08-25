{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.6.6 {id="ossm-release-2-6-6_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.6.6, and includes the following `ServiceMeshControlPlane` resource version updates: 2.6.6, 2.5.9, and 2.4.15.

This release addresses Common Vulnerabilities and Exposures (CVEs) and is supported on {{ product_title }} 4.14 and later.

You can use the most current version of the {{ KialiProduct }} with all supported versions of {{ SMProductName }}. The version of {{ SMProductShortName }} is specified by using the `ServiceMeshControlPlane` resource. The version of {{ SMProductShortName }} automatically ensures a compatible version of Kiali.

## Component updates {id="ossm-release-2-6-6-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.20.8 |
| Envoy Proxy | 1.28.7 |
| Kiali Server | 1.73.19 |

## New features {id="ossm-new-features-2-6-6_{{ context }}"}

*   With this update, the Operator for {{ SMProductName }} 2.6 is renamed to {{ SMProductName }} 2 to align with the release of {{ SMProductName }} 3.0 and improve clarity.