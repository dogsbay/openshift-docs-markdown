{%- set _mod_docs_content_type = "CONCEPT" %}
# Support for network policies {id="persistent-storage-csi-secrets-store-network-policies_{{ context }}"}

The {{ secrets_store_operator }} uses pre-defined `NetworkPolicies` to control ingress and egress traffic for enhanced security of the Operator and driver components. {._abstract}

The following table summarizes the default ingress and egress rules:

| Component | Ingress ports | Egress ports | Description |
| --- | --- | --- | --- |
| {{ secrets_store_operator }} | `8443` | `6443` | Accesses metrics and communicates with the API server |
| {{ secrets_store_driver }} | `8095` | `6443` | Accesses metrics and communicates with the API server |