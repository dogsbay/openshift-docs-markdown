{%- set _mod_docs_content_type = "REFERENCE" %}
# Default cipher suites {id="microshift-default-cipher-suites_{{ context }}"}

Default cipher suites are included with {{ microshift_short }} for both TLS 1.2 and TLS 1.3. The cipher suites for TLS 1.3 cannot be customized. {._abstract}

{% leveloffset +1 %}{% include "./snippets/microshift-tls-ciphers.md" %}{% endleveloffset %}