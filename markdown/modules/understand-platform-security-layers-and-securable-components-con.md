{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand platform security layers and securable components {id="understand-platform-security-layers-and-securable-components-con_{{ context }}"}

{{ product_title }} secures containerized workloads across several layers: the host operating system, the container runtime, the orchestration control plane, the build pipeline, and the application itself. Reviewing what each layer protects helps you decide where to apply hardening to meet your organization’s security and compliance requirements.