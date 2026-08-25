{%- set _mod_docs_content_type = "REFERENCE" %}
# Overridable scheduling parameters for the cert-manager components {id="cert-manager-overridable-scheduling-parameters_{{ context }}"}

To optimize resource usage or isolate specific workloads, you can control the pod placement of your cert-manager components.  {._abstract}

You can easily configure node selectors and tolerations by modifying the `spec.controllerConfig`, `spec.webhookConfig`, and `spec.cainjectorConfig` sections of the `CertManager` custom resource (CR).

The following table describes the pod scheduling parameters for the cert-manager components:

**Overridable scheduling parameters for the cert-manager components**

| Field | Description |
| --- | --- |
| `overrideScheduling.nodeSelector` | Key and value pairs to constrain pods to specific nodes. |
| `overrideScheduling.tolerations` | List of tolerations to schedule pods on tainted nodes. |