{%- set _mod_docs_content_type = "CONCEPT" %}
# Webhook support {id="olmv1-webhook-support_{{ context }}"}

{{ olmv1_first }} supports Operators that use webhooks for validation, mutation, or conversion. Operators use webhooks to enforce security policies or inject configurations into resources. {._abstract}

The OpenShift Service CA Operator automatically manages webhook certificates. When you install an Operator that includes webhooks, the OpenShift Service CA Operator completes the following actions:

*   Applies Service CA annotations to webhook configurations and services.
*   Generates TLS certificates in the namespace where you install the cluster extension.
*   Mounts certificate secrets to the Operator deployment.
*   Configures webhook services with proper TLS settings.