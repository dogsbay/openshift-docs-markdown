{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.6.3 {id="ossm-release-2-6-3_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.6.3, and includes the following `ServiceMeshControlPlane` resource version updates: 2.6.3, 2.5.6, and 2.4.12.

This release addresses Common Vulnerabilities and Exposures (CVEs) and is supported on {{ product_title }} 4.14 and later.

The most current version of the {{ KialiProduct }} can be used with all supported versions of {{ SMProductName }}. The version of {{ SMProductShortName }} is specified by using the `ServiceMeshControlPlane` resource. The version of {{ SMProductShortName }} automatically ensures a compatible version of Kiali.

## Component updates {id="ossm-release-2-6-3-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.20.8 |
| Envoy Proxy | 1.28.7 |
| Kiali Server | 1.73.16 |