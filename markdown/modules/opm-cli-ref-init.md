{%- set _mod_docs_content_type = "REFERENCE" %}
# init {id="opm-cli-ref-init_{{ context }}"}

Generate an `olm.package` declarative config blob.

```terminal title="Command syntax"
$ opm init <package_name> [<flags>]
```

**`init` flags**

| Flag | Description |
| --- | --- |
| `-c`, `--default-channel` (string) | The channel that subscriptions will default to if unspecified. |
| `-d`, `--description` (string) | Path to the Operator’s `README.md` or other documentation. |
| `-i`, `--icon` (string) | Path to package’s icon. |
| `-o`, `--output` (string) | Output format: `json` (the default value) or `yaml`. |