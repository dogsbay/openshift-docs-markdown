{%- set _mod_docs_content_type = "CONCEPT" %}
# Secret sharing encryption {id="nbde-secret-sharing-encryption_{{ context }}"}

Shamir’s secret sharing (sss) is a cryptographic algorithm to securely divide up, distribute, and re-assemble keys. Using this algorithm, {{ product_title }} can support more complicated mixtures of key protection.

When you configure a cluster node to use multiple Tang servers, {{ product_title }} uses sss to set up a decryption policy that will succeed if at least one of the specified servers is available. You can create layers for additional security. For example, you can define a policy where {{ product_title }} requires both the TPM and one of the given list of Tang servers to decrypt the disk.