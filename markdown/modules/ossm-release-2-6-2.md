{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.6.2 {id="ossm-release-2-6-2_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.6.2, and includes the following `ServiceMeshControlPlane` resource version updates: 2.6.2, 2.5.5 and 2.4.11.

This release addresses Common Vulnerabilities and Exposures (CVEs), contains bug fixes, and is supported on {{ product_title }} 4.14 and later.

The most current version of the {{ KialiProduct }} can be used with all supported versions of {{ SMProductName }}. The version of {{ SMProductShortName }} is specified by using the `ServiceMeshControlPlane` resource. The version of {{ SMProductShortName }} automatically ensures a compatible version of Kiali.

## Component updates {id="ossm-release-2-6-2-components_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.20.8 |
| Envoy Proxy | 1.28.7 |
| Kiali Server | 1.73.15 |

## New features {id="ossm-new-features-2-6-2_{{ context }}"}

*   The {{ cert_manager_operator }} is now supported on {{ ibm_power_title }}, {{ ibm_z_title }}, and {{ ibm_linuxone_name }}.

## Fixed issues {id="ossm-fixed-issues-2-6-2_{{ context }}"}

*   [OSSM-8099](https://issues.redhat.com/browse/OSSM-8099) Previously, there was an issue supporting persistent session labels when the endpoints were in the draining phase. Now, there is a method of handling draining endpoints for the stateful header sessions.
*   [OSSM-8001](https://issues.redhat.com/browse/OSSM-8001) Previously, when `runAsUser` and `runAsGroup` were set to the same value in pods, the proxy GID was incorrectly set to match the container’s GID, causing traffic interception issues with iptables rules applied by Istio CNI. Now, containers can have the same value for runAsUser and runAsGroup, and iptables rules apply correctly.
*   [OSSM-8074](https://issues.redhat.com/browse/OSSM-8074) Previously, the Kiali Operator failed to install the Kiali server when a {{ SMProductShortName }} had a numeric-only namespace (e.g., `12345`). Now, namespaces with only numerals work correctly.