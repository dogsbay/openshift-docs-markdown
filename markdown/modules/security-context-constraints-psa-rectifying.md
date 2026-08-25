{%- set _mod_docs_content_type = "CONCEPT" %}
# About pod security admission alerts {id="security-context-constraints-psa-rectifying_{{ context }}"}

If your pods violate the configured pod security standards, you receive a `PodSecurityViolation` alert. This alert persists for one day so that you can investigate and resolve compliance issues. {._abstract}

You can view the Kubernetes API server audit logs to investigate alerts that were triggered. As an example, a workload is likely to fail admission if global enforcement is set to the `restricted` pod security level.

To identify pod security admission violation audit events, see "Audit annotations" in the Kubernetes documentation.