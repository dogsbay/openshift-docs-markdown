---
title: Customizing the External Secrets Operator for Red Hat OpenShift
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Customizing the External Secrets Operator for Red Hat OpenShift {id="external-secrets-log-levels"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-log-levels" %}

You can customize the behavior of the {{ external_secrets_operator }} operand components by configuring custom annotations, deployment lifecycle settings, and environment variables through the `ExternalSecretsConfig` custom resource (CR).

These configurations provide administrators with fine-grained control over the external-secrets deployment.

You can customize the {{ external_secrets_operator }} operand by using the `ExternalSecretsConfig` custom resource (CR). The CR supports a set of deployment and runtime options, such as custom annotations, revision history limits, environment variables, resource limits, tolerations, and proxy settings—so you can control how the operand is deployed and run without editing the operand resources directly.

All supported options are defined in the `ExternalSecretsConfig` CR (for example under the `spec.controllerConfig` for controller-related settings). The Operator reconciles the operand from this CR. Changes made directly to operand resources are overwritten. Use the `ExternalSecretsConfig` CR as the only supported way to customize the operand.

For the complete list of fields and allowed values, see the `ExternalSecretsConfig` API reference in the {{ external_secrets_operator }} documentation.

**Additional resources**

*   [External Secrets Operator for Red Hat OpenShift APIs](/security/external_secrets_operator/external-secrets-operator-api#external-secrets-operator-api)

{% leveloffset +1 %}{% include "./modules/external-secrets-enable-operator-log-level.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-enable-operand-log-level.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-cert-manager-config.md" %}{% endleveloffset %}

<a name="external-secrets-log-levels_additional-resources"></a>**Additional resources**

*   [External Secrets Operator for Red Hat OpenShift APIs](/security/external_secrets_operator/external-secrets-operator-api#external-secrets-operator-api)
*   [cert-manager Operator for Red Hat Openshift](/security/cert_manager_operator/index#cert-manager-operator-about)
*   [Installing the cert-manager-Operator for Red Hat Openshift](/security/cert_manager_operator/cert-manager-operator-install#cert-manager-operator-install)

{% leveloffset +1 %}{% include "./modules/external-secrets-bit-warden-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-adding-custom-annotations.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-configure-history-limit.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-set-custom-variables.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-enable-optional-features.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-mounting-bundle.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/external-secrets-operator-overriding-operand-arguments.md" %}{% endleveloffset %}