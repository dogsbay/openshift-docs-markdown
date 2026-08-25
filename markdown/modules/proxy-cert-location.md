{%- set _mod_docs_content_type = "REFERENCE" %}
# Proxy certificate location {id="proxy-cert-location_{{ context }}"}

The user-provided trust bundle is mounted into the file system of platform components that make egress HTTPS calls. {._abstract}

The user-provided trust bundle is represented as a config map. The config map is mounted into the file system of platform components that make egress HTTPS calls. Typically, Operators mount the config map to `/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem`, but mounting the config map is not required by the proxy. A proxy can modify or inspect the HTTPS connection. In either case, the proxy must generate and sign a new certificate for the connection.

Complete proxy support means connecting to the specified proxy and trusting any signatures the trust bundle has generated. Therefore, it is necessary to let the user specify a trusted root, such that any certificate chain connected to that trusted root is also trusted.

If you use the {{ op_system }} trust bundle, place CA certificates in `/etc/pki/ca-trust/source/anchors`.