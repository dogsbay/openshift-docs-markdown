{%- set _mod_docs_content_type = "CONCEPT" %}
# Use TLS with {{ microshift_short }} {id="microshift-tls-config-con_{{ context }}"}

Transport layer security (TLS) profiles provide a way for servers to regulate which ciphers a client can use when connecting to the server. Using TLS helps to ensure that {{ microshift_short }} applications use cryptographic libraries that do not allow known insecure protocols, ciphers, or algorithms. You can use either the TLS 1.2 or TLS 1.3 security profiles with {{ microshift_short }}. {._abstract}

{{ microshift_short }} API server cipher suites apply automatically to the following internal control plane components:

*   API server
*   Kubelet
*   Kube controller manager
*   Kube scheduler
*   etcd
*   Route controller manager

The API server uses the configured minimum TLS version and the associated cipher suites. If you leave the cipher suites parameter empty, the defaults for the configured minimum version are used automatically.

{% leveloffset +2 %}{% include "./snippets/microshift-tls-ciphers.md" %}{% endleveloffset %}