{%- set _mod_docs_content_type = "REFERENCE" %}
# Using secure or insecure connections {id="pruning-images-secure-insecure_{{ context }}"}

Configure secure or insecure flags when pruning images to communicate with image registries. Setting custom CA certificates or bypassing HTTPS verification prevents connection failures during pruning. {._abstract}

The secure connection is the preferred and recommended approach. It is done over
HTTPS protocol with a mandatory certificate verification. The `prune` command
always attempts to use it if possible. If it is not possible, in some cases it
can fall-back to insecure connection, which is dangerous. In this case, either
certificate verification is skipped or plain HTTP protocol is used.

The fall-back to insecure connection is allowed in the following cases unless
`--certificate-authority` is specified:

1.  The `prune` command is run with the `--force-insecure` option.
1.  The provided `registry-url` is prefixed with the `http://` scheme.
1.  The provided `registry-url` is a local-link address or `localhost`.
1.  The configuration of the current user allows for an insecure connection. This
can be caused by the user either logging in using `--insecure-skip-tls-verify`
or choosing the insecure connection when prompted.


:::important

If the registry is secured by a certificate authority different from the one used by {{ product_title }}, it must be specified using the
`--certificate-authority` flag. Otherwise, the `prune` command fails with an error.

:::