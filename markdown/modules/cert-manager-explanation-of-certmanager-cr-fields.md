{%- set _mod_docs_content_type = "CONCEPT" %}
# Explanation of fields in the CertManager custom resource {id="cert-manager-explanation-of-certmanager-cr-fields_{{ context }}"}

To configure core components of the {{ cert_manager_operator }}, use the CertManager custom resource (CR). You can define settings for the cert-manager controller, such as the spec.controllerConfig field, to customize your deployment. {._abstract}

The core components of the {{ cert_manager_operator }} are as follows:

*   Cert-manager controller: You can use the `spec.controllerConfig` field to configure the cert‑manager controller pod.
*   Webhook: You can use the `spec.webhookConfig` field to configure the webhook pod, which handles validation and mutation requests.
*   CA injector: You can use the `spec.cainjectorConfig` field to configure the CA injector pod.