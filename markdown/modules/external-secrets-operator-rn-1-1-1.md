{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ external_secrets_operator }} 1.1.1 {id="external-secrets-operator-rn-1-1-1_{{ context }}"}

{{ external_secrets_operator }} 1.1.1 is based on the upstream external-secrets version 0.20.4. {._abstract}

Issued: 13 August 2026

This release fixes some Common Vulnerabilities and Exposures (CVEs) and provides related Red Hat advisories.

The following advisories are available for the {{ external_secrets_operator }}:

*   [RHBA-2026:54480](https://access.redhat.com/errata/RHBA-2026:54480)
*   [RHSA-2026:54525](https://access.redhat.com/errata/RHSA-2026:54525)
*   [RHBA-2026:54526](https://access.redhat.com/errata/RHBA-2026:54526)
*   [RHBA-2026:54537](https://access.redhat.com/errata/RHBA-2026:54537)

## CVEs {id="_cves"}

*   [CVE-2026-44740](https://access.redhat.com/security/cve/cve-2026-44740)
*   [CVE-2026-27145](https://access.redhat.com/security/cve/cve-2026-27145)
*   [CVE-2026-39835](https://access.redhat.com/security/cve/cve-2026-39835)
*   [CVE-2026-56852](https://access.redhat.com/security/cve/cve-2026-56852)

## New features and enhancements {id="external-secrets-operator-1-1-1-features-enhancements_{{ context }}"}

**Operand container arguments can be overridden by using the Operator Subscription**

With this release, you can override container arguments for the `external-secrets` operand components by setting environment variables in the `spec.config.env` field of the {{ external_secrets_operator_short }} Subscription. The supported variables are `OPERAND_EXTERNAL_SECRETS_ARGS`, `OPERAND_WEBHOOK_ARGS`, `OPERAND_CERT_CONTROLLER_ARGS`, and `OPERAND_BITWARDEN_SDK_SERVER_ARGS`. Use comma-separated `--key=value` flags. Commas inside values such as `--tls-ciphers` are supported.

For more information, see [Customizing the External Secrets Operator for Red Hat OpenShift](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#external-secrets-log-levels).