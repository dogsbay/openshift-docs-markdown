{%- set _mod_docs_content_type = "REFERENCE" %}
# Overridable environment variables for the cert-manager controller {id="cert-manager-overridable-env-variables_{{ context }}"}

You can configure the overridable environment variables for the cert-manager controller in the `spec.controllerConfig.overrideEnv` field in the `CertManager` CR to control proxy settings for the cert-manager controller. {._abstract}

The following table describes the overridable environment variables for the cert-manager controller:

**Overridable environment variables for the cert-manager controller**

| Environment variable | Description |
| --- | --- |
| `HTTP_PROXY` | Proxy server for outgoing HTTP requests. |
| `HTTPS_PROXY` | Proxy server for outgoing HTTPS requests. |
| `NO_PROXY` | Comma‑separated list of hosts that bypass the proxy. |