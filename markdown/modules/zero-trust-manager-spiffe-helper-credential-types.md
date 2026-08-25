{%- set _mod_docs_content_type = "CONCEPT" %}
# SPIFFE Helper credential types {id="zero-trust-manager-spiffe-helper-credential-types_{{ context }}"}

SPIFFE Helper supports X.509 {{ svid_full }}, JSON Web Token (JWT) bundle, and JWT SVID outputs configured in the SPIFFE Helper configuration file and written under `cert_dir` for workloads that cannot use the workload API directly. {._abstract}

At least one complete set must be specified:

*   **X.509 SVID** -- Requires `svid_file_name`, `svid_key_file_name`, and `svid_bundle_file_name`. SPIFFE Helper writes Privacy-Enhanced Mail (PEM) certificate, PEM private key, and PEM trust bundle files under `cert_dir`.
*   **JWT bundle** -- Requires `jwt_bundle_file_name`. SPIFFE Helper writes a JSON bundle file.
*   **JWT SVIDs** -- Requires one or more `jwt_svids` blocks with `jwt_audience`, `jwt_svid_file_name`, and related settings. SPIFFE Helper writes base64-encoded token files.

The `cert_dir` directory must exist before SPIFFE Helper starts.

The following `helper.conf` excerpt configures X.509 SVID output for a PostgreSQL server:

```terminal
agent_address = "/spiffe-workload-api/spire-agent.sock"
cert_dir = "/opt/postgresql-certs"
svid_file_name = "svid.pem"
svid_key_file_name = "svid.key"
svid_bundle_file_name = "svid_bundle.pem"
```

The following `helper.conf` excerpt configures JWT SVID output:

```terminal
agent_address = "/spiffe-workload-api/spire-agent.sock"
cert_dir = "/opt/jwt-certs"
jwt_svids = [{
  jwt_audience = "your-audience"
  jwt_svid_file_name = "jwt_svid.token"
}]
```

For JWT bundle output, set `jwt_bundle_file_name` instead of the X.509 or JWT SVID file names.