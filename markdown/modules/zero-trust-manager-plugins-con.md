{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIRE UpstreamAuthority plugins for Zero Trust Workload Identity Manager {id="zero-trust-manager-plugins-con_{{ context }}"}

To integrate {{ spire_full }} (SPIRE) with your existing certificate management infrastructure and keep {{ spiffe_full }} (SPIFFE) identity standards, configure SPIRE Server with UpstreamAuthority plugins. These plugins obtain intermediate signing certificates from external certificate authorities. {._abstract}

You can configure SPIRE Server to use one of the following UpstreamAuthority plugins:


**cert-manager UpstreamAuthority plugin**
:   Integrates SPIRE with {{ cert_manager_operator }} running in Kubernetes or {{ product_title }} clusters. The {{ cert_manager_operator }} instance can use various issuer types to provide signing certificates for SPIRE intermediate CAs.


**Vault UpstreamAuthority plugin**
:   Integrates SPIRE with the HashiCorp Vault Public Key Infrastructure (PKI) secrets engine. This plugin supports many Vault authentication methods and enables SPIRE to use Vault’s security features for certificate management.

Choose the plugin that matches your certificate management infrastructure. You can configure only one UpstreamAuthority plugin at a time. The `SpireServer` CR rejects configurations that specify both `certManager` and `vault` simultaneously.