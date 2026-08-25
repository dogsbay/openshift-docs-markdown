{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.6.8 {id="ossm-release-2-6-8_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.6.8, and includes the following `ServiceMeshControlPlane` resource version updates: 2.6.8 and 2.5.11.

This release addresses Common Vulnerabilities and Exposures (CVEs) and is supported on {{ product_title }} 4.14 and later.

You can use the most current version of the {{ KialiProduct }} with all supported versions of {{ SMProductName }}. The version of {{ SMProductShortName }} automatically ensures a compatible version of Kiali.

## Component updates {id="ossm-release-2-6-8-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.20.8 |
| Envoy Proxy | 1.28.7 |
| Kiali Server | 1.73.21 |