---
title: External Secrets Operator for Red Hat OpenShift APIs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# External Secrets Operator for Red Hat OpenShift APIs {id="external-secrets-operator-api"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "external-secrets-operator-api" %}

{{ external_secrets_operator }} uses the following two APIs to configure the `external-secrets` application deployment.

| Group | Version | Kind |
| --- | --- | --- |
| `operator.openshift.io` | `v1alpha1` | `externalsecretsConfig` |
| `operator.openshift.io` | `v1alpha1` | `externalsecretsmanager` |

The following list contains the {{ external_secrets_operator }} APIs:

*   ExternalSecretsConfig
*   ExternalSecretsManager

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-bitwarden-secret.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-cert-manager-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-cert-providers-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-common-configs.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-component-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-component-name.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-condition.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-conditional-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-configmap-key-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-controller-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-controller-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-deployment-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-list.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-spec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-manager.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-manager-list.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-manager-spec.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-external-secrets-manager-status.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-feature.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-feature-name.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-global-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-management-state.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-mode.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-network-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-object-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-plugins-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-proxy-config.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-secret-reference.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/eso-web-hook-config.md" %}{% endleveloffset %}