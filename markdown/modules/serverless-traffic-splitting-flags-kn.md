{%- set _mod_docs_content_type = "REFERENCE" %}
# Knative CLI traffic splitting flags {id="serverless-traffic-splitting-flags-kn_{{ context }}"}

The following table displays a summary of traffic splitting flags, value formats, and the operation the flag performs. The **Repetition** column denotes whether repeating the particular value of flag is allowed in a `kn service update` command.

| Flag | Value(s) | Operation | Repetition |
| --- | --- | --- | --- |
| `--traffic` | `RevisionName=Percent` | Gives `Percent` traffic to `RevisionName` | Yes |
| `--traffic` | `Tag=Percent` | Gives `Percent` traffic to the revision having `Tag` | Yes |
| `--traffic` | `@latest=Percent` | Gives `Percent` traffic to the latest ready revision | No |
| `--tag` | `RevisionName=Tag` | Gives `Tag` to `RevisionName` | Yes |
| `--tag` | `@latest=Tag` | Gives `Tag` to the latest ready revision | No |
| `--untag` | `Tag` | Removes `Tag` from revision | Yes |

## Multiple flags and order precedence {id="serverless-traffic-splitting-flags-kn-precedence_{{ context }}"}

All traffic-related flags can be specified using a single `kn service update` command. `kn` defines the precedence of these flags. The order of the flags specified when using the command is not taken into account.

The precedence of the flags as they are evaluated by `kn` are:

1.  `--untag`: All the referenced revisions with this flag are removed from the traffic block.
1.  `--tag`: Revisions are tagged as specified in the traffic block.
1.  `--traffic`: The referenced revisions are assigned a portion of the traffic split.

You can add tags to revisions and then split traffic according to the tags you have set.