{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ external_secrets_operator }} 1.1.0 {id="external-secrets-operator-rn-1-1_{{ context }}"}

{{ external_secrets_operator }} version 1.1.0 is based on the upstream external-secrets project, version v0.20.4. {._abstract}

Issued: 2026-03-17

The following advisories are available for the {{ external_secrets_operator }} 1.1.0:

*   [RHBA-2026:5554](https://access.redhat.com/errata/RHBA-2026:5554)
*   [RHBA-2026:5555](https://access.redhat.com/errata/RHBA-2026:5555)
*   [RHBA-2026:5558](https://access.redhat.com/errata/RHBA-2026:5557) 
*   [RHBA-2026:5589](https://access.redhat.com/errata/RHBA-2026:5589)

## New features and enhancements {id="external-secrets-operator-1-1-0-features-enhancements_{{ context }}"}

**Customization feature is now available for {{ external_secrets_operator_short }} components**

With this release, the Operator API, `externalsecretsconfig.operator.openshift.io` allows users to customize various aspects of the `external-secrets` controllers. The new API allows users to add custom annotations and environment variables, and allows configuring revision history limits for the `external-secrets` deployments.

For more information, see [Customizing the External Secrets Operator for Red Hat OpenShift](https://docs.redhat.com/en/documentation/openshift_container_platform/4.20/html-single/security_and_compliance/index#external-secrets-log-levels).