{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ microshift_short }} certificate manager functions {id="microshift-cert-manager-tasks_{{ context }}"}

With {{ microshift_short }} certificate manager, you can complete the following tasks: {._abstract}

*   Automates certificate management: cert-manager creates or updates certificates and detects Kubernetes resources that are annotated with `cert-manager.io/kind`.
*   Supports multiple CAs: provides flexibility to select one that fits the security and operational needs.
*   Simplifies ingress certificates: cert-manager handles certificates for an ingress controller, which simplifies the configuration and management of secure communication channels.
*   Enhances security: certificate management is automated and the risk of error is reduced. Certificates are current and valid, which contribute to a secure environment.