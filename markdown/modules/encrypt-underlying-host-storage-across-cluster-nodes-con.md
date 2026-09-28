{%- set _mod_docs_content_type = "CONCEPT" %}
# Encrypt underlying host storage across cluster nodes {id="encrypt-underlying-host-storage-across-cluster-nodes-con_{{ context }}"}

Encrypting the root and ephemeral file systems on cluster nodes protects container runtime data, logs, and caches against physical drive theft or cloud snapshot leaks. {{ product_title }} supports TPM-backed encryption and Network-Bound Disk Encryption (NBDE) with Tang servers, each with different key escrow and availability trade-offs.