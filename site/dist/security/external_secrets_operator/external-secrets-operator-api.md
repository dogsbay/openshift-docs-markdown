---
title: External Secrets Operator for Red Hat OpenShift APIs
---

# External Secrets Operator for Red Hat OpenShift APIs {#external-secrets-operator-api}

{{ external_secrets_operator }} uses the following two APIs to configure the `external-secrets` application deployment.

| Group | Version | Kind |
| --- | --- | --- |
| `operator.openshift.io` | `v1alpha1` | `externalsecretsConfig` |
| `operator.openshift.io` | `v1alpha1` | `externalsecretsmanager` |

The following list contains the {{ external_secrets_operator }} APIs:

- ExternalSecretsConfig
- ExternalSecretsManager
