{%- set _mod_docs_content_type = "REFERENCE" %}
# Resource tuning reference CRs {id="resource-tuning-crs_{{ context }}"}

Use the following custom resources (CRs) to configure resource tuning for the telco core profile. {._abstract}

**Resource tuning CRs**

| Component | Reference CR | Description | Optional |
| --- | --- | --- | --- |
| System reserved capacity | `control-plane-system-reserved.yaml` | Optional. Configures kubelet, enabling auto-sizing reserved resources for the control plane node pool. | No |