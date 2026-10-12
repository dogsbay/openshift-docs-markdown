{%- set _mod_docs_content_type = "CONCEPT" %}
# External Secrets Operator for Red Hat OpenShift APIs {id="external-secrets-operator-api-con_{{ context }}"}

{{ external_secrets_operator }} uses the following two APIs to configure the `external-secrets` application deployment. {._abstract}

| Group | Version | Kind |
| --- | --- | --- |
| `operator.openshift.io` | `v1alpha1` | `externalsecretsConfig` |
| `operator.openshift.io` | `v1alpha1` | `externalsecretsmanager` |

The following list contains the {{ external_secrets_operator }} APIs:

*   ExternalSecretsConfig
*   ExternalSecretsManager