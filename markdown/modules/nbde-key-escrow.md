{%- set _mod_docs_content_type = "REFERENCE" %}
# Key escrow {id="nbde-key-escrow_{{ context }}"}

Key escrow is the traditional system for storing cryptographic keys. The key server on the network stores the encryption key for a node with an encrypted boot disk and returns it when queried. The complexities around key management, transport encryption, and authentication do not make this a reasonable choice for boot disk encryption.

Although available in {{ op_system_base_full }}, key escrow-based disk encryption setup and management is a manual process and not suited to {{ product_title }} automation operations, including automated addition of nodes, and currently not supported by {{ product_title }}.