{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ external_secrets_operator }} 1.0.0 (General Availability) {id="external-secrets-operator-rn-1-0_{{ context }}"}

{{ external_secrets_operator }} version 1.0.0 is based on the upstream external-secrets project, version v0.19.0. {._abstract}

Issued: 2025-11-03

The following advisories are available for the {{ external_secrets_operator }} 1.0.0:

*   [RHBA-2025:19416](https://access.redhat.com/errata/RHBA-2025:19416)
*   [RHBA-2025:19417](https://access.redhat.com/errata/RHBA-2025:19417)
*   [RHBA-2025:19418](https://access.redhat.com/errata/RHBA-2025:19418)
*   [RHBA-2025:19463](https://access.redhat.com/errata/RHBA-2025:19463)

## Fixed issues {id="external-secrets-operator-1-0-0-fixed-issues_{{ context }}"}

*   Before this release, many of the APIs listed in the console for the {{ external_secrets_operator }} were missing descriptions. With this release, the API descriptions have been added. ([OCPBUGS-61081](https://issues.redhat.com/browse/OCPBUGS-61081))

## New features and enhancements {id="external-secrets-operator-1-0-0-features-enhancements_{{ context }}"}

**Renaming and improvements on the Operator API**

With this release, the Operator API, `externalsecrets.operator.openshift.io` has been renamed to `externalsecretsconfigs.operator.openshift.io` to avoid confusion with the external-secrets provided API that has the same name, but a different purpose. The external-secrets provided API has also been restructured and new features are added.

For more information, see [External Secrets Operator for Red Hat OpenShift APIs](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#external-secrets-operator-api).

**Support to collect metrics of {{ external_secrets_operator_short }}**

With this release, the {{ external_secrets_operator }} supports collecting metrics for both the Operator and operands. This is optional and must be enabled.

For more information, see [Monitoring the External Secrets Operator for Red Hat OpenShift](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#external-secrets-monitoring).

**Support to configure proxy for {{ external_secrets_operator_short }}**

With this release, the {{ external_secrets_operator }} supports configuring proxy for both the Operator and operand.

For more information, see [About the egress proxy for the External Secrets Operator for Red Hat OpenShift](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#external-secrets-operator-proxy).

**Root filesystem is read-only for {{ external_secrets_operator }} containers**

With this release, to improve security, the {{ external_secrets_operator }} and all its operands have the `readOnlyRootFilesystem` security context set to true by default. This enhancement hardens the containers and prevents a potential attacker from modifying the contents of the container’s root file system.

**Network policy hardening is now available for {{ external_secrets_operator_short }} components**

With this release, {{ external_secrets_operator }} includes pre-defined `NetworkPolicy` resources designed for enhanced security by governing ingress and egress traffic for operand components. These policies cover essential internal traffic, such as ingress to the metrics and webhook servers, and egress to the OpenShift API server and DNS server. Note that deployment of the `NetworkPolicy` is enabled by default and egress allow policies must be explicitly defined in the `ExternalSecretsConfig` custom resource for the `external-secrets` component to fetch secrets from external providers.

For more information, see [Configuring network policy for the operand](https://docs.redhat.com/en/documentation/openshift_container_platform/latest/html-single/security_and_compliance/index#external-secrets-operator-config-net-policy).