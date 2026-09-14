{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ external_secrets_operator }} 1.2.1 {id="external-secrets-operator-rn-1-2-1_{{ context }}"}

{{ external_secrets_operator }} 1.2.1 is based on the upstream external-secrets version v2.5.0. {._abstract}

Issued: 2026-09-10

The following advisories are available for the {{ external_secrets_operator }}:

*   [RHBA-2026:66361](https://access.redhat.com/errata/RHBA-2026:66361)
*   [RHSA-2026:66363](https://access.redhat.com/errata/RHSA-2026:66363)
*   [RHBA-2026:66362](https://access.redhat.com/errata/RHBA-2026:66362)
*   [RHBA-2026:66382](https://access.redhat.com/errata/RHBA-2026:66382)


:::note

This release updates the NTLM library that is used by the webhook provider for `NTLM` and Neg`otiate authentication. This update modifies the initial handshake message, but the configuration settings, credentials, and secret synchronization behavior remain unchanged. Most NTLM servers are unaffected. However, webhook stores that use `NTLM` or `Negotiate` authentication might encounter errors if a server rejects the new handshake format.

:::


## New features and enhancements {id="external-secrets-operator-1-2-1-features-enhancements_{{ context }}"}

Operand container argument overrides in the Operator subscription

:   With this release, you can override container arguments for core components of `external-secrets` operand by specifying the environment variables in the {{ external_secrets_operator }} `Subscription` object.

For more information, see [Customizing the External Secrets Operator for Red Hat OpenShift](https://docs.redhat.com/en/documentation/openshift_container_platform/4.21/html/security_and_compliance/external-secrets-operator-for-red-hat-openshift#external-secrets-operator-overriding-operand-arguments_external-secrets-log-levels).

## CVEs {id="external-secrets-operator-1-2-1-cves_{{ context }}"}

*   [CVE-2026-33818](https://access.redhat.com/security/cve/cve-2026-33818)
*   [CVE-2026-41178](https://access.redhat.com/security/cve/cve-2026-41178)
*   [CVE-2026-56852](https://access.redhat.com/security/cve/cve-2026-56852)
*   [CVE-2026-56853](https://access.redhat.com/security/cve/cve-2026-56853)
*   [CVE-2026-56858](https://access.redhat.com/security/cve/cve-2026-56858)
*   [CVE-2026-56860](https://access.redhat.com/security/cve/cve-2026-56860)
*   [CVE-2026-56862](https://access.redhat.com/security/cve/cve-2026-56862)
*   [CVE-2026-71556](https://access.redhat.com/security/cve/cve-2026-71556)