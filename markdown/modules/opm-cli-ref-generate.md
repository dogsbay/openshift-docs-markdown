{%- set _mod_docs_content_type = "REFERENCE" %}
# generate {id="opm-cli-ref-generate_{{ Context }}"}

Generate various artifacts for declarative config indexes.

```terminal title="Command syntax"
$ opm generate <subcommand> [<flags>]
```

**`generate` subcommands**

| Subcommand | Description |
| --- | --- |
| `dockerfile` | Generate a Dockerfile for a declarative config index. |

**`generate` flags**

| Flags | Description |
| --- | --- |
| `-h`, `--help` | Help for generate. |

## dockerfile {id="opm-cli-ref-generate-dockerfile_{{ context }}"}

Generate a Dockerfile for a declarative config index.


:::important

This command creates a Dockerfile in the same directory as the `<dcRootDir>` (named `<dcDirName>.Dockerfile`) that is used to build the index. If a Dockerfile with the same name already exists, this command fails.

When specifying extra labels, if duplicate keys exist, only the last value of each duplicate key gets added to the generated Dockerfile.

:::


```terminal title="Command syntax"
$ opm generate dockerfile <dcRootDir> [<flags>]
```

**`generate dockerfile` flags**

| Flag | Description |
| --- | --- |
| `-i,` `--binary-image` (string) | Image in which to build catalog. The default value is `quay.io/operator-framework/opm:latest`. |
| `-l`, `--extra-labels` (string) | Extra labels to include in the generated Dockerfile. Labels have the form `key=value`. |
| `-h`, `--help` | Help for Dockerfile. |

{% if not openshift_origin %}

:::note

To build with the official Red Hat image, use the `registry.redhat.io/openshift4/ose-operator-registry-rhel9:v{{ product_version }}` value with the `-i` flag.

:::

{% endif %}