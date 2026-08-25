{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.3.12 {id="ossm-release-2-3-12_{{ context }}"}

This release of {{ SMProductName }} is included with the {{ SMProductName }} Operator 2.5.2, addresses Common Vulnerabilities and Exposures (CVEs), contains bug fixes, and is supported on {{ product_title }} 4.12 and later.

The most current version of the {{ SMProductName }} Operator can be used with all supported versions of {{ SMProductShortName }}. The version of {{ SMProductShortName }} is specified using the `ServiceMeshControlPlane` resource.

## Component updates {id="ossm-component-updates-2-3-12_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.14.5 |
| Envoy Proxy | 1.22.11 |
| Kiali | 1.57.14 |