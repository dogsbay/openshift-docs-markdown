{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIFFE Helper container image {id="zero-trust-manager-spiffe-helper-about_{{ context }}"}

Use SPIFFE Helper with the {{ zero_trust_full }} when your application cannot call the workload API directly but can read TLS certificates from a shared volume. {._abstract}

SPIFFE Helper is a utility that connects to the SPIFFE Workload API, fetches identity credentials, writes them to files on disk, and optionally notifies a workload when X.509 material is renewed.

The {{ zero_trust_full }} provides a supported SPIFFE Helper container image based on the upstream SPIFFE Helper. The configuration file format, command-line flags, and workload API behavior are compatible with upstream.

SPIFFE Helper performs the following tasks:

1.  Connects to the SPIFFE Workload API, usually through the {{ spire_full }} Agent socket exposed by the SPIFFE CSI driver.
1.  Fetches X.509 {{ svid_full }}s, JSON Web Token (JWT) SVIDs, and JWT bundles from {{ spire_full }}.
1.  Writes credentials to files under a configured directory such as `cert_dir`.
1.  Optionally notifies a workload when X.509 authentication credentials are renewed in daemon mode.