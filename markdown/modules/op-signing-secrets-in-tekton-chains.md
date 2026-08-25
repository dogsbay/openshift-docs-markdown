{%- set _mod_docs_content_type = "CONCEPT" %}
# Secrets for signing data in {{ tekton_chains }} {id="signing-secrets-in-tekton-chains_{{ context }}"}

Cluster administrators can generate a key pair and use {{ tekton_chains }} to sign artifacts using a Kubernetes secret. For {{ tekton_chains }} to work, a private key and a password for encrypted keys must exist as part of the `signing-secrets` secret in the `openshift-pipelines` namespace. {._abstract}

Currently, {{ tekton_chains }} supports the `x509` and `cosign` signature schemes.


:::note

Use only one of the supported signature schemes.

:::


To use the `x509` signing scheme with {{ tekton_chains }}, store the `x509.pem` private key of the `ed25519` or `ecdsa` type in the `signing-secrets` Kubernetes secret.