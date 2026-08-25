---
title: Migrating from the community External Secrets Operator to the External Secrets Operator for Red Hat OpenShift
---

# Migrating from the community External Secrets Operator to the External Secrets Operator for Red Hat OpenShift {#external-secrets-operator-migrate-downstream-upstream}

You can migrate from the community version of the {{ external_secrets_operator_short }}. Migrating to {{ external_secrets_operator }} provides you with an officially supported product giving you access to enterprise-grade support. It also provides you with seamless integration from installation to upgrades.

The following migration versions have been fully tested.

| Upstream version | Installation method | Downstream version |
| --- | --- | --- |
| 0.11.0 | OLM | v1.0.0 GA |
| 0.19.0 | Helm | v1.0.0 GA |

> [!NOTE]
> The migration does not support rollbacks.

> [!NOTE]
> {{ external_secrets_operator }} is based on the upstream version 0.19.0. Do not try to migrate from a higher version of the {{ external_secrets_operator_short }}.
