{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ cert_manager_operator }} 1.19.0 {id="cert-manager-operator-release-notes-1-19-0_{{ context }}"}

Review the release notes for the {{ cert_manager_operator }} 1.19.0 to learn what is new and updated with this release. {._abstract}

Issued: 20 April 2026

The following advisories are available for the {{ cert_manager_operator }} for {{ product_title }} 1.19.0:

*   [RHBA-2026:9064](https://access.redhat.com/errata/RHBA-2026:9064)
*   [RHBA-2026:9024](https://access.redhat.com/errata/RHBA-2026:9024)
*   [RHBA-2026:8953](https://access.redhat.com/errata/RHBA-2026:8953)
*   [RHBA-2026:9025](https://access.redhat.com/errata/RHBA-2026:9025)
*   [RHBA-2026:8956](https://access.redhat.com/errata/RHBA-2026:8956)

Version `v1.19.4` of the {{ cert_manager_operator }} is based on the upstream cert-manager version `v1.19.4`. For more information, see the [cert-manager project release notes for v1.19.4](https://cert-manager.io/docs/releases/release-notes/release-notes-1.19#v1194).

## New features and enhancements {id="cert-manager-operator-1-19-0-features-enhancements_{{ context }}"}


Distribution of trust bundles with the trust manager operand (Technology Preview)
:   In this release, the {{ cert_manager_operator }} adds support for the trust-manager operand as a Technology Preview feature. You can now install the trust-manager operand to automate the secure distribution of trust bundles, such as certificate authority (CA) certificates, to application namespaces across your cluster. For more information, see [Distributing certificates by using trust-manager operand](/security/cert_manager_operator/cert-manager-trust-manager#cert-manager-trust-manager).


Support for configuring the certificate request backoff duration
:   In this release, the {{ cert_manager_operator }} adds support for the `--certificate-request-minimum-backoff-duration` flag. With this flag, you can configure the minimum backoff period for certificate requests by overriding the default configuration. For more information, see [Overridable arguments for the cert-manager components](/security/cert_manager_operator/cert-manager-customizing-api-fields#cert-manager-overridable-arguments_cert-manager-customizing-api-fields).

## Fixed issues {id="cert-manager-operator-1-19-0-fixed-issues_{{ context }}"}

*   Before this update, the **ClusterIssuer** form view lacked an option to remove the self-signed field. As a consequence, you could not create issuer types other than self-signed. With this release, the form view sets the certificate authority (CA) as the default issuer type. As a result, you can switch to other issuer types by using the form view. ([OCPBUGS-65620](https://redhat.atlassian.net/browse/OCPBUGS-65620))