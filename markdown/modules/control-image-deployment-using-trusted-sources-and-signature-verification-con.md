{%- set _mod_docs_content_type = "CONCEPT" %}
# Control image deployment using trusted sources and signature verification {id="control-image-deployment-using-trusted-sources-and-signature-verification-con_{{ context }}"}

You can restrict which registries a cluster is allowed to pull from, and enable signature verification so that images are checked cryptographically before they run. Using the sigstore framework or Red Hat container signatures, unapproved or tampered images are rejected instead of deployed.