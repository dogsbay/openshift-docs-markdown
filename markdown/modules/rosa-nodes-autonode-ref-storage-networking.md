{%- set _mod_docs_content_type = "REFERENCE" %}
# Storage and networking constraints {id="rosa-nodes-autonode-ref-storage-networking_{{ context }}"}

The following storage and networking constraints apply to `OpenshiftEC2NodeClass` resources. {._abstract}

*   **Root volume constraints:** Within the `OpenshiftEC2NodeClass` specification, the minimum allowed root volume size is `100 GiB`.
*   **Volume encryption validation:** When you customize the root volume disk settings, ensure that disk encryption is turned on. You can use a custom key managed by the AWS Key Management Service (KMS) to encrypt these root volumes.
*   **Public IP address support:** The association of public IP addresses for worker nodes is not supported. Avoid setting the `associatePublicIPAddress` field to `true` on any `OpenshiftEC2NodeClass` that you create.