---
title: Configuring network policy for the operand
---

# Configuring network policy for the operand {#external-secrets-operator-config-net-policy}

The {{ external_secrets_operator }} for OpenShift Container Platform includes pre-defined `NetworkPolicies` for security that rejects all egress traffic and allows traffic towards services that are required for the operand functionality. You must configure additional custom policies to allow the `external-secrets` controller to egress traffic towards external providers. These configurable policies are set through the `ExternalSecretsConfig` custom resource to establish the egress allow policy.
