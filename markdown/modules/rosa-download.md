{%- set _mod_docs_content_type = "REFERENCE" %}
# Download CLI tools with the {{ rosa_cli }} {id="rosa-download_{{ context }}"}

Download and verify the `rosa` and `oc` CLI tools by using the {{ rosa_cli_first }}. {._abstract}

## download rosa {id="rosa-download-rosa-client_{{ context }}"}

Download the latest compatible version of the {{ rosa_cli }}.

After you download {{ rosa_cli }}, extract the contents of the archive and add it to your path.

```terminal title="Syntax"
$ rosa download rosa [arguments]
```

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |

## download oc {id="rosa-download-ocp-client_{{ context }}"}

Download the latest compatible version of the {{ oc_first }}.

After you download `oc`, you must extract the contents of the archive and add it to your path.

```terminal title="Syntax"
$ rosa download oc [arguments]
```

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |

Download `oc` client tools:

```terminal title="Example"
$ rosa download oc
```

## verify oc {id="rosa-verify-ocp-client_{{ context }}"}

Verifies that the {{ oc_first }} installed correctly.

```terminal title="Syntax"
$ rosa verify oc [arguments]
```

**Optional arguments inherited from parent commands**

| Option | Definition |
| --- | --- |
| --help | Shows help for this command. |
| --debug | Enables debug mode. |

Verify `oc` client tools:

```terminal title="Example"
$ rosa verify oc
```