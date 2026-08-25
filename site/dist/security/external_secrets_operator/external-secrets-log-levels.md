---
title: Customizing the External Secrets Operator for Red Hat OpenShift
---

# Customizing the External Secrets Operator for Red Hat OpenShift {#external-secrets-log-levels}

You can customize the behavior of the {{ external_secrets_operator }} operand components by configuring custom annotations, deployment lifecycle settings, and environment variables through the `ExternalSecretsConfig` custom resource (CR).

These configurations provide administrators with fine-grained control over the external-secrets deployment.

You can customize the {{ external_secrets_operator }} operand by using the `ExternalSecretsConfig` custom resource (CR). The CR supports a set of deployment and runtime options, such as custom annotations, revision history limits, environment variables, resource limits, tolerations, and proxy settings—so you can control how the operand is deployed and run without editing the operand resources directly.

All supported options are defined in the `ExternalSecretsConfig` CR (for example under the `spec.controllerConfig` for controller-related settings). The Operator reconciles the operand from this CR. Changes made directly to operand resources are overwritten. Use the `ExternalSecretsConfig` CR as the only supported way to customize the operand.

For the complete list of fields and allowed values, see the `ExternalSecretsConfig` API reference in the {{ external_secrets_operator }} documentation.

**Additional resources**

- [External Secrets Operator for Red Hat OpenShift APIs](/openshift-docs-markdown/security/external_secrets_operator/external-secrets-operator-api#external-secrets-operator-api)

<a name="external-secrets-log-levels_additional-resources"></a>**Additional resources**

- [External Secrets Operator for Red Hat OpenShift APIs](/openshift-docs-markdown/security/external_secrets_operator/external-secrets-operator-api#external-secrets-operator-api)
- [cert-manager Operator for Red Hat Openshift](/openshift-docs-markdown/security/cert_manager_operator/index#cert-manager-operator-about)
- [Installing the cert-manager-Operator for Red Hat Openshift](/openshift-docs-markdown/security/cert_manager_operator/cert-manager-operator-install#cert-manager-operator-install)
