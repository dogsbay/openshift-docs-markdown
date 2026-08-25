{%- set _mod_docs_content_type = "REFERENCE" %}
# Telco core RDS use model overview {id="telco-core-rds-product-version-use-model-overview_{{ context }}"}

The Telco core reference design specification (RDS) describes a platform that supports large-scale telco applications including control plane functions such as signaling and aggregation.
It also includes some centralized data plane functions, for example, user plane functions (UPF).
These functions generally require scalability, complex networking support, resilient software-defined storage, and support performance requirements that are less stringent and constrained than far-edge deployments such as RAN.