{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.5.5 {id="ossm-release-2-5-5_{{ context }}"}

This release of {{ SMProductName }} is included with the {{ SMProductName }} Operator 2.6.2, addresses Common Vulnerabilities and Exposures (CVEs), and is supported on {{ product_title }} 4.14 and later.

## Component updates {id="ossm-release-2-5-5-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.18.7 |
| Envoy Proxy | 1.26.8 |
| Kiali Server | 1.73.15 |

## Fixed issues {id="ossm-fixed-issues-2-5-5_{{ context }}"}

*   [OSSM-8001](https://issues.redhat.com/browse/OSSM-8001) Previously, when the `runAsUser` and `runAsGroup` parameters were set to the same value in pods, the proxy GID was incorrectly set to match the container’s GID, causing traffic interception issues with iptables rules applied by Istio CNI. Now, containers can have the same value for the `runAsUser` and `runAsGroup` parameters, and iptables rules apply correctly.
*   [OSSM-8074](https://issues.redhat.com/browse/OSSM-8074) Previously, the {{ KialiProduct }} failed to install the Kiali Server when a {{ SMProductShortName }} had a numeric-only namespace (e.g., `12345`). Now, namespaces with only numerals work correctly.